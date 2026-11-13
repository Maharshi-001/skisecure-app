'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export interface LeadData {
  fullName: string;
  email: string;
  company: string;
  endpoints: string;
  interest: string;
}

interface ContactFormProps {
  initialInterest?: string;
  onSubmitSuccess: (lead: LeadData) => void;
}

export default function ContactForm({
  initialInterest = 'Growth ($8/mo)',
  onSubmitSuccess,
}: ContactFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [endpoints, setEndpoints] = useState('50 - 250 endpoints');
  const [interest, setInterest] = useState(initialInterest);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadData: LeadData = {
      fullName,
      email,
      company,
      endpoints,
      interest,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      const result = await response.json();
      console.log('Contact submission response:', result);
    } catch (error) {
      console.error('Contact submission error:', error);
    } finally {
      setIsSubmitting(false);
      onSubmitSuccess(leadData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {/* Full Name */}
      <div className="form-group">
        <label className="label">
          Full Name <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="Jane Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="input-field"
        />
      </div>

      {/* Work Email */}
      <div className="form-group">
        <label className="label">
          Work Email <span className="required-asterisk">*</span>
        </label>
        <input
          type="email"
          required
          placeholder="jane@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
      </div>

      {/* Company Name & Endpoints Row */}
      <div className="row-two-cols">
        <div className="form-group">
          <label className="label">Company Name</label>
          <input
            type="text"
            placeholder="Acme Corp"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label className="label">Environment Size</label>
          <select
            value={endpoints}
            onChange={(e) => setEndpoints(e.target.value)}
            className="select-field"
          >
            <option value="50 - 250 endpoints">50 - 250 endpoints</option>
            <option value="251 - 1,000 endpoints">251 - 1,000 endpoints</option>
            <option value="1,000+ endpoints">1,000+ endpoints</option>
            <option value="Under 50 endpoints">Under 50 endpoints</option>
          </select>
        </div>
      </div>

      {/* Tier / Interest Selection */}
      <div className="form-group">
        <label className="label">Plan of Interest</label>
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="select-field"
        >
          <option value="Starter ($10/mo)">Starter Plan ($10/mo - 50-250 endpoints)</option>
          <option value="Growth ($8/mo)">Growth / Professionals ($8/mo - 251-1,000 endpoints)</option>
          <option value="Enterprise (Custom)">Enterprise (Custom - 1,000+ endpoints)</option>
          <option value="Dedicated SOC Team">Dedicated SOC Team Inquiry</option>
        </select>
      </div>

      {/* Submit CTA Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="submit-button"
      >
        <span>{isSubmitting ? 'Sending Request...' : 'Submit & Claim Access'}</span>
        {!isSubmitting && <ArrowRight size={17} strokeWidth={2.4} />}
      </button>

      <div className="guarantee-note">
        🔒 100% confidential. No spam, month-to-month terms, cancel anytime.
      </div>
    </form>
  );
}

