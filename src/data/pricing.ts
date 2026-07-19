import { Check } from 'lucide-react';

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  highlight?: boolean;
  cta: string;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'PKR 25,000',
    period: '/month',
    tagline: 'For small teams testing their first AI employee.',
    cta: 'Start with Starter',
    features: [
      '1 AI assistant',
      'WhatsApp or web chat',
      'Up to 1,000 conversations / mo',
      'Lead capture & basic qualification',
      'Email support',
      'Weekly performance report',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 'PKR 45,000',
    period: '/month',
    tagline: 'For growing businesses ready to automate end-to-end.',
    highlight: true,
    cta: 'Choose Professional',
    features: [
      '3 AI assistants',
      'WhatsApp, web & voice channels',
      'Up to 10,000 conversations / mo',
      'CRM + calendar integrations',
      'Lead qualification & appointment booking',
      'Priority support',
      'Real-time analytics dashboard',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tagline: 'For multi-location operations with custom workflows.',
    cta: 'Talk to Sales',
    features: [
      'Unlimited AI assistants',
      'All channels + custom integrations',
      'Unlimited conversations',
      'Dedicated AI architect',
      'Custom workflow automation',
      'SSO & security review',
      'SLA-backed support',
    ],
  },
];

export const check = Check;
