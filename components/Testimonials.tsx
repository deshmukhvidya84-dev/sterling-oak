import { Zap } from "lucide-react";
import FadeUp from "./FadeUp";
const RESULTS = [
    {
      title: "More Qualified Meetings",
      description:
        "Consistent outreach that puts your team in front of decision makers who fit your ideal customer profile.",
    },
    {
      title: "Higher Reply Rates",
      description:
        "Personalized messaging and continuous optimization designed to generate more positive responses.",
    },
    {
      title: "Less Manual Work",
      description:
        "Automated prospecting, follow-ups, and CRM updates so your sales team can focus on selling.",
    },
  ];

export default function () {
  return (
    <section className="px-6 pt-6 pb-20 sm:pt-8 sm:pb-24 lg:px-8 lg:pt-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <span className="text-base font-medium uppercase tracking-[0.08em] text-muted">
          </span>

          <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Results You Can Expect
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {RESULTS.map((item, index) => (
            <FadeUp key={index} delay={index * 100}>
              <div className="h-full rounded-2xl border border-border-soft bg-card p-7">
                <Zap className="h-7 w-7 text-accent" strokeWidth={1.7} />

                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>

                <div className="mt-6">
                  <h3 className="font-medium text-foreground">
                    {item.title}
                  </h3>

                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}