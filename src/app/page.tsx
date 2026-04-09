import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import Hero from "@/components/sections/Hero";
import BrandMarquee from "@/components/sections/BrandMarquee";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Gallery } from "@/components/sections/Gallery";
import Space from "@/components/sections/Space";
import Reviews from "@/components/sections/Reviews";
import Numbers from "@/components/sections/Numbers";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Attention */}
        <Hero />
        <BrandMarquee />

        {/* 2. Identity */}
        <About />

        {/* 3. Interest — what we serve */}
        <Menu />

        {/* 4. Desire — visual proof */}
        <Gallery />

        {/* 5. Experience — more than food */}
        <Space />

        {/* 6. Social proof */}
        <Reviews />
        <Numbers />

        {/* 7. Objection handling */}
        <FAQ />

        {/* 8. Action */}
        <CTAFinal />

        {/* 9. Contact & directions */}
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
