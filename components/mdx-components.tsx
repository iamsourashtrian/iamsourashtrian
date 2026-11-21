import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

export function ReferenceNote({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="reference-note" aria-label={title}>
      <span className="reference-note-label">FROM THE ARCHIVE</span>
      <h3>{title}</h3>
      <div>{children}</div>
    </aside>
  );
}

export function getMDXComponents(): MDXComponents {
  return {
    ReferenceNote,
    table: (props) => (
      <div className="table-scroll">
        <table {...props} />
      </div>
    ),
  };
}
