export interface Project {
  title: string;
  summary: string;
  technologies: readonly string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export const projects = [
  {
    title: '@dhzh/eslint-config',
    summary: 'An opinionated ESLint flat config for TypeScript-first projects.',
    technologies: ['TypeScript', 'ESLint', 'Node.js'],
    liveUrl: 'https://eslint.tinywaves.site/',
    sourceUrl: 'https://github.com/tinywaves/eslint-config',
  },
  {
    title: 'starter-typescript',
    summary: 'A minimal, opinionated starter for building and publishing TypeScript libraries.',
    technologies: ['TypeScript', 'tsdown', 'Vitest'],
    sourceUrl: 'https://github.com/tinywaves/starter-typescript',
  },
] satisfies Project[];
