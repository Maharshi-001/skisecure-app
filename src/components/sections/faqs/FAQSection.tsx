'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Who is SkieSecure designed for?',
    answer:
      'SkieSecure is purpose-built for small and mid-sized businesses (50 to 2,000 endpoints) that require enterprise-grade threat detection, FIM, and SIEM coverage without the exorbitant price tag or large dedicated SOC staffing requirements.',
  },
  {
    question: 'How quickly can we get started?',
    answer:
      'Our lightweight agents install in minutes across your macOS, Linux, and Windows endpoints. Most customers are fully operational with active AI correlation and 24/7 analyst coverage in under 10 days.',
  },
  {
    question: 'How does the AI work?',
    answer:
      'Our proprietary AI engine continuously inspects telemetry streams, cross-references against 1,200+ MITRE ATT&CK rules, and executes autonomous triage. It filters out alert fatigue so only high-fidelity incidents require human analyst escalation.',
  },
  {
    question: 'Is our data kept separate from other customers?',
    answer:
      'Yes, absolutely. We enforce strict multi-tenant isolation at both the database and ingestion pipeline layers, complete with end-to-end TLS encryption and granular zero-trust access controls.',
  },
  {
    question: 'What log sources do you support?',
    answer:
      'We support direct endpoint logs, syslog, AWS CloudTrail, Google Cloud Audit Logs, Azure Activity Logs, Microsoft 365, Okta, Cloudflare, GitHub, and custom webhooks or API streams.',
  },
  {
    question: 'What does "open-source stack" mean for me?',
    answer:
      'It means zero vendor lock-in and complete auditable transparency. Your detection logic, schemas, and queries are built on open security standards that you control forever.',
  },
];

export default function FAQSection({ id = 'faq' }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id={id}>
      <div className="container">
        {/* BADGE: FAQ'S */}
        <div className="badge">
          <span className="badge-text">
            FAQ&apos;S
          </span>
        </div>

        {/* Headline */}
        <h2 className="heading">
          Common Questions
        </h2>

        {/* Subtitle */}
        <p className="subheading">
          Everything you need to know about the product and how it works.
        </p>

        {/* ACCORDION CONTAINER */}
        <div className="accordion-wrapper">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const isLast = idx === FAQ_ITEMS.length - 1;

            return (
              <div
                key={idx}
                className={`accordion-item ${isLast ? 'last-item' : ''} ${isOpen ? 'open' : ''}`}
              >
                {/* Accordion Row Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="accordion-button"
                >
                  <span className="question-text">
                    {item.question}
                  </span>

                  {/* Plus / X Icon */}
                  <div className="icon-wrapper">
                    <Plus size={22} strokeWidth={2.4} />
                  </div>
                </button>

                {/* Animated Expandable Answer */}
                {isOpen && (
                  <div className="answer-wrapper anim-faq-answer">
                    <p className="answer-text">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


