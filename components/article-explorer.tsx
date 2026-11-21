"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ArticleCard from "@/components/article-card";
import type { Article } from "@/lib/articles";

export default function ArticleExplorer({
  articles,
}: {
  articles: Article[];
}) {
  const [category, setCategory] = useState("Everything");
  const [search, setSearch] = useState("");
  const categories = [
    "Everything",
    ...Array.from(new Set(articles.map((article) => article.category))),
  ];
  const visibleArticles = useMemo(() => {
    const query = search.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory =
        category === "Everything" || article.category === category;
      const matchesSearch =
        !query ||
        `${article.title} ${article.description} ${article.category}`
          .toLowerCase()
          .includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [articles, category, search]);

  return (
    <div className="archive-explorer">
      <div className="archive-controls">
        <div
          aria-label="Filter articles by category"
          className="category-tabs"
          role="group"
        >
          {categories.map((item) => (
            <button
              aria-pressed={category === item}
              className={`category-tab${category === item ? " active" : ""}`}
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search aria-hidden="true" size={16} />
          <input
            aria-label="Search articles"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search principles"
            type="search"
            value={search}
          />
        </label>
      </div>

      {visibleArticles.length > 0 ? (
        <div className="archive-grid">
          {visibleArticles.map((article, index) => (
            <ArticleCard
              key={article.slug}
              article={article}
              featured={index === 0}
            />
          ))}
        </div>
      ) : (
        <div className="archive-empty" role="status">
          <span className="section-eyebrow">NO PRINCIPLES FOUND</span>
          <p>Try another search or choose a different category.</p>
        </div>
      )}
    </div>
  );
}
