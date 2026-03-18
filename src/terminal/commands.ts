import type { CommandMap, CommandResult, TerminalLine } from './types';
import { BANNER } from './ascii';

const line = (content: string, type: TerminalLine['type'] = 'output'): TerminalLine => ({
  id: crypto.randomUUID(),
  content,
  type,
});

const lines = (...args: [string, TerminalLine['type']?][]): CommandResult => ({
  lines: args.map(([c, t]) => line(c, t)),
});

const PROJECTS = [
  {
    id: '1',
    title: 'INTO-CPS Application',
    desc: 'Cross-platform desktop app (Electron + React) for co-simulation execution via the Maestro Engine, with live graph rendering and automated CI/CD pipelines.',
    tags: ['React', 'TypeScript', 'Electron', 'GitHub Actions'],
    repo: 'https://github.com/INTO-CPS-Association/into-cps-application/',
    image: '/assets/projects/intocps.png',
  },
  {
    id: '2',
    title: 'Crypto Arbitrage Stealth Engine',
    desc: 'High-frequency real-time ETL pipeline monitoring arbitrage opportunities across exchanges via WebSockets, Redis, and Docker microservices.',
    tags: ['Python', 'Asyncio', 'Redis', 'Docker'],
    repo: 'https://github.com/PandoraQS/Crypto-Arbitrage-Stealth',
    image: '/assets/projects/arbitrage.png',
  },
  {
    id: '3',
    title: 'Sentiment Alpha AI',
    desc: 'AI pipeline for real-time crypto market narrative tracking. Correlates FinBERT sentiment analysis with live exchange spreads via Llama 3.',
    tags: ['NLP', 'PyTorch', 'Llama 3', 'FinBERT'],
    repo: 'https://github.com/PandoraQS/News-Sentiment-Alpha',
    image: '/assets/projects/sentiment.png',
  },
  {
    id: '4',
    title: 'Behavioral Analytics Platform',
    desc: 'End-to-end data engineering project processing complex clickstream patterns to identify user anomalies and risk insights.',
    tags: ['Pandas', 'SQL', 'Pydantic', 'ETL'],
    repo: 'https://github.com/PandoraQS/ecommerce-behavior-analytics',
    image: '/assets/projects/analytics.png',
  },
  {
    id: '5',
    title: 'Aarhus Terrain Engine',
    desc: 'High-performance GIS web app mapping and analyzing Aarhus green infrastructure for flood risk and urban water management.',
    tags: ['React', 'TypeScript', 'OpenLayers', 'Overpass API'],
    repo: 'https://github.com/PandoraQS/terrain-aarhus-demo/',
    image: '/assets/projects/terrain-engine.png',
  },
];

