"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SunMark from "@/components/sun-mark";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link aria-label="I am sourashtrian home" className="brand" href="/">
        <SunMark className="brand-sun" />
        <span className="brand-copy">
          <span className="brand-name">I am sourashtrian</span>
          <span className="brand-subtitle">Protect, Develop, Strengthen</span>
        </span>
      </Link>
      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        className="mobile-menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav
        aria-label="Main navigation"
        className={`main-nav${menuOpen ? " main-nav-open" : ""}`}
      >
        <Link href="/#Discover" onClick={() => setMenuOpen(false)}>
          Discover
        </Link>
        <Link href="/#principles" onClick={() => setMenuOpen(false)}>
          Our Principles
        </Link>
        <Link href="/#contribute" onClick={() => setMenuOpen(false)}>
          Contribute
        </Link>
        <Link
          className="nav-cta"
          href="/#registration-overview"
          onClick={() => setMenuOpen(false)}
        >
          Join us <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
