import type { CommandMap, CommandResult, TerminalLine } from './types';
import { BANNER } from './ascii';
import { TERMINAL_PROJECTS, QUOTES } from './data';
import type { SortAlgorithm } from './sorting';
import { SORT_ALGOS, SORT_INFO, parseNumberArgs, runSort } from './sorting';

const line = (content: string, type: TerminalLine['type'] = 'output'): TerminalLine => ({
  id: crypto.randomUUID(),
  content,
  type,
});

const lines = (...args: [string, TerminalLine['type']?][]): CommandResult => ({
  lines: args.map(([c, t]) => line(c, t)),
});

let ctfStage = 0;

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
    ['  sorting      → Sorting commands quick help', 'success'],
    ['  sort ...     → Run sorting algorithms (add "expand" for steps)', 'success'],
    ['  contact      → Contact info & socials', 'success'],
    ['  mission      → My engineering philosophy', 'success'],
    ['  quote        → Random dev quote', 'success'],
    ['  banner       → Show ASCII art', 'success'],
    ['  clear        → Clear the terminal', 'success'],
    ['  ctf          → [ RESTRICTED ]', 'error'],
    [''],
    ['  Use ↑ ↓ to navigate command history.', 'info'],
    ['  Use TAB to autocomplete.', 'info'],
  ),

  sorting: () => lines(
    [''],
    ['  ── SORTING LAB ───────────────────────────────────', 'info'],
    ['  Available algorithms:', 'output'],
    ['    bubble     → O(n^2)', 'success'],
    ['    selection  → O(n^2)', 'success'],
    ['    insertion  → O(n^2)', 'success'],
    ['    shell      → O(n log^2 n) typical', 'success'],
    ['    quick      → O(n log n) avg', 'success'],
    ['    merge      → O(n log n)', 'success'],
    ['    heap       → O(n log n)', 'success'],
    ['    counting   → O(n + k) (integers, small range)', 'success'],
    ['    radix      → O(d·(n + b)) (integers)', 'success'],
    ['    bucket     → O(n + k) avg', 'success'],
    [''],
    ['  Usage:', 'output'],
    ['    sort <algo> <n1 n2 n3 ...>', 'success'],
    ['    sort <algo> <n1,n2,n3,...>', 'success'],
    ['    sort <algo> <numbers...> expand', 'success'],
    [''],
    ['  Examples:', 'output'],
    ['    sort quick 8 3 2 11 4', 'success'],
    ['    sort shell 12 9 3 25 14 7', 'success'],
    ['    sort merge 17 5 9 1 3', 'success'],
    ['    sort counting 9 1 4 1 3 2', 'success'],
    ['    sort radix 170 45 75 90 2 24 802 66', 'success'],
    ['    sort bucket 0.78 0.12 0.91 0.33 0.56', 'success'],
    ['    sort bubble 9 1 5 2 7 expand', 'success'],
    ['    sort bubble 9,1,5,2,7', 'success'],
    [''],
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
      line('       Email     simonemicalizzi@pm.me', 'success'),
      line('      [click] mailto:simonemicalizzi@pm.me', 'link'),
      line(''),
      line('      GitHub    github.com/PandoraQS', 'success'),
      line('      [click] https://github.com/PandoraQS', 'link'),
      line(''),
      line('      LinkedIn  linkedin.com/in/simone-micalizzi', 'success'),
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

  // ── CTF ────────────────────────────────────────────────────────────────
  ctf: () => {
    ctfStage = 1;
    return lines(
      [''],
      ['  [SYS] Initializing restricted session...', 'error'],
      ['  [SYS] Clearance level: UNKNOWN', 'error'],
      ['  [SYS] Anomaly detected in /var/log/audit.log', 'error'],
      [''],
      ['  A flag has been staged somewhere in this environment.', 'info'],
      ['  Recover it.', 'info'],
      [''],
      ['  /home/visitor/ contains:', 'output'],
      ['    readme.txt    audit.log    .shadow', 'output'],
      [''],
      ['  Type  cat <filename>  to inspect a file.', 'info'],
      [''],
    );
  },

  unlock: () => {
    if (ctfStage < 2) {
      return lines(
        ['  [ERR] unlock: no active session. Run ctf first.', 'error'],
      );
    }
    ctfStage = 3;
    return lines(
      [''],
      ['  [SYS] Decrypting .shadow...', 'info'],
      ['  [SYS] Layer 1: ROT13 — done', 'output'],
      ['  [SYS] Layer 2: awaiting passphrase', 'output'],
      [''],
      ['  Recovered fragment:', 'output'],
      ['  cnaqben', 'error'],
      [''],
      ['  Submit:  flag <passphrase>', 'info'],
      [''],
    );
  },

  clear: () => ({ lines: [] }),

  gui: () => ({ lines: [] }),
};

// ── CTF file system ─────────────────────────────────────────────────────

