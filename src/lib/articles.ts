import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface ArticleMeta {
  readingTime: string;

  slug: string;
  title: string;
  description: string;
  createdDate: Date;
  updatedDate: Date;
  author: string;
  tags: string[];
  categories: string[];

  keywords: string[];
  draft: boolean;
  toc: boolean;
  order?: number;
}

export interface Article extends ArticleMeta {
  content: string;
}

export const getAllArticles = (needContent?: boolean): ArticleMeta[] | Article[] => {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      const result = {
        readingTime: stats.text,

        slug: data.slug || '',
        title: data.title || '',
        description: data.description || '',
        createdDate: data.createdDate ? new Date(data.createdDate) : new Date(0),
        updatedDate: data.updatedDate ? new Date(data.updatedDate) : new Date(0),
        author: data.author || '',
        tags: data.tags || [],
        categories: data.categories || [],
        keywords: data.keywords || [],
        draft: data.draft || true,
        toc: data.toc || true,
        order: data.order || 1,
      };

      if (needContent) {
        return { ...result, content } as Article;
      }

      return result as ArticleMeta;
    })
    .sort((a, b) => (new Date(a.createdDate) > new Date(b.createdDate) ? -1 : 1));

  return articles;
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  const allArticles = getAllArticles(true) as Article[];
  const article = allArticles.find((article) => article.slug === slug);

  return article;
};
