import { Header } from "@components/layout";
import {
  HeroSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
} from "@components/sections";

export default function App() {
  return (
    <div className="bg-bg-default pt-20">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <HeroSection />

      {/* Stats */}
      <StatsSection />

      {/* Services */}
      <ServicesSection />

      {/* TestimonialCard */}
      <TestimonialsSection />
    </div>
  );
}
