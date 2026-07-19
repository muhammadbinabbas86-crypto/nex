import {
  PhoneCall,
  MessageCircle,
  UserCheck,
  CalendarClock,
  AudioLines,
  Workflow,
  Mail,
  Bot,
  LifeBuoy,
  BrainCircuit,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'ai-receptionist',
    name: 'AI Receptionist',
    tagline: 'A 24/7 front desk that never misses a beat.',
    description:
      'Greet, route, and answer every inbound call or message with a natural voice — booking appointments and capturing leads around the clock.',
    icon: PhoneCall,
    features: ['Natural voice greetings', 'Smart call routing', 'Appointment scheduling', 'After-hours coverage'],
  },
  {
    id: 'whatsapp-ai',
    name: 'WhatsApp AI',
    tagline: 'Your business on the world\u2019s largest chat app.',
    description:
      'Automate WhatsApp conversations end-to-end — from first hello to confirmed booking — with a human-grade assistant trained on your business.',
    icon: MessageCircle,
    features: ['Official WhatsApp API', 'Context-aware replies', 'Media & document handling', 'Human handoff'],
  },
  {
    id: 'lead-qualification',
    name: 'Lead Qualification',
    tagline: 'Talk to ready buyers, not window shoppers.',
    description:
      'Score, segment, and qualify every inbound lead in real time so your team only spends time on conversations that convert.',
    icon: UserCheck,
    features: ['Smart scoring', 'Auto segmentation', 'CRM enrichment', 'Instant routing'],
  },
  {
    id: 'appointment-booking',
    name: 'Appointment Booking',
    tagline: 'Calendars that fill themselves.',
    description:
      'Let Emma schedule, reschedule, and confirm appointments directly into your calendar — with reminders that cut no-shows in half.',
    icon: CalendarClock,
    features: ['Two-way calendar sync', 'Auto reminders', 'Reschedule by chat', 'Waitlist automation'],
  },
  {
    id: 'voice-ai',
    name: 'Voice AI',
    tagline: 'Phone calls that sound human.',
    description:
      'Inbound and outbound voice agents with natural cadence, interruption handling, and live transcription — built on state-of-the-art speech models.',
    icon: AudioLines,
    features: ['Humanlike voice', 'Real-time transcription', 'Call summaries', 'Outbound campaigns'],
  },
  {
    id: 'crm-automation',
    name: 'CRM Automation',
    tagline: 'Your CRM, finally kept in motion.',
    description:
      'Auto-update deals, log every interaction, and trigger follow-ups so your pipeline never goes stale again.',
    icon: Workflow,
    features: ['Auto deal updates', 'Activity logging', 'Pipeline triggers', 'Duplicate prevention'],
  },
  {
    id: 'email-automation',
    name: 'Email Automation',
    tagline: 'Sequences that write and send themselves.',
    description:
      'Draft, personalize, and dispatch email sequences based on real behavior — replies are understood and routed automatically.',
    icon: Mail,
    features: ['AI-drafted sequences', 'Reply understanding', 'Personalization at scale', 'Deliverability tuning'],
  },
  {
    id: 'workflow-automation',
    name: 'Business Workflow Automation',
    tagline: 'Connect every tool. Remove every manual step.',
    description:
      'Design end-to-end automations across your stack — from form submissions to invoicing — with intelligent fallbacks and human review.',
    icon: Bot,
    features: ['Cross-tool orchestration', 'Conditional logic', 'Approval workflows', 'Audit trails'],
  },
  {
    id: 'customer-support',
    name: 'Customer Support',
    tagline: 'Resolve 70% of tickets instantly.',
    description:
      'Deploy an AI support agent trained on your help center that resolves tickets, escalates edge cases, and learns from every interaction.',
    icon: LifeBuoy,
    features: ['Knowledge-base trained', 'Auto resolution', 'Smart escalation', 'Sentiment tracking'],
  },
  {
    id: 'ai-consulting',
    name: 'AI Consulting',
    tagline: 'A clear roadmap from manual to autonomous.',
    description:
      'Work with our architects to identify the highest-ROI automations for your operations and ship them in weeks, not quarters.',
    icon: BrainCircuit,
    features: ['Opportunity audit', 'ROI modeling', 'Architecture design', 'Phased rollout'],
  },
];
