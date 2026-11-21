# I am Sourashtrian

A community archive for Sourashtra stories, language, history, and living
traditions. The site uses Next.js App Router, React, TypeScript, Tailwind CSS,
and MDX. Articles are read from `content/articles/` and rendered as pages and
archive listings.

## Getting started

### Requirements

- Node.js 20 LTS (recommended)
- npm
- Git

### Run locally

```bash
git clone https://github.com/iamsourashtrian/iamsourashtrian.git
cd iamsourashtrian
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To check a production
build locally, run:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Project structure

| Path | Purpose |
| --- | --- |
| `app/` | Next.js routes and page layouts |
| `app/stories/[slug]/` | Individual story pages |
| `app/discover/` | Story discovery page |
| `app/books/` | PDF download/view route |
| `components/` | Shared UI components |
| `content/articles/` | Community stories in MDX |
| `data/member-achievements.ts` | Member achievement entries |
| `lib/articles.ts` | Article metadata and loading helpers |
| `public/images/` | Images served directly by the site |

The `/books` route expects the file `Books/Sourashtra Gotra Kando .pdf` at the
repository root. Keep that file in place if the route should be available in
production.

## Contributing

For code changes, make a focused branch, test locally, and open a pull request.
The branch plan used by the site's technical guide is `feature/*` to `develop`
to `main`; confirm the repository's current branch settings with the
maintainer before opening a pull request. Only changes merged to the branch
configured for production in Vercel should update the live site.

Example:

```bash
git switch develop
git pull origin develop
git switch -c feature/short-description

# Make and test your change, then:
git add .
git commit -m "Describe the change"
git push -u origin feature/short-description
```

Open a pull request on GitHub and select the agreed base branch. Do not commit
`.env` files, credentials, `node_modules/`, or `.next/`.

### Writing a story

Add a `.mdx` file to `content/articles/`. The filename becomes the story URL
slug. Include frontmatter like this:

```yaml
---
title: "A story from the community"
description: "A short introduction."
category: "Language & letters"
date: "2026-10-05"
readTime: "5 min read"
eyebrow: "A living archive"
cover: "https://example.com/image.jpg"
featured: false
---

Write the story here using Markdown.
```

`title`, `description`, `category`, `date`, `readTime`, `eyebrow`, and `cover`
describe the story. Set `featured: true` to select the homepage feature and
`listed: false` to keep a story available by its direct URL without including
it in the public archive. Stories can use GitHub-flavored Markdown and the
`ReferenceNote` component for source notes.

### Publishing a member achievement

Add an entry to `memberAchievements` in
`data/member-achievements.ts`, following `memberAchievementTemplate`. Put
display pictures in `public/images/contributors/` and use the corresponding
public path for `image`. Only publish someone's image or contact details with
their explicit permission; contact fields and `url` are optional.

## Push the code to GitHub

1. Sign in to GitHub and create an empty repository (or ask the maintainer for
   access to the existing repository). If creating a repository, do not
   initialize it with a README, license, or `.gitignore` when this project
   already has those files.
2. In a terminal at the project folder, check the remote:

   ```bash
   git remote -v
   ```

3. If there is no `origin`, add the repository URL:

   ```bash
   git remote add origin https://github.com/OWNER/REPOSITORY.git
   ```

4. Commit and push the project. For a new, empty GitHub repository:

   ```bash
   git add .
   git commit -m "Initial project setup"
   git branch -M main
   git push -u origin main
   ```

   If the GitHub repository already has commits, first clone that repository
   and add the project files, or pull/reconcile its history before pushing.
   Do not force-push over existing work.

GitHub may ask you to authenticate using a browser or a personal access token.
Never put a token in the repository or a command that will be saved in shell
history.