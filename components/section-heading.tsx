export default function SectionHeading({ eyebrow, title, intro, light = false, align = "left" }: { eyebrow: string; title: string; intro?: string; light?: boolean; align?: "left" | "center" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} ${light ? "text-white" : "text-garden-900"}`}>
      <p className={`eyebrow ${light ? "text-gold-300" : "text-gold-500"}`}>{eyebrow}</p>
      <h2 className="display mt-4 max-w-3xl whitespace-pre-line text-4xl leading-[1.03] sm:text-5xl lg:text-6xl">{title}</h2>
      {intro && <p className={`mt-5 max-w-xl text-base leading-7 sm:text-lg ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/70" : "text-garden-900/65"}`}>{intro}</p>}
    </div>
  );
}
