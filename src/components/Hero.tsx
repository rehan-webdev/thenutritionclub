import { heroStats, highlights, marqueeItems, testimonials } from "@/lib/data";
import { Button, Icon, Reveal } from "@/lib/ui";

const HERO_IMG =
  "https://images.pexels.com/photos/8844901/pexels-photo-8844901.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-10 pb-0 lg:pt-16">
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute top-24 -right-32 h-[26rem] w-[26rem] rounded-full bg-leaf-100/70 blur-3xl" />
        <svg className="absolute top-10 right-1/3 h-24 w-24 text-leaf-200 animate-spin-slow" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 10" />
        </svg>
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* copy */}
        <div className="relative z-10 max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50/70 py-1.5 pr-4 pl-1.5 text-xs font-semibold text-brand-700">
              <span className="rounded-full bg-brand-500 px-2.5 py-1 text-[10px] tracking-wider text-white uppercase">
                New
              </span>
              Free 15-min discovery call this month
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-extrabold text-ink sm:text-5xl lg:text-[3.65rem]">
              Eat better, live{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-500">stronger</span>
                <svg
                  className="absolute -bottom-2 left-0 z-0 h-4 w-full text-leaf-300"
                  viewBox="0 0 240 16"
                  preserveAspectRatio="none"
                >
                  <path d="M3 11c60-9 140-11 234-5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              — with a dietitian in your corner.
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 text-[15.5px] leading-relaxed text-ink-soft">
              The Nutrition Club is a clinical nutrition practice built on lab data, real
              food and weekly accountability. No crash diets, no powders — just a plan
              designed around your body, your kitchen and your calendar.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#book">
                Book Free Consultation
                <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="#programs" variant="outline">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-white">
                  <Icon.Play className="h-3 w-3" />
                </span>
                Explore Programs
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {testimonials.map((t) => (
                    <img
                      key={t.name}
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      className="h-11 w-11 rounded-full border-[3px] border-white object-cover shadow-sm"
                    />
                  ))}
                  <span className="grid h-11 w-11 place-items-center rounded-full border-[3px] border-white bg-brand-500 text-[11px] font-bold text-white">
                    12k
                  </span>
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-leaf-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon.Star key={i} className="h-3.5 w-3.5" />
                    ))}
                    <span className="ml-1 font-bold text-ink">4.9</span>
                  </div>
                  <p className="text-ink-soft">from 2,400+ member reviews</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* visual */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-[30rem]">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-100 via-leaf-50 to-white" />
            <div className="absolute -top-6 -right-4 -z-10 h-40 w-40 rounded-full bg-leaf-300/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] rounded-tr-[6rem] rounded-bl-[6rem] shadow-[0_40px_80px_-40px_rgba(11,31,20,0.55)]">
              <img
                src={HERO_IMG}
                alt="Dietitian consulting a member about fresh produce"
                className="h-[30rem] w-full object-cover sm:h-[34rem]"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute right-5 bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 p-3 backdrop-blur">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500 text-white">
                  <Icon.Video className="h-5 w-5" />
                </span>
                <div className="text-[13px] leading-tight">
                  <p className="font-bold text-ink">Online & in-clinic consults</p>
                  <p className="text-ink-soft">Same dietitian, every session</p>
                </div>
              </div>
            </div>

            {/* floating card: progress */}
            <div className="animate-float absolute -top-6 -left-4 w-52 rounded-2xl border border-brand-50 bg-white p-4 shadow-[0_24px_50px_-28px_rgba(11,31,20,0.6)] sm:-left-10">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold tracking-wider text-ink-soft uppercase">
                  Weekly progress
                </p>
                <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-600">
                  +12%
                </span>
              </div>
              <div className="mt-3 flex h-16 items-end gap-1.5">
                {[38, 52, 44, 66, 58, 80, 92].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`w-full rounded-md ${i > 4 ? "bg-brand-500" : "bg-leaf-200"}`}
                  />
                ))}
              </div>
              <p className="mt-2 text-[11px] text-ink-soft">Adherence score · this week</p>
            </div>

            {/* floating card: dietitian */}
            <div className="animate-float-slow absolute -right-3 bottom-24 w-48 rounded-2xl border border-brand-50 bg-white p-4 shadow-[0_24px_50px_-28px_rgba(11,31,20,0.6)] sm:-right-8">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf-100 text-leaf-700">
                  <Icon.Scale className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] text-ink-soft">Avg. result</p>
                  <p className="text-base font-extrabold text-ink">-8.4 kg</p>
                </div>
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-brand-50">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand-500 to-leaf-400" />
              </div>
              <p className="mt-2 text-[11px] text-ink-soft">in first 90 days</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* stat bar */}
      <div className="container-x mt-16">
        <Reveal>
          <div className="grid divide-y divide-brand-100 overflow-hidden rounded-[2rem] border border-brand-100 bg-cream sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
            {heroStats.map((s) => (
              <div key={s.label} className="px-8 py-7 text-center">
                <p className="font-display text-3xl font-extrabold text-brand-600">{s.value}</p>
                <p className="mt-1 text-[13px] font-medium text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* highlights */}
      <div className="container-x mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h, i) => {
          const Ico = Icon[h.icon];
          return (
            <Reveal key={h.title} delay={i * 70}>
              <div className="group h-full rounded-3xl border border-brand-50 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_28px_60px_-40px_rgba(46,155,75,0.9)]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                  <Ico className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{h.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{h.copy}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* marquee */}
      <div className="mt-16 border-y border-brand-50 bg-cream py-5">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
            {[...marqueeItems, ...marqueeItems].map((m, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-2.5 text-sm font-semibold tracking-wide whitespace-nowrap text-ink-soft/70"
              >
                <Icon.Award className="h-4 w-4 text-leaf-400" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
