import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
 import { SectionHeader } from '../components/SectionHeader';
 import { COMPETENCIES_DATA } from '../data/contentData';
 import { Cpu, Lightbulb, Users, Flame, MessageSquare, ShieldCheck, HeartHandshake, ArrowRight, Sparkles, Compass, CheckCircle2 } from 'lucide-react';

 interface ImpactoViewProps {
  onNavigate: (path: string) => void;
}

export const ImpactoView: React.FC<ImpactoViewProps> = ({ onNavigate }) => {
  const iconsMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5 text-[#003da5]" />,
    Lightbulb: <Lightbulb className="w-5 h-5 text-amber-500" />,
    Users: <Users className="w-5 h-5 text-emerald-600" />,
    Flame: <Flame className="w-5 h-5 text-[#e31937]" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-indigo-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-teal-600" />,
  };

  return (
    <div className="w-full pt-20">
      {/* Banner */}
      <section className="relative bg-[#031b46] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"
            alt="Estudantes em reunião e desenvolvimento de habilidades"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12">
          <Breadcrumbs
            items={[{ label: 'Competências & Impacto', current: true }]}
            onNavigate={onNavigate}
          />

          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-1 bg-[#e31937]" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#e31937]">
                DESENVOLVIMENTO HUMANO & PROFISSIONAL
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading">
              Impacto Educacional & Competências
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              A robótica não é apenas sobre montagem e programação. É uma jornada profunda de amadurecimento, raciocínio crítico, trabalho em equipe e preparação para os desafios do mundo real.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Competências Chave Detalhadas */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <SectionHeader
            eyebrow="FORMAÇÃO COMPLETA"
            title="Habilidades Para o Robô. Competências Para a Vida."
            subtitle="Conheça a ponte pedagógica entre os desafios práticos da oficina de robótica e a formação do caráter e intelecto do estudante."
          />

          <div className="space-y-6 mt-10">
            {COMPETENCIES_DATA.map((comp, idx) => (
              <div
                key={comp.id}
                className="p-8 sm:p-10 bg-[#f5f7fa] border border-gray-200 hover:border-[#003da5] transition-colors shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Title and main description */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white shadow-xs flex items-center justify-center border border-gray-200 flex-shrink-0">
                        {iconsMap[comp.iconName] || <Sparkles className="w-5 h-5 text-[#003da5]" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#003da5] block">
                          COMPETÊNCIA 0{idx + 1}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black uppercase text-[#052d6e] font-heading">
                          {comp.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-[#596579] leading-relaxed font-normal">
                      {comp.fullDesc}
                    </p>
                  </div>

                  {/* Dual columns: in Robotics vs in Life */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-6 border border-gray-200 shadow-xs">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#003da5] mb-2">
                        <Cpu className="w-4 h-4" />
                        <span>Na Robótica & Na Arena</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#101828] leading-relaxed font-normal">
                        {comp.inRobotics}
                      </p>
                    </div>

                    <div className="bg-white p-6 border border-gray-200 shadow-xs">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Para a Vida & Carreira</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#101828] leading-relaxed font-normal">
                        {comp.inLife}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Os Princípios Éticos FIRST */}
      <section className="py-16 sm:py-20 bg-[#031b46] text-white" aria-labelledby="core-values-impact-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <SectionHeader
            id="core-values-impact-title"
            eyebrow="ÉTICA E CULTURA"
            title="Gracious Professionalism® & Coopertition®"
            subtitle="Dois princípios pioneiros que transformam a competição em um ecossistema de respeito e generosidade."
            theme="dark"
            accentColor="red"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-[#052d6e]/80 p-8 sm:p-10 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-300 mb-3">
                  <HeartHandshake className="w-5 h-5 text-[#e31937]" />
                  <span>Profissionalismo Gentil</span>
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 font-heading text-white">
                  Gracious Professionalism®
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed mb-6 font-normal">
                  Criado pelo Dr. Woodie Flowers, o Gracious Professionalism® é uma forma de agir que estimula o trabalho com altos padrões técnicos, trata os outros com integridade e respeito absoluto e valoriza a paixão sem perder a humildade.
                </p>
                <div className="p-4 bg-[#031b46] border border-white/10 text-xs text-gray-300 italic font-normal">
                  "Na FIRST, você não quer vencer porque o robô do seu oponente quebrou; você quer que o oponente esteja no seu melhor estado possível para que a vitória seja genuinamente conquistada."
                </div>
              </div>
            </div>

            <div className="bg-[#052d6e]/80 p-8 sm:p-10 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-300 mb-3">
                  <Compass className="w-5 h-5 text-[#003da5]" />
                  <span>Cooperação Competitiva</span>
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 font-heading text-white">
                  Coopertition®
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed mb-6 font-normal">
                  Coopertition® é o conceito no qual as equipes ensinam umas às outras, compartilham peças sobressalentes na oficina e celebram as conquistas dos pares, enquanto mantêm o espírito competitivo aceso dentro dos limites da partida.
                </p>
                <div className="p-4 bg-[#031b46] border border-white/10 text-xs text-gray-300 italic font-normal">
                  "Você pode competir com vigor feroz na arena e, minutos depois, estar emprestando uma ferramenta ou ensinando uma linha de código para ajudar a mesma equipe."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-12">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#052d6e] font-heading">
            Faça Parte Deste Movimento em Brasília
          </h2>
          <p className="mt-3 text-sm text-[#596579] font-normal">
            Conheça as equipes que vivem essa transformação no dia a dia em Taguatinga/DF.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/programas')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#003da5] hover:bg-[#052d6e] text-white font-black text-xs uppercase tracking-widest transition-colors shadow-sm"
            >
              <span>Ver os Programas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/equipes')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#f5f7fa] hover:bg-gray-200 text-[#101828] font-black text-xs uppercase tracking-widest transition-colors border border-gray-200"
            >
              <span>Ver as Equipes FRC</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

