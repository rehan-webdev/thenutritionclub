import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

/* ---------------- Scroll reveal ---------------- */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "is-visible", className)}
    >
      {children}
    </Comp>
  );
}

/* ---------------- Buttons ---------------- */
export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  full,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline" | "light";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  full?: boolean;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200";
  const styles = {
    primary:
      "bg-brand-500 text-white shadow-[0_16px_34px_-14px_rgba(46,155,75,0.9)] hover:bg-brand-600 hover:-translate-y-0.5",
    ghost: "bg-ink text-white hover:bg-brand-600 hover:-translate-y-0.5",
    outline:
      "border border-brand-200 bg-white text-ink hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5",
    light: "bg-white text-brand-700 hover:bg-brand-50 hover:-translate-y-0.5",
  }[variant];

  const cls = cn(base, styles, full && "w-full", className);
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

/* ---------------- Section heading ---------------- */
export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase",
        tone === "light" ? "bg-brand-50 text-brand-700" : "bg-white/10 text-leaf-200",
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-leaf-400" />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  highlight,
  copy,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  copy?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <Reveal>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={cn(
            "mt-5 text-3xl leading-[1.12] font-extrabold sm:text-4xl lg:text-[2.75rem]",
            tone === "light" ? "text-ink" : "text-white",
          )}
        >
          {title}{" "}
          {highlight && (
            <span
              className={cn(
                "relative inline-block",
                tone === "light" ? "text-brand-500" : "text-leaf-300",
              )}
            >
              {highlight}
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-leaf-400"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8c40-6 92-8 196-4"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          )}
        </h2>
      </Reveal>
      {copy && (
        <Reveal delay={150}>
          <p
            className={cn(
              "mt-5 text-[15px] leading-relaxed",
              tone === "light" ? "text-ink-soft" : "text-white/70",
            )}
          >
            {copy}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Icons ---------------- */
type IconProps = { className?: string };
const s = (p?: string) => p ?? "h-5 w-5";

export const Icon = {
  Leaf: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  Scale: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" /><path d="M5 21h14" /><path d="m3 9 4-6 4 6a4 4 0 0 1-8 0Z" /><path d="m13 9 4-6 4 6a4 4 0 0 1-8 0Z" />
    </svg>
  ),
  Heart: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  Activity: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  Stomach: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3v4a4 4 0 0 0 4 4h1a5 5 0 0 1 5 5 5 5 0 0 1-9.9 1" />
      <path d="M6 3v5a9 9 0 0 0 3 6.7" /><circle cx="7" cy="18" r="2" />
    </svg>
  ),
  Baby: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12h.01" /><path d="M15 12h.01" /><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c1.2 0 2 .2 3 .6" />
    </svg>
  ),
  Flask: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6" /><path d="M10 3v6.2a2 2 0 0 1-.3 1L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3l-5.2-8.8a2 2 0 0 1-.3-1V3" /><path d="M6.5 15h11" />
    </svg>
  ),
  Building: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="8" height="17" rx="1.5" /><rect x="13" y="9" width="8" height="12" rx="1.5" />
      <path d="M6 8h2M6 12h2M6 16h2M16 13h2M16 17h2" />
    </svg>
  ),
  Check: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  ),
  Arrow: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
    </svg>
  ),
  Phone: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  ),
  Mail: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" />
    </svg>
  ),
  Pin: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Clock: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
    </svg>
  ),
  Star: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={s(className)}>
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4 6.2 20.4l1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z" />
    </svg>
  ),
  Quote: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={s(className)}>
      <path d="M9.5 5C6.5 6.5 5 9.2 5 13v6h6v-6H8c0-2.4.8-4.1 2.6-5.2L9.5 5Zm9 0C15.5 6.5 14 9.2 14 13v6h6v-6h-3c0-2.4.8-4.1 2.6-5.2L18.5 5Z" />
    </svg>
  ),
  Play: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={s(className)}>
      <path d="M8 5.2v13.6c0 .8.9 1.3 1.6.9l11-6.8c.6-.4.6-1.4 0-1.8l-11-6.8c-.7-.4-1.6.1-1.6.9Z" />
    </svg>
  ),
  Shield: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Video: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="14" height="12" rx="2" /><path d="m16 11 6-3v8l-6-3Z" />
    </svg>
  ),
  Chat: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12Z" />
    </svg>
  ),
  Plus: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={s(className)} strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Apple: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8c-1.5-1.4-3-2-4.5-1.6C5.2 7 4 9.2 4 12c0 4 2.6 9 4.8 9 .9 0 1.7-.6 3.2-.6s2.3.6 3.2.6C17.4 21 20 16 20 12c0-2.8-1.2-5-3.5-5.6C15 6 13.5 6.6 12 8Z" />
      <path d="M12 8c0-2 1-3.6 3-4" />
    </svg>
  ),
  Users: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 20v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </svg>
  ),
  Award: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="6" /><path d="m8.2 14-1.4 7L12 18.5 17.2 21l-1.4-7" />
    </svg>
  ),
  Calendar: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={s(className)} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  ),
  Menu: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={s(className)} strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  Close: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={s(className)} strokeLinecap="round">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
};

export type IconName = keyof typeof Icon;
