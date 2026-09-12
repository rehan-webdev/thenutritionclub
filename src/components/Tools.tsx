import { useMemo, useState } from "react";
import { Icon, Reveal, SectionHead } from "@/lib/ui";
import { cn } from "@/utils/cn";

/* ---------- shared field ---------- */
function Slider({
  label,
  value,
  set,
  min,
  max,
  unit,
  step = 1,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  unit: string;
  step?: number;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-[13px] font-semibold text-ink-soft">{label}</label>
        <span className="font-display text-base font-extrabold text-ink">
          {value}
          <span className="ml-0.5 text-[11px] font-semibold text-ink-soft">{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-brand-100"
      />
    </div>
  );
}

function Pill({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-xl px-3 py-2.5 text-[12.5px] font-semibold transition",
        active
          ? "bg-brand-500 text-white shadow-[0_10px_24px_-14px_rgba(46,155,75,1)]"
          : "bg-brand-50/70 text-ink-soft hover:bg-brand-100",
      )}
    >
      {children}
    </button>
  );
}

/* ---------- BMI ---------- */
const BMI_BANDS = [
  { max: 18.5, label: "Underweight", color: "#60a5fa", note: "Focus on nutrient-dense weight gain." },
  { max: 25, label: "Healthy weight", color: "#2E9B4B", note: "Great range — let's maintain it." },
  { max: 30, label: "Overweight", color: "#f59e0b", note: "A structured plan can shift this fast." },
  { max: 100, label: "Obese", color: "#ef4444", note: "Clinical supervision is recommended." },
];

