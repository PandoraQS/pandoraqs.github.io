import { GraduationCap, Code2, BrainCircuit, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface AboutEntry {
  index: string;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  details?: string;
  description: string;
  variant?: 'default' | 'wide' | 'tall' | 'accent';
  grid: string;
}

export const ABOUT_CARDS: AboutEntry[] = [
  {
    index: '01',
    icon: GraduationCap,
    title: 'Education',
    subtitle: 'MSc Computer Engineering',
    details: 'Aarhus University · 2024 — 2026',
    description: 'Focus on Software Engineering & ML. Designing high-performance systems and scalable architectures.',
    variant: 'tall',
    grid: '1 / 6',
  },
  {
    index: '02',
    icon: Code2,
    title: 'Software Engineering',
    description: 'Expertise in Distributed Systems, Real-Time DSP, and Cross-platform development with Electron and React. High-performance specialist.',
    grid: '6 / 13',
  },
  {
    index: '03',
    icon: BrainCircuit,
    title: 'ML & Data',
    description: 'Specialist in NLP (FinBERT), ETL Pipelines, and Redis. Transforming noise into actionable real-time market intelligence.',
    grid: '1 / 7',
  },
  {
    index: '04',
    icon: Cpu,
    title: 'Systems',
    description: 'High-performance requirements, real-time constraints, distributed architectures. Building systems that scale under pressure.',
    grid: '7 / 13',
  },
];
