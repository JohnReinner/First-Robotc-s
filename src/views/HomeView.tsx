import React from 'react';
import { ArrowRight, ChevronRight, Cpu, ShieldCheck, Instagram, ExternalLink, Lightbulb, Flame, MessageSquare, Users } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PROGRAMS_DATA, TEAMS_DATA, COMPETENCIES_DATA } from '../data/contentData';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* 8.1 Hero Section - Geometric Balance Theme */}
      <section
        className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-[#031b46] text-white overflow-hidden pt-28 pb-20"
        aria-labelledby="hero-title"
      >
        {/* Background Image with Controlled Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=85"
            alt="Estudantes de robótica concentrados na montagem e calibragem de um robô industrial"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031b46]/95 via-[#031b46]/85 to-[#031b46]/70" />
          <div className="absolute inset-0 bg-[#031b46]/40" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 w-full">
          <div className="max-w-3xl">
            {/* Geometric Accent Line + Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-1 bg-[#e31937]" aria-hidden="true" />
              <span className="text-white font-mono font-bold text-xs tracking-[0.25em] uppercase">
                Robótica Educacional • Brasília/DF
              </span>
            </div>

            {/* Main H1 Title */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] mb-6 uppercase tracking-tight font-heading"
            >
              Transformando Jovens Através da Robótica
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal max-w-2xl mb-8">
              Construindo os líderes e inovadores de amanhã com a metodologia FIRST através da jornada integrada FLL, FTC e FRC no Distrito Federal.
            </p>

            {/* Geometric CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/programas')}
                className="bg-[#e31937] hover:bg-[#c1152e] text-white px-8 py-3.5 text-xs font-black uppercase tracking-widest transition-all shadow-sm flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Conheça os Programas</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/equipes')}
                className="border-2 border-white text-white px-8 py-3.5 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#031b46] transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Conheça as Equipes</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8.2 Destaque Institucional Editorial - "O FUTURO NÃO É OBSERVADO. É CONSTRUÍDO." */}
      <section className="py-20 bg-white border-b border-gray-200" aria-labelledby="featured-concept-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Side */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-1 w-6 bg-[#e31937]" aria-hidden="true" />
                <span className="text-xs font-black tracking-[0.25em] uppercase text-[#e31937] font-mono">
                  PROPÓSITO & FORMAÇÃO HUMANA
                </span>
              </div>

              <h2
                id="featured-concept-title"
                className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#052d6e] leading-tight font-heading"
              >
                O Futuro Não É Observado. É Construído.
              </h2>

              <div className="mt-6 space-y-4 text-base text-[#596579] leading-relaxed">
                <p>
                  Na robótica educacional, cada desafio convida o estudante a imaginar, testar, colaborar e recomeçar. O resultado vai além da máquina: desenvolve raciocínio lógico, autonomia, liderança e capacidade de resolver problemas complexos.
                </p>
                <p className="text-sm font-semibold text-[#101828]">
                  Em Brasília e Taguatinga, conectamos a curiosidade dos primeiros anos de escola com os mais rigorosos padrões de engenharia e gestão de projetos do mundo real.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => onNavigate('/sobre')}
                  className="inline-flex items-center gap-2 text-xs font-black text-[#003da5] hover:text-[#e31937] uppercase tracking-widest transition-colors"
                >
                  <span>Saiba Mais Sobre a Nossa Missão</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Editorial Photo Side */}
            <div className="lg:col-span-6">
              <div className="relative border border-gray-200 bg-gray-100 group overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
                  alt="Estudantes em oficina de robótica realizando montagem técnica e testes de engrenagens"
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <p className="text-xs text-white font-medium">
                    Oficina e laboratório: onde a teoria das ciências exatas se transforma em protótipos funcionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8.3 Jornada FIRST - Contiguous 3-Column Geometric Grid */}
      <section className="py-20 bg-[#f5f7fa] border-b border-gray-200" aria-labelledby="journey-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <SectionHeader
            id="journey-title"
            eyebrow="PROGRESSÃO PEDAGÓGICA"
            title="UMA JORNADA DE CURIOSIDADE, ENGENHARIA E LIDERANÇA"
            subtitle="Uma trilha integrada de aprendizado contínuo onde crianças e jovens evoluem de pequenos módulos para robôs industriais completos."
          />

          {/* Geometric Contiguous Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white shadow-sm">
            {/* Card 1: FLL */}
            <div className="p-8 flex flex-col justify-between group hover:bg-gray-50 transition-colors">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#e31937] tracking-[0.3em] uppercase mb-2 block">
                  4 a 16 anos • FLL
                </span>
                <h3 className="text-2xl font-black text-[#052d6e] mb-3 uppercase leading-tight font-heading">
                  FIRST® LEGO® League
                </h3>
                <p className="text-xs text-[#003da5] font-bold uppercase tracking-wider mb-3">
                  {PROGRAMS_DATA.fll.tagline}
                </p>
                <p className="text-sm text-[#596579] leading-relaxed">
                  {PROGRAMS_DATA.fll.shortDescription}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => onNavigate('/programas/fll')}
                  className="text-xs font-bold uppercase tracking-widest text-[#003da5] flex items-center gap-2 group-hover:gap-3 group-hover:text-[#e31937] transition-all"
                >
                  <span>Ver Detalhes FLL</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Card 2: FTC */}
            <div className="p-8 flex flex-col justify-between group hover:bg-gray-50 transition-colors">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#003da5] tracking-[0.3em] uppercase mb-2 block">
                  12 a 18 anos • FTC
                </span>
                <h3 className="text-2xl font-black text-[#052d6e] mb-3 uppercase leading-tight font-heading">
                  FIRST® Tech Challenge
                </h3>
                <p className="text-xs text-[#003da5] font-bold uppercase tracking-wider mb-3">
                  {PROGRAMS_DATA.ftc.tagline}
                </p>
                <p className="text-sm text-[#596579] leading-relaxed">
                  {PROGRAMS_DATA.ftc.shortDescription}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => onNavigate('/programas/ftc')}
                  className="text-xs font-bold uppercase tracking-widest text-[#003da5] flex items-center gap-2 group-hover:gap-3 group-hover:text-[#e31937] transition-all"
                >
                  <span>Ver Detalhes FTC</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Card 3: FRC */}
            <div className="p-8 flex flex-col justify-between group hover:bg-gray-50 transition-colors bg-[#031b46]/5">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#e31937] tracking-[0.3em] uppercase mb-2 block">
                  14 a 18 anos • FRC
                </span>
                <h3 className="text-2xl font-black text-[#052d6e] mb-3 uppercase leading-tight font-heading">
                  FIRST® Robotics Competition
                </h3>
                <p className="text-xs text-[#003da5] font-bold uppercase tracking-wider mb-3">
                  {PROGRAMS_DATA.frc.tagline}
                </p>
                <p className="text-sm text-[#596579] leading-relaxed">
                  {PROGRAMS_DATA.frc.shortDescription}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => onNavigate('/programas/frc')}
                  className="text-xs font-bold uppercase tracking-widest text-[#003da5] flex items-center gap-2 group-hover:gap-3 group-hover:text-[#e31937] transition-all"
                >
                  <span>Ver Detalhes FRC</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8.4 Impacto & Competências */}
      <section className="py-20 bg-white border-b border-gray-200" aria-labelledby="competencies-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <SectionHeader
            id="competencies-title"
            eyebrow="DESENVOLVIMENTO INTEGRAL"
            title="HABILIDADES PARA O ROBÔ. COMPETÊNCIAS PARA A VIDA."
            subtitle="A robótica é o veículo; a formação humana é o destino. Conheça as competências socioemocionais e técnicas fortalecidas em cada temporada."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPETENCIES_DATA.map((comp) => {
              const iconsMap: Record<string, React.ReactNode> = {
                Cpu: <Cpu className="w-5 h-5 text-[#003da5]" />,
                Lightbulb: <Lightbulb className="w-5 h-5 text-amber-500" />,
                Users: <Users className="w-5 h-5 text-emerald-600" />,
                Flame: <Flame className="w-5 h-5 text-[#e31937]" />,
                MessageSquare: <MessageSquare className="w-5 h-5 text-indigo-600" />,
                ShieldCheck: <ShieldCheck className="w-5 h-5 text-teal-600" />,
              };

              return (
                <div
                  key={comp.id}
                  className="bg-[#f5f7fa] p-6 border border-gray-200 flex flex-col justify-between hover:border-[#003da5] transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center mb-4 shadow-sm">
                      {iconsMap[comp.iconName] || <Cpu className="w-5 h-5 text-[#003da5]" />}
                    </div>

                    <h3 className="text-base font-black text-[#052d6e] uppercase tracking-tight font-heading">
                      {comp.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#596579] leading-relaxed">
                      {comp.shortDesc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-200/80 text-[11px] text-[#101828]">
                    <span className="font-bold text-[#003da5] block mb-0.5 uppercase tracking-wide">Na prática da arena:</span>
                    <p className="text-gray-600 italic font-mono">"{comp.inRobotics}"</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Callout Link to Full Impact Page */}
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => onNavigate('/impacto')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#031b46] hover:bg-[#003da5] text-white font-black text-xs uppercase tracking-widest transition-colors shadow"
            >
              <span>Explorar Todas as Competências & Valores FIRST</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8.5 Equipes em Destaque */}
      <section className="py-20 bg-[#031b46] text-white" aria-labelledby="teams-spotlight-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <SectionHeader
            id="teams-spotlight-title"
            eyebrow="PROTAGONISMO LOCAL"
            title="A ROBÓTICA FIRST EM TAGUATINGA, DISTRITO FEDERAL"
            subtitle="Conheça as equipes que representam a juventude e a engenharia do Planalto Central na maior modalidade de robótica do mundo."
            accentColor="red"
            theme="dark"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* Team 1: Federal Force #10466 */}
            <div className="bg-[#052d6e]/80 border border-white/10 flex flex-col justify-between shadow-xl">
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={TEAMS_DATA['federal-force'].featuredImage}
                    alt="Federal Force #10466 - Equipe e robô na bancada"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-[#e31937] text-white font-mono font-bold text-xs uppercase tracking-wider shadow">
                      FRC #10466
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#031b46] to-transparent p-4">
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading">
                      Federal Force
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-xs text-amber-300 font-mono font-bold uppercase tracking-wider mb-3">
                    <span>{TEAMS_DATA['federal-force'].location}</span>
                  </div>

                  <p className="text-sm text-gray-200 leading-relaxed mb-6 font-normal">
                    {TEAMS_DATA['federal-force'].summary}
                  </p>

                  <div className="bg-[#031b46] p-4 border border-white/10 text-xs text-gray-300 mb-6 italic font-mono">
                    "{TEAMS_DATA['federal-force'].motto}"
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between gap-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => onNavigate('/equipes')}
                  className="inline-flex items-center gap-2 text-xs font-black text-white hover:text-[#e31937] uppercase tracking-widest transition-colors"
                >
                  <span>Ficha Técnica</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={TEAMS_DATA['federal-force'].instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-xs text-white font-mono font-bold transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#e31937]" />
                  <span>{TEAMS_DATA['federal-force'].instagramHandle}</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Team 2: Robot's District #9484 */}
            <div className="bg-[#052d6e]/80 border border-white/10 flex flex-col justify-between shadow-xl">
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={TEAMS_DATA['robots-district'].featuredImage}
                    alt="Robot's District #9484 - Montagem e prototipagem na oficina"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-[#003da5] text-white font-mono font-bold text-xs uppercase tracking-wider shadow border border-white/20">
                      FRC #9484
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#031b46] to-transparent p-4">
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading">
                      Robot's District
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-xs text-amber-300 font-mono font-bold uppercase tracking-wider mb-3">
                    <span>{TEAMS_DATA['robots-district'].location}</span>
                  </div>

                  <p className="text-sm text-gray-200 leading-relaxed mb-6 font-normal">
                    {TEAMS_DATA['robots-district'].summary}
                  </p>

                  <div className="bg-[#031b46] p-4 border border-white/10 text-xs text-gray-300 mb-6 italic font-mono">
                    "{TEAMS_DATA['robots-district'].motto}"
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between gap-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => onNavigate('/equipes')}
                  className="inline-flex items-center gap-2 text-xs font-black text-white hover:text-[#e31937] uppercase tracking-widest transition-colors"
                >
                  <span>Ficha Técnica</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={TEAMS_DATA['robots-district'].instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-xs text-white font-mono font-bold transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#e31937]" />
                  <span>{TEAMS_DATA['robots-district'].instagramHandle}</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8.6 Parceiros & Apoio Institucional */}
      <section className="py-16 bg-white border-b border-gray-200" aria-label="Apoio e Infraestrutura Institucional">
        <div className="max-w-7xl mx-auto px-4 sm:px-12 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#e31937] block mb-2">
            INFRAESTRUTURA & SEDE REGIONAL
          </span>
          <h3 className="text-xl sm:text-2xl font-black uppercase text-[#052d6e] font-heading">
            SESI SENAI Taguatinga • Distrito Federal
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-[#596579] max-w-2xl mx-auto leading-relaxed font-normal">
            Ambiente técnico e oficinas de robótica educacional dedicados à capacitação contínua de jovens estudantes do Ensino Médio do Distrito Federal.
          </p>
        </div>
      </section>

      {/* 8.7 Encerramento Fotográfico */}
      <section
        className="relative py-28 bg-[#031b46] text-white overflow-hidden text-center"
        aria-labelledby="closing-section-title"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=80"
            alt="Equipe reunida em celebração e trabalho conjunto na robótica educacional"
            className="w-full h-full object-cover object-center filter brightness-40"
          />
          <div className="absolute inset-0 bg-[#031b46]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-12">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#e31937] block mb-4">
            FAÇA PARTE DO MOVIMENTO FIRST
          </span>

          <h2
            id="closing-section-title"
            className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight font-heading"
          >
            O Próximo Grande Projeto Pode Começar Com Uma Pequena Peça.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Descubra como a robótica educacional desperta talentos, constrói amizades duradouras e abre portas para as carreiras do futuro.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/programas')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#e31937] hover:bg-[#c1152e] text-white font-black text-xs uppercase tracking-widest shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore os Programas
            </button>

            <button
              type="button"
              onClick={() => onNavigate('/equipes')}
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-white text-white hover:bg-white hover:text-[#031b46] font-black text-xs uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Conheça as Equipes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

