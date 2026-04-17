import { Header, Footer } from "@components/layout";
import {
  HeroSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
  DifferentialSection,
  FAQSection,
  CTASection,
} from "@components/sections";

export default function App() {
  return (
    <div className="bg-bg-default pt-20">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <DifferentialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