function handleCat(filename: string): CommandResult {
  if (ctfStage < 1) {
    return lines(['  [ERR] ls: permission denied.', 'error']);
  }

  if (filename === 'readme.txt') {
    return lines(
      [''],
      ['  ── readme.txt ───────────────────────────────────', 'info'],
      ['  This system has been flagged for a security audit.', 'output'],
      ['  An access token was embedded by the previous operator.', 'output'],
      ['  It was encoded and split across two files.', 'output'],
      [''],
      ['  audit.log contains the first clue.', 'output'],
      ['  .shadow is locked. Find the key first.', 'output'],
      [''],
    );
  }

  if (filename === 'audit.log') {
    ctfStage = Math.max(ctfStage, 2);
    return lines(
      [''],
      ['  ── audit.log ────────────────────────────────────', 'info'],
      ['  [2026-04-17 03:12:41] session opened for user visitor', 'output'],
      ['  [2026-04-17 03:12:55] file .shadow written — encrypted', 'output'],
      ['  [2026-04-17 03:13:02] encoded key stored in log header', 'output'],
      ['  [2026-04-17 03:13:02] key: dW5sb2Nr', 'error'],
      ['  [2026-04-17 03:13:09] session closed', 'output'],
      [''],
    );
  }

  if (filename === '.shadow') {
    if (ctfStage < 2) {
      return lines(
        ['  [ERR] .shadow: permission denied. Find the key first.', 'error'],
      );
    }
    return lines(
      ['  [ERR] .shadow: still encrypted. Run: unlock', 'error'],
    );
  }

  return lines([`  [ERR] ls: ${filename}: no such file.`, 'error']);
}

function handleFlag(answer: string | undefined): CommandResult {
  if (ctfStage < 3) {
    return lines(
      ['  [ERR] flag: no active challenge. Run ctf to begin.', 'error'],
    );
  }
  if (answer === 'pandora') {
    ctfStage = 4;
    return lines(
      [''],
      ['  [SYS] Verifying passphrase...', 'info'],
      ['  [SYS] Passphrase accepted.', 'success'],
      [''],
      ['  FLAG{p4nd0r4_w4s_h3r3}', 'success'],
      [''],
      ['  /var/log/audit.log — case closed.', 'info'],
      [''],
    );
  }
  return lines(
    ['  [ERR] flag: wrong passphrase.', 'error'],
    ['  [SYS] Hint: the fragment in .shadow is ROT13-encoded.', 'info'],
  );
}

// ── Resolver ────────────────────────────────────────────────────────────

export function resolveCommand(input: string): CommandResult {
  const [cmd, ...args] = input.trim().toLowerCase().split(/\s+/);

  if (cmd === 'sort') {
    const algoArg = args[0] as SortAlgorithm | undefined;
    if (!algoArg || !SORT_ALGOS.includes(algoArg)) {
      return lines(
        ['  Invalid or missing algorithm.', 'error'],
        [`  Use: sort <${SORT_ALGOS.join('|')}> <numbers...> [expand]`, 'info'],
        ['  Examples: sort quick 5 2 9 1 7 · sort bubble 9 1 5 2 expand', 'info'],
      );
    }

    const expand = args.includes('expand');
    const numericArgs = args.slice(1).filter(arg => arg !== 'expand');
    const values = parseNumberArgs(numericArgs);
    const sortResult = runSort(algoArg, values, { expand });

    if (!sortResult.ok) {
      return lines(
        [`  ${sortResult.error}`, 'error'],
        [sortResult.hint ?? '  Example: sort merge 10 4 6 1', 'info'],
      );
    }

    const info = SORT_INFO[algoArg];

    const outputLines: TerminalLine[] = [
      line(''),
      line(`  ── SORT RESULT (${algoArg.toUpperCase()}) ──`, 'success'),
      line(`  Input:   ${values.join(' · ')}`, 'output'),
      line(`  Output:  ${sortResult.result.sorted.join(' · ')}`, 'success'),
      line(`  Ops:     ${sortResult.result.steps}`, 'info'),
      line(`  Time:    ${info.complexity}`, 'info'),
      line(`  Notes:   ${info.description}${info.note ? ` ${info.note}` : ''}`, 'info'),
    ];

    if (expand) {
      outputLines.push(line('  Trace:', 'info'));
      const trace = sortResult.result.trace ?? [];
      if (!trace.length) {
        outputLines.push(line('    (no trace available)', 'output'));
      } else {
        trace.forEach((step, index) => {
          outputLines.push(line(`    ${String(index + 1).padStart(2, '0')}. ${step}`, 'output'));
        });
      }
    }

    outputLines.push(line(''));
    return { lines: outputLines };
  }

  if (cmd === 'cat' && args[0]) return handleCat(args[0]);

  if (cmd === 'flag') return handleFlag(args[0]?.toLowerCase());

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

export const commandKeys = [...Object.keys(commands), 'sort', 'project', 'cat', 'flag', 'unlock'];