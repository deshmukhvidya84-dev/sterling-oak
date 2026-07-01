"use client";

import FadeUp from "./FadeUp";
import { Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <div className="rounded-3xl border border-border-soft bg-card p-8 sm:p-12 lg:p-14">

            {/* Heading */}
            <div className="text-center">
              <span className="text-base font-medium uppercase tracking-[0.08em] text-muted">
                Contact
              </span>

              <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Let's build your outbound system.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Tell us about your business and goals. We'll map a tailored
                outbound strategy and show you exactly how Sterling Oak can
                generate more qualified meetings for your team.
              </p>

              {/* Contact Info */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">

                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>hello@sterlingoak.net</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-accent" />
                  <span className="whitespace-nowrap">
                  Replies within one business day
                  </span>
                </div>

              </div>
            </div>

            {/* Form */}
            <form className="mt-12 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>

                <input
                  type="text"
                  placeholder=" "
                  className="w-full rounded-2xl border border-border-soft bg-background px-5 py-4 outline-none transition focus:border-accent"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Work Email
                </label>

                <input
                  type="Your Email"
                  placeholder=" "
                  className="w-full rounded-2xl border border-border-soft bg-background px-5 py-4 outline-none transition focus:border-accent"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  How can we help?
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your goals."
                  className="w-full resize-none rounded-2xl border border-border-soft bg-background px-5 py-4 outline-none transition focus:border-accent"
                />
              </div>

              <div className="flex justify-center pt-3">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-lg"
                >
                  Send

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </form>

          </div>
        </FadeUp>
      </div>
    </section>
  );
}