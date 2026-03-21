export interface TerminalProject {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  repo: string;
  image: string;
}

export const TERMINAL_PROJECTS: TerminalProject[] = [
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

export const QUOTES = [
  { text: '"Simplicity is a prerequisite for reliability."', author: '— Edsger W. Dijkstra' },
  { text: '"Make it work, make it right, make it fast."', author: '— Kent Beck' },
  { text: '"The best code is no code at all."', author: '— Jeff Atwood' },
  { text: '"First, solve the problem. Then, write the code."', author: '— John Johnson' },
  { text: '"Any fool can write code that a computer can understand."', author: '— Martin Fowler' },
];
