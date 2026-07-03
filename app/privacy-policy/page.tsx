import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sterling Oak",
  description:
    "Read Sterling Oak's Privacy Policy to understand how we collect, use, and protect your information.",
};
export default function PrivacyPolicy() {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
  
        <p className="mt-4 text-sm text-muted">
          Last updated: July 2026
        </p>
  
        <div className="mt-12 space-y-12 text-base leading-8 text-muted">
  
          <section>
            <h2 className="mb-4 text-2xl font-serif font-medium text-foreground">
              Introduction
            </h2>
  
            <p>
              Sterling Oak ("we", "our", or "us") respects your privacy and is
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or contact us regarding our
              AI-powered outbound sales and B2B lead generation services.
            </p>
          </section>
  
          <section>
            <h2 className="mb-4 text-2xl font-serif font-medium text-foreground">
              Information We Collect
            </h2>
  
            <ul className="list-disc space-y-2 pl-6">
              <li>Name</li>
              <li>Work email address</li>
              <li>Company name (if provided)</li>
              <li>Information submitted through our contact form</li>
              <li>Communication history with our team</li>
              <li>Anonymous website usage and analytics data</li>
            </ul>
          </section>
  
          <section>
            <h2 className="mb-4 text-2xl font-serif font-medium text-foreground">
              How We Use Your Information
            </h2>
  
            <p>
              We use the information we collect to respond to enquiries,
              communicate with prospective clients, provide our services, improve
              our website, analyse visitor behaviour, and maintain the security
              and performance of our platform.
            </p>
          </section>
  
          <section>
            <h2 className="mb-4 text-2xl font-serif font-medium text-foreground">
              Analytics & Cookies
            </h2>
  
            <p>
              We use Google Analytics and Microsoft Clarity to understand how
              visitors interact with our website. These services may collect
              anonymous information including pages visited, device information,
              browser type, session recordings, click behaviour, scroll activity,
              and general usage patterns. This information helps us improve the
              performance and user experience of our website.
            </p>
          </section>
  
          <section>
            <h2 className="mb-4 text-2xl font-serif font-medium text-foreground">
              Contact Form
            </h2>
  
            <p>
              When you submit our contact form, the information you provide is
              securely transmitted and processed so that we can respond to your
              enquiry. Messages are delivered using trusted email infrastructure
              including Resend and Zoho Mail.
            </p>
          </section>
  
          <section>
            <h2 className="mb-4 text-2xl font-serif font-medium text-foreground">
              Third-Party Services
            </h2>
  
            <p>
              Our website may use trusted third-party providers including Google,
              Microsoft, Vercel, Resend, and Zoho to operate our website, deliver
              communications, analyse traffic, and improve our services. These
              providers process information in accordance with their own privacy
              policies.
            </p>
          </section>
  
          <section>
            <h2 className="mb-4 text-2xl font-serif font-medium text-foreground">
              Data Security
            </h2>
  
            <p>
              We implement reasonable administrative, technical, and
              organisational safeguards designed to protect your information.
              While we strive to use commercially acceptable security measures, no
              method of transmission over the internet or electronic storage is
              completely secure.
            </p>
          </section>
  
          <section>
            <h2 className="mb-4 text-2xl font-serif font-medium text-foreground">
              Your Rights
            </h2>
  
            <p>
              Depending on your location, you may have the right to request access
              to, correction of, or deletion of your personal information. You
              may also object to or restrict certain processing activities where
              applicable under relevant privacy laws.
            </p>
          </section>
  
          <section>
            <h2 className="mb-4 text-2xl font-serif font-medium text-foreground">
              Changes to This Policy
            </h2>
  
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our services, legal obligations, or business practices.
              The latest version will always be available on this page.
            </p>
          </section>
  
          <section>
            <h2 className="mb-4 text-2xl font-serif font-medium text-foreground">
              Contact Us
            </h2>
  
            <p>
              If you have any questions regarding this Privacy Policy or how we
              handle your information, please contact us through our website's
              contact form or email us at{" "}
              <span className="font-medium text-foreground">
                hello@sterlingoak.net
              </span>.
            </p>
          </section>
  
        </div>
      </main>
    );
  }