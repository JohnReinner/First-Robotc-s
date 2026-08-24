import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Bot, Layers } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programDropdownOpen, setProgramDropdownOpen] = useState(false);
  const [mobileProgramsExpanded, setMobileProgramsExpanded] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll detection for sticky header state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProgramDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard accessibility for mobile drawer
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setProgramDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isProgramsActive = currentPath.startsWith('/programas');

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
      {/* Skip to main content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#003da5] focus:text-white focus:font-bold focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
      >
        Pular para o conteúdo principal
      </a>

      {/* Top Utility Bar - Geometric Balance Theme */}
      <div className="bg-[#031b46] text-white py-1.5 px-4 sm:px-12 flex items-center justify-between text-[11px] font-bold tracking-widest uppercase border-b border-white/10">
        <div className="flex items-center gap-2 text-white/80">
          <div className="w-2 h-2 bg-[#e31937]" aria-hidden="true" />
          <span className="hidden sm:inline tracking-widest">Robótica Educacional</span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span>Brasília / DF</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={() => handleNavClick('/programas')}
            className="hover:text-[#e31937] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white px-1 py-0.5"
          >
            Conheça os Programas
          </button>
          <span className="text-white/40" aria-hidden="true">|</span>
          <button
            type="button"
            onClick={() => handleNavClick('/equipes')}
            className="hover:text-[#e31937] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white px-1 py-0.5"
          >
            Nossas Equipes
          </button>
        </div>
      </div>

      {/* Main Header Bar */}
      <nav
        aria-label="Navegação Principal"
        className={`w-full transition-all duration-300 border-b border-gray-100 ${
          isScrolled
            ? 'bg-white text-[#101828] shadow-md py-3'
            : currentPath === '/'
            ? 'bg-white/95 backdrop-blur-md text-[#101828] shadow-sm py-4'
            : 'bg-white text-[#101828] shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-12 flex items-center justify-between">
          {/* Institutional Geometric Brand Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('/')}
            className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003da5] p-1"
            aria-label="FIRST Brasília - Ir para a página inicial"
          >
            <div className="w-10 h-10 bg-[#003da5] flex items-center justify-center font-black text-white italic text-xl shadow-sm group-hover:bg-[#052d6e] transition-colors">
              F
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-[#003da5] leading-none uppercase font-heading">
                FIRST
              </span>
              <span className="font-bold text-xs tracking-[0.2em] text-[#596579] leading-none uppercase mt-0.5">
                ROBOTC'S
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-[#052d6e]">
            <button
              type="button"
              onClick={() => handleNavClick('/')}
              aria-current={currentPath === '/' ? 'page' : undefined}
              className={`transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#003da5] ${
                currentPath === '/'
                  ? 'border-b-2 border-[#e31937] pb-1 text-[#052d6e] font-black'
                  : 'hover:text-[#e31937] pb-1'
              }`}
            >
              Início
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('/sobre')}
              aria-current={currentPath === '/sobre' ? 'page' : undefined}
              className={`transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#003da5] ${
                currentPath === '/sobre'
                  ? 'border-b-2 border-[#e31937] pb-1 text-[#052d6e] font-black'
                  : 'hover:text-[#e31937] pb-1'
              }`}
            >
              Sobre
            </button>

            {/* Dropdown for Programas */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setProgramDropdownOpen(!programDropdownOpen)}
                aria-expanded={programDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#003da5] ${
                  isProgramsActive
                    ? 'border-b-2 border-[#e31937] pb-1 text-[#052d6e] font-black'
                    : 'hover:text-[#e31937] pb-1'
                }`}
              >
                <span>Programas</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    programDropdownOpen ? 'rotate-180 text-[#e31937]' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Accessible Dropdown Menu */}
              {programDropdownOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-3 w-72 bg-white text-[#101828] border border-gray-200 shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleNavClick('/programas')}
                    className={`w-full text-left px-3 py-2.5 text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2.5 ${
                      currentPath === '/programas' ? 'bg-[#031b46] text-white' : 'hover:bg-[#f5f7fa] text-[#052d6e]'
                    }`}
                  >
                    <Layers className="w-4 h-4 text-[#e31937]" aria-hidden="true" />
                    <div>
                      <div className="font-mono text-[10px] text-gray-400">Jornada Completa</div>
                      <div className="font-bold">Visão Geral dos Programas</div>
                    </div>
                  </button>

                  <div className="my-1 border-t border-gray-100" />

                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleNavClick('/programas/fll')}
                    className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-start gap-2.5 ${
                      currentPath === '/programas/fll' ? 'bg-gray-100 text-[#003da5]' : 'hover:bg-[#f5f7fa]'
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#e31937] mt-1.5" />
                    <div>
                      <div className="font-bold text-[#101828] uppercase">FIRST LEGO League</div>
                      <div className="text-[11px] text-[#596579] font-mono">FLL • 4 a 16 anos</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleNavClick('/programas/ftc')}
                    className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-start gap-2.5 ${
                      currentPath === '/programas/ftc' ? 'bg-gray-100 text-[#003da5]' : 'hover:bg-[#f5f7fa]'
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#003da5] mt-1.5" />
                    <div>
                      <div className="font-bold text-[#101828] uppercase">FIRST Tech Challenge</div>
                      <div className="text-[11px] text-[#596579] font-mono">FTC • 12 a 18 anos</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleNavClick('/programas/frc')}
                    className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-start gap-2.5 ${
                      currentPath === '/programas/frc' ? 'bg-gray-100 text-[#003da5]' : 'hover:bg-[#f5f7fa]'
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#052d6e] mt-1.5" />
                    <div>
                      <div className="font-bold text-[#101828] uppercase">FIRST Robotics Comp.</div>
                      <div className="text-[11px] text-[#596579] font-mono">FRC • 14 a 18 anos</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('/equipes')}
              aria-current={currentPath === '/equipes' ? 'page' : undefined}
              className={`transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#003da5] ${
                currentPath === '/equipes'
                  ? 'border-b-2 border-[#e31937] pb-1 text-[#052d6e] font-black'
                  : 'hover:text-[#e31937] pb-1'
              }`}
            >
              Equipes
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('/impacto')}
              aria-current={currentPath === '/impacto' ? 'page' : undefined}
              className={`transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#003da5] ${
                currentPath === '/impacto'
                  ? 'border-b-2 border-[#e31937] pb-1 text-[#052d6e] font-black'
                  : 'hover:text-[#e31937] pb-1'
              }`}
            >
              Impacto
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center lg:hidden">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              className="flex items-center gap-2 px-3 py-2 font-bold text-xs uppercase tracking-wider border border-gray-300 text-[#052d6e] hover:border-[#e31937] hover:text-[#e31937] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003da5]"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span>Menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Accessible Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal de navegação móvel"
          className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm flex flex-col justify-end"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full bg-white max-h-[85vh] overflow-y-auto p-6 text-[#101828] shadow-2xl flex flex-col gap-4 border-t-4 border-[#003da5] animate-in slide-in-from-bottom duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#003da5] flex items-center justify-center text-white font-black text-lg italic">
                  F
                </div>
                <div>
                  <span className="font-black text-base uppercase tracking-tight block leading-tight font-heading text-[#003da5]">
                    FIRST BRASÍLIA
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                    Taguatinga / DF
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003da5]"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-2 py-2 text-sm font-bold uppercase tracking-wider">
              <button
                type="button"
                onClick={() => handleNavClick('/')}
                className={`w-full text-left px-4 py-3 border-l-2 transition-colors ${
                  currentPath === '/' ? 'border-[#e31937] bg-gray-50 text-[#003da5]' : 'border-transparent hover:bg-gray-50 text-[#101828]'
                }`}
              >
                Início
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('/sobre')}
                className={`w-full text-left px-4 py-3 border-l-2 transition-colors ${
                  currentPath === '/sobre' ? 'border-[#e31937] bg-gray-50 text-[#003da5]' : 'border-transparent hover:bg-gray-50 text-[#101828]'
                }`}
              >
                Sobre o Projeto
              </button>

              {/* Mobile Submenu for Programas */}
              <div className="border border-gray-200 overflow-hidden my-1">
                <button
                  type="button"
                  onClick={() => setMobileProgramsExpanded(!mobileProgramsExpanded)}
                  aria-expanded={mobileProgramsExpanded}
                  className="w-full flex items-center justify-between px-4 py-3 font-bold text-sm uppercase tracking-wide bg-gray-50 text-[#052d6e]"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#e31937]" />
                    Programas FIRST
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      mobileProgramsExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobileProgramsExpanded && (
                  <div className="flex flex-col p-2 bg-white gap-1 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => handleNavClick('/programas')}
                      className="w-full text-left px-3 py-2 font-bold text-xs uppercase tracking-wider text-[#003da5] hover:bg-gray-50"
                    >
                      • Visão Geral da Jornada
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('/programas/fll')}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-[#101828] hover:bg-gray-50"
                    >
                      • FIRST LEGO League (4 a 16 anos)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('/programas/ftc')}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-[#101828] hover:bg-gray-50"
                    >
                      • FIRST Tech Challenge (12 a 18 anos)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('/programas/frc')}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-[#101828] hover:bg-gray-50"
                    >
                      • FIRST Robotics Competition (14 a 18 anos)
                    </button>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => handleNavClick('/equipes')}
                className={`w-full text-left px-4 py-3 border-l-2 transition-colors ${
                  currentPath === '/equipes' ? 'border-[#e31937] bg-gray-50 text-[#003da5]' : 'border-transparent hover:bg-gray-50 text-[#101828]'
                }`}
              >
                Nossas Equipes
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('/impacto')}
                className={`w-full text-left px-4 py-3 border-l-2 transition-colors ${
                  currentPath === '/impacto' ? 'border-[#e31937] bg-gray-50 text-[#003da5]' : 'border-transparent hover:bg-gray-50 text-[#101828]'
                }`}
              >
                Competências & Impacto
              </button>
            </nav>

            <div className="mt-2 pt-4 border-t border-gray-100 text-xs text-[#596579]">
              <p className="font-bold text-[#101828] uppercase">SESI SENAI Taguatinga / DF</p>
              <p className="mt-1 font-mono text-[11px]">Federal Force #10466 & Robot's District #9484</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

