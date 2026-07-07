"use client";

import Link from "next/link";
import { ArrowRight, Landmark } from "lucide-react";

const links = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Industries", href: "#industries" },
  { name: "Why Us", href: "#why-us" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#F8F6F2]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 lg:px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
        <Landmark className="h-5 w-5 text-[#4F6B63]" />
          <span className="font-serif text-lg font-medium text-[#222]">
            Sterling Oak
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-semibold text-gray-600 transition hover:text-[#4F6B63]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
  href="https://calendly.com/sterlingoakgrowth/strategy-call"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex h-9 items-center gap-2 rounded-full bg-[#4F6B63] px-5 text-sm font-semibold text-white ..."
>
  Book a call
</a>

      </div>

      <div className="border-b border-black/5" />
    </header>
  );
}