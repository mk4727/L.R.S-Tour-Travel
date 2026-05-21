const CarSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Car body */}
    <path d="M20 28 Q20 18 35 14 L65 10 Q80 10 90 18 L100 24 Q105 28 100 28 Z" fill="hsl(var(--primary))" />
    {/* Roof */}
    <path d="M38 14 Q40 4 55 4 L65 4 Q72 4 72 10 L72 14" fill="hsl(var(--primary))" opacity="0.85" />
    {/* Windows */}
    <path d="M42 13 Q43 7 54 7 L56 7 L56 13 Z" fill="hsl(var(--background))" opacity="0.7" />
    <path d="M60 7 L68 7 Q69 7 69 12 L69 13 L60 13 Z" fill="hsl(var(--background))" opacity="0.7" />
    {/* Headlight */}
    <circle cx="98" cy="22" r="3" fill="hsl(50 90% 60%)" opacity="0.9" />
    {/* Taillight */}
    <circle cx="22" cy="24" r="2.5" fill="hsl(0 70% 55%)" opacity="0.8" />
    {/* Wheels */}
    <circle cx="38" cy="30" r="7" fill="hsl(var(--foreground))" />
    <circle cx="38" cy="30" r="3.5" fill="hsl(var(--muted))" />
    <circle cx="82" cy="30" r="7" fill="hsl(var(--foreground))" />
    <circle cx="82" cy="30" r="3.5" fill="hsl(var(--muted))" />
  </svg>
);

const CarDivider = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="relative w-full overflow-hidden py-8">
    {/* Road line */}
    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-border" />
    <div className="absolute top-1/2 left-0 right-0 overflow-hidden h-[2px]">
      <div className="flex gap-4 animate-road-dash">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="w-8 h-[2px] bg-primary/40 flex-shrink-0" />
        ))}
      </div>
    </div>
    {/* Car */}
    <div className={reverse ? "animate-car-drive-reverse" : "animate-car-drive"}>
      <CarSVG className={`w-[120px] h-[42px] ${reverse ? "scale-x-[-1]" : ""}`} />
    </div>
  </div>
);

export { CarSVG, CarDivider };
export default CarDivider;
