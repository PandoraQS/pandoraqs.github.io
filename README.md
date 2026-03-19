# Simone Micalizzi — Portfolio

Personal portfolio for Simone Micalizzi, Software Engineer and MSc Computer Engineering student at Aarhus University. Live at **[pandoraqs.github.io](https://pandoraqs.github.io)**.

---

## How the site works

The portfolio has two modes, switchable at any time via the **GUI / TERM** toggle in the top-right corner:

### GUI mode

A full visual portfolio with a cyberpunk dark aesthetic — animated CRT/WebGL background, Orbitron + Syne typography, and a responsive layout covering Hero, About, Projects, and a contact CTA.

### Terminal mode

A fully interactive CLI that runs in the browser. Type commands to explore the portfolio as if you were in a real shell:

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

Supports **↑↓ command history** and **TAB autocomplete**. On load, the terminal renders a WebGL-processed ASCII art version of the profile photo alongside the boot sequence and SIMONE MICALIZZI banner.

---

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Fonts | Orbitron (display) · Syne (UI) · JetBrains Mono (mono) |
| Background | WebGL2 — custom GLSL fragment shader (CRT scanlines + glitch) |
| ASCII art | Canvas API — real-time pixel-to-character image conversion |
| Icons | Lucide React |
| Deployment | GitHub Actions → GitHub Pages |

---

## Featured projects

### 1 — INTO-CPS Application

Cross-platform desktop app built with **Electron + React** that modernizes co-simulation execution via the Maestro Engine. Features live graph rendering of simulation output and a fully automated CI/CD pipeline via GitHub Actions.
**Stack:** React · TypeScript · Electron · GitHub Actions · Maestro Engine
**Repo:** [INTO-CPS-Association/into-cps-application](https://github.com/INTO-CPS-Association/into-cps-application/)

---

### 2 — Crypto Arbitrage Stealth Engine

High-frequency real-time ETL pipeline that monitors arbitrage opportunities across crypto exchanges. Uses persistent WebSocket connections to ingest live order book data, Redis for sub-millisecond state management, and Docker microservices for horizontal scaling.
**Stack:** Python · Asyncio · Redis · Docker · WebSockets
**Repo:** [PandoraQS/Crypto-Arbitrage-Stealth](https://github.com/PandoraQS/Crypto-Arbitrage-Stealth)

---

### 3 — Sentiment Alpha AI

AI pipeline for real-time crypto market narrative tracking. Ingests financial news, runs **FinBERT** for sentiment scoring, correlates signals with live exchange spreads, and uses **Llama 3** for narrative summarization. Built as a Streamlit dashboard.
**Stack:** NLP · PyTorch · Llama 3 · FinBERT · Streamlit
**Repo:** [PandoraQS/News-Sentiment-Alpha](https://github.com/PandoraQS/News-Sentiment-Alpha)

---

### 4 — Behavioral Analytics Platform

End-to-end data engineering project processing complex e-commerce clickstream patterns. Identifies user anomalies and risk signals through ETL pipelines built with Pandas and validated with Pydantic schemas, with SQL-based reporting.
**Stack:** Data Engineering · Pandas · SQL · Pydantic · ETL
**Repo:** [PandoraQS/ecommerce-behavior-analytics](https://github.com/PandoraQS/ecommerce-behavior-analytics)

---

### 5 — Aarhus Terrain Engine

High-performance GIS web app mapping Aarhus's green infrastructure for flood risk analysis and urban water management. Built with **React + OpenLayers**, queries live OSM data via the Overpass API, and renders large geospatial datasets in the browser.
**Stack:** React · TypeScript · OpenLayers · Vite · Overpass API
**Repo:** [PandoraQS/terrain-aarhus-demo](https://github.com/PandoraQS/terrain-aarhus-demo/)

---

## Project structure

```bash
src/
├── components/
│   ├── AboutCard.tsx        # About section cards
│   ├── AsciiImage.tsx       # Canvas-based image → ASCII converter
│   ├── CRTBackground.tsx    # WebGL2 animated background shader
│   ├── MissionCard.tsx      # Mission statement card
│   ├── ModeToggle.tsx       # GUI / TERM toggle button
│   ├── Organisms.tsx        # Hero, CTA, Footer
│   ├── ProjectCard.tsx      # Project cards (featured + regular)
│   ├── Terminal.tsx         # Terminal UI shell
│   └── TerminalLine.tsx     # Individual terminal output line renderer
├── terminal/
│   ├── ascii.ts             # Banner ASCII art + boot lines
│   ├── commands.ts          # All CLI commands and their output
│   ├── types.ts             # Terminal type definitions
│   └── useTerminal.ts       # Terminal state hook (history, input, autocomplete)
├── types/
│   └── index.ts             # Shared TypeScript interfaces
├── App.tsx                  # Root — mode switching, layout, data
├── index.css                # Design system (CSS vars, animations, grid)
└── main.tsx
```

## Deployment

Automated via GitHub Actions on every push to `main`. The workflow builds with Vite and deploys the `dist/` folder to GitHub Pages.

```bash
.github/workflows/deploy.yml  →  build → deploy → pandoraqs.github.io
```
