'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Shield } from 'lucide-react';
import ContactForm, { LeadData } from './ContactForm';
import { trackLeadGenerated } from '@/services/analytics';
import './contact.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  initialInterest?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  title = 'Join the Waitlist & Get Early Access',
  initialInterest = 'Growth ($8/mo)',
}: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSuccess = (lead: LeadData) => {
    // Track Google Analytics event
    trackLeadGenerated({
      fullName: lead.fullName,
      email: lead.email,
      interest: lead.interest,
      company: lead.company,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div id="contact-modal">
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className="backdrop anim-modal-backdrop"
      />

      {/* Modal Card */}
      <div className="modal-card anim-modal-card">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="close-btn"
        >
          <X size={18} strokeWidth={2.4} />
        </button>

        {submitted ? (
          /* SUCCESS STATE */
          <div className="success-wrap">
            <div className="success-icon-box">
              <CheckCircle size={36} color="#EE343F" strokeWidth={2.4} />
            </div>
            <h3 className="success-title">You&apos;re On the List!</h3>
            <p className="success-desc">
              Thank you for requesting early access. Our team will reach out with your private onboarding credentials shortly.
            </p>
          </div>
        ) : (
          /* FORM STATE */
          <div>
            {/* Header / Brand Icon */}
            <div className="header-tag">
              <div className="tag-icon-box">
                <Shield size={16} color="#FFFFFF" strokeWidth={2.4} />
              </div>
              <span className="tag-label">EARLY ACCESS PRIORITY</span>
            </div>

            <h3 className="modal-title">{title}</h3>

            <p className="modal-subtitle">
              Lock in founding-member pricing, full SIEM/FIM/SOAR modules, and 24/7 human analyst escalation.
            </p>

            <ContactForm
              initialInterest={initialInterest}
              onSubmitSuccess={handleSuccess}
            />
          </div>
        )}
      </div>
    </div>
  );
}

