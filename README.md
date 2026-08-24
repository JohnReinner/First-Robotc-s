# FIRST Brasília — Portal Institucional de Robótica Educacional

Portal institucional dos programas de robótica educacional FIRST® em Brasília/DF, com destaque para a progressão pedagógica FLL → FTC → FRC e a atuação das equipes **Federal Force #10466** e **Robot's District #9484**, sediadas no SESI SENAI Taguatinga/DF (sujeito à validação institucional).

---

## 🏛️ Diretrizes de Design & Referência

Inspirado na densidade editorial, hierarquia visual e experiência de navegação do *FIRST North Carolina*, com:
- **Barra Utilitária Superior**: Acesso direto a *"Conheça os Programas"* e *"Nossas Equipes"*.
- **Cabeçalho Institucional**: Navegação com dropdown acessível para a jornada de programas e gaveta móvel com bloqueio de rolagem e suporte total a teclado/toque.
- **Hero Fotográfico**: Ampla fotografia de oficina e arena com contraste otimizado (WCAG 2.2 AA).
- **Tipografia em Caixa Alta e Linhas de Acento**: Identidade forte inspirada na engenharia e no rigor das competições STEM.
- **Governança de Conteúdo Estrita**: Controle tipado de validação (`validated`, `provisional`, `pending`) para dados de equipes, faixas etárias e parcerias.
- **Visualizador Acessível de Fotografias (Lightbox)**: Navegação por setas, tecla Esc para fechar, foco retido e créditos técnicos.

---

## 🗺️ Estrutura de Rotas

| Rota | Descrição |
| :--- | :--- |
| `/` | **Início**: Hero amplo, conceito central, jornada FLL/FTC/FRC, impacto socioemocional, equipes em destaque e encerramento |
| `/sobre` | **Sobre o Projeto**: O que é a FIRST®, atuação local em Brasília/Taguatinga, Missão, Visão, Propósito e Valores Fundamentais |
| `/programas` | **Visão Geral**: A progressão pedagógica contínua e tabela comparativa de especificações técnicas |
| `/programas/fll` | **FIRST LEGO League**: Faixa de 4 a 16 anos, robôs LEGO autônomos, Projeto de Inovação e Core Values |
| `/programas/ftc` | **FIRST Tech Challenge**: Faixa de 12 a 18 anos, chassis de alumínio, programação Java e jogo de alianças |
| `/programas/frc` | **FIRST Robotics Competition**: Faixa de 14 a 18 anos, robôs industriais de 57 kg e gestão multidisciplinar |
| `/equipes` | **Nossas Equipes**: Apresentação de Federal Force #10466 e Robot's District #9484 com ficha técnica e galeria |
| `/impacto` | **Competências & Impacto**: As 6 competências chave (*Raciocínio Lógico, Criatividade Aplicada, Trabalho em Equipe, Liderança sob Pressão, Comunicação, Planejamento*) e os princípios *Gracious Professionalism®* e *Coopertition®* |

---

## 🛡️ Governança de Conteúdo & Mídia

- Todas as mídias possuem registros catalogados no arquivo `public/media-manifest.json` com fonte, autoria, créditos e descrição de uso.
- Informações sobre sede no SESI SENAI Taguatinga, premiações e temporadas possuem status tipado (`ContentStatus`) para preservar a integridade institucional.

---

## 🚀 Execução & Build

```bash
# Instalação de dependências
npm install

# Execução em ambiente de desenvolvimento
npm run dev

# Verificação de tipos TypeScript
npm run lint

# Compilação para produção
npm run build
```
