import { Header, Section } from "@components/layout";
import {
  HeroSection,
  ServicesSection,
  StatsSection,
} from "@components/sections";
import { TestimonialCard } from "@components/features";

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
      <Section className="p-0">
        <div className="flex gap-10 p-10 border">
          {[
            {
              rating: 4.5,
              testimonial:
                "Precisei encadernar meu TCC de última hora e entregaram no mesmo dia. Salvaram minha apresentação!",
              name: "Ana Lima",
              role: "Estudante universitária",
              avatarUrl: undefined,
            },
            {
              rating: 4.5,
              testimonial:
                "Precisei encadernar meu TCC de última hora e entregaram no mesmo dia. Salvaram minha apresentação!",
              name: "Ana Lima",
              role: "Estudante universitária",
              avatarUrl: undefined,
            },
            {
              rating: 4.5,
              testimonial:
                "Precisei encadernar meu TCC de última hora e entregaram no mesmo dia. Salvaram minha apresentação!",
              name: "Ana Lima",
              role: "Estudante universitária",
              avatarUrl: undefined,
            },
          ].map((item, index) => (
            <TestimonialCard
              key={index}
              rating={item.rating}
              testimonial={item.testimonial}
              name={item.name}
              role={item.role}
              avatarUrl={item.avatarUrl}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
