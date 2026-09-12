import { useEffect, useState } from "react";
import { results, testimonials } from "@/lib/data";
import { Icon, Reveal, SectionHead } from "@/lib/ui";
import { cn } from "@/utils/cn";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = testimonials[i];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, [paused]);

  const go = (d: number) => setI((p) => (p + d + testimonials.length) % testimonials.length);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container-x">
        {/* results band */}
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-brand-100 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r) => (
              <div key={r.metric} className="bg-white px-7 py-8 text-center">
                <p className="font-display bg-gradient-to-br from-brand-600 to-leaf-400 bg-clip-text text-4xl font-extrabold text-transparent">
                  {r.metric}
                </p>
                <p className="mt-2 text-[13.5px] font-bold text-ink">{r.label}</p>
                <p className="mt-0.5 text-[12px] text-ink-soft/70">{r.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHead
            align="left"
            eyebrow="Member Stories"
            title="Results that"
            highlight="stick around"
            copy="Thousands of members have rebuilt their relationship with food. Here's what that looks like in their words."
          />

          <Reveal delay={120}>
            <div
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="relative rounded-[2rem] border border-brand-100 bg-cream p-8 sm:p-10"
            >
              <span className="absolute -top-6 left-8 grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white shadow-[0_20px_36px_-18px_rgba(46,155,75,1)]">
                <Icon.Quote className="h-6 w-6" />
              </span>

              <div className="mt-4 flex items-center gap-1 text-leaf-400">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Icon.Star key={k} className="h-4 w-4" />
                ))}
              </div>

              <p key={t.name} className="mt-5 text-[17px] leading-relaxed font-medium text-ink sm:text-lg">
                “{t.quote}”
              </p>

              <div className="mt-7 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover ring-3 ring-white"
                  />
                  <div className="leading-tight">
                    <p className="text-[14.5px] font-bold text-ink">{t.name}</p>
                    <p className="text-[12.5px] text-ink-soft">{t.meta}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    aria-label="Previous testimonial"
                    onClick={() => go(-1)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-brand-200 text-ink transition hover:bg-brand-500 hover:text-white"
                  >
                    <Icon.Arrow className="h-4 w-4 rotate-180" />
                  </button>
                  <button
                    aria-label="Next testimonial"
                    onClick={() => go(1)}
                    className="grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-white transition hover:bg-brand-600"
                  >
                    <Icon.Arrow className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-6 flex gap-1.5">
                {testimonials.map((_, k) => (
                  <button
                    key={k}
                    aria-label={`Go to testimonial ${k + 1}`}
                    onClick={() => setI(k)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      k === i ? "w-8 bg-brand-500" : "w-3 bg-brand-200 hover:bg-brand-300",
                    )}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
