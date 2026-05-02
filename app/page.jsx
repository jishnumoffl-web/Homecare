import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Locations from "@/components/Locations";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ClientProfile from "../components/Profile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ClientProfile />
        <WhyUs />
        <Locations />
        <Process />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
