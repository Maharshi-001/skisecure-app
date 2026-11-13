'use client';

import React from 'react';

export default function TeamSection({ id = 'team' }: { id?: string }) {
  return (
    <div id={id}>
      {/* Full-Width Section Frame */}
      <section className="section-inner">
        {/* TOP-RIGHT WIREFRAME GRAPHIC */}
        <div className="wireframe-top-right">
          <svg width="100%" height="100%" viewBox="0 0 560 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="80" y1="20" x2="340" y2="100" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="340" y1="100" x2="520" y2="40" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="340" y1="100" x2="440" y2="240" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="440" y1="240" x2="560" y2="300" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="220" y1="220" x2="440" y2="240" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="80" y1="20" x2="220" y2="220" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="340" y1="100" x2="220" y2="220" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="440" y1="240" x2="320" y2="380" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="220" y1="220" x2="320" y2="380" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="520" y1="40" x2="560" y2="160" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="560" y1="160" x2="440" y2="240" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
          </svg>
        </div>

        {/* BOTTOM-LEFT WIREFRAME GRAPHIC */}
        <div className="wireframe-bottom-left">
          <svg width="100%" height="100%" viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="240" x2="120" y2="320" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="120" y1="320" x2="40" y2="420" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="120" y1="320" x2="240" y2="360" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="40" y1="420" x2="240" y2="360" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="0" y1="340" x2="120" y2="320" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="0" y1="240" x2="60" y2="160" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="60" y1="160" x2="180" y2="220" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="120" y1="320" x2="180" y2="220" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="180" y1="220" x2="300" y2="280" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="240" y1="360" x2="300" y2="280" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="240" y1="360" x2="380" y2="400" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
          </svg>
        </div>

        {/* HEADER AREA (CENTERED) */}
        <div className="header">
          {/* Badge / Pill */}
          <div className="badge">
            <span className="badge-text">
              YOUR SECURITY TEAM
            </span>
          </div>

          {/* Headline */}
          <h2 className="heading">
            AI + Human Analysts, <span className="heading-highlight">Your Way</span>
          </h2>

          {/* Subtitle */}
          <p className="subheading">
            We blend AI-powered automation with real SOC analysts — available as a dedicated team, shared coverage,
            or a remote extension of your own staff.
          </p>
        </div>

        {/* TWO-COLUMN SECTION */}
        <div className="content-row">
          {/* LEFT COLUMN */}
          <div className="left-col">
            {/* 1. Dedicated SOC Team */}
            <div className="feature-item">
              <div className="feature-header">
                <img
                  src="/images/team/icon-dedicated-team.png"
                  alt="Dedicated SOC Team"
                  className="feature-icon"
                />
                <div className="feature-text">
                  <h3 className="feature-title">
                    Dedicated SOC Team
                  </h3>
                  <p className="feature-desc">
                    A named team of analysts assigned exclusively to your environment. They know your infrastructure,
                    your risk profile, and your escalation preferences.
                  </p>
                </div>
              </div>

              {/* Divider 1 */}
              <div className="divider" />
            </div>

            {/* 2. SOC Coverage */}
            <div className="feature-item">
              <div className="feature-header">
                <img
                  src="/images/team/icon-soc-coverage.png"
                  alt="SOC Coverage"
                  className="feature-icon"
                />
                <div className="feature-text">
                  <h3 className="feature-title">
                    SOC Coverage
                  </h3>
                  <p className="feature-desc">
                    Cost-efficient 24/7 coverage from our pooled analyst team. Ideal for smaller environments that need
                    round-the-clock eyes without dedicated headcount.
                  </p>
                </div>
              </div>

              {/* Divider 2 */}
              <div className="divider" />
            </div>

            {/* 3. Remote Workforce */}
            <div className="feature-item">
              <div className="feature-header">
                <img
                  src="/images/team/icon-remote-workforce.png"
                  alt="Remote Workforce"
                  className="feature-icon"
                />
                <div className="feature-text">
                  <h3 className="feature-title">
                    Remote Workforce
                  </h3>
                  <p className="feature-desc">
                    Embed our analysts into your team as a remote extension. They operate on your tools, join your
                    stand-ups, and work your hours like a hire, without the overhead.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <p className="footer-note">
              Every model includes AI-first triage and correlation. Analysts step in for investigation, escalation,
              and hands-on remediation — so you&apos;re never left alone with an alert and a runbook.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right-col">
            <img
              src="/images/team/dashboard-detections.png"
              alt="SkieSecure Detections Dashboard Mockup"
              className="dashboard-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}



