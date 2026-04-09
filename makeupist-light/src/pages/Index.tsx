import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Portfolio />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
