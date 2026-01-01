import Link from 'next/link';

export default function ArticleBackLink() {
  return (
    <Link
      href="/articles"
      className="text-foreground/50 hover:text-foreground mb-8 inline-block text-sm transition-colors"
    >
      ← Back to Articles
    </Link>
  );
}
