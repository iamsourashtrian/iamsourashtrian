import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SunMark from "@/components/sun-mark";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sourashtra — A Community Archive",
    template: "%s — Sourashtra",
  },
  description:
    "A living archive for the histories, language, family traditions, and stories of the Sourashtra community.",
  openGraph: {
    title: "Sourashtra — A Community Archive",
    description:
      "A community archive for the histories, language, and stories of Sourashtra.",
    siteName: "Sourashtra",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="site-shell">
          <div className="announcement">
            <span className="announcement-dot" />
            A living archive for a story still being written
            <span className="announcement-year">EST. 2015</span>
          </div>
          <SiteHeader />
          <main>{children}</main>
          <footer className="site-footer" id="about">
            <div className="footer-brand">
              <Link
                aria-label="I am sourashtrian home"
                className="brand"
                href="/"
              >
                <SunMark className="brand-sun" />
                <span className="brand-copy">
                  <span className="brand-name">I am sourashtrian</span>
                  <span className="brand-subtitle">
                    Protect, Develop, Strengthen
                  </span>
                </span>
              </Link>
              <p className="footer-description">
                Stories, language, and living memory—kept together for
                generations to come.
              </p>
            </div>
            <nav aria-label="Footer navigation" className="footer-nav">
              <Link href="/#Discover">Discover</Link>
              <Link href="/#principles">Our Principles</Link>
              <Link href="/#contribute">Contribute</Link>
              <Link href="/technical-contributing">Technical guide</Link>
              <Link href="/#registration-overview">Join us</Link>
              <Link href="/#community-feedback">Contact</Link>
            </nav>
            <p className="footer-credits">
              Somnath Temple photo by{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Somanath_mandir_(cropped).jpg">
                B. SurajPatro1997
              </a>
              , shared under{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
              .
            </p>
            <span className="footer-credit">
              MADE FOR THE COMMUNITY, WITH CARE.
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
