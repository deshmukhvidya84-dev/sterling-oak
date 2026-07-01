import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/Techstack";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Industries />
      <WhyUs />
      <Testimonials />
      <TechStack />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}