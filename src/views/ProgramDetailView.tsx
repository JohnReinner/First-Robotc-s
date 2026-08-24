import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { ImageLightbox } from '../components/ImageLightbox';
import { ProgramId, ProgramStage } from '../types';
import { PROGRAMS_DATA } from '../data/contentData';
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Eye, Layers, Users } from 'lucide-react';

interface ProgramDetailViewProps {
  programId: ProgramId;
  onNavigate: (path: string) => void;
}

export const ProgramDetailView: React.FC<ProgramDetailViewProps> = ({ programId, onNavigate }) => {
  const program: ProgramStage = PROGRAMS_DATA[programId] || PROGRAMS_DATA.fll;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevProgram = program.previousStageId ? PROGRAMS_DATA[program.previousStageId] : null;
  const nextProgram = program.nextStageId ? PROGRAMS_DATA[program.nextStageId] : null;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full pt-20">
      {/* Photographic Banner */}
      <section className="relative bg-[#031b46] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={program.bannerImage}
            alt={program.fullName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031b46] via-[#031b46]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12">
          <Breadcrumbs
            items={[
              { label: 'Programas', href: '/programas' },
              { label: program.shortName, current: true },
            ]}
            onNavigate={onNavigate}
          />

          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-1 bg-[#e31937]" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#e31937]">
                Faixa Etária: {program.ageRange}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading">
              {program.fullName}
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-black text-amber-300 font-heading uppercase">
              "{program.tagline}"
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed font-normal max-w-2xl">
              {program.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Visão Geral & Como Funciona */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="ESTRUTURA PEDAGÓGICA"
                title="Como Funciona o Programa"
                subtitle={program.longDescription}
              />

              <div className="mt-8 space-y-4">
                {program.howItWorks.map((step, idx) => {
                  const parts = step.split(': ');
                  const title = parts.length > 1 ? parts[0] : `Etapa 0${idx + 1}`;
                  const desc = parts.length > 1 ? parts[1] : step;

                  return (
                    <div
                      key={idx}
                      className="p-6 bg-[#f5f7fa] border border-gray-200 hover:border-[#003da5] transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-7 h-7 bg-[#003da5] text-white flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5">
                          0{idx + 1}
                        </div>
                        <div>
                          <h3 className="font-black text-base uppercase text-[#052d6e] font-heading">
                            {title}
                          </h3>
                          <p className="mt-2 text-sm text-[#596579] leading-relaxed font-normal">
                            {desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technical Specs & Robot Profile */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#031b46] text-white p-8 border border-white/10 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#e31937] mb-4">
                  <Cpu className="w-4 h-4" />
                  <span>Especificações Técnicas</span>
                </div>

                <h3 className="text-xl font-black uppercase mb-6 font-heading text-white">
                  O Perfil Tecnológico
                </h3>

                <div className="space-y-4 text-xs sm:text-sm divide-y divide-white/10">
                  <div className="pt-3 first:pt-0">
                    <span className="text-gray-400 block font-mono font-bold uppercase text-[11px]">
                      Materiais & Mecânica
                    </span>
                    <span className="text-white font-medium block mt-0.5">
                      {program.robotSpec.material}
                    </span>
                  </div>

                  <div className="pt-3">
                    <span className="text-gray-400 block font-mono font-bold uppercase text-[11px]">
                      Linguagem & Software
                    </span>
                    <span className="text-white font-medium block mt-0.5">
                      {program.robotSpec.programming}
                    </span>
                  </div>

                  <div className="pt-3">
                    <span className="text-gray-400 block font-mono font-bold uppercase text-[11px]">
                      Arena & Campo de Provas
                    </span>
                    <span className="text-white font-medium block mt-0.5">
                      {program.robotSpec.arena}
                    </span>
                  </div>

                  <div className="pt-3">
                    <span className="text-gray-400 block font-mono font-bold uppercase text-[11px]">
                      Ciclo de Partida
                    </span>
                    <span className="text-white font-medium block mt-0.5">
                      {program.robotSpec.cycle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Team Dynamics Card */}
              <div className="bg-[#f5f7fa] p-8 border border-gray-200">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#003da5] mb-2">
                  <Users className="w-4 h-4" />
                  <span>Dinâmica em Equipe</span>
                </div>
                <h3 className="text-lg font-black uppercase text-[#052d6e] mb-3 font-heading">
                  Cooperação & Papéis
                </h3>
                <p className="text-sm text-[#596579] leading-relaxed font-normal">
                  {program.teamDynamics}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Que o Estudante Desenvolve */}
      <section className="py-16 sm:py-20 bg-[#f5f7fa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <SectionHeader
            eyebrow="COMPETÊNCIAS ADQUIRIDAS"
            title="O Que o Estudante Desenvolve"
            subtitle="Habilidades práticas para a vida acadêmica, tecnológica e profissional."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {program.skillsDeveloped.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-gray-200 shadow-sm flex items-start gap-4 hover:border-[#003da5] transition-colors"
              >
                <div className="w-7 h-7 bg-blue-50 text-[#003da5] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#003da5]" />
                </div>
                <div>
                  <h3 className="font-black text-base text-[#052d6e] uppercase font-heading">
                    {skill}
                  </h3>
                  <p className="mt-1 text-xs text-[#596579] font-normal">
                    Desenvolvido através de experimentação real durante a temporada oficial.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria Autorizada com Lightbox Acessível */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200" aria-label="Galeria fotográfica do programa">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <SectionHeader
            eyebrow="REGISTROS VISUAIS"
            title="A Prática da Robótica em Imagens"
            subtitle="Fotografias de oficinas, montagens e ambientes de competição. Clique em qualquer imagem para abrir o visualizador ampliado."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {program.galleryImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => openLightbox(idx)}
                className="group relative overflow-hidden border border-gray-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003da5] shadow-sm hover:shadow-md transition-shadow"
                aria-label={`Ampliar foto: ${img.caption}`}
              >
                <div className="relative h-64 overflow-hidden bg-gray-900">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />
                  <div className="absolute bottom-3 right-3 p-2 bg-black/70 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <p className="text-xs font-bold text-[#101828] line-clamp-2 uppercase">
                    {img.caption}
                  </p>
                  <p className="text-[10px] font-mono text-gray-500 mt-1">
                    {img.credit}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Navegação Entre Estágios da Trilha */}
      <section className="py-12 bg-[#f5f7fa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevProgram ? (
              <button
                type="button"
                onClick={() => onNavigate(`/programas/${prevProgram.id}`)}
                className="w-full sm:w-auto inline-flex items-center gap-3 p-4 bg-white border border-gray-200 hover:border-[#003da5] text-left transition-colors shadow-sm"
              >
                <ArrowLeft className="w-5 h-5 text-[#003da5]" />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">
                    Estágio Anterior
                  </span>
                  <span className="font-black text-sm text-[#052d6e] uppercase">
                    {prevProgram.name} ({prevProgram.shortName})
                  </span>
                </div>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onNavigate('/programas')}
                className="w-full sm:w-auto inline-flex items-center gap-2 p-4 bg-white border border-gray-200 text-left text-xs font-black uppercase text-[#596579] hover:text-[#003da5]"
              >
                <Layers className="w-4 h-4" />
                <span>Visão Geral da Trilha</span>
              </button>
            )}

            {nextProgram ? (
              <button
                type="button"
                onClick={() => onNavigate(`/programas/${nextProgram.id}`)}
                className="w-full sm:w-auto inline-flex items-center gap-3 p-4 bg-white border border-gray-200 hover:border-[#003da5] text-right transition-colors shadow-sm justify-end"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">
                    Próximo Estágio
                  </span>
                  <span className="font-black text-sm text-[#052d6e] uppercase">
                    {nextProgram.name} ({nextProgram.shortName})
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-[#003da5]" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onNavigate('/equipes')}
                className="w-full sm:w-auto inline-flex items-center gap-3 p-4 bg-[#e31937] text-white hover:bg-[#c1152e] text-right transition-colors shadow-sm justify-end"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/80 block">
                    Próximo Passo
                  </span>
                  <span className="font-black text-sm text-white uppercase">
                    Conhecer as Equipes FRC
                  </span>
                </div>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={program.galleryImages}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setCurrentImageIndex((prev) =>
            prev === 0 ? program.galleryImages.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setCurrentImageIndex((prev) =>
            prev === program.galleryImages.length - 1 ? 0 : prev + 1
          )
        }
      />
    </div>
  );
};

