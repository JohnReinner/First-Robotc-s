export type ContentStatus = 'validated' | 'provisional' | 'pending';

export type ProgramId = 'fll' | 'ftc' | 'frc';

export interface ProgramStage {
  id: ProgramId;
  name: string;
  shortName: string;
  fullName: string;
  ageRange: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  howItWorks: string[];
  skillsDeveloped: string[];
  teamDynamics: string;
  robotSpec: {
    material: string;
    programming: string;
    arena: string;
    cycle: string;
  };
  previousStageId?: ProgramId;
  nextStageId?: ProgramId;
  bannerImage: string;
  galleryImages: {
    src: string;
    caption: string;
    credit: string;
    alt: string;
    status: ContentStatus;
  }[];
  status: ContentStatus;
}

export interface SeasonParticipation {
  season: string;
  challengeName: string;
  description: string;
  status: ContentStatus;
}

export interface TeamAchievement {
  title: string;
  year: string;
  event: string;
  description?: string;
  status: ContentStatus;
}

export interface TeamGalleryItem {
  id: string;
  src: string;
  caption: string;
  credit: string;
  alt: string;
  status: ContentStatus;
}

export interface TeamData {
  id: 'federal-force' | 'robots-district';
  number: number;
  name: string;
  nickname: string;
  category: 'FRC';
  location: string;
  locationStatus: ContentStatus;
  creationYear: number;
  creationYearStatus: ContentStatus;
  institutionalHost: string;
  institutionalHostStatus: ContentStatus;
  motto: string;
  summary: string;
  detailedDescription: string;
  subteams: {
    name: string;
    description: string;
  }[];
  seasons: SeasonParticipation[];
  achievements: TeamAchievement[];
  instagramUrl: string;
  instagramHandle: string;
  bannerImage: string;
  featuredImage: string;
  gallery: TeamGalleryItem[];
  status: ContentStatus;
}

export interface CompetencyItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  inRobotics: string;
  inLife: string;
  iconName: string;
  status: ContentStatus;
}

export interface MediaManifestItem {
  id: string;
  filename: string;
  path: string;
  source: string;
  credit: string;
  authorization: string;
  dateAccessed: string;
  description: string;
  usedIn: string[];
  status: ContentStatus;
}

export interface PartnerItem {
  id: string;
  name: string;
  type: string;
  logoUrl?: string;
  status: ContentStatus;
}
