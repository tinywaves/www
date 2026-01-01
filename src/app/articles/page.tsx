import { getAllArticles } from '#/lib/articles';
import { ArticleList } from '#/components/article-list';

export default function Page() {
  const allArticles = getAllArticles();
  const initialArticles = allArticles.slice(0, 10);

  if (allArticles.length === 0) {
    return (
      <main className="py-16">
        <h1 className="mb-8 text-4xl font-medium tracking-tight">Articles</h1>
        <p className="text-foreground/60">No articles yet.</p>
      </main>
    );
  }

  return (
    <main className="py-16">
      <h1 className="mb-8 text-4xl font-medium tracking-tight">Articles</h1>
      <ArticleList initialArticles={initialArticles} />
    </main>
  );
}
