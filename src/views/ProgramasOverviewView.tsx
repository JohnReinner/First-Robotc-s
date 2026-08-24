import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProgramasOverviewViewProps {
  onNavigate: (path: string) => void;
}

export const ProgramasOverviewView: React.FC<ProgramasOverviewViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-20">
      {/* Banner */}
      <section className="relative bg-[#031b46] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80"
            alt="Robôs e tecnologia em laboratório"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12">
          <Breadcrumbs
            items={[{ label: 'Programas', current: true }]}
            onNavigate={onNavigate}
          />

          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-1 bg-[#e31937]" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#e31937]">
                JORNADA EDUCACIONAL
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading">
              A Trilha de Aprendizado FIRST
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Uma progressão contínua projetada para acompanhar o crescimento intelectual e socioemocional dos 4 aos 18 anos.
            </p>
          </div>
        </div>
      </section>

      {/* Visão Geral da Progressão Pedagógica */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <SectionHeader
            eyebrow="PROGRESSÃO CONTÍNUA"
            title="Como a Jornada se Conecta"
            subtitle="Cada modalidade prepara os estudantes com novas competências, ferramentas e responsabilidades para o próximo patamar."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white shadow-sm">
            {/* FLL Stage */}
            <div className="p-8 flex flex-col justify-between hover:bg-gray-50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-emerald-700 text-white font-mono font-bold text-[10px] uppercase tracking-wider">
                    Estágio 01
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-800">4 a 16 anos</span>
                </div>
                <h3 className="text-2xl font-black uppercase text-[#052d6e] mb-2 font-heading">
                  FIRST LEGO League
                </h3>
                <p className="text-xs font-bold text-[#003da5] uppercase tracking-wide mb-3">
                  Pequenas peças. Grandes ideias.
                </p>
                <p className="text-sm text-[#596579] leading-relaxed mb-6 font-normal">
                  Introdução à ciência e metodologia científica através de blocos e sensores LEGO. Os estudantes aprendem a trabalhar em equipe, formular hipóteses e resolver problemas sociais.
                </p>
                <ul className="space-y-2 text-xs text-[#101828]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Robôs autônomos em LEGO Spike Prime</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Pesquisa de Projeto de Inovação anual</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => onNavigate('/programas/fll')}
                  className="text-xs font-bold uppercase tracking-widest text-[#003da5] flex items-center gap-2 hover:text-[#e31937] transition-colors"
                >
                  <span>Explorar FLL em Detalhes</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* FTC Stage */}
            <div className="p-8 flex flex-col justify-between hover:bg-gray-50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-amber-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider">
                    Estágio 02
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-800">12 a 18 anos</span>
                </div>
                <h3 className="text-2xl font-black uppercase text-[#052d6e] mb-2 font-heading">
                  FIRST Tech Challenge
                </h3>
                <p className="text-xs font-bold text-[#003da5] uppercase tracking-wide mb-3">
                  Imaginar. Projetar. Construir.
                </p>
                <p className="text-sm text-[#596579] leading-relaxed mb-6 font-normal">
                  Transição para robôs de metal, peças usinadas e programação Java avançada. Introdução ao projeto CAD 3D e ao jogo de alianças táticas em arena fechada.
                </p>
                <ul className="space-y-2 text-xs text-[#101828]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Chassi de alumínio e motores CC industriais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Rotinas autônomas e teleoperadas via Java</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => onNavigate('/programas/ftc')}
                  className="text-xs font-bold uppercase tracking-widest text-[#003da5] flex items-center gap-2 hover:text-[#e31937] transition-colors"
                >
                  <span>Explorar FTC em Detalhes</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* FRC Stage */}
            <div className="p-8 flex flex-col justify-between hover:bg-gray-50 transition-colors bg-[#031b46]/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-[#003da5] text-white font-mono font-bold text-[10px] uppercase tracking-wider">
                    Estágio 03 • Ápice
                  </span>
                  <span className="text-xs font-mono font-bold text-[#003da5]">14 a 18 anos</span>
                </div>
                <h3 className="text-2xl font-black uppercase text-[#052d6e] mb-2 font-heading">
                  FIRST Robotics Competition
                </h3>
                <p className="text-xs font-bold text-[#003da5] uppercase tracking-wide mb-3">
                  Engenharia em escala real.
                </p>
                <p className="text-sm text-[#596579] leading-relaxed mb-6 font-normal">
                  Robôs industriais de até 57 kg projetados para arenas de alta velocidade. Equipes estruturadas como empresas com divisões de Mecânica, Elétrica, Software e Captação.
                </p>
                <ul className="space-y-2 text-xs text-[#101828]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#003da5] flex-shrink-0" />
                    <span>Usinagem CNC, pneumática e motores de alta potência</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#003da5] flex-shrink-0" />
                    <span>Gestão executiva, captação e orçamentos</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => onNavigate('/programas/frc')}
                  className="text-xs font-bold uppercase tracking-widest text-[#003da5] flex items-center gap-2 hover:text-[#e31937] transition-colors"
                >
                  <span>Explorar FRC em Detalhes</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela Comparativa Visual e Estrutural */}
      <section className="py-16 sm:py-20 bg-[#f5f7fa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <SectionHeader
            eyebrow="COMPARATIVO TÉCNICO"
            title="Quadro Comparativo dos Programas"
            subtitle="Entenda as especificações de escala, materiais, autonomia e dinâmicas de cada modalidade."
          />

          <div className="overflow-x-auto bg-white border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#031b46] text-white text-xs uppercase tracking-wider font-heading">
                  <th className="p-4 sm:p-5 font-black">Critério</th>
                  <th className="p-4 sm:p-5 font-black text-emerald-300">FLL (LEGO League)</th>
                  <th className="p-4 sm:p-5 font-black text-amber-300">FTC (Tech Challenge)</th>
                  <th className="p-4 sm:p-5 font-black text-blue-200">FRC (Robotics Comp.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-[#101828]">
                <tr>
                  <td className="p-4 sm:p-5 font-bold bg-gray-50 text-xs uppercase text-[#596579] font-mono">Faixa Etária</td>
                  <td className="p-4 sm:p-5">4 a 16 anos (Discover, Explore, Challenge)</td>
                  <td className="p-4 sm:p-5">12 a 18 anos (Fundamental II e Médio)</td>
                  <td className="p-4 sm:p-5 font-bold text-[#003da5]">14 a 18 anos (Ensino Médio)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold bg-gray-50 text-xs uppercase text-[#596579] font-mono">Escala do Robô</td>
                  <td className="p-4 sm:p-5">Pequeno porte modular (~1 a 2 kg)</td>
                  <td className="p-4 sm:p-5">Médio porte estrutural (~15 a 20 kg)</td>
                  <td className="p-4 sm:p-5 font-bold text-[#003da5]">Escala Industrial (Até 57 kg sem bateria)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold bg-gray-50 text-xs uppercase text-[#596579] font-mono">Materiais Principais</td>
                  <td className="p-4 sm:p-5">Blocos LEGO, motores e sensores SPIKE</td>
                  <td className="p-4 sm:p-5">Perfis de alumínio, impressão 3D e chapas</td>
                  <td className="p-4 sm:p-5 font-bold text-[#003da5]">Alumínio 6061 usinado, policarbonato, pneumática</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold bg-gray-50 text-xs uppercase text-[#596579] font-mono">Linguagem de Código</td>
                  <td className="p-4 sm:p-5">Blocos visuais (Scratch) e Python básico</td>
                  <td className="p-4 sm:p-5">Java (Android Studio) e OnBot Java</td>
                  <td className="p-4 sm:p-5 font-bold text-[#003da5]">Java / C++ / Python com WPILib e Odometria</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold bg-gray-50 text-xs uppercase text-[#596579] font-mono">Ambiente de Partida</td>
                  <td className="p-4 sm:p-5">Mesa temática oficial (2,36m x 1,14m)</td>
                  <td className="p-4 sm:p-5">Arena fechada (3,66m x 3,66m)</td>
                  <td className="p-4 sm:p-5 font-bold text-[#003da5]">Arena de grande porte (16,5m x 8,2m)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold bg-gray-50 text-xs uppercase text-[#596579] font-mono">Tamanho de Equipe</td>
                  <td className="p-4 sm:p-5">2 a 10 integrantes</td>
                  <td className="p-4 sm:p-5">Até 15 integrantes</td>
                  <td className="p-4 sm:p-5 font-bold text-[#003da5]">20 a 60+ estudantes multidisciplinares</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-12">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#052d6e] font-heading">
            Conheça as Equipes FRC de Taguatinga
          </h2>
          <p className="mt-3 text-sm text-[#596579] font-normal">
            Acompanhe o trabalho dos estudantes da Federal Force e Robot's District aplicando engenharia e liderança na prática.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => onNavigate('/equipes')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#e31937] hover:bg-[#c1152e] text-white font-black text-xs uppercase tracking-widest transition-colors shadow-sm"
            >
              <span>Ver Equipes FRC</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

