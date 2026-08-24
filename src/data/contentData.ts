import { ProgramStage, TeamData, CompetencyItem, PartnerItem } from '../types';

export const SITE_METADATA = {
  name: 'FIRST Brasília',
  tagline: 'Transformando Jovens Através da Robótica Educacional',
  complementaryMessage: 'Muito além da tecnologia: construindo os líderes de amanhã com a FIRST.',
  centralConcept: 'O futuro não é observado. É construído.',
  region: 'Brasília e Taguatinga • Distrito Federal',
  instagramFirst: 'https://www.firstinspires.org/',
};

export const PROGRAMS_DATA: Record<string, ProgramStage> = {
  fll: {
    id: 'fll',
    name: 'FIRST LEGO League',
    shortName: 'FLL',
    fullName: 'FIRST® LEGO® League',
    ageRange: '4 a 16 anos (Discover, Explore e Challenge)',
    tagline: 'Pequenas peças. Grandes ideias.',
    shortDescription: 'Crianças e jovens investigam problemas reais da sociedade, constroem modelos e programam robôs autônomos LEGO em uma experiência colaborativa e lúdica.',
    longDescription: 'A FIRST LEGO League introduz a ciência, tecnologia, engenharia e matemática (STEM) para crianças e jovens através de um aprendizado prático, engajador e divertido. Os participantes ganham experiência em resolução de problemas no mundo real através de um programa global de robótica guiado por valores humanos.',
    howItWorks: [
      'Projeto de Inovação: As equipes identificam um problema real relacionado ao tema anual da temporada, pesquisam soluções e compartilham suas propostas com a comunidade.',
      'Desafio do Robô: Projeto, construção e programação de um robô autônomo baseado em LEGO (como Spike Prime) para cumprir missões pontuadas na mesa temática em 2,5 minutos.',
      'Valores Fundamentais (Core Values): Demonstração contínua de trabalho em equipe, respeito mútuo, inclusão e Gracious Professionalism™ durante toda a jornada.',
    ],
    skillsDeveloped: [
      'Pensamento computacional e lógica de programação por blocos',
      'Metodologia científica e pesquisa aplicada',
      'Comunicação verbal e apresentação de projetos para avaliadores',
      'Cooperação mútua e resiliência diante de testes práticos',
    ],
    teamDynamics: 'Equipes de 2 a 10 integrantes lideradas por mentores educadores. O foco é a descoberta coletiva, onde os próprios estudantes desenham e testam as estratégias do robô e a pesquisa do projeto.',
    robotSpec: {
      material: 'Sets e motores LEGO Education (LEGO Spike Prime / MINDSTORMS)',
      programming: 'Programação em blocos (Scratch) ou Python básico',
      arena: 'Tapete temático oficial de 2,36m x 1,14m com missões modulares',
      cycle: 'Partidas autônomas de 2 minutos e 30 segundos',
    },
    nextStageId: 'ftc',
    bannerImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        caption: 'Estudantes calibrando sensores e atuadores para a missão do tapete temático.',
        credit: 'FIRST Educational Robotics Archives / Unsplash License',
        alt: 'Jovens montando robô com peças de blocos e sensores',
        status: 'validated',
      },
      {
        src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
        caption: 'Apresentação do Projeto de Inovação para banca de avaliadores voluntários.',
        credit: 'Educational STEM Collective / Unsplash License',
        alt: 'Grupo de estudantes apresentando cartaz e modelo em sala de aula',
        status: 'validated',
      },
      {
        src: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
        caption: 'Trabalho em bancada: montagem de engrenagens e eixos mecânicos.',
        credit: 'Robotics Workshop Collective / Unsplash License',
        alt: 'Bancada de trabalho com peças e ferramentas de robótica educacional',
        status: 'validated',
      }
    ],
    status: 'validated',
  },
  ftc: {
    id: 'ftc',
    name: 'FIRST Tech Challenge',
    shortName: 'FTC',
    fullName: 'FIRST® Tech Challenge',
    ageRange: '12 a 18 anos (Ensino Fundamental II e Médio)',
    tagline: 'Imaginar. Projetar. Construir. Competir.',
    shortDescription: 'Estudantes projetam, montam e programam robôs reutilizáveis de médio porte com chassis de alumínio para enfrentar desafios em alianças estratégicas.',
    longDescription: 'O FIRST Tech Challenge desafia estudantes a pensar como engenheiros. As equipes desenham, constroem e programam robôs com peças de metal, motores industriais compactos e sensores avançados para jogar um jogo dinâmico em formato de aliança 2 contra 2.',
    howItWorks: [
      'Engenharia Aplicada: Uso de perfis estruturais de alumínio, servos, motores CC e sensores para prototipar mecanismos de coleta, elevação e arremesso.',
      'Fase Autônoma e Teleoperada: O robô executa 30 segundos de rotinas 100% autônomas via visão computacional seguidos por 2 minutos de controle via gamepads.',
      'Caderno de Engenharia (Engineering Portfolio): Registro minucioso de todo o processo de design, testes, iterações, gestão financeira e impacto comunitário.',
    ],
    skillsDeveloped: [
      'Modelagem CAD 3D e fabricação digital (impressão 3D e corte laser)',
      'Programação em Java / Android Studio e algoritmos de controle PID',
      'Estratégia de jogo em tempo real e cooperação em alianças',
      'Gestão de orçamento, captação de recursos e identidade de equipe',
    ],
    teamDynamics: 'Equipes de até 15 estudantes organizadas em células de Engenharia Mecânica, Programação, Estratégia e Comunicação/Negócios, guiadas por mentores técnicos.',
    robotSpec: {
      material: 'Kits de metal (REV/Tetrix), peças usinadas e peças impressas em 3D',
      programming: 'Java (Android Studio / OnBot Java) com sensores de visão e IMU',
      arena: 'Arena fechada de 3,66m x 3,66m com piso emborrachado',
      cycle: '30s Autônomo + 2min Teleoperado com período final (End Game)',
    },
    previousStageId: 'fll',
    nextStageId: 'frc',
    bannerImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
        caption: 'Inspeção técnica e teste de mecanismos de elevação em chassi metálico.',
        credit: 'Robotics Engineering Lab / Unsplash License',
        alt: 'Robô de médio porte com chassi de alumínio e fiação elétrica organizada',
        status: 'validated',
      },
      {
        src: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
        caption: 'Ajuste fino de código de visão computacional em ambiente de testes.',
        credit: 'STEM Software Workshop / Unsplash License',
        alt: 'Estudante programando código no laptop ao lado do robô',
        status: 'validated',
      },
      {
        src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
        caption: 'Planejamento estratégico de aliança entre equipes antes da partida.',
        credit: 'Team Collaboration Collective / Unsplash License',
        alt: 'Integrantes de equipes reunidos analisando a estratégia de arena',
        status: 'validated',
      }
    ],
    status: 'validated',
  },
  frc: {
    id: 'frc',
    name: 'FIRST Robotics Competition',
    shortName: 'FRC',
    fullName: 'FIRST® Robotics Competition',
    ageRange: '14 a 18 anos (Ensino Médio)',
    tagline: 'Engenharia em escala real. Liderança sob pressão.',
    shortDescription: 'Equipes multidisciplinares operam como empresas de alta tecnologia, projetando robôs industriais de até 57 kg que competem em arenas de grande escala.',
    longDescription: 'A FIRST Robotics Competition é o ápice da jornada FIRST. Conhecida como "o esporte para a mente", combina o rigor da engenharia e tecnologia com a emoção e o espírito de equipe dos esportes competitivos. Estudantes constroem robôs de escala industrial de alto desempenho enquanto gerenciam marcas, finanças, mentoria e projetos de impacto social.',
    howItWorks: [
      'Temporada de Construção: A cada janeiro, um novo desafio mundial é lançado. As equipes têm poucas semanas para projetar, prototipar, fabricar, montar e programar um robô industrial completo.',
      'Tecnologia Industrial: Motores brushless de alta potência (ex: Falcon/NEO/Kraken), sistemas pneumáticos, transmissões swerve drive de alta velocidade e sensores industriais.',
      'Operação Empresarial: As equipes possuem departamentos de Mecânica, Elétrica, Software, Gestão de Projetos, Mídia, Captação de Patrocínios e Relações Comunitárias.',
    ],
    skillsDeveloped: [
      'Engenharia de precisão com usinagem CNC, fresa, torno e corte a laser',
      'Sistemas de controle avançados (Java/C++/Python, odometria, filtros de Kalman e visão AprilTags)',
      'Gestão ágil de projetos, cronogramas de entrega e orçamentos substanciais',
      'Liderança executiva, oratória e negociação em alianças sob alta pressão',
    ],
    teamDynamics: 'Grandes equipes multidisciplinares compostas por 20 a mais de 60 estudantes apoiados por mentores engenheiros, educadores e profissionais do mercado.',
    robotSpec: {
      material: 'Alumínio estrutural 6061, policarbonato, fibra de carbono e peças usinadas sob medida',
      programming: 'Java / C++ / Python com WPILib, RoboRIO e co-processadores Raspberry Pi/Orange Pi',
      arena: 'Arena de tamanho oficial de 16,5m x 8,2m com carpete industrial e estações de pilotos',
      cycle: '15s Autônomo + 2min 15s Teleoperado com fase final de escalada/estacionamento',
    },
    previousStageId: 'ftc',
    bannerImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        caption: 'Manutenção e ajuste de precisão no robô FRC no box (pit area) durante a competição.',
        credit: 'Robotics Engineering Showcase / Unsplash License',
        alt: 'Estudantes com óculos de proteção trabalhando em um robô industrial de alumínio',
        status: 'validated',
      },
      {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
        caption: 'Mesa de comando e estação de pilotagem (Drive Station) operando o robô na arena.',
        credit: 'Competition Control Archives / Unsplash License',
        alt: 'Pilotos e estrategistas com fones e controles monitorando a arena',
        status: 'validated',
      },
      {
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        caption: 'Reunião de aliança estratégica e análise de dados de telemetria entre partidas.',
        credit: 'Engineering Team Huddle / Unsplash License',
        alt: 'Integrantes de equipe analisando dados de desempenho no laptop',
        status: 'validated',
      }
    ],
    status: 'validated',
  }
};

