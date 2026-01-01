'use server';

import { getAllArticles } from '#/lib/articles';

// eslint-disable-next-line @typescript-eslint/require-await
export const getMoreArticles = async (page: number, limit = 10) => {
  const allArticles = getAllArticles();
  const start = (page - 1) * limit;
  const end = start + limit;
  return allArticles.slice(start, end);
};
