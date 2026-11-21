import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Article } from "@/lib/articles";

export default function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <Link
      className={`story-card${featured ? " story-card-featured" : ""}`}
      href={`/stories/${article.slug}`}
    >
      <span
        aria-hidden="true"
        className="story-image"
        style={{ backgroundImage: `url("${article.cover}")` }}
      >
        <span className="story-open" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </span>
      <span className="story-copy">
        <span className="story-meta">
          <span>{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </span>
        <span className="story-title">{article.title}</span>
        <span className="story-description">{article.description}</span>
        <span className="story-read">
          Read article <ArrowDownRight aria-hidden="true" size={15} />
        </span>
      </span>
    </Link>
  );
}
