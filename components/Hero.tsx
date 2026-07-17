import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-32 sm:pb-12 sm:pt-28 lg:px-8 lg:pb-10 lg:pt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border-soft bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-muted">
          B2B Outbound &amp; Automation
        </div>

        {/* Heading */}
        <h1 className="animate-fade-up mt-4 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl [animation-delay:100ms]">
          Predictable pipeline, engineered for B2B growth.
        </h1>

        {/* Subheading */}
        <p className="animate-fade-up mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-base [animation-delay:200ms]">
          Sterling Oak helps B2B companies generate qualified meetings through
          cold email, outbound automation, and AI powered prospecting.
        </p>

        {/* Stats */}
        <div className="mt-8 grid w-full grid-cols-1 gap-10 sm:mt-10 sm:grid-cols-3 sm:gap-3">
          <div className="mx-auto flex w-40 flex-col items-center text-center">
            <p className="text-3xl font-semibold text-[#4F6B63]">Personalized Campaigns</p>
          </div>

          <div className="mx-auto flex w-40 flex-col items-center text-center">
            <p className="text-3xl font-semibold text-[#4F6B63]">ICP Research</p>
          </div>

          <div className="mx-auto flex w-40 flex-col items-center text-center">
            <p className="text-3xl font-semibold text-[#4F6B63]">Qualified Meetings</p>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-fade-up mt-10 [animation-delay:300ms]">
          <Link
            href="https://calendly.com/sterlingoakgrowth/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#4F6B63] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
          >
            Book a Free Strategy Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}