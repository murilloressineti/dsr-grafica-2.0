import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Text } from "../ui";

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  avatarUrl?: string;
  rating: number;
  testimonial: string;
  className?: string;
}

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1 mb-6">
      {/* ID único para o gradiente usando o valor do rating para evitar conflitos */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="half-star-gradient">
            <stop offset="50%" stopColor="#FFB812" />
            <stop offset="50%" stopColor="#fcfcfd" />{" "}
            {/* Cor da estrela vazia */}
          </linearGradient>
        </defs>
      </svg>

      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;

        // Estrela cheia
        if (starNumber <= Math.floor(rating)) {
          return (
            <Star
              key={index}
              className="w-6 h-6 fill-[#FFB812] text-[#FFB812]"
            />
          );
        }

        // Estrela metade (se o rating for x.5)
        if (starNumber === Math.ceil(rating) && rating % 1 !== 0) {
          return (
            <Star
              key={index}
              className="w-6 h-6 text-[#FFB812]"
              style={{ fill: "url(#half-star-gradient)" }}
            />
          );
        }

        // Estrela vazia
        return (
          <Star
            key={index}
            className="w-6 h-6 fill-neutral-100 text-[#FFB812]"
          />
        );
      })}
    </div>
  );
};

export default function TestimonialCard({
  name,
  role,
  avatarUrl,
  rating,
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-6 gap-12 bg-neutral-100 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className,
      )}
    >
      <div className="flex flex-col gap-6">
        <RatingStars rating={rating} />

        <Text
          variant="body-md"
          className="font-normal leading-relaxed text-neutral-600"
        >
          “{testimonial}”
        </Text>
      </div>

      {/* Perfil do Cliente (Avatar, Nome, Cargo) */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={`Foto de ${name}`}
            className="w-11 h-11 rounded-full object-cover shrink-0"
          />
        ) : (
          // Fallback caso não tenha foto (iniciais do nome)
          <div className="w-11 h-11 rounded-full bg-brand-surface flex items-center justify-center text-brand-primary font-semibold text-lg shrink-0 border">
            {name.charAt(0).toUpperCase()}
          </div>
        )}

        {/* Nome e Cargo */}
        <div className="flex flex-col">
          <Text variant="body-md" className="font-semibold text-neutral-900">
            {name}
          </Text>
          <Text variant="body-sm" TextColor={"secondary"}>
            {role}
          </Text>
        </div>
      </div>
    </div>
  );
}
