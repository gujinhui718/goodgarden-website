export default function SectionHeading({ eyebrow, title, intro, light = false, align = "left" }: { eyebrow: string; title: string; intro?: string; light?: boolean; align?: "left" | "center" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} ${light ? "text-white" : "text-[#141d50]"}`}>
      <p className={`eyebrow ${light ? "text-[#f4e214]" : "text-[#2f3188]"}`}>{eyebrow}</p>
      <h2 className="display mt-6 max-w-4xl whitespace-pre-line text-4xl leading-[1.01] sm:text-5xl lg:text-6xl">{title}</h2>
      {intro && <p className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/[0.62]" : "text-[#27302e]/[0.64]"}`}>{intro}</p>}
    </div>
  );
}
