import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Droplets,
  Globe2,
  HeartHandshake,
  Lightbulb,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import ArticleCard from "@/components/article-card";
import { getArticles } from "@/lib/articles";

export default async function HomePage() {
  const articles = await getArticles();
  const feature = articles.find(
    (article) => article.featured && article.listed,
  );
  const previewStories = articles
    .filter((article) => article.listed && !article.featured)
    .slice(0, 3);
  const principlePreview = [...(feature ? [feature] : []), ...previewStories];

  return (
    <>
      <section aria-labelledby="hero-title" className="hero">
        <div className="hero-ornament" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-content">
          <div className="hero-kicker">
            <span className="kicker-line" />
            THE PEOPLE, PLACES &amp; STORIES OF SOURASHTRA
          </div>
          <h1 id="hero-title">
            I am sourashtrian
            <span className="hero-values">
              <span>Protect</span>
              <span>Develop</span>
              <span>Strengthen</span>
            </span>
            <em>our people intelligence.</em>
          </h1>
          <p className="hero-description">
            A place for the language we speak, the histories we share, and the
            details that make a community feel like home.
          </p>
          <div className="hero-actions">
            <Link
              className="button button-dark"
              href="/stories/why-i-am-sourashtrian-started"
            >
              What sparked this? <ArrowRight size={16} />
            </Link>
            <a className="text-link" href="#Discover">
              What brings us together? <ArrowDown size={14} />
            </a>
          </div>
        </div>
        <div
          aria-label="Somnath Temple in Gujarat in the warm light of sunrise"
          className="hero-visual"
          role="img"
        >
          <div className="hero-image-backdrop" />
          <div className="hero-image-grain" />
          <div className="hero-caption">
            <span className="caption-sun" aria-hidden="true">✳</span>
            <span>
              <strong>Rooted here.</strong>
              <br />
              Remembering together.
            </span>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="archive-strip">
        <span>Language, in our own words</span>
        <span className="strip-dot">✳</span>
        <span>Histories passed down</span>
        <span className="strip-dot">✳</span>
        <span>Family, place &amp; belonging</span>
        <span className="strip-dot">✳</span>
        <span>A future worth remembering</span>
      </div>

      <section aria-labelledby="story-title" className="intro-section" id="Discover">
        <div className="intro-marker">
          <span className="section-index">01</span>
          <span className="marker-line" />
          <span className="section-eyebrow">A NOTE ON BELONGING</span>
        </div>
        <div className="intro-copy">
          <article className="intro-story">
            <div className="intro-story-copy">
              <h2 id="story-title">
                After Migration
                <br />
                <span>we are scattered a lot.</span>
              </h2>
              <p>
                We should unite in a medium, where we can stand for ourselves
                each other. In today&apos;s busy world, we spend most of the
                time in our professional lives and forgotten our community
                spirit, norms, standards to be followed by every sourashtrian.
              </p>
            </div>
            <aside aria-label="Our reason for being" className="intro-aside">
              <Sparkles
                aria-hidden="true"
                className="aside-sparkle"
                size={19}
              />
              <p>
                A history written in stone. A living record, made richer by
                everyone who adds to it.
              </p>
              <span>OUR REASON FOR BEING</span>
            </aside>
          </article>
          <article aria-labelledby="rejoin-title" className="intro-story">
            <div className="intro-story-copy">
              <h2 id="rejoin-title">
                We must rejoin, rejoice
                <br />
                <span>through an unified platform.</span>
              </h2>
              <p>
                By rejoining across digitally, we would know each other, share
                your identities, and personas so we wont act like we are not
                known each other despite being a sourashtrian.
              </p>
              <p>
                We made this space to keep those things close—and make room for
                the next generation of Sourashtra stories to find their way in.
                keep scrolling down to know how!
              </p>
            </div>
            <aside
              aria-label="What we are heading toward"
              className="intro-aside"
            >
              <Sparkles
                aria-hidden="true"
                className="aside-sparkle"
                size={19}
              />
              <p>
                A connected Sourashtra community where we know one another,
                share our identities, and carry our community spirit forward.
              </p>
              <span>WHAT WE&apos;RE HEADING TOWARD</span>
            </aside>
          </article>
        </div>
      </section>

      <section
        aria-labelledby="what-we-do-title how-we-do-title"
        className="discover-work-section"
        id="what-we-do"
      >
        <div className="intro-marker">
          <span className="section-index">02</span>
          <span className="marker-line" />
          <span className="section-eyebrow">CONTINUING THE DISCOVERY</span>
        </div>
        <div className="discover-work-copy">
          <h2 id="what-we-do-title">What we do</h2>
          <p>
            We research Sourashtra culture, language, people, community norms,
            and history to deepen our understanding of who we are and where we
            come from.
          </p>
        </div>
        <div className="discover-how">
          <div className="discover-how-heading">
            <span className="section-eyebrow">OUR APPROACH</span>
            <h2 id="how-we-do-title">How we do it</h2>
          </div>
          <div className="discover-how-grid">
            <article className="discover-how-card">
              <h3>Knowledge into articles</h3>
              <p>
                We gain knowledge about our culture, language, people, norms,
                and history, then share it as website articles so anyone with
                questions can explore what our community has learned.
              </p>
            </article>
            <article className="discover-how-card">
              <h3>Contribution that supports your growth</h3>
              <p>
                Your time and effort matter. Record the scope and depth of your
                volunteer contribution on LinkedIn and in your CV. You can also
                contribute to the website through GitHub; technical work can
                showcase your skills and support your career.
              </p>
            </article>
            <article className="discover-how-card">
              <h3>Everyone is welcome</h3>
              <p>
                There are no requirements or criteria. If you&apos;re
                Sourashtrian and interested in deepening your roots, you&apos;re
                welcome—join us! Have an idea? Share it through our contact form
                so we can grow together.
              </p>
              <div className="discover-how-actions">
                <a className="discover-contact-link" href="#registration-overview">
                  Join us <ArrowRight aria-hidden="true" size={14} />
                </a>
                <a className="discover-contact-link" href="#community-feedback">
                  Share an idea <ArrowRight aria-hidden="true" size={14} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="story-preview-title"
        className="story-preview-section"
        id="principles"
      >
        <div className="story-preview-heading">
          <div>
            <div className="intro-marker archive-marker">
              <span className="section-index">03</span>
              <span className="marker-line" />
              <span className="section-eyebrow">KNOWLEDGE FOR OUR COMMUNITY</span>
            </div>
            <h2 id="story-preview-title">
              Our <em>Principles</em>
            </h2>
          </div>
          <Link className="story-preview-all" href="/discover">
            Browse all principles <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <div className="archive-grid principles-preview-grid">
          {principlePreview.map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="contribute-title"
        className="participation-section contribute-section"
        id="contribute"
      >
        <div className="participation-heading">
          <div className="intro-marker">
            <span className="section-index">04</span>
            <span className="marker-line" />
            <span className="section-eyebrow">GIVE SOMETHING BACK</span>
          </div>
          <div>
            <h2 id="contribute-title">
              A stronger community is something <em>we build together.</em>
            </h2>
            <p>
              Your skills, ideas, and lived experience can help the next person
              find a little more knowledge, connection, or support.
            </p>
          </div>
        </div>
        <div className="contribute-grid">
          <div className="contribute-guidance">
            <div className="guidance-item">
              <span className="guidance-icon">
                <HeartHandshake aria-hidden="true" size={18} />
              </span>
              <div>
                <h3>Why to contribute?</h3>
                <p>
                  Preserve what our families know, make useful knowledge easier
                  to find, and help our people support one another.
                </p>
              </div>
            </div>
            <div className="guidance-item">
              <span className="guidance-icon">
                <MessageCircle aria-hidden="true" size={18} />
              </span>
              <div>
                <h3>How to contribute?</h3>
                <p>
                  Bring an idea, story, skill, or project. Join the community
                  and connect with members and admins about how to share it.
                </p>
              </div>
            </div>
            <div className="guidance-item">
              <span className="guidance-icon">
                <Lightbulb aria-hidden="true" size={18} />
              </span>
              <div>
                <h3>Areas to contribute</h3>
                <p>
                  Language, family histories, research, community initiatives,
                  digital resources, software tools, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="contribute-benefits">
            <span className="section-eyebrow">GROW WHILE GIVING</span>
            <h3>Benefits of contributing</h3>
            <p>
              As a registered member, you can make the most of what you build
              with our platform:
            </p>
            <ul>
              <li>
                <BadgeCheck aria-hidden="true" size={16} />
                Highlight your contributions on your LinkedIn profile and
                résumé.
              </li>
              <li>
                <Users aria-hidden="true" size={16} />
                Grow your public visibility and celebrate your Sourashtra
                identity.
              </li>
              <li>
                <Sparkles aria-hidden="true" size={16} />
                Unleash your potential and be recognized on our website.
              </li>
              <li>
                <Code2 aria-hidden="true" size={16} />
                Share your developed achievements, computer apps/tools on our dedicated page.
              </li>
            </ul>
            <span className="benefit-closing">And much more to come.</span>
            <div className="contribute-actions">
              <Link
                className="button button-dark contribute-cta"
                href="#registration-overview"
              >
                Join the community <ArrowRight size={15} />
              </Link>
              {/* <Link
                className="button button-outline contribute-cta"
                href="/member-achievements"
              >
                See members’ achievements <Award aria-hidden="true" size={15} />
              </Link> */}
              {/* <Link
                className="button button-outline contribute-cta"
                href="/technical-contributing"
              >
                Technical contribution guide <Code2 aria-hidden="true" size={15} />
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="registration-overview-title"
        className="registration-section"
        id="registration-overview"
      >
        <div className="registration-overview-heading">
          <div>
            <span className="section-eyebrow">A SIMPLE GUIDE BEFORE YOU START</span>
            <h2 id="registration-overview-title">
              How member registration is organized
            </h2>
            <p>
              Registration has three categories across 11 pages. You are{" "}
              <strong>not expected to fill out all 11 pages</strong>—complete
              only the sections that apply to you.
            </p>
          </div>
          <span className="registration-page-count">3 CATEGORIES · 11 PAGES</span>
        </div>
        <div className="registration-cta-panel">
          <div className="registration-cta-copy">
            <span className="section-eyebrow">READY TO CONTINUE?</span>
            <h3>Continue to member registration</h3>
            <p>
              Use the guide below to see which sections apply to you, then
              continue to the form when you&apos;re ready.
            </p>
          </div>
          <div className="registration-cta-actions">
            <a
              className="registration-form-link"
              href="https://forms.gle/9LLUD6DjWpPnBTrEA"
              rel="noreferrer"
              target="_blank"
            >
              Open the registration form
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a className="registration-benefits-link" href="#member-benefits">
              View member benefits
              <ArrowDown aria-hidden="true" size={15} />
            </a>
          </div>
        </div>
        <div className="registration-grid">
          <article className="registration-stage">
            <div className="registration-card-heading">
              <span className="registration-stage-number">01</span>
              <span className="registration-card-label">START HERE</span>
            </div>
            <h3>Basic identity</h3>
            <p>
              The basic form collects the information needed to identify you as
              a member of the community.
            </p>
            <div className="registration-card-note">
              <Users aria-hidden="true" size={16} />
              <span>Your starting point for registration.</span>
            </div>
          </article>

          <article className="registration-stage">
            <div className="registration-card-heading">
              <span className="registration-stage-number">02</span>
              <span className="registration-card-label">YOUR CHOICE</span>
            </div>
            <h3>Community areas</h3>
            <p>
              Groups are organized around four communities. Choose what
              interests you—contribution and participation are not mandatory.
            </p>
            <ul className="registration-interest-list">
              <li>
                <HeartHandshake aria-hidden="true" size={15} />
                <span>
                  <strong>Services</strong>
                  Service contributions across categories.
                </span>
              </li>
              <li>
                <MapPin aria-hidden="true" size={15} />
                <span>
                  <strong>Regional</strong>
                  Updates from your hometown.
                </span>
              </li>
              <li>
                <BriefcaseBusiness aria-hidden="true" size={15} />
                <span>
                  <strong>Entrepreneur</strong>
                  Business, finance, promotion, and real estate.
                </span>
              </li>
              <li>
                <Lightbulb aria-hidden="true" size={15} />
                <span>
                  <strong>Career &amp; skill development</strong>
                  Build skills and grow your potential.
                </span>
              </li>
            </ul>
          </article>

          <article className="registration-stage">
            <div className="registration-card-heading">
              <span className="registration-stage-number">03</span>
              <span className="registration-card-label">OPTIONAL</span>
            </div>
            <h3>Additional sections</h3>
            <p>Complete these only if they are relevant to you.</p>
            <div className="registration-optional-grid">
              <div className="registration-optional-card">
                <Droplets aria-hidden="true" size={17} />
                <span>
                  <strong>Blood donor</strong>
                  Optionally share your blood donation details and locality to
                  help people nearby.
                </span>
              </div>
              <div className="registration-optional-card">
                <Globe2 aria-hidden="true" size={17} />
                <span>
                  <strong>NRI community</strong>
                  A few extra questions help us understand how to support
                  members growing their careers abroad. Thank you for bearing
                  with us.
                </span>
              </div>
            </div>
          </article>
        </div>
        <p className="registration-privacy-note">
          Optional means optional. Share personal, location, or donation details
          only if you’re comfortable and have reviewed how registration
          organizers will use them.
        </p>
      </section>

      <section
        aria-labelledby="join-title"
        className="join-section"
        id="join-us"
      >
        <div className="join-heading">
          <div className="intro-marker join-marker">
            <span className="section-index">05</span>
            <span className="marker-line" />
            <span className="section-eyebrow">THERE IS A PLACE FOR YOU HERE</span>
          </div>
          <h2 id="join-title">
            The best support starts with <em>showing up for each other.</em>
          </h2>
          <p>
            Our main intention for this digital forum is to help our people
            resolve challenges through online community support. Have you
            solved a problem that uplifted our community? We’re ready to
            hear it and share your story with the world. Share it with us! 🙂
          </p>
          <a className="member-benefits-link" href="#community-feedback">
            Share feedback or ask for help
            <ArrowRight aria-hidden="true" size={15} />
          </a>
        </div>
        <div aria-labelledby="member-benefits-title" className="member-benefits" id="member-benefits">
          <div className="member-benefits-heading">
            <div>
              <span className="section-eyebrow">A NETWORK THAT GROWS TOGETHER</span>
              <h3 id="member-benefits-title">Member benefits</h3>
            </div>
            <span className="benefit-seal" aria-hidden="true">
              <Users size={20} />
            </span>
          </div>
          <ul className="member-benefits-list">
            <li>
              <Users aria-hidden="true" size={18} />
              <span>
                Connect through a registered-member network and recognize yourselves.
              </span>
            </li>
            <li>
              <MessageCircle aria-hidden="true" size={18} />
              <span>
                Access the community WhatsApp network to ask for support in an
                emergency. It does not replace emergency services.
              </span>
            </li>
            <li>
              <HeartHandshake aria-hidden="true" size={18} />
              <span>
                Meet talented contributors, find collaborators, and get
                community support for your ideas.
              </span>
            </li>
            <li>
              <ShieldCheck aria-hidden="true" size={18} />
              <span>
                Celebrate your work and discover more ways to help the
                community thrive.
              </span>
            </li>
          </ul>
          <p className="member-note">
            Membership is coordinated by group-wise admins.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="community-feedback-title"
        className="community-feedback-section"
        id="community-feedback"
      >
        <div className="community-feedback-inner">
          <div className="community-feedback-copy">
            <span className="section-eyebrow">YOUR VOICE MATTERS</span>
            <h2 id="community-feedback-title">
              Tell us what would help our community <em>grow.</em>
            </h2>
            <p>
              Share one topic at a time. Your feedback and ideas can help us
              make this community space more useful and supportive.
            </p>
            <ul aria-label="Choose one topic to share" className="feedback-topics">
              <li>Feedback</li>
              <li>Suggestions</li>
              <li>Improvements</li>
              <li>Ideas to share</li>
              <li>Need financial help</li>
              <li>Offer financial help</li>
            </ul>
            <p className="feedback-topic-note">
              Choose the one topic that best describes what you’d like to share
              in the form. Please don’t include passwords, full payment-card
              details, or other sensitive financial information.
            </p>
          </div>
          <div className="community-feedback-form">
            <p className="feedback-form-note">
              Google Forms may ask you to sign in, depending on the form’s
              access settings.{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeVrn3b-X2ovCZUoII1ZHhH1XKwQUDZ2XJyUKv1tTepgqxUWg/viewform"
                rel="noreferrer"
                target="_blank"
              >
                Open the form in a new tab
                <ArrowRight aria-hidden="true" size={12} />
              </a>
            </p>
            <iframe
              allow="fullscreen"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeVrn3b-X2ovCZUoII1ZHhH1XKwQUDZ2XJyUKv1tTepgqxUWg/viewform?embedded=true"
              title="Community feedback and support form"
            >
              Loading feedback form…
            </iframe>
          </div>
        </div>
      </section>

      <section aria-label="Our invitation" className="closing-section">
        <span className="closing-ornament" aria-hidden="true">✳</span>
        <p>Every family holds a piece of the story.</p>
        <span>There is always room for another.</span>
        <Link href="/discover#archive">
          Browse all principles <ArrowRight size={15} />
        </Link>
      </section>
    </>
  );
}
