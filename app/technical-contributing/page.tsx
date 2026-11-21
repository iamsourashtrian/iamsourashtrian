import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  ExternalLink,
  GitBranch,
  GitFork,
  GitPullRequest,
  Info,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technical contributing",
  description:
    "A beginner-friendly guide to contributing code, opening GitHub pull requests, managing branches, and preparing this website for deployment.",
};

const branches = [
  {
    name: "main",
    label: "Production",
    description:
      "The stable version of the website. Only merge reviewed and tested changes here; configure Vercel to deploy this branch to the live site.",
  },
  {
    name: "develop",
    label: "Integration",
    description:
      "The shared place to combine finished features and check that they work together before a production release.",
  },
  {
    name: "feature/*",
    label: "New work",
    description:
      "A short-lived branch for one change, such as feature/language-search. Create it from develop and open a pull request back to develop.",
  },
  {
    name: "release/*",
    label: "Optional release",
    description:
      "A temporary branch for final checks before a release, such as release/1.2.0. Small teams can skip this and merge develop to main when ready.",
  },
];

const tools = [
  {
    icon: GitPullRequest,
    title: "GitHub pull requests and branch rules",
    description:
      "Use pull requests for review. Protect main from direct pushes and force-pushes, require checks to pass, and require an approval when another reviewer is available.",
  },
  {
    icon: Workflow,
    title: "GitHub Actions for checks",
    description:
      "Add a small CI workflow to run npm ci, npm run lint, npx tsc --noEmit, and npm run build on pull requests. These checks are not configured in this repository yet.",
  },
  {
    icon: Code2,
    title: "Vercel for previews and production",
    description:
      "Connect the GitHub repository to Vercel. Set main as the production branch; use pull-request preview deployments to check changes before merging.",
  },
  {
    icon: ShieldCheck,
    title: "Dependabot and secret protection",
    description:
      "Enable dependency alerts and updates, plus secret scanning and push protection if available for the repository. Never commit passwords, API keys, or .env files.",
  },
];

const officialGuides = [
  {
    label: "GitHub: creating a pull request",
    href: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request",
  },
  {
    label: "GitHub: protecting branches",
    href: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches",
  },
  {
    label: "GitHub: Dependabot quickstart",
    href: "https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide",
  },
  {
    label: "Vercel: Git deployments",
    href: "https://vercel.com/docs/deployments/git",
  },
];

