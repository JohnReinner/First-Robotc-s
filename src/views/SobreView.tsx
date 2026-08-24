import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { CORE_VALUES } from '../data/contentData';
import { Bot, HeartHandshake, Compass, Eye, Target, Award, ArrowRight, ShieldCheck } from 'lucide-react';

interface SobreViewProps {
  onNavigate: (path: string) => void;
}

export const SobreView: React.FC<SobreViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-20">
      {/* Banner Fotográfico Institucional */}
      <section className="relative bg-[#031b46] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt="Equipe reunida em projeto de robótica"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12">
          <Breadcrumbs
            items={[{ label: 'Sobre o Projeto', current: true }]}
            onNavigate={onNavigate}
          />

          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-1 bg-[#e31937]" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#e31937]">
                PROPÓSITO & IDENTIDADE
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading">
              Sobre o Projeto FIRST Brasília
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Inspirando uma nova geração de pensadores, inventores e líderes no Distrito Federal por meio da ciência, tecnologia e valores colaborativos.
            </p>
          </div>
        </div>
      </section>

      {/* 1. O que é a FIRST */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="MOVIMENTO GLOBAL"
                title="O Que É a FIRST®"
                subtitle="For Inspiration and Recognition of Science and Technology"
              />

              <div className="space-y-4 text-base text-[#596579] leading-relaxed">
                <p>
                  Fundada em 1989 pelo inventor e empreendedor norte-americano Dean Kamen, a <strong className="text-[#101828]">FIRST®</strong> é uma organização global sem fins lucrativos dedicada a inspirar o interesse e a participação de jovens na ciência e tecnologia.
                </p>
                <p>
                  Muito mais do que construir robôs, os programas da FIRST constroem pessoas. Ao combinar a emoção dos esportes competitivos com o rigor da ciência e da engenharia, os estudantes descobrem o prazer do aprendizado prático e desenvolvem competências essenciais para a vida e para as profissões do futuro.
                </p>
                <p>
                  Hoje, o movimento FIRST alcança centenas de milhares de jovens em mais de 100 países através de uma progressão pedagógica estruturada que vai da infância ao fim do Ensino Médio: <strong className="text-[#003da5]">FLL</strong>, <strong className="text-[#003da5]">FTC</strong> e <strong className="text-[#003da5]">FRC</strong>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#f5f7fa] p-8 border border-gray-200">
              <div className="w-10 h-10 bg-[#003da5] text-white flex items-center justify-center mb-6 shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black uppercase text-[#052d6e] mb-3 font-heading">
                A Robótica Como Esporte Para a Mente
              </h3>
              <p className="text-sm text-[#596579] leading-relaxed font-normal">
                "Não usamos crianças para construir robôs; usamos robôs para construir crianças." — Esta é a premissa central que norteia cada desafio, partida e oficina promovida em nossos ambientes de aprendizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quem Somos (Atuação em Brasília/DF) */}
      <section className="py-16 sm:py-20 bg-[#f5f7fa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <SectionHeader
            eyebrow="PROTAGONISMO LOCAL"
            title="Quem Somos em Brasília e Taguatinga"
            subtitle="Conectando a juventude do Distrito Federal com as fronteiras da inovação tecnológica."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white shadow-sm">
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-blue-50 text-[#003da5] flex items-center justify-center mb-4 border border-blue-100">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-[#052d6e] uppercase mb-2 font-heading">
                  Foco no Desenvolvimento
                </h3>
                <p className="text-sm text-[#596579] leading-relaxed font-normal">
                  Oferecemos aos estudantes um espaço estimulante para errar, aprender com as falhas, iterar projetos e dominar ferramentas industriais.
                </p>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-[#052d6e] uppercase mb-2 font-heading">
                  Mentoria de Excelência
                </h3>
                <p className="text-sm text-[#596579] leading-relaxed font-normal">
                  Educadores e mentores voluntários orientam os alunos na gestão de prazos, governança técnica e princípios éticos de convivência.
                </p>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-amber-50 text-amber-600 flex items-center justify-center mb-4 border border-amber-100">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-[#052d6e] uppercase mb-2 font-heading">
                  Equipes de Competição
                </h3>
                <p className="text-sm text-[#596579] leading-relaxed font-normal">
                  Abrigamos as equipes Federal Force #10466 e Robot's District #9484, referências de dedicação técnica em Taguatinga/DF.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Missão, Visão & Propósito */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <SectionHeader
            eyebrow="DIRETRIZES ESTRATÉGICAS"
            title="Missão, Visão e Propósito"
            subtitle="Nossos compromissos com a educação de qualidade e a inclusão social no Planalto Central."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#031b46] text-white flex flex-col justify-between border border-white/10 shadow-sm">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#e31937] mb-3">
                  DIRETRIZ 01
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 font-heading">
                  Missão
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed font-normal">
                  Inspirar crianças e jovens por meio de experiências práticas e imersivas em ciência, tecnologia, engenharia, criatividade e colaboração.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-xs text-gray-400 font-mono">
                Foco no empoderamento juvenil
              </div>
            </div>

            <div className="p-8 bg-[#003da5] text-white flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-white/80 mb-3">
                  DIRETRIZ 02
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 font-heading">
                  Visão
                </h3>
                <p className="text-sm text-gray-100 leading-relaxed font-normal">
                  Contribuir para uma cultura vibrante em que a ciência e a tecnologia sejam celebradas e os jovens se reconheçam como criadores e protagonistas do futuro.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-xs text-blue-200 font-mono">
                Transformação cultural duradoura
              </div>
            </div>

            <div className="p-8 bg-[#052d6e] text-white flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#e31937] mb-3">
                  DIRETRIZ 03
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 font-heading">
                  Propósito
                </h3>
                <p className="text-sm text-gray-100 leading-relaxed font-normal">
                  Democratizar o acesso a ferramentas de ponta, promovendo educação de qualidade, mentoria humanizada, autoconfiança e oportunidades reais de carreira.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-xs text-gray-400 font-mono">
                Inclusão e impacto humano
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Valores Fundamentais FIRST */}
      <section className="py-16 sm:py-20 bg-[#f5f7fa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <SectionHeader
            eyebrow="ÉTICA & CONDUTA"
            title="Os Valores Fundamentais da FIRST"
            subtitle="Conceitos que diferenciam a experiência FIRST de qualquer outra competição esportiva ou acadêmica."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="bg-white p-8 border border-gray-200 flex flex-col justify-between hover:border-[#003da5] transition-colors shadow-sm">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <HeartHandshake className="w-5 h-5 text-[#e31937]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#e31937]">
                      {val.translation}
                    </span>
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#052d6e] mb-4 font-heading">
                    {val.term}
                  </h3>
                  <p className="text-sm text-[#596579] leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-[#003da5] font-mono font-bold">
                  Aplicado diariamente nas oficinas e em todas as arenas mundiais.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA de Rodapé da Página Sobre */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-12">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#052d6e] font-heading">
            Conheça a Jornada Pedagógica Completa
          </h2>
          <p className="mt-3 text-sm text-[#596579] font-normal">
            Entenda como funciona cada estágio da FIRST: da introdução com LEGO ao desenvolvimento de robôs industriais.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => onNavigate('/programas')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#e31937] hover:bg-[#c1152e] text-white font-black text-xs uppercase tracking-widest transition-colors shadow-sm"
            >
              <span>Ver Todos os Programas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

