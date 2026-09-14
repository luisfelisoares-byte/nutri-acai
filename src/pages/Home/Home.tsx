import React, { useEffect } from 'react';
import { Hero } from '../../components/sections/Hero/Hero';
import { AboutShort } from '../../components/sections/AboutShort/AboutShort';
import { Differentials } from '../../components/sections/Differentials/Differentials';
import { Testimonials } from '../../components/sections/Testimonials/Testimonials';
import { InstagramSection } from '../../components/sections/InstagramSection/InstagramSection';
import { WorkWithUsSection } from '../../components/sections/WorkWithUsSection/WorkWithUsSection';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Nutri Açaí | Indústria Gaúcha de Açaí, Sorbets e Food Service';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Indústria de açaí com capacidade de mais de 9 toneladas/dia em Gravataí/RS. Produção própria, frota própria e atendimento para todo o Brasil. Conheça nossos produtos!'
    );
  }, []);
  return (
    <div className="home-page">
      {/* 1. HERO DINÂMICO */}
      <Hero />

      {/* 2. APRESENTAÇÃO "A NUTRI AÇAÍ" */}
      <AboutShort />

      {/* 3. NOSSOS DIFERENCIAIS */}
      <Differentials />

      {/* 4. DEPOIMENTOS */}
      <Testimonials />

      {/* 5. INSTAGRAM */}
      <InstagramSection />

      {/* 6. TRABALHE CONOSCO */}
      <WorkWithUsSection />
    </div>
  );
};

export default Home;
