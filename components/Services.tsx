import { Target, Mail, Workflow, Settings, Zap, BarChart3 } from "lucide-react";
import FadeUp from "./FadeUp";

const SERVICES = [
  {
    icon: Target,
    title: "Outbound Strategy & Targeting",
    description:
      "Sharp ICP definition, list building, and segmentation grounded in your best-fit revenue accounts.",
  },
  {
    icon: Mail,
    title: "Cold Email Infrastructure",
    description:
      "Dedicated domains, inbox warmup, and deliverability monitoring that keep you out of spam.",
  },
  {
    icon: Workflow,
    title: "Multichannel Sequences",
    description:
      "Coordinated email, LinkedIn, and call cadences that reach prospects where they actually respond.",
  },
  {
    icon: Settings,
    title: "Sales Automation & CRM",
    description:
      "Enrichment, routing, and workflow automation that remove manual work and keep data clean.",
  },
  {
    icon: Zap,
    title: "Messaging & Copywriting",
    description:
      "Offers and positioning engineered to start conversations with the right decision-makers.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Optimization",
    description:
      "Live dashboards and structured testing that compound reply, meeting, and pipeline rates.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-3 py-10 sm:py-20 lg:px-8 lg:py-5">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="max-w-2xl">
          <span className="text-base font-semibold uppercase tracking-[0.02em] text-[#4F6B63]">
            Services
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Everything required to run outbound that performs.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            We own the full outbound engine from infrastructure and data to
            messaging and reporting so your team can focus on closing.
          </p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeUp key={service.title} delay={index * 80}>
                <div className="group h-full rounded-2xl border border-border-soft bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-10 font-serif text-x4 font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {service.description}
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