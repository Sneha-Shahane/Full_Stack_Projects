import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import FeaturedProperties from "@/components/FeaturedProperties";
import PropertyListings from "@/components/PropertyListings";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <HeroSlider />
    <FeaturedProperties />
    <PropertyListings />
    <AboutSection />
    <Testimonials />
    <ContactForm />
    <MapSection />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
