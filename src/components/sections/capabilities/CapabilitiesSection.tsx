'use client';

import React from 'react';
import {
  Database,
  FileText,
  Zap,
  Users,
  Cpu,
  Activity,
  Folder,
  Shield,
} from 'lucide-react';

interface CapabilityCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CAPABILITIES: CapabilityCard[] = [
  {
    icon: <Database size={20} color="#EE343F" strokeWidth={2.2} />,
    title: 'SIEM',
    description:
      'Centralized log ingestion, normalization, and correlation across every source. Search, investigate, and hunt — all in one place.',
  },
  {
    icon: <FileText size={20} color="#EE343F" strokeWidth={2.2} />,
    title: 'File Integrity Monitoring',
    description:
      'Real-time FIM across all endpoints. Detect unauthorized changes to critical files, configs, and registries instantly.',
  },
  {
    icon: <Zap size={20} color="#EE343F" strokeWidth={2.2} fill="#EE343F" fillOpacity={0.15} />,
    title: 'SOAR',
    description:
      'Automated playbooks orchestrate response across your stack. Contain, isolate, and remediate threats in minutes, not hours.',
  },
  {
    icon: <Users size={20} color="#EE343F" strokeWidth={2.2} />,
    title: 'Human-in-the-Loop Response',
    description:
      'Dedicated, shared, or embedded analysts guide you through every incident. Hands-on remediation — not just an alert and a wiki link.',
  },
  {
    icon: <Cpu size={20} color="#EE343F" strokeWidth={2.2} />,
    title: 'AI Threat Detection',
    description:
      'ML models + 1,200+ detection rules covering MITRE ATT&CK. Behavioral analytics catch what signatures miss.',
  },
  {
    icon: <Activity size={20} color="#EE343F" strokeWidth={2.2} />,
    title: '24/7 Monitoring',
    description:
      'AI triage around the clock, human analysts on every escalation. Continuous coverage without hiring a night shift.',
  },
  {
    icon: <Folder size={20} color="#EE343F" strokeWidth={2.2} />,
    title: 'Case Management',
    description:
      'Full incident lifecycle — evidence collection, timelines, analyst notes, and audit trails. Built for compliance.',
  },
  {
    icon: <Shield size={20} color="#EE343F" strokeWidth={2.2} />,
    title: 'Compliance Reporting',
    description:
      'Auto-generated reports for SOC 2, ISO 27001, ISO 42001, HIPAA, and PCI. Board-ready dashboards tracking risk, posture, and progress.',
  },
];

export default function CapabilitiesSection({ id = 'features' }: { id?: string }) {
  return (
    <section id={id}>
      <div className="container">
        {/* HEADER AREA (CENTERED) */}
        <div className="header">
          {/* Badge / Pill */}
          <div className="badge">
            <span className="badge-text">
              CAPABILITIES
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="heading">
            Everything You Need to <span className="heading-highlight">Stay Secure</span>
          </h2>

          {/* Subtitle Paragraph */}
          <p className="subheading">
            SIEM, FIM, SOAR, and expert analysts — all included, all managed.
          </p>
        </div>

        {/* 8 CARDS GRID */}
        <div className="grid">
          {CAPABILITIES.map((card, idx) => (
            <div key={idx} className="card">
              {/* Circular Icon Container */}
              <div className="icon-circle">
                {card.icon}
              </div>

              {/* Text Block */}
              <div className="text-block">
                <h3 className="card-title">
                  {card.title}
                </h3>
                <p className="card-description">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



