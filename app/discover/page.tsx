import type { Metadata } from "next";
import ArticleExplorer from "@/components/article-explorer";
import { getArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Our principles",
  description:
    "Browse Sourashtra community principles through articles on history, language, family traditions, and community life.",
};

export default async function DiscoverPage() {
  const articles = (await getArticles()).filter((article) => article.listed);

  return (
    <section
      aria-labelledby="archive-title"
      className="archive-section discover-archive-section"
      id="archive"
    >
      <div className="archive-heading">
        <div>
          <div className="intro-marker archive-marker">
            <span className="section-index">DISCOVER</span>
            <span className="marker-line" />
            <span className="section-eyebrow">
              KNOWLEDGE FOR OUR COMMUNITY
            </span>
          </div>
          <h1 id="archive-title">
            Our <em>Principles</em>
          </h1>
          <p className="discover-page-intro">
            Browse articles on Sourashtra history, language, family traditions,
            and community life.
          </p>
        </div>
        <span className="archive-count">
          {String(articles.length).padStart(2, "0")} PRINCIPLES TO EXPLORE
        </span>
      </div>
      <ArticleExplorer articles={articles} />
    </section>
  );
}
