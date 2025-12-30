'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { cn } from '#/lib/utils';
import ThemeToggle from './theme-toggle';

const navItems = [
  { href: '/', label: 'Index' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      className="flex items-center justify-between py-8"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Link
        href="/"
        className="text-2xl font-medium tracking-tight transition-opacity hover:opacity-70"
      >
        tinywaves
      </Link>
      <nav className="flex items-center gap-8">
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative tracking-wide"
          >
            <motion.span
              className={cn(
                'block transition-colors duration-200',
                pathname === item.href
                  ? 'text-foreground'
                  : 'text-foreground/50 hover:text-foreground',
              )}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            >
              {item.label}
            </motion.span>
            {pathname === item.href && (
              <motion.span
                className="bg-foreground absolute -bottom-1 left-0 h-px w-full"
                layoutId="nav-underline"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </motion.header>
  );
}
