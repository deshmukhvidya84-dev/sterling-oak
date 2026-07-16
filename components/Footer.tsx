import Link from "next/link";
import { Landmark } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

        {/* Top */}
        <div className="flex flex-col justify-between gap-14 md:flex-row">

          {/* Brand */}
          <div className="max-w-[170px]">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground"
            >
              <Landmark className="h-5 w-5 text-accent" />
              <span className="font-serif text-lg font-medium">
                Sterling Oak
              </span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-muted">
              B2B outbound growth and automation, engineered for predictable
              pipeline.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex w-full justify-between md:ml-auto md:w-auto md:gap-24 lg:gap-28">

            {/* Navigate */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                Navigate
              </p>

              <div className="flex flex-col gap-3 text-sm">
                <Link href="#services" className="transition hover:text-accent">
                  Services
                </Link>

                <Link href="#process" className="transition hover:text-accent">
                  Process
                </Link>

                <Link href="#industries" className="transition hover:text-accent">
                  Industries
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                Company
              </p>

              <div className="flex flex-col gap-3 text-sm">
                <Link href="#why-us" className="transition hover:text-accent">
                  Why Us
                </Link>

                <Link href="#faq" className="transition hover:text-accent">
                  FAQ
                </Link>

               <a
               href="https://calendly.com/sterlingoakgrowth/strategy-call"
               target="_blank"
               rel="noopener noreferrer"
               className="transition hover:text-accent"
               >
                Book a call 
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-border-soft" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 text-sm text-muted md:flex-row">

          <p>© 2026 Sterling Oak. All rights reserved.</p>

          <div className="ml-auto flex items-center gap-8">
            <a
              href="mailto:hello@sterlingoak.net"
              className="transition hover:text-accent"
            >
              hello@sterlingoak.net
            </a>

            <Link
             href="/privacy-policy" 
             className="transition hover:text-accent"
             >
              Privacy
            </Link>

            <Link href="/terms" className="transition hover:text-accent">
              Terms
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}