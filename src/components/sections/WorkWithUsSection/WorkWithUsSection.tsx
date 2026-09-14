import React from 'react';
import { Users, Send, ShieldCheck } from 'lucide-react';
import { Container } from '../../ui/Container/Container';
import { Section } from '../../ui/Section/Section';
import { Button } from '../../ui/Button/Button';
import { Badge } from '../../ui/Badge/Badge';
import { buildRhWhatsAppUrl } from '../../../utils/whatsapp';
import { COMPANY_INFO } from '../../../data/companyData';
import './WorkWithUsSection.css';

export const WorkWithUsSection: React.FC = () => {
  const rhWhatsAppUrl = buildRhWhatsAppUrl();

  return (
    <Section as="section" background="surface" padding="lg" className="work-with-us-section" id="trabalhe-conosco-home">
      <Container size="default">
        <div className="work-with-us-card">
          <Badge variant="accent" icon={<Users size={14} />}>
            Oportunidades & Carreiras
          </Badge>

          <h2>Faça Parte da Equipe Nutri Açaí</h2>

          <p>
            Valorizamos profissionais dedicados que buscam excelência, crescimento e orgulho em produzir alimentos com o mais alto padrão de qualidade na nossa fábrica em Gravataí/RS.
          </p>

          <div className="work-with-us-actions">
            {/* CTA exclusivo para o WhatsApp de RH: (51) 99246-5908 */}
            <Button
              variant="accent"
              size="lg"
              href={rhWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<Send size={18} />}
            >
              Envie seu currículo
            </Button>
          </div>

          <div className="work-with-us-note">
            <ShieldCheck size={14} color="var(--color-yellow-light)" />
            <span>Canal exclusivo de Recursos Humanos: <strong>{COMPANY_INFO.rhPhone}</strong></span>
          </div>
        </div>
      </Container>
    </Section>
  );
};
