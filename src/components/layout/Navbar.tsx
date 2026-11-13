'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToTop } from '@/utils';

interface NavbarProps {
  onOpenModal: (title?: string, interest?: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="navbar">
      <div className="inner">
        {/* Brand Logo */}
        <div onClick={scrollToTop} className="logo">
          <div className="logo-icon-box">
            <svg
              className="logo-svg"
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

        {/* Desktop Nav Items & Early Access CTA */}
        <div className="desktop-nav-group">
          <nav className="desktop-nav">
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
          </nav>

          <button
            type="button"
            onClick={() => onOpenModal('Get Early Access — Priority Access', 'Growth ($8/mo)')}
            className="desktop-cta-btn"
          >
            Get Early Access
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="mobile-actions">
          <button
            type="button"
            onClick={() => onOpenModal('Get Early Access — Priority Access', 'Growth ($8/mo)')}
            className="mobile-cta-btn"
          >
            Get Early Access
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="menu-toggle-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav">
            <a
              href="#platform"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              Platform
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              FAQ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
