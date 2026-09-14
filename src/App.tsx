import React from 'react';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { Home } from './pages/Home/Home';
import { ANutri } from './pages/ANutri/ANutri';
import { Products } from './pages/Products/Products';
import { Distributors } from './pages/Distributors/Distributors';
import { BecomeDistributor } from './pages/BecomeDistributor/BecomeDistributor';
import { WorkWithUs } from './pages/WorkWithUs/WorkWithUs';
import { WhereToFind } from './pages/WhereToFind/WhereToFind';
import { Contact } from './pages/Contact/Contact';
import { useRouter } from './utils/router';

export const App: React.FC = () => {
  const { currentPath } = useRouter();

  // Roteador declarativo para renderização de páginas
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/a-nutri':
        return <ANutri />;
      case '/produtos':
        return <Products />;
      case '/distribuidores':
        return <Distributors />;
      case '/seja-um-distribuidor':
        return <BecomeDistributor />;
      case '/trabalhe-conosco':
        return <WorkWithUs />;
      case '/onde-encontrar':
        return <WhereToFind />;
      case '/contato':
        return <Contact />;
      case '/':
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-root">
      {/* Link de acessibilidade para navegação por teclado */}
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {/* Header Fixo / Sticky com Navegação Desktop e Mobile Drawer */}
      <Header activePath={currentPath} />

      {/* Conteúdo Principal Dinâmico */}
      <main id="conteudo-principal">
        {renderCurrentPage()}
      </main>

      {/* Footer Completo em 4 Colunas */}
      <Footer />
    </div>
  );
};

export default App;