export const commands: CommandMap = {

  help: () => lines(
    ['┌─────────────────────────────────────────┐', 'info'],
    ['│           AVAILABLE COMMANDS            │', 'info'],
    ['└─────────────────────────────────────────┘', 'info'],
    [''],
    ['  about        → Who I am', 'success'],
    ['  education    → Academic background', 'success'],
    ['  skills       → Full tech stack', 'success'],
    ['  projects     → Project list (with IDs)', 'success'],
    ['  project <id> → Single project detail + image', 'success'],
    ['  contact      → Contact info & socials', 'success'],
    ['  mission      → My engineering philosophy', 'success'],
    ['  quote        → Random dev quote', 'success'],
    ['  banner       → Show ASCII art', 'success'],
    ['  clear        → Clear the terminal', 'success'],
    ['  gui          → Switch to visual portfolio', 'success'],
    [''],
    ['  Use ↑ ↓ to navigate command history.', 'info'],
    ['  Use TAB to autocomplete.', 'info'],
  ),

  about: () => lines(
    [''],
    ['  ┌─ SIMONE MICALIZZI ──────────────────────────────────────┐', 'success'],
    ['  │                                                          │', 'success'],
    ['  │  Software Engineer · MSc Computer Engineering           │', 'success'],
    ['  │  Aarhus University, Denmark                             │', 'success'],
    ['  │                                                          │', 'success'],
    ['  │  I build systems where backend engineering and          │', 'success'],
    ['  │  artificial intelligence meet.                          │', 'success'],
    ['  │  From real-time DSP to ML pipelines, all the way to     │', 'success'],
    ['  │  high-performance distributed architectures.            │', 'success'],
    ['  │                                                          │', 'success'],
    ['  └──────────────────────────────────────────────────────────┘', 'success'],
    [''],
  ),

  education: () => lines(
    [''],
    ['  🎓  MSc Computer Engineering', 'success'],
    ['      Aarhus University · 2024 - 2026', 'output'],
    ['      Focus: Software Engineering & Machine Learning', 'output'],
    ['      Designing high-performance systems and scalable architectures.', 'output'],
    [''],
    ['  🎓  BSc Computer Engineering', 'success'],
    ['      Completed before relocating to Denmark.', 'output'],
    [''],
  ),

  skills: () => lines(
    [''],
    ['  ── LANGUAGES ────────────────────────────────────'],
    ['  Python · TypeScript · JavaScript · C++', 'success'],
    [''],
    ['  ── FRONTEND ──────────────────────────────────────'],
    ['  React · Vite · TailwindCSS · Electron', 'success'],
    [''],
    ['  ── BACKEND & DATA ────────────────────────────────'],
    ['  Node.js · FastAPI · Redis · Docker · PostgreSQL', 'success'],
    [''],
    ['  ── ML / AI ────────────────────────────────────────'],
    ['  PyTorch · FinBERT · Llama 3 · Streamlit · NLP', 'success'],
    [''],
    ['  ── INFRA & TOOLS ──────────────────────────────────'],
    ['  GitHub Actions · WebSockets · OpenLayers · GIS', 'success'],
    [''],
  ),

  projects: () => ({
    lines: [
      line(''),
      line('  ── FEATURED PROJECTS ──────────────────────────────', 'info'),
      line(''),
      ...PROJECTS.flatMap(p => [
        line(`  [${p.id}]  ${p.title}`, 'success'),
        line(`        ${p.desc}`, 'output'),
        line(`        Tags: ${p.tags.join(' · ')}`, 'info'),
        line(`        Repo: ${p.repo}`, 'link'),
        line(''),
      ]),
      line('  Type "project <id>" for details and ASCII preview.', 'info'),
    ]
  }),

  mission: () => lines(
    [''],
    ['  "I bridge the gap between complex backend architectures', 'success'],
    ['   and intelligent data processing — leveraging my engineering', 'success'],
    ['   background to build systems that are fast, reliable,', 'success'],
    ['   and genuinely useful."', 'success'],
    [''],
    ['  I don\'t just write code: I design systems.', 'output'],
    ['  Every architectural decision is a design choice.', 'output'],
    [''],
  ),

  contact: () => ({
    lines: [
      line(''),
      line('  ── CONTACTS & SOCIALS ──────────────────────────────', 'info'),
      line(''),
      line('  📧  Email     simonemicalizzi@pm.me', 'success'),
      line('      [click] mailto:simonemicalizzi@pm.me', 'link'),
      line(''),
      line('  🐙  GitHub    github.com/PandoraQS', 'success'),
      line('      [click] https://github.com/PandoraQS', 'link'),
      line(''),
      line('  💼  LinkedIn  linkedin.com/in/simone-micalizzi', 'success'),
      line('      [click] https://linkedin.com/in/simone-micalizzi', 'link'),
      line(''),
    ]
  }),

  quote: () => {
    const quotes = [
      { text: '"Simplicity is a prerequisite for reliability."', author: '— Edsger W. Dijkstra' },
      { text: '"Make it work, make it right, make it fast."', author: '— Kent Beck' },
      { text: '"The best code is no code at all."', author: '— Jeff Atwood' },
      { text: '"First, solve the problem. Then, write the code."', author: '— John Johnson' },
      { text: '"Any fool can write code that a computer can understand."', author: '— Martin Fowler' },
    ];
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    return lines(
      [''],
      [`  ${q.text}`, 'success'],
      [`  ${q.author}`, 'info'],
      [''],
    );
  },

  banner: () => ({
    lines: [{ id: crypto.randomUUID(), type: 'ascii', content: BANNER }]
  }),

  clear: () => ({ lines: [] }),

  gui: () => ({ lines: [] }),
};

export function resolveCommand(input: string): CommandResult {
  const [cmd, ...args] = input.trim().toLowerCase().split(/\s+/);

  if (cmd === 'project' && args[0]) {
    const id = args[0];
    const p = PROJECTS.find(pr => pr.id === id);
    if (!p) {
      return lines(
        [`  Project "${id}" not found. Type "projects" for the full list.`, 'error']
      );
    }
    return {
      lines: [
        line(''),
        line(`  ── PROJECT #${p.id}: ${p.title.toUpperCase()} ──`, 'success'),
        line(''),
        line(p.image, 'image'),
        line(''),
        line(`  ${p.desc}`, 'output'),
        line(''),
        line(`  Tags:  ${p.tags.join(' · ')}`, 'info'),
        line(`  Repo:  ${p.repo}`, 'link'),
        line(''),
      ]
    };
  }

  if (commands[cmd]) {
    return commands[cmd]();
  }

  return lines(
    [`  Command not found: "${input}". Type "help".`, 'error']
  );
}

export const commandKeys = Object.keys(commands);