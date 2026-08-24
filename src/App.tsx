import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { SobreView } from './views/SobreView';
import { ProgramasOverviewView } from './views/ProgramasOverviewView';
import { ProgramDetailView } from './views/ProgramDetailView';
import { EquipesView } from './views/EquipesView';
import { ImpactoView } from './views/ImpactoView';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic page title on navigation
  useEffect(() => {
    let pageTitle = 'FIRST Brasília | Robótica Educacional no Distrito Federal';
    if (currentPath === '/sobre') {
      pageTitle = 'Sobre o Projeto | FIRST Brasília';
    } else if (currentPath === '/programas') {
      pageTitle = 'Jornada dos Programas FIRST | FIRST Brasília';
    } else if (currentPath === '/programas/fll') {
      pageTitle = 'FIRST LEGO League (FLL) | FIRST Brasília';
    } else if (currentPath === '/programas/ftc') {
      pageTitle = 'FIRST Tech Challenge (FTC) | FIRST Brasília';
    } else if (currentPath === '/programas/frc') {
      pageTitle = 'FIRST Robotics Competition (FRC) | FIRST Brasília';
    } else if (currentPath === '/equipes') {
      pageTitle = 'Equipes Federal Force e Robot\'s District | FIRST Brasília';
    } else if (currentPath === '/impacto') {
      pageTitle = 'Competências & Impacto Educacional | FIRST Brasília';
    }
    document.title = pageTitle;
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderCurrentView = () => {
    if (currentPath === '/sobre') {
      return <SobreView onNavigate={handleNavigate} />;
    }
    if (currentPath === '/programas') {
      return <ProgramasOverviewView onNavigate={handleNavigate} />;
    }
    if (currentPath === '/programas/fll') {
      return <ProgramDetailView programId="fll" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/programas/ftc') {
      return <ProgramDetailView programId="ftc" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/programas/frc') {
      return <ProgramDetailView programId="frc" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/equipes') {
      return <EquipesView onNavigate={handleNavigate} />;
    }
    if (currentPath === '/impacto') {
      return <ImpactoView onNavigate={handleNavigate} />;
    }
    return <HomeView onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa] text-[#101828] font-sans selection:bg-[#003da5] selection:text-white">
      <Header currentPath={currentPath} onNavigate={handleNavigate} />
      
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {renderCurrentView()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
