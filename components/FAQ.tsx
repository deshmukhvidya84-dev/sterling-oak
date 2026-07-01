"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeUp from "./FadeUp";

const FAQS = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients begin seeing positive replies within 2–4 weeks after launch, depending on the industry and domain setup.",
  },
  {
    question: "Do you provide the lead lists?",
    answer:
      "Yes. We research, build, and verify highly targeted prospect lists based on your ideal customer profile.",
  },
  {
    question: "Do you write the email copy?",
    answer:
      "Absolutely. We handle messaging, personalization, and continuous optimization for better reply rates.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We primarily work with B2B SaaS, agencies, IT services, financial services, manufacturing, and similar service businesses.",
  },
  {
    question: "Do I need any software before we start?",
    answer:
      "No. We handle the complete outbound setup including infrastructure, automation, and integrations.",
  },
  {
    question: "Can you integrate with our CRM?",
    answer:
      "Yes. We integrate with HubSpot and other popular CRMs to keep your pipeline organized.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-6 lg:pb-20"
    >
      <div className="mx-auto max-w-4xl">
        <FadeUp className="text-center">
          <span className="text-base font-medium uppercase tracking-[0.08em] text-muted">
            FAQ
          </span>

          <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>
        </FadeUp>

        <div className="mt-14 space-y-4 px-4 sm:px-0">
          {FAQS.map((faq, index) => (
            <FadeUp key={faq.question} delay={index * 75}>
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full rounded-2xl bg-card p-2 sm:p-4 text-left transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {open === index && (
                  <p className="mt-4 text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </button>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}