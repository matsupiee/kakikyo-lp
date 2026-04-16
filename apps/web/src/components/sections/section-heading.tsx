type Props = {
  jp: string;
  en: string;
  tone?: "light" | "dark";
};

export default function SectionHeading({ jp, en, tone = "light" }: Props) {
  const isDark = tone === "dark";
  return (
    <div className="relative flex flex-col items-center text-center">
      <span
        aria-hidden
        className={["mb-5 block h-8 w-px", isDark ? "bg-background/40" : "bg-foreground/30"].join(
          " ",
        )}
      />
      <p
        className={[
          "text-[0.65rem] tracking-[0.5em] uppercase",
          isDark ? "text-background/60" : "text-muted-foreground",
        ].join(" ")}
      >
        {en}
      </p>
      <h2
        className={[
          "mt-3 font-serif-jp text-3xl tracking-[0.3em] md:text-4xl",
          isDark ? "text-background" : "text-foreground",
        ].join(" ")}
      >
        {jp}
      </h2>
      <span
        aria-hidden
        className={["mt-5 block h-8 w-px", isDark ? "bg-background/40" : "bg-foreground/30"].join(
          " ",
        )}
      />
    </div>
  );
}
