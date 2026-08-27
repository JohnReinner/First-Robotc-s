import React from 'react';
import { ArrowUp, ExternalLink, Instagram, ShieldCheck, HeartHandshake } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (path: string) => {
    onNavigate(path);
    scrollToTop();
  };

  return (
    <footer className="bg-[#031b46] text-white border-t-4 border-[#003da5] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Column 1: Brand & Site Map */}
          <div>
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex items-center gap-3 bg-white p-2.5 rounded shadow-sm w-fit">
                <img
                  src="/first-logo.svg"
                  alt="Logo oficial FIRST"
                  className="h-7 w-auto object-contain"
                />
                <div className="h-5 w-px bg-gray-300" />
                <img
                  src="/senai-logo.svg"
                  alt="Logo oficial SENAI"
                  className="h-5 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-black text-base uppercase tracking-tight leading-none block font-heading text-white">
                  FIRST BRASÍLIA
                </span>
                <span className="text-[10px] text-gray-400 font-mono font-bold uppercase tracking-widest mt-1 block">
                  SESI SENAI Taguatinga / DF
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed mb-6 font-normal">
              Transformando jovens através da ciência, tecnologia, engenharia e valores humanos no Distrito Federal.
            </p>
            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#e31937] mb-3">
              Navegação
            </div>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider">
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/')}
                  className="text-gray-300 hover:text-[#e31937] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/sobre')}
                  className="text-gray-300 hover:text-[#e31937] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  Sobre o Projeto
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/programas')}
                  className="text-gray-300 hover:text-[#e31937] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  Programas & Jornada
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/equipes')}
                  className="text-gray-300 hover:text-[#e31937] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  Equipes FRC
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/impacto')}
                  className="text-gray-300 hover:text-[#e31937] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  Competências & Impacto
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Programas FIRST */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-4 pb-2 border-b border-white/10 font-heading">
              Programas Oficiais
            </h3>
            <ul className="space-y-4 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/programas/fll')}
                  className="text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white block"
                >
                  <span className="font-bold text-white group-hover:text-[#e31937] transition-colors uppercase tracking-wider block">
                    FIRST® LEGO® League (FLL)
                  </span>
                  <span className="text-[11px] text-gray-400 font-mono block mt-0.5">
                    4 a 16 anos • Discover, Explore, Challenge
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/programas/ftc')}
                  className="text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white block"
                >
                  <span className="font-bold text-white group-hover:text-[#e31937] transition-colors uppercase tracking-wider block">
                    FIRST® Tech Challenge (FTC)
                  </span>
                  <span className="text-[11px] text-gray-400 font-mono block mt-0.5">
                    12 a 18 anos • Alumínio & Java
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('/programas/frc')}
                  className="text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white block"
                >
                  <span className="font-bold text-white group-hover:text-[#e31937] transition-colors uppercase tracking-wider block">
                    FIRST® Robotics Competition (FRC)
                  </span>
                  <span className="text-[11px] text-gray-400 font-mono block mt-0.5">
                    14 a 18 anos • Robôs Industriais de 57kg
                  </span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => handleLink('/programas')}
                  className="text-xs font-black text-[#e31937] hover:text-white uppercase tracking-widest flex items-center gap-1.5 transition-colors"
                >
                  <span>Comparativo da Jornada</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Equipes do DF */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-4 pb-2 border-b border-white/10 font-heading">
              Equipes de Brasília
            </h3>
            <ul className="space-y-3.5 text-xs">
              <li className="bg-[#052d6e]/80 p-3.5 border border-white/10">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleLink('/equipes')}
                    className="font-bold text-white hover:text-[#e31937] transition-colors text-left uppercase tracking-wide"
                  >
                    Federal Force
                  </button>
                  <span className="text-[10px] font-mono bg-[#e31937] text-white px-2 py-0.5 font-bold uppercase tracking-wider">
                    #10466
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 font-mono mt-1">SESI SENAI Taguatinga/DF</p>
                <a
                  href="https://www.instagram.com/frc10466/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-gray-200 hover:text-white hover:underline mt-2 font-mono"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#e31937]" />
                  <span>@frc10466</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>
              </li>

              <li className="bg-[#052d6e]/80 p-3.5 border border-white/10">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleLink('/equipes')}
                    className="font-bold text-white hover:text-[#e31937] transition-colors text-left uppercase tracking-wide"
                  >
                    Robot's District
                  </button>
                  <span className="text-[10px] font-mono bg-[#003da5] text-white px-2 py-0.5 font-bold uppercase tracking-wider border border-white/20">
                    #9484
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 font-mono mt-1">SESI SENAI Taguatinga/DF</p>
                <a
                  href="https://www.instagram.com/frc9484/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-gray-200 hover:text-white hover:underline mt-2 font-mono"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#e31937]" />
                  <span>@frc9484</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Institucional & Governança */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-4 pb-2 border-b border-white/10 font-heading">
              Sede & Diretrizes
            </h3>
            <div className="space-y-4 text-xs text-gray-300 leading-relaxed font-normal">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#e31937] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold uppercase tracking-wider text-[11px]">Sede Operacional</strong>
                  <span>SESI SENAI Taguatinga • Brasília/DF</span>
                  <span className="text-[10px] text-gray-400 font-mono block mt-0.5">(Sujeito à validação institucional)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <HeartHandshake className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold uppercase tracking-wider text-[11px]">Valores Fundamentais</strong>
                  <span>Gracious Professionalism® & Coopertition® norteiam todas as oficinas e competições.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Official FIRST Contextual Note */}
        <div className="my-8 p-4 bg-[#052d6e]/40 border border-white/10 text-xs text-gray-300 leading-relaxed flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="max-w-4xl">
            <p>
              <strong className="text-white font-bold">Sobre a FIRST® (For Inspiration and Recognition of Science and Technology):</strong>{' '}
              A FIRST é uma organização global sem fins lucrativos fundada pelo inventor Dean Kamen para inspirar o interesse de jovens na ciência e tecnologia por meio de programas baseados em mentoria prática.
            </p>
          </div>
          <a
            href="https://www.firstinspires.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#003da5] hover:bg-[#052d6e] text-white font-black text-xs uppercase tracking-widest transition-colors flex-shrink-0 border border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            <span>firstinspires.org</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Bottom Bar with Developer Credits and Back to Top Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} FIRST Brasília. Todos os direitos reservados.</span>
            <span className="hidden sm:inline text-gray-600" aria-hidden="true">•</span>
            <span className="text-gray-300 font-medium normal-case tracking-normal">
              Desenvolvido por <strong className="text-white font-semibold">John Reinner</strong> &amp; <strong className="text-white font-semibold">Mateus Araujo</strong>
            </span>
          </div>

          <button
            id="back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-300 hover:text-white font-black text-xs uppercase tracking-widest transition-colors px-3 py-1.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

