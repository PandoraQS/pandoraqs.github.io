import type { ReactNode } from 'react';

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  icon: ReactNode;
  repo: string;
  image: string;
}