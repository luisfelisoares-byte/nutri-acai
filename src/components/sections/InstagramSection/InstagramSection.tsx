import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Container } from '../../ui/Container/Container';
import { Section } from '../../ui/Section/Section';
import { Button } from '../../ui/Button/Button';
import { Badge } from '../../ui/Badge/Badge';
import { InstagramIcon } from '../../ui/SocialIcons';
import { COMPANY_INFO } from '../../../data/companyData';
import './InstagramSection.css';

interface InstagramPostItem {
  id: string;
  image: string;
  alt: string;
  tag: string;
}

// Curadoria de 4 posts locais com fotos e publicações reais da marca
const CURATED_POSTS: InstagramPostItem[] = [
  {
    id: 'post-1',
    image: '/assets/images/instagram/insta-01.webp',
    alt: 'Publicação Instagram Nutri Açaí Linha Açaí Zero Açúcar',
    tag: 'Linha Açaí Zero'
  },
  {
    id: 'post-2',
    image: '/assets/images/instagram/insta-02.webp',
    alt: 'Publicação Instagram Nutri Açaí Sorbet de Pitaya Food Service',
    tag: 'Sorbet de Pitaya'
  },
  {
    id: 'post-3',
    image: '/assets/images/instagram/insta-03.webp',
    alt: 'Publicação Instagram Nutri Açaí Diferenciais da Fábrica Gaúcha',
    tag: 'Fábrica Própria'
  },
  {
    id: 'post-4',
    image: '/assets/images/instagram/insta-04.webp',
    alt: 'Publicação Instagram Nutri Açaí Copos e Embalagens',
    tag: 'Cremosidade Única'
  }
];

export const InstagramSection: React.FC = () => {
  return (
    <Section as="section" background="default" padding="lg" className="instagram-section" id="instagram">
      <Container size="default">
        <div className="instagram-section__header">
          <Badge variant="primary" icon={<InstagramIcon size={14} />}>
            Redes Sociais
          </Badge>
          <h2>Acompanhe a Nutri Açaí</h2>
          <p className="text-sm text-muted">
            Siga nosso perfil oficial <strong className="instagram-section__handle">@nutriacaioficial</strong> para novidades de fábrica, lançamentos e bastidores.
          </p>
        </div>

        {/* Grade Curada com Fallback Visual Real */}
        <div className="instagram-grid">
          {CURATED_POSTS.map((post) => (
            <a
              key={post.id}
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-item"
              aria-label={`Ver publicação: ${post.tag} no Instagram`}
            >
              <img
                src={post.image}
                alt={post.alt}
                className="instagram-item__image"
                loading="lazy"
                decoding="async"
                width={300}
                height={300}
              />
              <div className="instagram-item__overlay">
                <InstagramIcon size={28} />
                <span className="instagram-item__tag">{post.tag}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="instagram-section__actions">
          <Button
            variant="outline"
            size="md"
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<InstagramIcon size={18} />}
            rightIcon={<ExternalLink size={16} />}
          >
            Ver Instagram Oficial
          </Button>
        </div>
      </Container>
    </Section>
  );
};
