import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { CtaBanner } from "@/components/cta-banner"
import { Reviews } from "@/components/reviews"
import { InstagramFeed } from "@/components/instagram-feed"
import { Contacts } from "@/components/contacts"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyUs />
        <CtaBanner />
        <Reviews />
        <InstagramFeed />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
