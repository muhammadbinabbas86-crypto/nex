import {
  Stethoscope,
  Plane,
  Dumbbell,
  UtensilsCrossed,
  Building2,
  Scale,
  HardHat,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
  blurb: string;
  automations: string[];
}

export const industries: Industry[] = [
  {
    id: 'dental',
    name: 'Dental Clinics',
    icon: Stethoscope,
    blurb: 'Fill chairs, reduce no-shows, and answer every patient question instantly.',
    automations: ['AI receptionist', 'Appointment reminders', 'Insurance Q&A', 'Re-care campaigns'],
  },
  {
    id: 'travel',
    name: 'Travel Agencies',
    icon: Plane,
    blurb: 'Qualify travelers, recommend packages, and book trips over WhatsApp.',
    automations: ['Trip qualification', 'Itinerary suggestions', 'Booking handoff', 'Follow-up sequences'],
  },
  {
    id: 'gyms',
    name: 'Gyms',
    icon: Dumbbell,
    blurb: 'Capture trial sign-ups, answer membership questions, and win back churned members.',
    automations: ['Lead capture', 'Class booking', 'Membership FAQs', 'Win-back flows'],
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    icon: UtensilsCrossed,
    blurb: 'Take reservations, answer menu questions, and manage delivery inquiries 24/7.',
    automations: ['Reservations', 'Menu Q&A', 'Order status', 'Review responses'],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: Building2,
    blurb: 'Qualify buyers, schedule viewings, and nurture listings automatically.',
    automations: ['Buyer qualification', 'Viewing scheduling', 'Listing updates', 'Agent handoff'],
  },
  {
    id: 'law',
    name: 'Law Firms',
    icon: Scale,
    blurb: 'Intake clients, screen cases, and schedule consultations without missing a lead.',
    automations: ['Case intake', 'Conflict screening', 'Consultation booking', 'Document collection'],
  },
  {
    id: 'construction',
    name: 'Construction',
    icon: HardHat,
    blurb: 'Quote requests, project updates, and subcontractor coordination — automated.',
    automations: ['Quote intake', 'Project updates', 'Subcontractor routing', 'Permit reminders'],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    icon: ShoppingBag,
    blurb: 'Recover carts, answer product questions, and automate post-purchase support.',
    automations: ['Cart recovery', 'Product Q&A', 'Order tracking', 'Returns handling'],
  },
  {
    id: 'medical',
    name: 'Medical Clinics',
    icon: HeartPulse,
    blurb: 'Triage symptoms, book appointments, and handle refills with compliance in mind.',
    automations: ['Symptom triage', 'Appointment booking', 'Refill requests', 'Reminder calls'],
  },
  {
    id: 'schools',
    name: 'Schools',
    icon: GraduationCap,
    blurb: 'Answer admissions questions, schedule tours, and engage parents automatically.',
    automations: ['Admissions Q&A', 'Tour scheduling', 'Parent updates', 'Fee reminders'],
  },
];
