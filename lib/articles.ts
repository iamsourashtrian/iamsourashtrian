import "server-only";

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  eyebrow: string;
  cover: string;
  featured: boolean;
  listed: boolean;
  body: string;
};

const articlesDirectory = path.join(process.cwd(), "content", "articles");

export async function getArticles(): Promise<Article[]> {
  const files = (await readdir(articlesDirectory)).filter((file) =>
    file.endsWith(".mdx"),
  );

  const articles = await Promise.all(
    files.map(async (file) => {
      const source = await readFile(path.join(articlesDirectory, file), "utf8");
      const { content, data } = matter(source);
      const slug = file.slice(0, -".mdx".length);

      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        category: String(data.category ?? "Community"),
        date: String(data.date ?? ""),
        readTime: String(data.readTime ?? ""),
        eyebrow: String(data.eyebrow ?? ""),
        cover: String(data.cover ?? ""),
        featured: data.featured === true,
        listed: data.listed !== false,
        body: content,
      };
    }),
  );

  return articles.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug);
}
