export default function TermsPage() {
    return (
      <main className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-serif font-medium text-foreground">
          Terms & Conditions
        </h1>
  
        <p className="mt-6 text-muted leading-8">
          By accessing and using the Sterling Oak website and services, you agree
          to these Terms & Conditions.
        </p>
  
        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-medium">Services</h2>
            <p className="mt-3 text-muted leading-8">
              Sterling Oak provides B2B outbound growth, lead generation,
              automation, and related consulting services. Service scope is
              defined separately in client agreements.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-medium">Intellectual Property</h2>
            <p className="mt-3 text-muted leading-8">
              All content on this website, including branding, text, graphics,
              and other materials, is the property of Sterling Oak unless
              otherwise stated.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-medium">Limitation of Liability</h2>
            <p className="mt-3 text-muted leading-8">
              Sterling Oak is not liable for indirect, incidental, or
              consequential damages arising from the use of this website or our
              services.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-medium">Changes</h2>
            <p className="mt-3 text-muted leading-8">
              We may update these Terms & Conditions at any time without prior
              notice. Continued use of our website constitutes acceptance of any
              updates.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-medium">Contact</h2>
            <p className="mt-3 text-muted leading-8">
              For questions regarding these Terms & Conditions, contact us at{" "}
              <a
                href="mailto:hello@sterlingoak.net"
                className="text-accent underline"
              >
                hello@sterlingoak.net
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    );
  }