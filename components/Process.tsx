import FadeUp from "./FadeUp";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your ICP, offers, and goals, then define the metrics that matter.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We stand up infrastructure, data, and automated sequences ready to scale.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We go live across channels with tested, on-brand messaging.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We review data weekly and double down on what converts.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 pt-12 pb-15 sm:pt-15 sm:pb-15 lg:px-8 lg:pt-15 lg:pb-15">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <span className="text-base font-medium uppercase tracking-[0.08em] text-muted">
            Process
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            A measured path from cold market to booked pipeline.
          </h2>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, index) => (
            <FadeUp key={step.number} delay={index * 100}>
              <div className="border-t border-foreground/20 pt-5">
                <span className="font-serif text-sm text-muted">
                  {step.number}
                </span>
                <h3 className="mt-2 font-serif text-xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}