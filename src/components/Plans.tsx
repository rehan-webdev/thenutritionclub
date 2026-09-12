import { useState } from "react";
import { plans } from "@/lib/data";
import { Icon, Reveal, SectionHead } from "@/lib/ui";
import { cn } from "@/utils/cn";

export default function Plans() {
  const [quarterly, setQuarterly] = useState(false);

  return (
    <section id="plans" className="relative scroll-mt-28 overflow-hidden bg-cream py-24">
      <div className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl" />
      <div className="container-x">
        <SectionHead
          eyebrow="Membership Plans"
          title="Transparent pricing,"
          highlight="no lock-ins"
          copy="Cancel any time. Every plan includes your personalised meal blueprint, recipe library and dietitian access."
        />

        <Reveal delay={100}>
          <div className="mt-9 flex items-center justify-center gap-4">
            <span className={cn("text-sm font-semibold", !quarterly ? "text-ink" : "text-ink-soft/60")}>
              Monthly
            </span>
            <button
              onClick={() => setQuarterly((q) => !q)}
              aria-label="Toggle billing period"
              className={cn(
                "relative h-8 w-16 rounded-full transition-colors duration-300",
                quarterly ? "bg-brand-500" : "bg-brand-200",
              )}
            >
              <span
                className={cn(
                  "absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-all duration-300",
                  quarterly ? "left-9" : "left-1",
                )}
              />
            </button>
            <span className={cn("text-sm font-semibold", quarterly ? "text-ink" : "text-ink-soft/60")}>
              Quarterly
            </span>
            <span className="rounded-full bg-leaf-100 px-3 py-1 text-[11px] font-bold text-leaf-700">
              Save up to 15%
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-8 transition duration-300",
                  p.highlight
                    ? "border-transparent bg-ink text-white shadow-[0_50px_90px_-50px_rgba(11,31,20,1)] lg:-mt-6 lg:pb-12"
                    : "border-brand-100 bg-white hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-[0_40px_70px_-50px_rgba(46,155,75,1)]",
                )}
              >
                {p.highlight && (
                  <>
                    <div className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-brand-600/40 blur-3xl" />
                    <span className="absolute top-6 right-6 rounded-full bg-leaf-400 px-3 py-1 text-[10.5px] font-extrabold tracking-wider text-ink uppercase">
                      Most popular
                    </span>
                  </>
                )}

                <h3 className={cn("text-xl font-extrabold", p.highlight ? "text-white" : "text-ink")}>
                  {p.name}
                </h3>
                <p className={cn("mt-2 text-[13.5px] leading-relaxed", p.highlight ? "text-white/70" : "text-ink-soft")}>
                  {p.blurb}
                </p>

                <div className="mt-7 flex items-end gap-1.5">
                  <span
                    className={cn(
                      "font-display text-4xl leading-none font-extrabold",
                      p.highlight ? "text-leaf-300" : "text-brand-600",
                    )}
                  >
                    PKR {(quarterly ? p.quarterly : p.monthly).toLocaleString("en-PK")}
                  </span>
                  <span className={cn("mb-1 text-[13px] font-semibold", p.highlight ? "text-white/60" : "text-ink-soft")}>
                    /{quarterly ? "quarter" : "month"}
                  </span>
                </div>
                <p className={cn("mt-1 text-[12px]", p.highlight ? "text-white/50" : "text-ink-soft/70")}>
                  {quarterly ? "Billed once every 3 months" : "Billed monthly · cancel anytime"}
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[13.5px]">
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          p.highlight ? "bg-leaf-400/20 text-leaf-300" : "bg-brand-50 text-brand-600",
                        )}
                      >
                        <Icon.Check className="h-3 w-3" />
                      </span>
                      <span className={p.highlight ? "text-white/80" : "text-ink-soft"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition",
                    p.highlight
                      ? "bg-leaf-400 text-ink hover:bg-leaf-300"
                      : "bg-brand-500 text-white hover:bg-brand-600",
                  )}
                >
                  Choose {p.name} <Icon.Arrow className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] font-medium text-ink-soft">
            <span className="flex items-center gap-2">
              <Icon.Shield className="h-4 w-4 text-brand-500" /> 90-day progress guarantee
            </span>
            <span className="flex items-center gap-2">
              <Icon.Check className="h-4 w-4 text-brand-500" /> No-cost EMI available
            </span>
            <span className="flex items-center gap-2">
              <Icon.Users className="h-4 w-4 text-brand-500" /> Family add-on at 40% off
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
