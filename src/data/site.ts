export type ContentSection = 'projects' | 'blog' | 'about';

export const contentNavigation = [
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'about', label: 'About', href: '/about' },
] as const satisfies ReadonlyArray<{
  id: ContentSection;
  label: string;
  href: string;
}>;

export const homeNavigation = [
  { id: 'home', label: 'Home', href: '/' },
  ...contentNavigation,
] as const;

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/tinywaves', external: true },
  { label: 'Email', href: 'mailto:dhzhme@gmail.com', external: false },
  { label: 'X/Twitter', href: 'https://x.com/tinywavesss', external: true },
] as const;

export const wechatId = 'dhzhme';
