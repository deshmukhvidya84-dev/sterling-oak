import FadeUp from "./FadeUp";

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "OpenAI",
  "Clay",
  "Apollo",
  "Instantly",
  "Smartlead",
  "HubSpot",
  "Zapier",
  "Make",
];

export default function TechStack() {
  return (
    <section id="tech" className="pt-8 pb-16 sm:pt-8 sm:pb-20 lg:pt-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">

        <FadeUp className="mx-auto max-w-2xl text-center">
          <span className="text-base font-medium uppercase tracking-[0.08em] text-muted">
            Technology
          </span>

          <h2 className="mt-3 font-serif text-2xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Powered by the modern outbound stack.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            We combine best-in-class software with proven systems to build
            reliable outbound engines that scale.
          </p>
        </FadeUp>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {STACK.map((tool, index) => (
            <FadeUp key={tool} delay={index * 50}>
              <div className="rounded-xl bg-card px-3 py-1 font-medium text-foreground transition-all duration-300 hover:shadow-sm">
                {tool}
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}