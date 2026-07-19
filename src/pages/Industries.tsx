import Page from '../components/Page';
import SectionHeader from '../components/SectionHeader';
import IndustriesGrid from '../components/IndustriesGrid';
import CTASection from '../components/CTASection';
import { Reveal } from '../components/motion';

export default function Industries() {
  return (
    <Page
      title="Industries — Nexora"
      description="Nexora builds AI employees tailored to dental clinics, travel agencies, gyms, restaurants, real estate, law firms, construction, e-commerce, medical clinics, and schools."
    >
      <section className="relative overflow-hidden pt-36 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-white/8 blur-[140px]" />
        </div>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <span className="eyebrow">Industries</span>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tightest text-white sm:text-7xl">
              Tailored to <span className="text-gradient">your sector.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Every assistant is pre-trained on the workflows, vocabulary, and customer journeys
              specific to your industry \u2014 then fine-tuned to your business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-10">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            align="left"
            eyebrow="The catalog"
            title={<>Ten industries, ready out of the box.</>}
          />
          <div className="mt-12">
            <IndustriesGrid />
          </div>
        </div>
      </section>

      <CTASection
        title="Don\u2019t see your industry?"
        description="We build custom AI employees for operations of any shape. Tell us what you do and we\u2019ll show you what we can automate."
        primaryLabel="Talk to an architect"
      />
    </Page>
  );
}
