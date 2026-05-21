import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CarsSection from "@/components/CarsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import CarDivider from "@/components/CarAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CarDivider />
      <AboutSection />
      <CarDivider reverse />
      <CarsSection />
      <CarDivider />
      <TestimonialsSection />
      <CarDivider reverse />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
