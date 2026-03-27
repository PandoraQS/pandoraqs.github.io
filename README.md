# Simone Micalizzi — Portfolio

Personal portfolio for Simone Micalizzi, Software Engineer and MSc Computer Engineering student at Aarhus University. Live at **[pandoraqs.github.io](https://pandoraqs.github.io)**.

---

## How the site works

The portfolio has two modes, switchable at any time via the **GUI / TERM** toggle in the top-right corner:

### GUI mode

A full visual portfolio with a cyberpunk dark aesthetic — animated CRT/WebGL background, Orbitron + Syne typography, and a responsive layout covering Hero, Fresco Strip, About, Projects, and a contact CTA.

The visual identity is built around **Trionfo della Morte** (1446, Palazzo Abbatellis, Palermo) — the medieval fresco is deconstructed into halftone canvas fragments scattered across the page, each section of the painting corresponding to a thematic section of the portfolio.

### Terminal mode

A fully interactive CLI that runs in the browser:

```bash
pandoraqs@portfolio:~$ help        # list all commands
pandoraqs@portfolio:~$ about       # who I am
pandoraqs@portfolio:~$ skills      # full tech stack
pandoraqs@portfolio:~$ projects    # list all projects
pandoraqs@portfolio:~$ project 3   # detail + ASCII image of project #3
pandoraqs@portfolio:~$ mission     # engineering philosophy
pandoraqs@portfolio:~$ contact     # email, GitHub, LinkedIn
pandoraqs@portfolio:~$ quote       # random dev quote
pandoraqs@portfolio:~$ gui         # switch back to visual mode
```

Supports **↑↓ command history** and **TAB autocomplete**.

---

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Fonts | Orbitron (display) · Syne (UI) · JetBrains Mono (mono) |
| Background | WebGL2 — custom GLSL fragment shader (CRT scanlines + phosphor glow + glitch) |
| Halftone engine | Canvas API — real-time pixel-to-dot conversion with per-dot animation |
| ASCII art | Canvas API — real-time pixel-to-character image conversion |
| Icons | Lucide React |
| Deployment | GitHub Actions → GitHub Pages |

---

## Visual concept — Trionfo della Morte

The site's visual identity is grounded in the **Trionfo della Morte** fresco (1446, anonymous Sicilian master, Palazzo Abbatellis, Palermo). The painting is progressively deconstructed across the page:

| Fragment | Section | Component |
| --- | --- | --- |
| Horse + skeleton rider | Hero | `DeathRider.tsx` |
| Supplicant crowd | Between Hero and About | `Afflicted.tsx` |
| *(more planned)* | *(future sections)* | — |

Each fragment is a live canvas with breathing dots, pulse radiale, glitch slice, and hover violet glow.

---

## Featured projects

### 1 — INTO-CPS Application

**Stack:** React · TypeScript · Electron · GitHub Actions · Maestro Engine
**Repo:** [INTO-CPS-Association/into-cps-application](https://github.com/INTO-CPS-Association/into-cps-application/)

### 2 — Crypto Arbitrage Stealth Engine

**Stack:** Python · Asyncio · Redis · Docker · WebSockets
**Repo:** [PandoraQS/Crypto-Arbitrage-Stealth](https://github.com/PandoraQS/Crypto-Arbitrage-Stealth)

### 3 — Sentiment Alpha AI

**Stack:** NLP · PyTorch · Llama 3 · FinBERT · Streamlit
**Repo:** [PandoraQS/News-Sentiment-Alpha](https://github.com/PandoraQS/News-Sentiment-Alpha)

### 4 — Behavioral Analytics Platform

**Stack:** Data Engineering · Pandas · SQL · Pydantic · ETL
**Repo:** [PandoraQS/ecommerce-behavior-analytics](https://github.com/PandoraQS/ecommerce-behavior-analytics)

### 5 — Aarhus Terrain Engine

**Stack:** React · TypeScript · OpenLayers · Vite · Overpass API
**Repo:** [PandoraQS/terrain-aarhus-demo](https://github.com/PandoraQS/terrain-aarhus-demo/)

---

## Project structure

```bash
src/
├── components/
│   ├── AboutCard.tsx        # About section cards
│   ├── AsciiImage.tsx       # Canvas image → ASCII converter
│   ├── CRTBackground.tsx    # WebGL2 CRT shader
│   ├── Afflicted.tsx        # Halftone — supplicant crowd
│   ├── CTA.tsx              # Call-to-action
│   ├── DeathRider.tsx       # Halftone — horse + skeleton rider
│   ├── Footer.tsx
│   ├── GoalCard.tsx         # Goal statement card
│   ├── Hero.tsx
│   ├── HudFrame.tsx         # HUD wrapper for DeathRider
│   ├── MissionCard.tsx
│   ├── ModeToggle.tsx       # GUI / TERM toggle
│   ├── ProjectCard.tsx
│   ├── Terminal.tsx
│   ├── TerminalLine.tsx
│   └── icons/
│       ├── GithubIcon.tsx
│       └── LinkedinIcon.tsx
├── constants/
│   ├── about.ts
│   ├── projects.ts
│   └── site.ts
├── hooks/
│   └── useHover.ts
├── terminal/
│   ├── ascii.ts
│   ├── commands.ts
│   ├── data.ts
│   ├── types.ts
│   └── useTerminal.ts
├── types/
│   └── index.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Deployment

```bash
.github/workflows/deploy.yml  →  build → deploy → pandoraqs.github.io
```
