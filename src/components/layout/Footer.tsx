'use client';

import React, { useState } from 'react';
import { scrollToTop } from '@/utils';

interface FooterSectionProps {
  id?: string;
  onOpenModal?: (title?: string, interest?: string) => void;
}

export default function FooterSection({ id = 'footer', onOpenModal }: FooterSectionProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenModal) {
      onOpenModal('Be First in Line — Early Access', 'General / Growth (251-1,000 endpoints)');
    }
  };

  return (
    <footer id={id} className="footer">
      <div className="container">
        {/* ===================================================================== */}
        {/* CTA AREA: "Be First in Line"                                          */}
        {/* ===================================================================== */}
        <div className="cta-area">
          <h2 className="cta-heading">Be First in Line</h2>

          <p className="cta-subtitle">
            We&apos;re launching soon. Get early access, founding-member pricing, and a direct line to our team.
          </p>

          <form onSubmit={handleSubmit} className="subscribe-form">
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
            />

            <button type="submit" className="submit-btn">
              Get Early Access
            </button>
          </form>

          <span className="disclaimer">No spam. Just launch updates.</span>
        </div>

        {/* SUBTLE HORIZONTAL DIVIDER RULE */}
        <div className="divider" />

        {/* ===================================================================== */}
        {/* FOOTER BAR: Logo + Navigation Links + Copyright                       */}
        {/* ===================================================================== */}
        <div className="footer-bar">
          {/* Brand Logo (Left) */}
          <div onClick={scrollToTop} className="logo-group">
            <div className="logo-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="logo-text">
              <span className="logo-skie">Skie</span>
              <span className="logo-secure">Secure</span>
            </span>
          </div>

          {/* Footer Nav Links (Center) */}
          <nav className="footer-nav">
            <a href="#platform" className="nav-link">
              Platform
            </a>
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
            <button
              type="button"
              onClick={() => onOpenModal?.('Contact SkieSecure Security Team', 'General Inquiry')}
              className="contact-btn"
            >
              Contact
            </button>
          </nav>

          {/* Copyright notice (Right) */}
          <div className="copyright">&copy; 2026 SkieSecure. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
