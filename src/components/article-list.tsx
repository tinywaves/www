'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { getMoreArticles } from '#/app/articles/actions';
import { Button } from '#/components/ui/button';
import { FormattedDate } from '#/components/formatted-date';
import type { ArticleMeta } from '#/lib/articles';

const ITEMS_PER_PAGE = 10;

export function ArticleList({ initialArticles }: { initialArticles: ArticleMeta[] }) {
  const [articles, setArticles] = useState<ArticleMeta[]>(initialArticles);
  const [page, setPage] = useState(Math.ceil(initialArticles.length / ITEMS_PER_PAGE));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialArticles.length >= ITEMS_PER_PAGE);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) {
      return;
    }
    setLoading(true);
    const nextPage = page + 1;
    const newArticles = await getMoreArticles(nextPage, ITEMS_PER_PAGE);
    if (newArticles.length < ITEMS_PER_PAGE) {
      setHasMore(false);
    }
    if (newArticles.length > 0) {
      setArticles((prev) => {
        const existingSlugs = new Set(prev.map((a) => a.slug));
        const uniqueNewArticles = newArticles.filter((a) => !existingSlugs.has(a.slug));
        return [...prev, ...uniqueNewArticles];
      });
      setPage(nextPage);
    }
    setLoading(false);
  }, [page, hasMore, loading]);

  return (
    <div className="space-y-8">
      {articles.map((article) => (
        <article key={article.slug} className="group">
          <Link href={`/articles/${article.slug}`} className="block">
            <h2 className="text-xl font-medium tracking-tight transition-opacity group-hover:opacity-70">
              {article.title}
            </h2>
            <div className="text-foreground/60 mt-1 text-sm">
              <FormattedDate date={article.createdDate} showTooltip={false} />
              {' · '}
              {article.readingTime}
            </div>
            {article.description && (
              <p className="text-foreground/70 mt-2">{article.description}</p>
            )}
          </Link>
        </article>
      ))}
      {hasMore && (
        <div className="flex justify-center py-8">
          <Button variant="outline" size="sm" onClick={loadMore} disabled={loading}>
            {loading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      )}
      {!hasMore && articles.length > 0 && (
        <p className="text-foreground/60 py-8 text-center text-sm">
          No more articles.
        </p>
      )}
    </div>
  );
}
