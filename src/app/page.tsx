
import AboutSection from "./components/AboutSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ScheduleSection from "./components/ScheduleSection";
import TestimonialSection from "./components/TestimonialSection";
import Practices from "./components/Practices";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-18">
        <HeroSection />
        <AboutSection />
        <BookingSection />
        <ScheduleSection />
        <TestimonialSection />
        <Practices />
      </main>
      <Footer />
    </>
  );
}