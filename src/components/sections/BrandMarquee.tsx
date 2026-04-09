import { STATS } from "@/lib/constants";

const EXTRA_ITEMS = [
  { value: "Travelers'", label: "Choice" },
  { value: "Chef", label: "Marco Falcão" },
  { value: "Penha de", label: "França — SP" },
] as const;

const ALL_ITEMS = [...STATS, ...EXTRA_ITEMS];

function Diamond() {
  return (
    <span className="mx-6 text-brasa/40 select-none" aria-hidden="true">
      ◆
    </span>
  );
}

function MarqueeContent() {
  return (
    <>
      {ALL_ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          {i > 0 && <Diamond />}
          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-display font-semibold text-brasa">
              {item.value}
            </span>
            <span className="text-muted">{item.label}</span>
          </span>
        </span>
      ))}
      <Diamond />
    </>
  );
}

export default function BrandMarquee() {
  return (
    <section
      className="overflow-hidden border-y border-border bg-surface-light py-6"
      aria-label="Destaques do restaurante"
    >
      <div
        className="marquee-track"
        style={{ animationDuration: "35s" }}
      >
        {/* 3-strip technique for seamless infinite scroll */}
        <div className="marquee-strip text-sm uppercase tracking-widest">
          <MarqueeContent />
        </div>
        <div className="marquee-strip text-sm uppercase tracking-widest" aria-hidden="true">
          <MarqueeContent />
        </div>
        <div className="marquee-strip text-sm uppercase tracking-widest" aria-hidden="true">
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
}
