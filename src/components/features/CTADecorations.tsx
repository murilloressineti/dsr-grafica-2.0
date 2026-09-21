export default function CTADecorations() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Canto superior esquerdo */}
      <div
        className="
          absolute
          -left-10 top-8
          w-22 h-12
          md:w-28 md:h-14
          rounded-full
          bg-brand-magenta
          -rotate-30
          opacity-85
        "
      />

      <div
        className="
          absolute
          -left-18 top-6
          w-14 h-14
          md:w-28 md:h-14
          rounded-full
          bg-brand-yellow
          -rotate-30
          opacity-90
        "
      />

      {/* Canto inferior esquerdo */}
      <div
        className="
          absolute
          -left-12 bottom-4
          w-22 h-12
          md:w-32 md:h-16
          rounded-full
          bg-brand-primary
          -rotate-30
          opacity-85
        "
      />

      {/* Canto superior direito */}
      <div
        className="
          absolute
          -right-12 top-12
          w-22 h-12
          md:w-32 md:h-16
          rounded-full
          bg-brand-primary
          -rotate-30
          opacity-70
        "
      />

      {/* Canto inferior direito */}
      <div
        className="
          absolute
          -right-10 bottom-4
          w-22 h-10
          md:w-28 md:h-14
          rounded-full
          bg-brand-yellow
          -rotate-30
          opacity-85
        "
      />
    </div>
  );
}