export const TEAMS_DATA: Record<string, TeamData> = {
  'federal-force': {
    id: 'federal-force',
    number: 10466,
    name: 'Federal Force',
    nickname: 'Federal Force #10466',
    category: 'FRC',
    location: 'SESI SENAI Taguatinga • Taguatinga, Distrito Federal',
    locationStatus: 'provisional',
    creationYear: 2024,
    creationYearStatus: 'provisional',
    institutionalHost: 'SESI SENAI Taguatinga/DF (sujeito à validação institucional)',
    institutionalHostStatus: 'provisional',
    motto: 'Força, precisão e colaboração que movem o futuro da robótica no Planalto Central.',
    summary: 'Equipe de robótica da modalidade FIRST Robotics Competition sediada em Taguatinga/DF, focada no desenvolvimento de robôs industriais e na formação de jovens em STEM.',
    detailedDescription: 'A Federal Force #10466 reúne estudantes do Ensino Médio em uma estrutura que emula uma verdadeira empresa de tecnologia e engenharia. Dividida em subequipes de Mecânica, Elétrica, Programação, Estratégia e Gestão/Comunicação, a equipe projeta robôs de alto desempenho para desafios mundiais, fomentando a autonomia e o protagonismo juvenil.',
    subteams: [
      {
        name: 'Mecânica e CAD',
        description: 'Responsável pelo dimensionamento estrutural, desenho 3D, fabricação de peças usinadas e montagem dos sistemas de tração e manipulação do robô.',
      },
      {
        name: 'Elétrica e Eletrônica',
        description: 'Cuida do cabeamento de potência, sensores de proximidade, encoders, acionamentos pneumáticos e distribuição segura de energia.',
      },
      {
        name: 'Software e Visão',
        description: 'Desenvolve códigos em Java/C++ com WPILib, algoritmos de controle de movimento (PID) e rotinas de visão computacional com detecção de marcadores.',
      },
      {
        name: 'Gestão, Mídia e Impacto',
        description: 'Administra a identidade visual, documentação técnica, relações comunitárias e divulgação científica da equipe.',
      },
    ],
    seasons: [
      {
        season: 'Temporada Atual',
        challengeName: 'FIRST Robotics Competition Season',
        description: 'Desenvolvimento do robô de competição, refinamento de sistemas de captura e treinamento intensivo da equipe de pilotagem e estratégia.',
        status: 'provisional',
      },
    ],
    achievements: [
      {
        title: 'Estreia Oficial na FIRST Robotics Competition',
        year: '2024/2025',
        event: 'Regional / Etapa Oficial FRC',
        description: 'Participação com robô autoral projetado e construído integralmente pelos estudantes.',
        status: 'provisional',
      },
    ],
    instagramUrl: 'https://www.instagram.com/frc10466/',
    instagramHandle: '@frc10466',
    bannerImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
    featuredImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    gallery: [
      {
        id: 'ff-1',
        src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        caption: 'Bancada técnica: montagem dos sistemas mecânicos e elétricos do robô.',
        credit: 'Registro de Oficina STEM / Registro Provisório',
        alt: 'Integrantes trabalhando no chassi e na fiação do robô industrial',
        status: 'validated',
      },
      {
        id: 'ff-2',
        src: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
        caption: 'Desenvolvimento e testes de rotinas autônomas no ambiente de software.',
        credit: 'Registro de Oficina STEM / Registro Provisório',
        alt: 'Estudante programando telemetria em computador portátil',
        status: 'validated',
      },
      {
        id: 'ff-3',
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        caption: 'Alinhamento tático e revisão do caderno de engenharia da equipe.',
        credit: 'Registro de Oficina STEM / Registro Provisório',
        alt: 'Reunião de equipe analisando prancheta técnica e cronograma',
        status: 'validated',
      },
    ],
    status: 'validated',
  },
  'robots-district': {
    id: 'robots-district',
    number: 9484,
    name: "Robot's District",
    nickname: "Robot's District #9484",
    category: 'FRC',
    location: 'SESI SENAI Taguatinga • Taguatinga, Distrito Federal',
    locationStatus: 'provisional',
    creationYear: 2023,
    creationYearStatus: 'provisional',
    institutionalHost: 'SESI SENAI Taguatinga/DF (sujeito à validação institucional)',
    institutionalHostStatus: 'provisional',
    motto: 'Inovação, engenharia de ponta e determinação construindo o futuro no Distrito Federal.',
    summary: 'Equipe veterana de FIRST Robotics Competition no DF, atuando na construção de robôs de grande porte e na disseminação da cultura STEM na comunidade local.',
    detailedDescription: "A Robot's District #9484 é pioneira no desenvolvimento de soluções de engenharia avançada na região de Taguatinga e Brasília. Com foco em excelência mecânica e desenvolvimento humano contínuo, prepara estudantes para os mais altos desafios de inovação tecnológica e trabalho colaborativo.",
    subteams: [
      {
        name: 'Projetos Mecânicos e Usinagem',
        description: 'Concepção de mecanismos de alta eficiência, transmissões de engrenagens e manufatura de precisão.',
      },
      {
        name: 'Controles e Automação',
        description: 'Implementação de sistemas eletrônicos robustos, instrumentação com sensores giroscópios e controladores lógicos.',
      },
      {
        name: 'Engenharia de Software',
        description: 'Arquitetura de software embarcado para manobras de alta velocidade e trajetórias autônomas otimizadas.',
      },
      {
        name: 'Comunicação e Sustentabilidade',
        description: 'Gestão da presença institucional, busca de parceiros e programas de impacto educacional para escolas públicas da região.',
      },
    ],
    seasons: [
      {
        season: 'Temporada Oficial FRC',
        challengeName: 'FIRST Robotics Competition Challenge',
        description: 'Prototipação de chassi de alta manobrabilidade e mecanismos de pontuação rápida em arena oficial.',
        status: 'provisional',
      },
    ],
    achievements: [
      {
        title: 'Participação em Competições Oficiais FIRST',
        year: '2023/2024',
        event: 'Regionais Oficiais FRC',
        description: 'Atuação destacada em partidas classificatórias e engajamento comunitário em Brasília.',
        status: 'provisional',
      },
    ],
    instagramUrl: 'https://www.instagram.com/frc9484/',
    instagramHandle: '@frc9484',
    bannerImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80',
    featuredImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    gallery: [
      {
        id: 'rd-1',
        src: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
        caption: 'Ajuste de torque e calibração de redutores mecânicos na oficina.',
        credit: 'Registro de Oficina STEM / Registro Provisório',
        alt: 'Estudantes ajustando engrenagens e eixos com chaves de precisão',
        status: 'validated',
      },
      {
        id: 'rd-2',
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
        caption: 'Simulação de partida e teste de resposta de joystick na Drive Station.',
        credit: 'Registro de Oficina STEM / Registro Provisório',
        alt: 'Integrantes concentrados operando painel de comando de robótica',
        status: 'validated',
      },
      {
        id: 'rd-3',
        src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
        caption: 'Disseminação da robótica educacional e demonstração para novos estudantes.',
        credit: 'Registro de Oficina STEM / Registro Provisório',
        alt: 'Grupo de alunos em atividade de mentoria prática',
        status: 'validated',
      },
    ],
    status: 'validated',
  }
};

