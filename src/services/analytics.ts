// Google Analytics 4 tracking service

export const trackCtaClick = (title?: string, tier?: string) => {
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
    (window as unknown as { gtag: Function }).gtag('event', 'click_cta', {
      event_category: 'Engagement',
      event_label: title || 'Join the Waitlist',
      selected_tier: tier || 'Growth ($8/mo)',
    });
  }
};

export const trackLeadGenerated = (data: {
  fullName: string;
  email: string;
  interest: string;
  company?: string;
}) => {
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
    (window as unknown as { gtag: Function }).gtag('event', 'generate_lead', {
      event_category: 'Lead',
      event_label: data.interest || 'Early Access Waitlist',
      user_name: data.fullName,
      user_email: data.email,
      company: data.company || 'Not provided',
    });
  }
};
