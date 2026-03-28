
import AboutSection from "./components/AboutSection";
import BookingSection from "./components/BookingSection";
import ClassesSection from "./components/ClassesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TestimonialSection from "./components/TestimonialSection";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <HeroSection />
        <AboutSection />
        <ClassesSection />
        <TestimonialSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}