export default function TechnicalContributingPage() {
  return (
    <article className="technical-page">
      <header className="achievements-header technical-header">
        <Link className="back-link" href="/#contribute">
          <ArrowLeft aria-hidden="true" size={15} /> BACK TO CONTRIBUTE
        </Link>
        <span className="feature-eyebrow">A FRIENDLY GUIDE FOR BUILDERS</span>
        <h1>
          Help build
          <br />
          <em>the community website.</em>
        </h1>
        <p>
          You do not need to be an expert. Make one useful change, check it
          locally, and ask for review before it reaches the live website.
        </p>
      </header>

      <div className="technical-content">
        <aside className="technical-notice" aria-label="Current setup note">
          <span className="technical-notice-icon">
            <Info aria-hidden="true" size={19} />
          </span>
          <div>
            <h2>First, a note about the current setup</h2>
            <p>
              The branch plan below is a recommendation, not an active GitHub
              configuration. This repository does not yet include GitHub
              Actions workflows or branch protection rules. Those settings are
              configured after the code is pushed to GitHub.
            </p>
          </div>
        </aside>

        <section
          aria-labelledby="branch-plan-title"
          className="technical-section"
        >
          <span className="section-eyebrow">A SIMPLE, SAFE FLOW</span>
          <h2 id="branch-plan-title">A branch for each stage</h2>
          <p className="technical-section-intro">
            Think of a branch as a separate workspace for changes. Keep the
            live site on <code>main</code>, combine work on{" "}
            <code>develop</code>, and make each change on its own short-lived
            branch.
          </p>
          <div className="technical-branch-flow" aria-label="Branch flow">
            <span>feature/*</span>
            <ArrowRight aria-hidden="true" size={16} />
            <span>develop</span>
            <ArrowRight aria-hidden="true" size={16} />
            <span>release/* (optional)</span>
            <ArrowRight aria-hidden="true" size={16} />
            <span>main</span>
          </div>
          <div className="technical-branch-grid">
            {branches.map(({ name, label, description }) => (
              <article className="technical-branch-card" key={name}>
                <GitBranch aria-hidden="true" size={17} />
                <span>{label}</span>
                <h3>
                  <code>{name}</code>
                </h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="technical-tip">
            <strong>For a small team:</strong> release branches are optional.
            Start with <code>feature/* → develop → main</code>. If this
            repository uses different branch names later, follow the names
            shown in GitHub.
          </div>
          <div className="technical-hotfix">
            <strong>Urgent production fix:</strong> create{" "}
            <code>hotfix/short-description</code> from <code>main</code>, open a
            pull request to <code>main</code>, then merge the fix back into{" "}
            <code>develop</code> so it is not lost in the next release.
          </div>
        </section>

        <section
          aria-labelledby="github-steps-title"
          className="technical-section"
        >
          <span className="section-eyebrow">FROM FIRST CHANGE TO REVIEW</span>
          <h2 id="github-steps-title">How to contribute with GitHub</h2>
          <ol className="technical-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Get the project</h3>
                <p>
                  If you have collaborator access, clone the repository. If
                  not, use GitHub&apos;s <strong>Fork</strong> button first,
                  then clone your copy. Ask the maintainer which branch to use
                  as the starting point.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Install and run it locally</h3>
                <p>
                  Install a current Node.js LTS version, then use the
                  repository&apos;s npm lockfile to install the same
                  dependencies as everyone else.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Make one focused branch</h3>
                <p>
                  Start from the agreed base branch (recommended:{" "}
                  <code>develop</code>) and name your branch for the change.
                  Keep the pull request small enough to understand and review.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Check, push, and open a pull request</h3>
                <p>
                  Run the checks below. Push your branch, open a pull request
                  with <code>develop</code> as its base, and describe what you
                  changed and how you tested it. For a fork, choose the
                  project&apos;s <code>develop</code> as the base branch in
                  GitHub.
                </p>
              </div>
            </li>
            <li>
              <span>05</span>
              <div>
                <h3>Review before merging</h3>
                <p>
                  Respond to feedback and wait for required checks. A pull
                  request is a request to review and merge—not a direct
                  publication to the live website.
                </p>
              </div>
            </li>
          </ol>
          <pre className="technical-code">
            <code>{`# First-time setup
git clone <repository-url>
cd iamsourashtrian
npm ci
npm run dev

# Before starting a change (for collaborators)
git switch develop
git pull origin develop
git switch -c feature/short-description

# Before opening your pull request
npm run lint
npx tsc --noEmit
npm run build

# Publish your branch to GitHub
git add .
git commit -m "Describe the change"
git push -u origin feature/short-description`}</code>
          </pre>
          <p className="technical-code-note">
            For a fork, <code>origin</code> is your personal copy. Push the
            feature branch there, then create the pull request against the
            project owner&apos;s <code>develop</code> branch. Do not commit{" "}
            <code>.env</code>, <code>node_modules</code>, or <code>.next</code>.
          </p>
          <p className="technical-code-note">
            If you are contributing from a fork, use the project as the{" "}
            <code>upstream</code> remote and branch from its latest{" "}
            <code>develop</code>:
          </p>
          <pre className="technical-code">
            <code>{`git remote add upstream <original-repository-url>
git fetch upstream
git switch -c feature/short-description upstream/develop
git push -u origin feature/short-description`}</code>
          </pre>
        </section>

        <section
          aria-labelledby="release-title"
          className="technical-section"
        >
          <span className="section-eyebrow">HOW CHANGES REACH VISITORS</span>
          <h2 id="release-title">Development, preview, and production</h2>
          <div className="technical-release-grid">
            <article>
              <span>1 · DEVELOP</span>
              <h3>Merge reviewed work into develop</h3>
              <p>
                The team combines features here. If Vercel is connected, use
                its preview deployments to check changes without affecting the
                live site.
              </p>
            </article>
            <article>
              <span>2 · CHECK</span>
              <h3>Test a release candidate</h3>
              <p>
                Optionally create a release branch, review the Vercel preview,
                and fix only release-blocking issues. Otherwise, test the
                <code>develop</code> preview directly. After release, merge
                release fixes back into <code>develop</code>.
              </p>
            </article>
            <article>
              <span>3 · PUBLISH</span>
              <h3>Merge into main</h3>
              <p>
                Open a pull request from <code>develop</code> (or the release
                branch) to <code>main</code>. After checks and review, merging
                to the configured production branch publishes the live site
                through Vercel.
              </p>
            </article>
          </div>
        </section>

        <section
          aria-labelledby="tools-title"
          className="technical-section"
        >
          <span className="section-eyebrow">TOOLS TO ADD AFTER PUSHING TO GITHUB</span>
          <h2 id="tools-title">A practical starter toolkit</h2>
          <p className="technical-section-intro">
            You do not need a large toolchain. Start with review, automated
            checks, and safe deployments; add more only as the team needs them.
          </p>
          <div className="technical-tools-grid">
            {tools.map(({ icon: Icon, title, description }) => (
              <article className="technical-tool-card" key={title}>
                <Icon aria-hidden="true" size={19} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="technical-setup-order">
            <GitFork aria-hidden="true" size={18} />
            <p>
              <strong>Good setup order:</strong> push the code to GitHub →
              connect the repository to Vercel → set <code>main</code> as the
              production branch → add pull-request checks → protect{" "}
              <code>main</code> and <code>develop</code> → enable Dependabot and
              secret protection.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="resources-title"
          className="technical-resources"
        >
          <span className="section-eyebrow">LEARN AT YOUR OWN PACE</span>
          <h2 id="resources-title">Official guides</h2>
          <ul>
            {officialGuides.map(({ label, href }) => (
              <li key={href}>
                <a href={href} rel="noreferrer" target="_blank">
                  {label}
                  <ExternalLink aria-hidden="true" size={14} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <Link className="technical-back-link" href="/#contribute">
          Back to ways to contribute <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </article>
  );
}
