import {
    Cloud,
    Landmark,
    Megaphone,
    Server,
    HardHat,
    Factory,
  } from "lucide-react";
  import FadeUp from "./FadeUp";
  
  const INDUSTRIES = [
    { icon: Cloud, label: "SaaS & Software" },
    { icon: Landmark, label: "Financial Services" },
    { icon: Megaphone, label: "Marketing Agencies" },
    { icon: Server, label: "IT Services" },
    { icon: HardHat, label: "Roofing & Construction" },
    { icon: Factory, label: "Manufacturing" },
  ];
  
  export default function Industries() {
    return (
      <section id="industries" className="px-6 pt-8 pb-20 sm:pb-24 lg:px-8 lg:pt-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <FadeUp className="max-w-2xl">
            <span className="text-base font-medium uppercase tracking-[0.08em] text-muted">
              Industries
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Built for complex, considered B2B sales.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              We work with teams selling into long, relationship driven buying
              cycles where precision matters more than volume.
            </p>
          </FadeUp>
  
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {INDUSTRIES.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <FadeUp key={industry.label} delay={index * 70}>
                  <div className="flex items-center gap-3 rounded-2xl border border-border-soft bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    <Icon
                      className="h-5 w-5 shrink-0 text-accent"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-foreground">
                      {industry.label}
                    </span>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>
    );
  }