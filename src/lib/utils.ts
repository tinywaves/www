import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const resolveImageSrc = (src: string | undefined): string | undefined => {
  if (!src) {
    return src;
  }

  if (['/', 'http://', 'https://', 'data:'].some((prefix) => src.startsWith(prefix))) {
    return src;
  }

  const normalizedSrc = src.startsWith('./') ? src.slice(2) : src;
  return `/api/attachments/${normalizedSrc}`;
};
