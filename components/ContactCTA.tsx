"use client";

import FadeUp from "./FadeUp";
import { Mail, Clock, ArrowRight, Calendar } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <div className="rounded-3xl border border-border-soft bg-card p-8 sm:p-12 lg:p-14">

            <div className="text-center">

              <span className="text-base font-medium uppercase tracking-[0.08em] text-muted">
                Strategy Call
              </span>

              <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Book Your Free Strategy Call
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                In a 30-minute strategy session we'll review your outbound
                process, identify growth opportunities, and show you exactly
                how Sterling Oak can generate more qualified meetings for your
                business.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>30 Minute Google Meet</span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>Instant Scheduling</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>hello@sterlingoak.net</span>
                </div>

              </div>

              <div className="mt-12">

                <a
                  href="https://calendly.com/sterlingoakgrowth/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent-hover hover:shadow-xl"
                >
                  Book Your Free Call

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

              </div>

              <p className="mt-5 text-sm text-muted">
                No commitment. No pressure. Just practical growth advice tailored to your business.
              </p>

            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  );
}