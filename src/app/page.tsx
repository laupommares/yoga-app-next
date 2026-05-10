
import AboutSection from "./components/AboutSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ScheduleSection from "./components/ScheduleSection";
import TestimonialSection from "./components/TestimonialSection";
import Practices from "./components/Practices";
import Header from "./components/Header";


export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-18">
        <HeroSection />
        <AboutSection />
        <BookingSection />
        <TestimonialSection />
        <Practices />
      </main>
      <Footer />
    </>
  );
}