"""Inventário somente leitura dos originais; gera evidências em docs/assets-audit/."""
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
import hashlib, json

root = Path(__file__).resolve().parents[1]
out = root / 'docs/assets-audit'
out.mkdir(parents=True, exist_ok=True)
rows = []
groups = {}
for p in sorted((root / 'assets').rglob('*')):
    if not p.is_file():
        continue
    raw = p.read_bytes()
    sha = hashlib.sha256(raw).hexdigest()
    row = dict(path=p.relative_to(root).as_posix(), bytes=len(raw), sha256=sha)
    try:
        with Image.open(p) as im:
            row.update(format=im.format, width=im.width, height=im.height,
                       mode=im.mode, dpi=im.info.get('dpi'), frames=getattr(im, 'n_frames', 1))
            row['alpha_extrema'] = im.getchannel('A').getextrema() if 'A' in im.getbands() else None
            im.load()
    except Exception as e:
        row['error'] = str(e)
    if sha not in groups:
        groups[sha] = len(groups) + 1
    row['visual_id'] = groups[sha]
    rows.append(row)
(out / 'metadata.json').write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding='utf-8')
unique = list({r['visual_id']: r for r in reversed(rows)}.values())
unique.sort(key=lambda r: r['visual_id'])
for start in range(0, len(unique), 12):
    sheet = Image.new('RGB', (1600, 1600), '#eeeeee')
    draw = ImageDraw.Draw(sheet)
    for n, row in enumerate(unique[start:start+12]):
        x, y = (n % 4)*400, (n // 4)*533
        with Image.open(root / row['path']) as im:
            thumb = ImageOps.contain(im.convert('RGBA'), (380, 475))
            sheet.paste(thumb, (x+(400-thumb.width)//2, y+10+(475-thumb.height)//2), thumb)
        draw.text((x+10, y+490), f"ID {row['visual_id']:02}: {Path(row['path']).name}", fill='black')
    sheet.save(out / f'contact-{start//12+1}.jpg', quality=92)
print(json.dumps(rows, ensure_ascii=False, indent=2))