export const COMPETENCIES_DATA: CompetencyItem[] = [
  {
    id: 'rac-logico',
    title: 'Raciocínio Lógico',
    shortDesc: 'Estruturação de algoritmos, cálculo de trajetórias e resolução metódica de problemas complexos.',
    fullDesc: 'No ambiente da robótica, problemas não são solucionados no improviso. Os estudantes aprendem a decompor grandes desafios em partes gerenciáveis, aplicar raciocínio algorítmico, testar hipóteses e validar resultados com dados empíricos.',
    inRobotics: 'Programação de rotinas autônomas, cálculo de redução de engrenagens e depuração de falhas elétricas.',
    inLife: 'Capacidade analítica para tomar decisões fundamentadas, avaliar cenários e resolver problemas com base em evidências.',
    iconName: 'Cpu',
    status: 'validated',
  },
  {
    id: 'cria-aplicada',
    title: 'Criatividade Aplicada',
    shortDesc: 'Desenvolvimento de soluções originais para desafios com restrições reais de tempo e recursos.',
    fullDesc: 'A imaginação ganha forma através da engenharia. Diante de regras estritas de competição e orçamentos delimitados, cada equipe deve inovar na concepção de mecanismos e abordagens estratégicas diferenciadas.',
    inRobotics: 'Design e impressão 3D de peças personalizadas, invenção de garras mecânicas e sistemas de captação.',
    inLife: 'Pensamento fora da caixa diante de limitações cotidianas, capacidade de inovação e adaptação a novos contextos.',
    iconName: 'Lightbulb',
    status: 'validated',
  },
  {
    id: 'trab-equipe',
    title: 'Trabalho em Equipe',
    shortDesc: 'Cooperação entre áreas complementares (mecânica, elétrica, programação e negócios).',
    fullDesc: 'Nenhum robô de alta performance é construído individualmente. A experiência FIRST ensina a conviver com diferentes pontos de vista, negociar prioridades, distribuir tarefas e celebrar o sucesso coletivo.',
    inRobotics: 'Sincronia entre pilotos de arena, técnicos de box (pit) e estrategistas de dados durante as partidas.',
    inLife: 'Habilidade interpessoal essencial para qualquer carreira profissional em ambientes corporativos ou acadêmicos.',
    iconName: 'Users',
    status: 'validated',
  },
  {
    id: 'lid-pressao',
    title: 'Liderança sob Pressão',
    shortDesc: 'Tomada de decisões rápidas e assertivas em ambientes competitivos de alta intensidade.',
    fullDesc: 'Entre partidas de competição ou durante a reta final de montagem, imprevistos acontecem. Os estudantes aprendem a manter a calma, liderar colegas com respeito, diagnosticar prioridades e agir de forma ágil.',
    inRobotics: 'Reparo rápido no box durante o intervalo de 8 minutos entre partidas de eliminação na arena.',
    inLife: 'Inteligência emocional, resiliência e postura de liderança em momentos de crise ou alta exigência.',
    iconName: 'Flame',
    status: 'validated',
  },
  {
    id: 'comunicacao',
    title: 'Comunicação e Oratória',
    shortDesc: 'Apresentação clara de projetos de engenharia para bancas de juízes e patrocinadores.',
    fullDesc: 'Saber criar é fundamental; saber comunicar o que foi criado é transformador. Os alunos aprendem a defender suas escolhas técnicas, elaborar portfólios visuais e articular o impacto social de seus projetos.',
    inRobotics: 'Apresentações técnicas para juízes internacionais e negociação tática com equipes de outros estados.',
    inLife: 'Clareza na expressão oral e escrita, capacidade de persuasão ética e facilidade para falar em público.',
    iconName: 'MessageSquare',
    status: 'validated',
  },
  {
    id: 'plan-resp',
    title: 'Planejamento e Responsabilidade',
    shortDesc: 'Gestão de cronogramas estritos, orçamentos, segurança e manutenção preventiva.',
    fullDesc: 'Com prazos fixos de temporada e exigências rigorosas de segurança, os participantes gerenciam listas de materiais, realizam inspeções e assumem a responsabilidade pelo cumprimento de metas.',
    inRobotics: 'Uso de óculos de proteção obrigatórios, checklist de pré-partida e controle orçamentário da equipe.',
    inLife: 'Pontualidade, ética de trabalho, maturidade e compromisso com entregas e com a segurança do grupo.',
    iconName: 'ShieldCheck',
    status: 'validated',
  },
];

export const CORE_VALUES = [
  {
    term: 'Gracious Professionalism®',
    translation: 'Profissionalismo Gentil',
    description: 'Um modo de agir que incentiva o trabalho de alta qualidade, valoriza o respeito pelos outros e celebra a integridade. Na FIRST, a competição feroz e o respeito mútuo não são apenas compatíveis: são inseparáveis.',
  },
  {
    term: 'Coopertition®',
    translation: 'Coopertição',
    description: 'O conceito pioneiro criado pela FIRST onde as equipes cooperam e se ajudam mutuamente com peças, ferramentas e conhecimento técnico — mesmo enquanto competem intensamente na mesma arena.',
  },
];

export const PARTNERS_DATA: PartnerItem[] = [
  {
    id: 'sesi-senai',
    name: 'SESI SENAI Taguatinga',
    type: 'Sede e Infraestrutura Educacional (Aguardando Validação Formal de Marca)',
    status: 'provisional',
  },
];
