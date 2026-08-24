import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
 import { ImageLightbox } from '../components/ImageLightbox';
import { TEAMS_DATA } from '../data/contentData';
import { TeamGalleryItem } from '../types';
import { Instagram, ExternalLink, Users, Cpu, Wrench, Eye, ShieldCheck } from 'lucide-react';

interface EquipesViewProps {
  onNavigate: (path: string) => void;
}

export const EquipesView: React.FC<EquipesViewProps> = ({ onNavigate }) => {
  const [selectedTeamId, setSelectedTeamId] = useState<'all' | 'federal-force' | 'robots-district'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<TeamGalleryItem[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openTeamLightbox = (gallery: TeamGalleryItem[], index: number) => {
    setActiveGallery(gallery);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const teams = Object.values(TEAMS_DATA);
  const displayedTeams = selectedTeamId === 'all'
    ? teams
    : teams.filter((t) => t.id === selectedTeamId);

  return (
    <div className="w-full pt-20">
      {/* Banner Fotográfico */}
      <section className="relative bg-[#031b46] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
            alt="Equipes de robótica industrial trabalhando na área de pits e arena"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12">
          <Breadcrumbs
            items={[{ label: 'Nossas Equipes', current: true }]}
            onNavigate={onNavigate}
          />

          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-1 bg-[#e31937]" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#e31937]">
                PROTAGONISMO JUVENIL NO DISTRITO FEDERAL
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading">
              Equipes de Competição FRC
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              As equipes de FIRST Robotics Competition representam a aplicação prática e máxima do aprendizado, unindo engenharia industrial, estratégia tática, comunicação e cooperação em escala real.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Editorial & Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-[#052d6e] font-heading">
                Engenharia Em Equipe e Liderança
              </h2>
              <p className="text-sm text-[#596579] mt-1 max-w-2xl font-normal">
                Sediadas em Taguatinga/DF, as equipes operam com divisões multidisciplinares autônomas formadas por estudantes do Ensino Médio.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center bg-[#f5f7fa] p-1 border border-gray-200 flex-shrink-0">
              <button
                type="button"
                onClick={() => setSelectedTeamId('all')}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                  selectedTeamId === 'all'
                    ? 'bg-[#003da5] text-white'
                    : 'text-[#596579] hover:text-[#101828]'
                }`}
              >
                Todas as Equipes
              </button>
              <button
                type="button"
                onClick={() => setSelectedTeamId('federal-force')}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                  selectedTeamId === 'federal-force'
                    ? 'bg-[#e31937] text-white'
                    : 'text-[#596579] hover:text-[#101828]'
                }`}
              >
                Federal Force #10466
              </button>
              <button
                type="button"
                onClick={() => setSelectedTeamId('robots-district')}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                  selectedTeamId === 'robots-district'
                    ? 'bg-[#003da5] text-white'
                    : 'text-[#596579] hover:text-[#101828]'
                }`}
              >
                Robot's District #9484
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Team Showcase */}
      <section className="py-16 sm:py-20 bg-[#f5f7fa]" aria-label="Apresentação das Equipes">
        <div className="max-w-7xl mx-auto px-4 sm:px-12 space-y-16">
          {displayedTeams.map((team) => (
            <div
              key={team.id}
              id={team.id}
              className="bg-white border border-gray-200 shadow-sm scroll-mt-28"
            >
              {/* Team Hero Header */}
              <div className="relative bg-[#031b46] text-white p-8 sm:p-12 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 opacity-20">
                  <img
                    src={team.bannerImage}
                    alt={team.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 text-white font-mono font-bold text-xs uppercase tracking-widest ${
                        team.id === 'federal-force' ? 'bg-[#e31937]' : 'bg-[#003da5] border border-white/20'
                      }`}>
                        FIRST Robotics Competition
                      </span>
                      <span className="text-xl font-mono font-black tracking-widest text-amber-300">
                        #{team.number}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading">
                      {team.name}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-300 italic mt-2 font-normal">
                      "{team.motto}"
                    </p>
                  </div>

                  <a
                    href={team.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#031b46] hover:bg-gray-100 font-mono font-bold text-xs uppercase tracking-widest transition-colors shadow-sm flex-shrink-0"
                  >
                    <Instagram className="w-4 h-4 text-[#e31937]" />
                    <span>Instagram Oficial {team.instagramHandle}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Team Details Grid */}
              <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Left Column: Description & Subteams */}
                  <div className="lg:col-span-7 space-y-8">
                    <div>
                      <h3 className="text-lg font-black uppercase text-[#052d6e] mb-3 font-heading flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#003da5]" />
                        <span>Sobre a Equipe</span>
                      </h3>
                      <p className="text-base text-[#596579] leading-relaxed font-normal">
                        {team.detailedDescription}
                      </p>
                    </div>

                    {/* Subteams / Divisions */}
                    <div>
                      <h3 className="text-lg font-black uppercase text-[#052d6e] mb-4 font-heading flex items-center gap-2">
                        <Wrench className="w-5 h-5 text-[#003da5]" />
                        <span>Divisões de Engenharia & Operações</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {team.subteams.map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-5 bg-[#f5f7fa] border border-gray-200"
                          >
                            <h4 className="font-black text-sm text-[#052d6e] uppercase font-heading">
                              {sub.name}
                            </h4>
                            <p className="text-xs text-[#596579] mt-2 leading-relaxed font-normal">
                              {sub.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Season & Activity */}
                    <div>
                      <h3 className="text-lg font-black uppercase text-[#052d6e] mb-3 font-heading flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-[#003da5]" />
                        <span>Temporadas & Desafios</span>
                      </h3>
                      <div className="space-y-3">
                        {team.seasons.map((season, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-5 bg-[#031b46]/5 border border-gray-200 text-xs sm:text-sm text-[#101828]"
                          >
                            <div className="flex items-center justify-between font-black text-[#003da5] mb-1 uppercase font-heading">
                              <span>{season.season}</span>
                              <span className="text-[11px] text-gray-500 font-mono font-bold">{season.challengeName}</span>
                            </div>
                            <p className="text-[#596579] leading-relaxed font-normal">{season.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Ficha Técnica & Governança */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Technical Profile Card */}
                    <div className="bg-[#f5f7fa] p-8 border border-gray-200">
                      <h3 className="text-sm font-black uppercase tracking-wider text-[#052d6e] mb-4 pb-2 border-b border-gray-200 font-heading">
                        Ficha Técnica Institucional
                      </h3>
                      <dl className="space-y-3.5 text-xs sm:text-sm">
                        <div>
                          <dt className="text-gray-500 font-mono font-bold uppercase text-[11px]">Número Oficial FIRST</dt>
                          <dd className="font-black text-[#052d6e] text-base mt-0.5 font-mono">#{team.number}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500 font-mono font-bold uppercase text-[11px]">Modalidade</dt>
                          <dd className="font-bold text-[#003da5] mt-0.5">FIRST Robotics Competition (FRC)</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500 font-mono font-bold uppercase text-[11px]">Sede de Treinamento</dt>
                          <dd className="font-medium text-[#101828] mt-0.5">{team.location}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500 font-mono font-bold uppercase text-[11px]">Vínculo Educacional</dt>
                          <dd className="font-medium text-[#101828] mt-0.5">{team.institutionalHost}</dd>
                        </div>
                      </dl>

                      {/* Content Governance Note */}
                      <div className="mt-6 pt-4 border-t border-gray-200 flex items-start gap-2 text-[11px] text-gray-500">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="font-normal">
                          Dados e registros históricos mantidos em estrita conformidade com as diretrizes de governança de conteúdo institucional.
                        </span>
                      </div>
                    </div>

                    {/* Social & Contact Box */}
                    <div className="bg-[#031b46] text-white p-8 border border-white/10">
                      <h4 className="font-black text-sm uppercase tracking-widest text-[#e31937] font-mono mb-2">
                        Acompanhe no Instagram
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed mb-6 font-normal">
                        Veja o dia a dia na oficina, o processo de usinagem, testes do robô e bastidores das competições.
                      </p>
                      <a
                        href={team.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#e31937] hover:bg-[#c1152e] text-white font-mono font-bold text-xs uppercase tracking-widest transition-colors shadow-sm"
                      >
                        <Instagram className="w-4 h-4" />
                        <span>Seguir {team.instagramHandle}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Team Photo Gallery with Accessible Lightbox */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-black uppercase text-[#052d6e] font-heading">
                        Galeria de Registros • {team.name}
                      </h3>
                      <p className="text-xs text-[#596579] font-normal">
                        Clique para visualizar a fotografia em alta resolução com créditos técnicos.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {team.gallery.map((img, gIdx) => (
                      <button
                        key={img.id}
                        type="button"
                        onClick={() => openTeamLightbox(team.gallery, gIdx)}
                        className="group relative overflow-hidden border border-gray-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003da5] shadow-sm hover:shadow-md transition-shadow"
                        aria-label={`Ampliar foto ${gIdx + 1} de ${team.name}: ${img.caption}`}
                      >
                        <div className="relative h-56 overflow-hidden bg-gray-900">
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={activeGallery}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setCurrentImageIndex((prev) =>
            prev === 0 ? activeGallery.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setCurrentImageIndex((prev) =>
            prev === activeGallery.length - 1 ? 0 : prev + 1
          )
        }
      />
    </div>
  );
};

