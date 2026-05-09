import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { WaveDivider } from "@/components/ui/WaveDivider";
import Hero from "@/components/sections/Hero";
import BrandMarquee from "@/components/sections/BrandMarquee";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { Chef } from "@/components/sections/Chef";
import { Menu } from "@/components/sections/Menu";
import { About } from "@/components/sections/About";
import { History } from "@/components/sections/History";
import { Gallery } from "@/components/sections/Gallery";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import Space from "@/components/sections/Space";
import Numbers from "@/components/sections/Numbers";
import Delivery from "@/components/sections/Delivery";
import Reviews from "@/components/sections/Reviews";
import { Press } from "@/components/sections/Press";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Attention — hook the visitor */}
        <Hero />
        <BrandMarquee />

        {/* 2. Desire — what we serve (show food before story) */}
        <SignatureDishes />
        <Chef />
        <WaveDivider />
        <Menu />

        {/* 3. Identity — who we are (now that they're hungry) */}
        <About />
        <History />

        {/* 4. Visual proof — immersive cinema block */}
        <Gallery />
        <VideoShowcase />

        {/* 5. Experience — more than food */}
        <Space />

        {/* 6. Social proof — trust signals */}
        <Numbers />
        <Delivery />
        <Reviews />
        <Press />

        {/* 7. Objection handling */}
        <FAQ />

        {/* 8. Action — convert */}
        <CTAFinal />

        {/* 9. Contact & directions */}
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
