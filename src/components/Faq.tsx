import { useState } from "react";
import { faqs } from "@/lib/data";
import { Icon, Reveal, SectionHead } from "@/lib/ui";
import { cn } from "@/utils/cn";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-cream py-24">
      <div className="pointer-events-none absolute top-10 right-0 -z-10 h-80 w-80 rounded-full bg-leaf-100/60 blur-3xl" />
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHead
            align="left"
            eyebrow="FAQ"
            title="Questions we hear"
            highlight="every week"
            copy="Still unsure about something? Our care team replies to every message within a few hours."
          />
          <Reveal delay={150}>
            <div className="mt-8 rounded-[1.75rem] border border-brand-100 bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white">
                  <Icon.Chat className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[14px] font-bold text-ink">Still have a question?</p>
                  <p className="text-[12.5px] text-ink-soft">Chat with a dietitian, not a bot.</p>
                </div>
              </div>
              <a
                href="#book"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[13.5px] font-bold text-white transition hover:bg-brand-600"
              >
                Ask a Dietitian <Icon.Arrow className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                    isOpen ? "border-brand-300 shadow-[0_28px_60px_-45px_rgba(46,155,75,1)]" : "border-brand-100",
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span
                      className={cn(
                        "text-[15px] font-bold transition",
                        isOpen ? "text-brand-600" : "text-ink",
                      )}
                    >
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "grid h-9 w-9 shrink-0 place-items-center rounded-full transition duration-300",
                        isOpen ? "rotate-45 bg-brand-500 text-white" : "bg-brand-50 text-brand-600",
                      )}
                    >
                      <Icon.Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-400 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[13.5px] leading-relaxed text-ink-soft">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
