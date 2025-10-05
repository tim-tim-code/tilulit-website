import { HeroLavv } from "@/components/sections/hero-lavv";
import { ServicesLavv } from "@/components/sections/services-lavv";
import { Philosophy } from "@/components/sections/philosophy";
import { Features } from "@/components/sections/features";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroLavv />
      <ServicesLavv />
      <Philosophy />
      <Features />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}
