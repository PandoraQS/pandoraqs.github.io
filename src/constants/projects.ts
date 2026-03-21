export interface ProjectData {
  title: string;
  desc: string;
  tags: string[];
  repo: string;
  image: string;
}

export const PROJECTS: ProjectData[] = [
  {
    title: 'INTO-CPS Application',
    desc: 'A cross-platform desktop app built with Electron and React that modernizes co-simulation execution via the Maestro Engine, featuring live graph rendering and automated CI/CD pipelines.',
    tags: ['React', 'TypeScript', 'Electron', 'GitHub Actions', 'Maestro Engine'],
    repo: 'https://github.com/INTO-CPS-Association/into-cps-application/',
    image: '/assets/projects/intocps.png',
  },
  {
    title: 'Crypto Arbitrage Stealth Engine',
    desc: 'A high-frequency Real-Time ETL pipeline monitoring arbitrage opportunities across exchanges using WebSockets, Redis, and Docker microservices.',
    tags: ['Python', 'Asyncio', 'Redis', 'Docker', 'WebSockets'],
    repo: 'https://github.com/PandoraQS/Crypto-Arbitrage-Stealth',
    image: '/assets/projects/arbitrage.png',
  },
  {
    title: 'Sentiment Alpha AI',
    desc: 'AI pipeline for real-time crypto market narrative tracking. Correlates FinBERT sentiment analysis with live exchange spreads via Llama 3.',
    tags: ['NLP', 'PyTorch', 'Llama 3', 'FinBERT', 'Streamlit'],
    repo: 'https://github.com/PandoraQS/News-Sentiment-Alpha',
    image: '/assets/projects/sentiment.png',
  },
  {
    title: 'Behavioral Analytics Platform',
    desc: 'End-to-end data engineering project for processing complex clickstream patterns to identify user anomalies and risk insights.',
    tags: ['Data Engineering', 'Pandas', 'SQL', 'Pydantic', 'ETL'],
    repo: 'https://github.com/PandoraQS/ecommerce-behavior-analytics',
    image: '/assets/projects/analytics.png',
  },
  {
    title: 'Aarhus Terrain Engine',
    desc: 'A high-performance GIS web app built with React and OpenLayers that maps and analyzes Aarhus green infrastructure for flood risk and urban water management.',
    tags: ['React', 'TypeScript', 'OpenLayers', 'Vite', 'Overpass API'],
    repo: 'https://github.com/PandoraQS/terrain-aarhus-demo/',
    image: '/assets/projects/terrain-engine.png',
  },
];