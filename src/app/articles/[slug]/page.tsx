import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticles } from '#/lib/articles';
import ArticleBackLink from '#/components/article-back-link';
import FormattedDate from '#/components/formatted-date';
import ContentRender from '#/components/content-render';

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => getAllArticles().map((article) => ({ slug: article.slug }));

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.description,
  };
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="py-16">
      <ArticleBackLink />
      <header className="mb-8">
        <h1 className="text-4xl font-medium tracking-tight">{article.title}</h1>
        <div className="text-foreground/60 mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {article.author && (
            <span className="text-foreground font-medium">{article.author}</span>
          )}
          <span>
            <FormattedDate date={article.createdDate} />
          </span>
          {article.updatedDate.getTime() !== article.createdDate.getTime() && (
            <span className="text-foreground/40">
              <span>(Updated: </span>
              <FormattedDate date={article.updatedDate} />
              <span>)</span>
            </span>
          )}
          <span>{article.readingTime}</span>
        </div>
        {(article.tags.length > 0 || article.categories.length > 0) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {article.categories.map((category) => (
              <span
                key={category}
                className="bg-foreground/10 text-foreground/80 rounded px-2 py-0.5 text-xs font-medium"
              >
                {category}
              </span>
            ))}
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="bg-foreground/5 text-foreground/60 rounded px-2 py-0.5 text-xs"
              >
                #
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <article className="prose-custom">
        <ContentRender source={article.content} />
      </article>
    </main>
  );
}
