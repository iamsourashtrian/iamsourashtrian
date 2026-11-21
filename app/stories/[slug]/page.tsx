import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import remarkGfm from "remark-gfm";
import { getMDXComponents } from "@/components/mdx-components";
import { getArticle, getArticles } from "@/lib/articles";

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.cover],
      type: "article",
    },
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <article>
      <header className="story-header">
        <Link className="back-link" href="/discover#archive">
          <ArrowLeft size={15} /> BACK TO OUR PRINCIPLES
        </Link>
        <div className="story-header-inner">
          <span className="feature-eyebrow">{article.eyebrow}</span>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <div className="story-header-meta">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.date}>
              {new Date(`${article.date}T12:00:00`).toLocaleDateString(
                "en",
                { month: "long", day: "numeric", year: "numeric" },
              )}
            </time>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </header>
      <div
        aria-hidden="true"
        className="story-cover"
        style={{ backgroundImage: `url("${article.cover}")` }}
      />
      <div className="story-body">
        <div className="prose prose-stone prose-lg">
          <MDXRemote
            components={getMDXComponents()}
            source={article.body}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
        <aside className="story-end">
          <span>✳</span>
          <p>A piece of a much larger story.</p>
          <Link href="/discover#archive">
            Explore more principles <ArrowUpRight size={15} />
          </Link>
        </aside>
      </div>
    </article>
  );
}
