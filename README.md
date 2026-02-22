# Simone Micalizzi - Software Engineer Portfolio

Personal professional portfolio showcasing advanced engineering projects in **Machine Learning**, **Real-Time Data Pipelines**, and **Audio Engineering**.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (Cyberpunk Pop Theme)
- **Icons**: Lucide-React & Simple Icons
- **Deployment**: GitHub Actions (CI/CD)

## Architecture

The project is built following **Atomic Design** principles to ensure maximum maintainability and scalability:

- **Atoms**: Base UI components (Buttons, Tags, Icons) in `src/components/ui/Atoms.tsx`.
- **Molecules**: Combined functional units like `AboutCard`, `MissionCard`, and `ProjectCard`.
- **Organisms**: Complex page sections like `Hero`, `CTA`, and `Footer`.

## Projects Highlights

- **Crypto Arbitrage Stealth Engine**: Real-time ETL pipeline using WebSockets and Redis.
- **Sentiment Alpha AI**: NLP pipeline for market narrative tracking using FinBERT and Llama 3.
- **Nightcore Desktop Player**: Cross-platform audio engine for real-time DSP.
- **Behavioral Analytics**: Clickstream pattern processing for risk detection.

## Deployment

Automated deployment pipeline configured via GitHub Actions in .github/workflows/deploy.yml. The site is live at [pandoraqs.github.io](pandoraqs.github.io).
