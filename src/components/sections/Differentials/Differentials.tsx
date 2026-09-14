import React from 'react';
import { Factory, Truck, Globe2, Layers, Award, Headphones } from 'lucide-react';
import { Container } from '../../ui/Container/Container';
import { Section } from '../../ui/Section/Section';
import { Badge } from '../../ui/Badge/Badge';
import './Differentials.css';

interface DifferentialItemData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  bgColor: string;
}

const DIFFERENTIALS: DifferentialItemData[] = [
  {
    id: 'diff-1',
    title: 'Produção própria',
    description: 'Laboratório técnico próprio na fábrica gaúcha.',
    icon: <Factory size={26} />,
    iconColor: 'var(--color-purple-primary)',
    bgColor: 'var(--color-purple-subtle)'
  },
  {
    id: 'diff-2',
    title: 'Frota própria',
    description: 'Logística ágil e conservação da cadeia fria.',
    icon: <Truck size={26} />,
    iconColor: 'var(--color-green-primary)',
    bgColor: 'var(--color-green-subtle)'
  },
  {
    id: 'diff-3',
    title: 'Atendemos todo o Brasil',
    description: 'Escala fabril superior a 9 toneladas por dia.',
    icon: <Globe2 size={26} />,
    iconColor: 'var(--color-blue-primary)',
    bgColor: 'var(--color-blue-subtle)'
  },
  {
    id: 'diff-4',
    title: 'Mix variado',
    description: 'Food service, varejo e copos com sobretampa.',
    icon: <Layers size={26} />,
    iconColor: 'var(--color-orange-primary)',
    bgColor: 'var(--color-orange-subtle)'
  },
  {
    id: 'diff-5',
    title: 'Qualidade',
    description: 'Cremosidade superior sem cristais de gelo.',
    icon: <Award size={26} />,
    iconColor: 'var(--color-yellow-dark)',
    bgColor: 'var(--color-yellow-subtle)'
  },
  {
    id: 'diff-6',
    title: 'Atendimento personalizado',
    description: 'Canais exclusivos para parcerias B2B e varejo.',
    icon: <Headphones size={26} />,
    iconColor: 'var(--color-purple-light)',
    bgColor: 'rgba(126, 43, 146, 0.12)'
  }
];

export const Differentials: React.FC = () => {
  return (
    <Section as="section" background="default" padding="md" className="differentials-strip" id="diferenciais">
      <Container size="default">
        <div className="differentials-strip__header">
          <Badge variant="accent">
            Por que escolher a Nutri Açaí
          </Badge>
          <h2>Nossos Diferenciais Industriais</h2>
          <p className="text-sm text-muted">
            Soluções completas para distribuidores, food service e private labels com a segurança de uma grande indústria.
          </p>
        </div>

        <div className="differentials-strip__grid">
          {DIFFERENTIALS.map((item) => (
            <div key={item.id} className="differential-item">
              <div
                className="differential-item__icon-wrapper"
                style={{
                  backgroundColor: item.bgColor,
                  color: item.iconColor
                }}
              >
                {item.icon}
              </div>
              <h3 className="differential-item__title">{item.title}</h3>
              <p className="differential-item__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
