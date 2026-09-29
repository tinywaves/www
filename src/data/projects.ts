export interface Project {
  title: string;
  role: 'Maintainer' | 'Contributor';
  summary: string;
  technologies: readonly string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export const projects = [
  {
    title: '@dhzh/eslint-config',
    role: 'Maintainer',
    summary: 'An opinionated ESLint flat config for TypeScript-first projects.',
    technologies: ['TypeScript', 'ESLint', 'Node.js'],
    liveUrl: 'https://eslint.tinywaves.site/',
    sourceUrl: 'https://github.com/tinywaves/eslint-config',
  },
  {
    title: 'starter-typescript',
    role: 'Maintainer',
    summary:
      'A minimal, opinionated starter for building and publishing TypeScript libraries.',
    technologies: ['TypeScript', 'tsdown', 'Vitest'],
    sourceUrl: 'https://github.com/tinywaves/starter-typescript',
  },
  {
    title: 'magpie',
    role: 'Contributor',
    summary:
      'A menu bar app for managing AI agents and their models in one place.',
    technologies: ['Go', 'Wails', 'JavaScript'],
    liveUrl: 'https://usemagpie.ai',
    sourceUrl: 'https://github.com/yetone/magpie',
  },
  {
    title: 'www',
    role: 'Maintainer',
    summary: 'Personal website built with Astro and deployed on Cloudflare.',
    technologies: ['Astro', 'TypeScript', 'Cloudflare'],
    liveUrl: 'https://www.tinywaves.site/',
    sourceUrl: 'https://github.com/tinywaves/www',
  },
] satisfies Project[];
