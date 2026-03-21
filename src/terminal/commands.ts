import type { CommandMap, CommandResult, TerminalLine } from './types';
import { BANNER } from './ascii';
import { TERMINAL_PROJECTS, QUOTES } from './data';

const line = (content: string, type: TerminalLine['type'] = 'output'): TerminalLine => ({
  id: crypto.randomUUID(),
  content,
  type,
});

const lines = (...args: [string, TerminalLine['type']?][]): CommandResult => ({
  lines: args.map(([c, t]) => line(c, t)),
});

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
      ...TERMINAL_PROJECTS.flatMap(p => [
        line(`  [${p.id}]  ${p.title}`, 'success'),
        line(`        ${p.desc}`, 'output'),
        line(`        Tags: ${p.tags.join(' · ')}`, 'info'),
        line(`        Repo: ${p.repo}`, 'link'),
        line(''),
      ]),
      line('  Type "project <id>" for details and ASCII preview.', 'info'),
    ],
  }),

  mission: () => lines(
    [''],
    ['  "I bridge the gap between complex backend architectures', 'success'],
    ['   and intelligent data processing — leveraging my engineering', 'success'],
    ['   background to build systems that are fast, reliable,', 'success'],
    ['   and genuinely useful."', 'success'],
    [''],
    ["  I don't just write code: I design systems.", 'output'],
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
    ],
  }),

  quote: () => {
    const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    return lines(
      [''],
      [`  ${q.text}`, 'success'],
      [`  ${q.author}`, 'info'],
      [''],
    );
  },

  banner: () => ({
    lines: [{ id: crypto.randomUUID(), type: 'ascii', content: BANNER }],
  }),

  clear: () => ({ lines: [] }),

  gui: () => ({ lines: [] }),
};

export function resolveCommand(input: string): CommandResult {
  const [cmd, ...args] = input.trim().toLowerCase().split(/\s+/);

  if (cmd === 'project' && args[0]) {
    const p = TERMINAL_PROJECTS.find(pr => pr.id === args[0]);
    if (!p) {
      return lines([`  Project "${args[0]}" not found. Type "projects" for the full list.`, 'error']);
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
      ],
    };
  }

  if (commands[cmd]) return commands[cmd]();

  return lines([`  Command not found: "${input}". Type "help".`, 'error']);
}

export const commandKeys = Object.keys(commands);
