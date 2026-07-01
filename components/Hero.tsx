import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="className=relative overflow-hidden px-6 pb-10 pt-32 sm:pb-12 sm:pt-28 lg:px-8 lg:pb-10 lg:pt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border-soft bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-muted">
          B2B Outbound &amp; Automation
        </div>

        {/* Heading */}
        <h1 className="animate-fade-up mt-4 font-serif text-4xl sm:text-5x1 lg:text-7x1 font-medium leading-[1.12] tracking-tight text-foreground [animation-delay:100ms] sm:text-5xl lg:text-6xl">
          Predictable pipeline, engineered for B2B growth.
        </h1>

        {/* Subheading */}
        <p className="animate-fade-up mt-4 max-w-2xl text-base leading-relaxed text-muted [animation-delay:200ms] sm:text-base">
          Sterling Oak helps B2B companies generate qualified meetings through
          cold email, outbound automation, and AI powered prospecting.
        </p>
        <div className="mt-8 grid w-full grid-cols-1 gap-10 sm:mt-10 sm:grid-cols-3 sm:gap-3">

  <div className="mx-auto flex w-40 flex-col items-center text-center">
    <p className="text-3xl font-semibold text-[#4F6B63]">200K+</p>
    <p className="mt-1 text-sm text-gray-500">Emails Sent</p>
  </div>

  <div className="mx-auto flex w-40 flex-col items-center text-center">
    <p className="text-3xl font-semibold text-[#4F6B63]">1,500+</p>
    <p className="mt-1 text-sm text-gray-500">Meetings Booked</p>
  </div>

  <div className="mx-auto flex w-40 flex-col items-center text-center">
    <p className="text-3xl font-semibold text-[#4F6B63]">97%</p>
    <p className="mt-1 text-sm text-gray-500">Deliverability</p>
  </div>

</div>

</div>
    </section>
  );
}