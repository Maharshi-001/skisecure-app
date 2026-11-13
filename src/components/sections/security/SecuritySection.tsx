'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface SlideData {
  id: number;
  problem: {
    icon: (color: string) => React.ReactNode;
    line1: string;
    line2?: string;
  };
  solution: {
    icon: (color: string) => React.ReactNode;
    line1: string;
    line2?: string;
    line3?: string;
  };
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    problem: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      ),
      line1: "Drowning in alerts you can't",
      line2: 'investigate',
    },
    solution: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      line1: 'AI triages thousands of',
      line2: 'events down to the handful',
      line3: 'that need human eyes.',
    },
  },
  {
    id: 2,
    problem: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      line1: 'Security tools built for',
      line2: 'Fortune 500 budgets',
    },
    solution: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      line1: 'All-in-one pricing from $10/endpoint/mo.',
      line2: 'No modules, no per-GB fees,',
      line3: 'no surprise overages.',
    },
  },
  {
    id: 3,
    problem: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      ),
      line1: 'Compliance audits keep you',
      line2: 'up at night',
    },
    solution: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      line1: 'Continuous monitoring + auto-generated reports',
      line2: 'for SOC 2, ISO 27001, ISO 42001,',
      line3: 'HIPAA, PCI.',
    },
  },
  {
    id: 4,
    problem: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      line1: "No visibility into what's",
      line2: 'actually happening',
    },
    solution: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      line1: 'Real-time dashboards showing every',
      line2: 'event, alert, and action —',
      line3: 'in plain language.',
    },
  },
  {
    id: 5,
    problem: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="17" y1="8" x2="23" y2="14" />
          <line x1="23" y1="8" x2="17" y2="14" />
        </svg>
      ),
      line1: "Can't hire or retain",
      line2: 'security talent',
    },
    solution: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      line1: 'Our analysts become your team —',
      line2: '24/7 coverage without',
      line3: '6-figure salaries.',
    },
  },
  {
    id: 6,
    problem: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      line1: 'Weeks long onboarding for',
      line2: 'new security tools',
    },
    solution: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      line1: 'Agents deploy in minutes.',
      line2: 'Most customers are fully live',
      line3: 'in under 10 days.',
    },
  },
];

export default function SecuritySection({ id = 'security' }: { id?: string }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isFirstMount = useRef(true);

  // Handle clicking on any of the 6 dots - rotates smoothly in place
  const handleDotClick = (index: number) => {
    if (index === activeSlide) return;
    const diff = (index - activeSlide + SLIDES.length) % SLIDES.length;
    setRotationAngle((prev) => prev + diff * 60);
    setActiveSlide(index);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // Auto-advance carousel every 7s and rotate in place
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % SLIDES.length;
        setRotationAngle((deg) => deg + 60);
        return next;
      });
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const currentSlide = SLIDES[activeSlide];

  return (
    <section id={id}>
      <div className="container">
        {/* LEFT COLUMN: STATIC HERO WITH SHIELD */}
        <div className="left-col">
          {/* Concentric Circles & Split-Shield Hero Illustration */}
          <div className="shield-graphic-wrapper">
            {/* Layer 1: ROTATING ORBITAL CIRCLES & 3 DOTS (Spins strictly in-place around center) */}
            <div
              className="rotating-layer"
              style={{
                transform: `rotate(${rotationAngle}deg)`,
              }}
            >
              <svg viewBox="0 0 540 540" fill="none" className="w-full h-full">
                {/* Outer Circular Outline */}
                <circle
                  cx="270"
                  cy="270"
                  r="250"
                  stroke="#FECDD3"
                  strokeWidth="1.2"
                  strokeOpacity="0.85"
                />

                {/* Inner Circular Outline */}
                <circle
                  cx="270"
                  cy="270"
                  r="192"
                  stroke="#FFE4E6"
                  strokeWidth="1.2"
                  strokeOpacity="0.85"
                />

                {/* Dot 1: Top (12 o'clock on outer circle) */}
                <circle cx="270" cy="20" r="6" fill="#EE343F" />

                {/* Dot 2: Right (~3:15 on outer circle) */}
                <circle cx="508" cy="208" r="5.5" fill="#EE343F" />

                {/* Dot 3: Bottom-Left (~8:15 on outer circle) */}
                <circle cx="46" cy="324" r="6" fill="#EE343F" />
              </svg>
            </div>

            {/* Layer 2: STATIC SHIELD */}
            <svg viewBox="0 0 540 540" fill="none" className="static-shield-svg">
              <path
                d="M 148 232 L 148 136 L 270 82 L 392 136 L 392 232"
                stroke="#EE343F"
                strokeWidth="9"
                strokeLinecap="butt"
                strokeLinejoin="miter"
              />
              <path
                d="M 162 348 C 176 414 270 454 270 454 C 270 454 364 414 378 348"
                stroke="#EE343F"
                strokeWidth="9"
                strokeLinecap="butt"
                strokeLinejoin="miter"
              />
            </svg>

            {/* Content Centered in the Shield Opening */}
            <div className="shield-text-center">
              <div className="badge">
                <span className="badge-text">SOUND FAMILIAR?</span>
              </div>

              <h2 className="shield-heading">
                Security Shouldn&apos;t Be
                <br />
                <span className="rocket-science-text">Rocket Science</span>
              </h2>
            </div>
          </div>

          {/* Subtext Paragraph Below Graphic */}
          <p className="subtext">
            Growing businesses face impossible trade-offs. We built SkieSecure to eliminate them.
          </p>

          {/* Outlined Pill CTA Button */}
          <button
            type="button"
            onClick={() => {
              const target = document.getElementById('pricing');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="firefighting-btn"
          >
            <span>Ready to stop firefighting?</span>
            <ArrowRight size={17} />
          </button>
        </div>

        {/* RIGHT COLUMN: SEQUENCED ANIMATED CAROUSEL WITH DOT GRID BACKGROUND */}
        <div
          className="right-col"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Stack Container */}
          <div className="card-stack">
            {/* TOP CARD: PROBLEM CARD (RED #FFE3E3) */}
            <div className="problem-card">
              <div className="card-icon-box">
                {currentSlide.problem.icon('#F00D0D')}
              </div>

              <div
                key={`problem-${activeSlide}`}
                className="problem-text-wrap anim-red-text"
              >
                <div>
                  <h3 className="problem-text">{currentSlide.problem.line1}</h3>
                  {currentSlide.problem.line2 && (
                    <h3 className="problem-text mt-1 sm:mt-1.5">
                      {currentSlide.problem.line2}
                    </h3>
                  )}
                </div>
              </div>
            </div>

            {/* BOTTOM CARD: SOLUTION CARD (BLUE #D8E6FD) */}
            <div className="solution-card">
              <div className="card-icon-box">
                {currentSlide.solution.icon('#1A44F5')}
              </div>

              <div
                key={`solution-${activeSlide}`}
                className="solution-text-wrap anim-blue-text"
              >
                <h3 className="solution-text">
                  <div>{currentSlide.solution.line1}</div>
                  {currentSlide.solution.line2 && <div>{currentSlide.solution.line2}</div>}
                  {currentSlide.solution.line3 && <div>{currentSlide.solution.line3}</div>}
                </h3>
              </div>
            </div>
          </div>

          {/* Centered 6-Dot Navigation Indicator */}
          <div className="dots-row">
            {SLIDES.map((_, idx) => {
              const isActive = idx === activeSlide;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`dot ${isActive ? 'active' : ''}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

