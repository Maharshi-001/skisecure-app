'use client';

import React from 'react';
import {
  Laptop,
  Server,
  Cloud,
  Activity,
  Terminal,
  ShieldCheck,
  Cpu,
  FileText,
  ExternalLink,
  Zap,
  Users,
  Bell,
  Shield,
} from 'lucide-react';

export default function ArchitectureSection({ id = 'architecture' }: { id?: string }) {
  return (
    <section id={id}>
      <div className="container">
        {/* ========================================================================= */}
        {/* TOP SECTION: HEADING GRAPHIC + 3-ZONE ARCHITECTURE PANEL                 */}
        {/* ========================================================================= */}
        <div className="top-row">
          {/* Left Heading Illustration Block */}
          <div className="heading-block">
            <img
              src="/images/architecture/deployment-architecture-heading.png"
              alt="Deployment Architecture"
              className="heading-img"
            />
          </div>

          {/* Right Architecture Diagram White Panel (3 Zones) */}
          <div className="diagram-panel">
            <div className="diagram-inner">
              {/* ------------------------------------------------------------- */}
              {/* ZONE 1: SENDER ZONE ("YOUR ENVIRONMENT")                      */}
              {/* ------------------------------------------------------------- */}
              <div className="sender-zone">
                <div className="zone-header">
                  <span className="zone-badge-gray">SENDER ZONE</span>
                  <h2 className="zone-title">YOUR ENVIRONMENT</h2>
                </div>

                {/* 5 Source Cards Stack */}
                <div className="sender-cards-stack">
                  {/* 1. Workstations */}
                  <div className="source-card">
                    <div className="source-left">
                      <div className="source-icon-box">
                        <Laptop size={20} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="source-title">Workstations</div>
                        <div className="source-sub">SkieSecure Lightweight Agent</div>
                      </div>
                    </div>
                    <div className="status-active">
                      <div className="anim-pulse-dot w-[7px] h-[7px] rounded-full bg-[#10B981]" />
                      <span className="status-text">Active</span>
                    </div>
                  </div>

                  {/* 2. Servers */}
                  <div className="source-card">
                    <div className="source-left">
                      <div className="source-icon-box">
                        <Server size={20} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="source-title">Servers</div>
                        <div className="source-sub">Dedicated Syslog Daemon</div>
                      </div>
                    </div>
                    <div className="status-active">
                      <div className="anim-pulse-dot w-[7px] h-[7px] rounded-full bg-[#10B981]" />
                      <span className="status-text">Active</span>
                    </div>
                  </div>

                  {/* 3. Cloud / SaaS */}
                  <div className="source-card">
                    <div className="source-left">
                      <div className="source-icon-box">
                        <Cloud size={20} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="source-title">Cloud / SaaS</div>
                        <div className="source-sub">Okta, M365, AWS APIs</div>
                      </div>
                    </div>
                    <div className="status-active">
                      <div className="anim-pulse-dot w-[7px] h-[7px] rounded-full bg-[#10B981]" />
                      <span className="status-text">Active</span>
                    </div>
                  </div>

                  {/* 4. Network */}
                  <div className="source-card">
                    <div className="source-left">
                      <div className="source-icon-box">
                        <Activity size={20} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="source-title">Network</div>
                        <div className="source-sub">Syslog &amp; Flow Collectors</div>
                      </div>
                    </div>
                    <div className="status-active">
                      <div className="anim-pulse-dot w-[7px] h-[7px] rounded-full bg-[#10B981]" />
                      <span className="status-text">Active</span>
                    </div>
                  </div>

                  {/* 5. Custom Sources */}
                  <div className="source-card">
                    <div className="source-left">
                      <div className="source-icon-box">
                        <Terminal size={20} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="source-title">Custom Sources</div>
                        <div className="source-sub">Unified Ingestion API</div>
                      </div>
                    </div>
                    <div className="status-active">
                      <div className="anim-pulse-dot w-[7px] h-[7px] rounded-full bg-[#10B981]" />
                      <span className="status-text">Active</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* ZONE 2: CENTER CHANNEL (TLS ENCRYPTED CONNECTION)             */}
              {/* ------------------------------------------------------------- */}
              <div className="tls-channel">
                <div className="tls-badge">
                  <ShieldCheck size={22} className="text-[#EE343F]" strokeWidth={2.2} />
                </div>

                <span className="tls-label">
                  TLS ENCRYPTED
                  <br />
                  CONNECTION
                </span>

                {/* Animated Transit Flow Line */}
                <div className="tls-flow-wrapper">
                  <svg className="w-full h-full" viewBox="0 0 100 20" fill="none">
                    <path
                      className="anim-flow-line"
                      d="M 4 10 H 88"
                      stroke="#EE343F"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 84 5 L 92 10 L 84 15"
                      stroke="#EE343F"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <span className="tls-sub">AES-256 Transport Security</span>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* ZONE 3: RIGHT ZONE (SKIESECURE CLOUD ENGINE)                  */}
              {/* ------------------------------------------------------------- */}
              <div className="engine-zone">
                <div className="zone-header">
                  <span className="zone-badge-red">SKIESECURE ANALYTICS</span>
                  <h2 className="zone-title">SKIESECURE CLOUD ENGINE</h2>
                </div>

                {/* 2 Columns: Pipeline Flow (Left) + Supporting Modules (Right) */}
                <div className="engine-columns">
                  {/* PIPELINE FLOW (3 STAGES) */}
                  <div className="pipeline-col">
                    {/* Stage 1 */}
                    <div className="stage-card">
                      <div className="stage-top">
                        <span className="stage-badge">STAGE 1</span>
                        <Cpu size={18} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div className="stage-title">Ingestion &amp; Normalization</div>
                      <p className="stage-desc">
                        API gateways consume and translate incoming telemetry into structured JSON events.
                      </p>
                    </div>

                    {/* Flow Arrow 1 -> 2 */}
                    <div className="arrow-between">
                      <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
                        <path d="M 7 2 V 18" stroke="#EE343F" strokeWidth="2" strokeLinecap="round" />
                        <path
                          d="M 3.5 14.5 L 7 18.5 L 10.5 14.5"
                          stroke="#EE343F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Stage 2 */}
                    <div className="stage-card">
                      <div className="stage-top">
                        <span className="stage-badge">STAGE 2</span>
                        <Cpu size={18} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div className="stage-title">SIEM + AI Detection</div>
                      <p className="stage-desc">
                        Core ML models identify indicators of compromise and flag anomalous behavior in real-time.
                      </p>
                    </div>

                    {/* Flow Arrow 2 -> 3 */}
                    <div className="arrow-between">
                      <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
                        <path d="M 7 2 V 18" stroke="#EE343F" strokeWidth="2" strokeLinecap="round" />
                        <path
                          d="M 3.5 14.5 L 7 18.5 L 10.5 14.5"
                          stroke="#EE343F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Stage 3 */}
                    <div className="stage-card">
                      <div className="stage-top">
                        <span className="stage-badge">STAGE 3</span>
                        <Cpu size={18} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div className="stage-title">SOAR Automated Playbooks</div>
                      <p className="stage-desc">
                        Configured response playbooks isolate endpoints, revoke credentials, and dispatch alerts.
                      </p>
                    </div>
                  </div>

                  {/* SUPPORTING MODULES (RIGHT) */}
                  <div className="modules-col">
                    <span className="zone-badge-gray">SUPPORTING MODULES</span>

                    {/* 1. FIM Engine */}
                    <div className="module-item">
                      <div className="module-icon-box">
                        <FileText size={18} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="module-title">FIM Engine</div>
                        <div className="module-sub">File Integrity Monitoring</div>
                      </div>
                    </div>

                    {/* 2. Cloud Connectors */}
                    <div className="module-item">
                      <div className="module-icon-box">
                        <ExternalLink size={18} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="module-title">Cloud Connectors</div>
                        <div className="module-sub">API integration plane</div>
                      </div>
                    </div>

                    {/* 3. Threat Fusion */}
                    <div className="module-item">
                      <div className="module-icon-box">
                        <Zap size={18} className="text-[#EE343F]" strokeWidth={2.2} fill="#EE343F" fillOpacity={0.15} />
                      </div>
                      <div>
                        <div className="module-title">Threat Fusion</div>
                        <div className="module-sub">Intel Feed Normalization</div>
                      </div>
                    </div>

                    {/* 4. SOC Analysts */}
                    <div className="module-item">
                      <div className="module-icon-box">
                        <Users size={18} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="module-title">SOC Analysts</div>
                        <div className="module-sub">Human-in-the-Loop review</div>
                      </div>
                    </div>

                    {/* 5. AI Agents */}
                    <div className="module-item">
                      <div className="module-icon-box">
                        <Cpu size={18} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="module-title">AI Agents</div>
                        <div className="module-sub">Autonomous triage system</div>
                      </div>
                    </div>

                    {/* 6. Alert Dispatch */}
                    <div className="module-item">
                      <div className="module-icon-box">
                        <Bell size={18} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="module-title">Alert Dispatch</div>
                        <div className="module-sub">PagerDuty, Slack &amp; Webhooks</div>
                      </div>
                    </div>

                    {/* 7. Audit Reports */}
                    <div className="module-item">
                      <div className="module-icon-box">
                        <Shield size={18} className="text-[#EE343F]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="module-title">Audit Reports</div>
                        <div className="module-sub">Compliance reporting</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM SECTION: 3 DEPLOYMENT CARDS                                        */}
        {/* ========================================================================= */}
        <div className="deployment-grid">
          {/* Card 1: Lightweight Agent */}
          <div className="deploy-card card-agent">
            <div>
              <h3 className="deploy-card-title">Lightweight Agent</h3>
              <p className="deploy-card-desc">
                Ultra-low overhead eBPF-powered agent for Linux, Windows, and macOS. Deploys in minutes via curl or
                package manager. Real-time telemetry with &lt;1% CPU usage.
              </p>
            </div>
            <div className="deploy-card-img-box">
              <img
                src="/images/architecture/lightweight-agent.png"
                alt="Lightweight Agent Robot"
                className="deploy-card-img"
              />
            </div>
          </div>

          {/* Card 2: Cloud Connectors */}
          <div className="deploy-card card-connectors">
            <div>
              <h3 className="deploy-card-title">Cloud Connectors</h3>
              <p className="deploy-card-desc">
                Native integrations with AWS, Azure, GCP, Microsoft 365, Google Workspace, Okta, and more. API-based
                collection - no agents needed for cloud and SaaS sources.
              </p>
            </div>
            <div className="deploy-card-img-box">
              <img
                src="/images/architecture/cloud-connectors.png"
                alt="Cloud Connectors Integration"
                className="deploy-card-img"
              />
            </div>
          </div>

          {/* Card 3: Threat Fusion */}
          <div className="deploy-card card-fusion">
            <div>
              <h3 className="deploy-card-title">Threat Fusion</h3>
              <p className="deploy-card-desc">
                Telemetry is enriched with threat intelligence feeds, reputation data, and contextual signals before
                detection — giving AI and analysts the full picture, not raw logs.
              </p>
            </div>
            <div className="deploy-card-img-box">
              <img
                src="/images/architecture/threat-fusion.png"
                alt="Threat Fusion Orb"
                className="deploy-card-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

