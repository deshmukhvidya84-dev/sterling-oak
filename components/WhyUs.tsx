import {
    ShieldCheck,
    BrainCircuit,
    Clock3,
    TrendingUp,
  } from "lucide-react";
  import FadeUp from "./FadeUp";
  
  const FEATURES = [
    {
      icon: ShieldCheck,
      title: "Built for Deliverability",
      description:
        "Every outbound system is configured to maximize inbox placement and protect domain health.",
    },
    {
      icon: BrainCircuit,
      title: "AI Assisted Prospecting",
      description:
        "We combine automation with human strategy to identify and reach your highest value prospects.",
    },
    {
      icon: Clock3,
      title: "Save Your Sales Team Time",
      description:
        "Your team spends less time sourcing leads and more time speaking with qualified buyers.",
    },
    {
      icon: TrendingUp,
      title: "Focused on Pipeline",
      description:
        "Everything is measured around replies, meetings, opportunities and revenue not vanity metrics.",
    },
  ];
  
  export default function WhyUs() {
    return (
        <section
        id="why-us"
        className="px-6 pt-5 pb-15 sm:pt-6 sm:pb-15 lg:px-8 lg:pt-6 lg:pb-15"
      >
        <div className="mx-auto max-w-7xl">
  
          <FadeUp className="mx-auto max-w-2xl text-center">
            <span className="text-base font-medium uppercase tracking-[0.08em] text-muted">
              Why Sterling Oak
            </span>
  
            <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Outbound designed like an engineering system.
            </h2>
  
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Instead of guessing what works, we build predictable systems that
              consistently generate conversations with qualified buyers.
            </p>
          </FadeUp>
  
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
  
              return (
                <FadeUp key={feature.title} delay={index * 80}>
                  <div className="h-full rounded-2xl border border-border-soft bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
  
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background text-accent">
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.75}
                      />
                    </div>
  
                    <h3 className="mt-5 font-serif text-xl font-medium text-foreground">
                      {feature.title}
                    </h3>
  
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {feature.description}
                    </p>
  
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>
    );
  }