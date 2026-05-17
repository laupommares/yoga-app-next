
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TestimonialSection from "./components/TestimonialSection";
import Practices from "./components/Practices";
import Header from "./components/Header";
import JourneySection from "./components/JourneySection";


export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-18">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <TestimonialSection />
        <Practices />
      </main>
      <Footer />
    </>
  );
}