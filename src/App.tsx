import { Badge, Button, Icon, Text } from "@components/ui";
import { Header, Section } from "@components/layout";
import { ServicesSection, StatsSection } from "@components/sections";
import { TestimonialCard } from "@components/features";

import {
  ArrowUpRight,
  BuildingOffice,
  CaretDown,
  CaretLeft,
  CaretRight,
  CaretUp,
  Clock,
  Coins,
  Envelope,
  Files,
  GraduationCap,
  MapPin,
  Package,
  Phone,
  Star,
  StarHalf,
  WhatsappLogo,
} from "./assets/icons";

export default function App() {
  return (
    <div className="bg-bg-default pt-20">
      {/* HEADER */}
      <Header />

      {/* Stats */}
      <StatsSection />

      {/* Services */}
      <ServicesSection />

      {/* TestimonialCard */}
      <Section>
        <div className="flex gap-10 p-10 my-10">
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