function BmiTool() {
  const [h, setH] = useState(168);
  const [w, setW] = useState(72);

  const bmi = useMemo(() => +(w / Math.pow(h / 100, 2)).toFixed(1), [h, w]);
  const band = BMI_BANDS.find((b) => bmi < b.max) ?? BMI_BANDS[3];
  const pos = Math.min(100, Math.max(0, ((bmi - 14) / (40 - 14)) * 100));
  const ideal = {
    min: Math.round(18.5 * Math.pow(h / 100, 2)),
    max: Math.round(24.9 * Math.pow(h / 100, 2)),
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-6">
        <Slider label="Height" value={h} set={setH} min={130} max={210} unit="cm" />
        <Slider label="Weight" value={w} set={setW} min={35} max={160} unit="kg" />
        <div className="rounded-2xl bg-brand-50/70 p-4 text-[13px] leading-relaxed text-ink-soft">
          <span className="font-semibold text-ink">Healthy weight range for you:</span>{" "}
          {ideal.min}–{ideal.max} kg. BMI is a screening tool — we also measure body fat,
          muscle mass and visceral fat in clinic.
        </div>
      </div>

      <div className="flex flex-col justify-center rounded-3xl border border-brand-100 bg-white p-6">
        <p className="text-[11px] font-bold tracking-widest text-ink-soft uppercase">Your BMI</p>
        <div className="mt-1 flex items-end gap-3">
          <span className="font-display text-5xl leading-none font-extrabold" style={{ color: band.color }}>
            {isFinite(bmi) ? bmi : "--"}
          </span>
          <span
            className="mb-1 rounded-full px-3 py-1 text-[12px] font-bold text-white"
            style={{ backgroundColor: band.color }}
          >
            {band.label}
          </span>
        </div>

        <div className="relative mt-7">
          <div className="h-2.5 w-full rounded-full bg-gradient-to-r from-sky-400 via-brand-500 via-45% to-red-500" />
          <div
            className="absolute -top-1.5 h-5.5 w-5.5 -translate-x-1/2 rounded-full border-4 border-white shadow-md transition-all duration-300"
            style={{ left: `${pos}%`, backgroundColor: band.color }}
          />
          <div className="mt-2 flex justify-between text-[10.5px] font-semibold text-ink-soft/70">
            <span>14</span>
            <span>18.5</span>
            <span>25</span>
            <span>30</span>
            <span>40</span>
          </div>
        </div>

        <p className="mt-5 text-[13px] text-ink-soft">{band.note}</p>
        <a
          href="#book"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-brand-600"
        >
          Get a plan for this result <Icon.Arrow className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

/* ---------- Calories / Macros ---------- */
const ACTIVITY = [
  { key: "sed", label: "Sedentary", f: 1.2 },
  { key: "light", label: "Light (1-3d)", f: 1.375 },
  { key: "mod", label: "Moderate (3-5d)", f: 1.55 },
  { key: "high", label: "Very active", f: 1.725 },
];
const GOALS = [
  { key: "lose", label: "Lose fat", adj: -0.2, p: 0.35, c: 0.35, f: 0.3 },
  { key: "maintain", label: "Maintain", adj: 0, p: 0.28, c: 0.44, f: 0.28 },
  { key: "gain", label: "Build muscle", adj: 0.15, p: 0.3, c: 0.45, f: 0.25 },
];

function CalorieTool() {
  const [sex, setSex] = useState<"male" | "female">("female");
  const [age, setAge] = useState(32);
  const [h, setH] = useState(165);
  const [w, setW] = useState(68);
  const [act, setAct] = useState("mod");
  const [goal, setGoal] = useState("lose");

  const data = useMemo(() => {
    const bmr = 10 * w + 6.25 * h - 5 * age + (sex === "male" ? 5 : -161);
    const factor = ACTIVITY.find((a) => a.key === act)!.f;
    const g = GOALS.find((x) => x.key === goal)!;
    const tdee = bmr * factor;
    const target = Math.round((tdee * (1 + g.adj)) / 10) * 10;
    return {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      target,
      protein: Math.round((target * g.p) / 4),
      carbs: Math.round((target * g.c) / 4),
      fat: Math.round((target * g.f) / 9),
      water: ((w * 0.033) as number).toFixed(1),
      split: g,
    };
  }, [sex, age, h, w, act, goal]);

  const macros = [
    { name: "Protein", grams: data.protein, pct: data.split.p, color: "bg-brand-500" },
    { name: "Carbs", grams: data.carbs, pct: data.split.c, color: "bg-leaf-400" },
    { name: "Fat", grams: data.fat, pct: data.split.f, color: "bg-amber-400" },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-2">
          <Pill active={sex === "female"} onClick={() => setSex("female")}>
            Female
          </Pill>
          <Pill active={sex === "male"} onClick={() => setSex("male")}>
            Male
          </Pill>
        </div>
        <Slider label="Age" value={age} set={setAge} min={14} max={85} unit="yrs" />
        <Slider label="Height" value={h} set={setH} min={130} max={210} unit="cm" />
        <Slider label="Weight" value={w} set={setW} min={35} max={160} unit="kg" />

        <div>
          <p className="mb-2 text-[13px] font-semibold text-ink-soft">Activity level</p>
          <div className="grid grid-cols-2 gap-2">
            {ACTIVITY.map((a) => (
              <Pill key={a.key} active={act === a.key} onClick={() => setAct(a.key)}>
                {a.label}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[13px] font-semibold text-ink-soft">Your goal</p>
          <div className="grid grid-cols-3 gap-2">
            {GOALS.map((g) => (
              <Pill key={g.key} active={goal === g.key} onClick={() => setGoal(g.key)}>
                {g.label}
              </Pill>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-3xl border border-brand-100 bg-white p-6">
        <p className="text-[11px] font-bold tracking-widest text-ink-soft uppercase">
          Daily target
        </p>
        <p className="font-display mt-1 text-5xl leading-none font-extrabold text-brand-600">
          {data.target.toLocaleString()}
          <span className="ml-1 text-base font-bold text-ink-soft">kcal</span>
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-cream p-3">
            <p className="text-[11px] text-ink-soft">BMR (at rest)</p>
            <p className="font-display text-lg font-extrabold text-ink">{data.bmr} kcal</p>
          </div>
          <div className="rounded-2xl bg-cream p-3">
            <p className="text-[11px] text-ink-soft">Maintenance</p>
            <p className="font-display text-lg font-extrabold text-ink">{data.tdee} kcal</p>
          </div>
        </div>

        <p className="mt-6 text-[11px] font-bold tracking-widest text-ink-soft uppercase">
          Suggested macros
        </p>
        <div className="mt-3 flex h-2.5 w-full overflow-hidden rounded-full">
          {macros.map((m) => (
            <div key={m.name} className={m.color} style={{ width: `${m.pct * 100}%` }} />
          ))}
        </div>
        <ul className="mt-4 space-y-2.5">
          {macros.map((m) => (
            <li key={m.name} className="flex items-center justify-between text-[13px]">
              <span className="flex items-center gap-2 text-ink-soft">
                <span className={cn("h-2.5 w-2.5 rounded-full", m.color)} />
                {m.name} · {Math.round(m.pct * 100)}%
              </span>
              <span className="font-bold text-ink">{m.grams} g</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-brand-50/70 px-4 py-3 text-[12.5px] text-ink-soft">
          <Icon.Leaf className="h-4 w-4 shrink-0 text-brand-500" />
          Aim for about <b className="mx-1 text-ink">{data.water} L</b> of water daily.
        </div>
      </div>
    </div>
  );
}

/* ---------- Section wrapper ---------- */
const TABS = [
  { key: "bmi", label: "BMI Checker", icon: "Scale" as const },
  { key: "cal", label: "Calorie & Macros", icon: "Activity" as const },
];

export default function Tools() {
  const [tab, setTab] = useState("bmi");

  return (
    <section id="tools" className="relative scroll-mt-28 overflow-hidden bg-ink py-24">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-30">
        <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-brand-600/50 blur-3xl" />
        <div className="absolute right-0 -bottom-24 h-80 w-80 rounded-full bg-leaf-600/40 blur-3xl" />
      </div>

      <div className="container-x relative">
        <SectionHead
          tone="dark"
          eyebrow="Free Health Tools"
          title="Know your numbers"
          highlight="in 30 seconds"
          copy="Run a quick check, then bring the result to your free consultation — our dietitians will turn it into an actual plan."
        />

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-4xl rounded-[2.25rem] border border-white/10 bg-white p-3 shadow-[0_50px_100px_-50px_rgba(0,0,0,0.8)] sm:p-4">
            <div className="flex gap-2 rounded-2xl bg-cream p-1.5">
              {TABS.map((t) => {
                const Ico = Icon[t.icon];
                return (
                  <button
                    key={t.key}
                    onClick={() => setTab(t.key)}
                    className={cn(
                      "flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-[13.5px] font-bold transition",
                      tab === t.key
                        ? "bg-white text-brand-600 shadow-sm"
                        : "text-ink-soft hover:text-ink",
                    )}
                  >
                    <Ico className="h-4 w-4" />
                    {t.label}
                  </button>
                );
              })}
            </div>

            <div className="p-4 sm:p-6">{tab === "bmi" ? <BmiTool /> : <CalorieTool />}</div>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-[12.5px] text-white/50">
          These calculators are for guidance only and don't replace a clinical assessment.
        </p>
      </div>
    </section>
  );
}
