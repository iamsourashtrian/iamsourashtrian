import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Code2,
  HeartHandshake,
  Lightbulb,
  Mail,
  Phone,
  Sparkles,
  UserRound,
} from "lucide-react";
import MemberAchievementsGrid from "@/components/member-achievements-grid";
import { memberAchievements } from "@/data/member-achievements";

export const metadata: Metadata = {
  title: "Member achievements",
  description:
    "Discover and celebrate the projects, skills, and contributions Sourashtra community members share.",
};

const contributionAreas = [
  {
    icon: BookOpen,
    title: "Knowledge & stories",
    description:
      "Research, language resources, family histories, and community writing.",
  },
  {
    icon: Code2,
    title: "Software & digital tools",
    description:
      "Apps, useful tools, and digital projects built to help our community.",
  },
  {
    icon: HeartHandshake,
    title: "Community initiatives",
    description:
      "Projects and acts of service that bring people together and make a difference.",
  },
  {
    icon: Lightbulb,
    title: "Creative & professional work",
    description:
      "Creative work, career milestones, and skills our members are proud to share.",
  },
];

export default function MemberAchievementsPage() {
  return (
    <article className="achievements-page">
      <header className="achievements-header">
        <Link className="back-link" href="/#contribute">
          <ArrowLeft aria-hidden="true" size={15} /> BACK TO CONTRIBUTE
        </Link>
        <span className="feature-eyebrow">COMMUNITY SPOTLIGHT</span>
        <h1>
          Good work deserves
          <br />
          <em>to be seen.</em>
        </h1>
        <p>
          A place to recognize the ideas, skills, and achievements Sourashtra
          members share with our community.
        </p>
      </header>

      {memberAchievements.length > 0 ? (
        <section aria-label="Published member achievements">
          <MemberAchievementsGrid achievements={memberAchievements} />
        </section>
      ) : (
        <section
          aria-labelledby="achievement-empty-title"
          className="achievement-empty"
        >
          <span className="achievement-seal" aria-hidden="true">
            <Sparkles size={22} />
          </span>
          <span className="section-eyebrow">THE FIRST CHAPTER IS YOURS</span>
          <h2 id="achievement-empty-title">
            Member achievements are coming soon.
          </h2>
          <p>
            There are no member achievements published here yet. With each
            member’s permission, we look forward to celebrating the work and
            contributions our community shares.
          </p>
          <Link className="achievement-action" href="/#contribute">
            Find out how to contribute{" "}
            <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </section>
      )}

      <section
        aria-labelledby="achievement-areas-title"
        className="achievement-areas"
      >
        <div className="achievement-areas-heading">
          <span className="section-eyebrow">WHAT WE’D LOVE TO CELEBRATE</span>
          <h2 id="achievement-areas-title">Every contribution has a story.</h2>
        </div>
        <div className="achievement-areas-grid">
          {contributionAreas.map(({ icon: Icon, title, description }) => (
            <div className="achievement-area-card" key={title}>
              <Icon aria-hidden="true" size={19} />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="achievement-format-title"
        className="achievement-format"
      >
        <div className="achievement-areas-heading">
          <span className="section-eyebrow">FOR FUTURE MEMBER FEATURES</span>
          <h2 id="achievement-format-title">Contributor card format</h2>
          <p>
            Add one entry to{" "}
            <code>data/member-achievements.ts</code> for each contributor. Put
            their display picture in{" "}
            <code>public/images/contributors/</code> and use its path in the
            entry.
          </p>
        </div>
        <div className="achievement-format-preview-grid">
          <article className="member-achievement-card achievement-format-card">
            <div
              aria-label="Placeholder for contributor display picture"
              className="member-achievement-photo achievement-photo-placeholder"
              role="img"
            >
              <UserRound aria-hidden="true" size={24} />
              <span>PHOTO</span>
            </div>
            <div className="member-achievement-copy">
              <span className="section-eyebrow">CONTRIBUTOR NAME</span>
              <h3>[Contributor name]</h3>
              <h4>[Achievement name]</h4>
              <p>[Achievement description.]</p>
              <div className="member-achievement-contact">
                <span>
                  <Mail aria-hidden="true" size={13} />
                  [Contact email]
                </span>
                <span>
                  <Phone aria-hidden="true" size={13} />
                  [Contact number]
                </span>
                <span>
                  <ArrowRight aria-hidden="true" size={13} />
                  [Achievement URL]
                </span>
              </div>
            </div>
          </article>
        </div>
        <p className="achievement-consent-note">
          Only add and publish a member’s photo or contact details with their
          explicit permission. Leave optional contact fields empty if they
          prefer not to share them.
        </p>
      </section>

      <aside className="achievement-invitation">
        <span className="feature-eyebrow">BUILD THE SPOTLIGHT TOGETHER</span>
        <p>Have a project or achievement you’d like us to feature?</p>
        <Link href="/#join-us">
          Join the community <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </aside>
    </article>
  );
}
