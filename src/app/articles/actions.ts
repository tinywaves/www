'use server';

import { getAllArticles } from '#/lib/articles';

export const getMoreArticles = (page: number, limit = 10) => {
  const allArticles = getAllArticles();
  const start = (page - 1) * limit;
  const end = start + limit;
  return allArticles.slice(start, end);
};
