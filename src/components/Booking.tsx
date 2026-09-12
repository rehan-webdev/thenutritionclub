import { useState, type FormEvent } from "react";
import { clinic, programs, timeSlots } from "@/lib/data";
import { Icon, Reveal, SectionHead } from "@/lib/ui";
import { cn } from "@/utils/cn";

type Form = {
  name: string;
  phone: string;
  email: string;
  program: string;
  mode: "video" | "clinic";
  date: string;
  slot: string;
  notes: string;
};

const empty: Form = {
  name: "",
  phone: "",
  email: "",
  program: programs[0].title,
  mode: "video",
  date: "",
  slot: "",
  notes: "",
};

const inputCls =
  "w-full rounded-2xl border border-brand-100 bg-white px-4 py-3.5 text-[14px] text-ink outline-none transition placeholder:text-ink-soft/50 focus:border-brand-400 focus:ring-4 focus:ring-brand-100";

function Label({ children }: { children: React.ReactNode }) {
  return <label className="mb-1.5 block text-[12.5px] font-semibold text-ink-soft">{children}</label>;
}

export default function Booking() {
  const [f, setF] = useState<Form>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => {
    setF((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: "" }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (f.name.trim().length < 2) err.name = "Please enter your full name";
    if (!/^[+\d][\d\s-]{7,15}$/.test(f.phone.trim())) err.phone = "Enter a valid phone number";
    if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) err.email = "Enter a valid email address";
    if (!f.date) err.date = "Choose a preferred date";
    if (!f.slot) err.slot = "Pick a time slot";
    setErrors(err);
    if (Object.keys(err).length === 0) setDone(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="book" className="relative scroll-mt-28 overflow-hidden bg-cream py-24">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-leaf-100/70 blur-3xl" />
      <div className="container-x">
        <SectionHead
          eyebrow="Book An Appointment"
          title="Your first consultation is"
          highlight="on us"
          copy="Pick a slot that suits you. A dietitian will call to confirm within 2 working hours."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          {/* form card */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-100 bg-white p-6 shadow-[0_40px_80px_-60px_rgba(11,31,20,0.8)] sm:p-9">
              {done ? (
                <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <Icon.Check className="h-9 w-9" />
                  </span>
                  <h3 className="mt-6 text-2xl font-extrabold text-ink">Appointment requested!</h3>
                  <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-ink-soft">
                    Thanks {f.name.split(" ")[0]}, we've reserved{" "}
                    <b className="text-ink">
                      {f.slot} on {new Date(f.date).toDateString()}
                    </b>{" "}
                    for your {f.mode === "video" ? "video" : "in-clinic"} consultation. A
                    confirmation has been sent to {f.email}.
                  </p>
                  <div className="mt-6 grid w-full max-w-md gap-3 rounded-2xl bg-cream p-5 text-left text-[13px] text-ink-soft">
                    <p className="flex items-center gap-3">
                      <Icon.Leaf className="h-4 w-4 text-brand-500" /> Program: {f.program}
                    </p>
                    <p className="flex items-center gap-3">
                      <Icon.Phone className="h-4 w-4 text-brand-500" /> We'll call {f.phone} to confirm
                    </p>
                    <p className="flex items-center gap-3">
                      <Icon.Clock className="h-4 w-4 text-brand-500" /> Please keep recent lab reports handy
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setF(empty);
                      setDone(false);
                    }}
                    className="mt-7 rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand-500 hover:text-brand-600"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label>Full name *</Label>
                      <input
                        className={cn(inputCls, errors.name && "border-red-300 ring-2 ring-red-100")}
                        placeholder="Aditi Sharma"
                        value={f.name}
                        onChange={(e) => set("name", e.target.value)}
                      />
                      {errors.name && <p className="mt-1 text-[11.5px] text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <Label>Phone number *</Label>
                      <input
                        className={cn(inputCls, errors.phone && "border-red-300 ring-2 ring-red-100")}
                        placeholder="+91 98200 00000"
                        value={f.phone}
                        onChange={(e) => set("phone", e.target.value)}
                      />
                      {errors.phone && <p className="mt-1 text-[11.5px] text-red-500">{errors.phone}</p>}
                    </div>
                    <div>
                      <Label>Email address *</Label>
                      <input
                        className={cn(inputCls, errors.email && "border-red-300 ring-2 ring-red-100")}
                        placeholder="you@email.com"
                        value={f.email}
                        onChange={(e) => set("email", e.target.value)}
                      />
                      {errors.email && <p className="mt-1 text-[11.5px] text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <Label>Program of interest</Label>
                      <select
                        className={cn(inputCls, "cursor-pointer")}
                        value={f.program}
                        onChange={(e) => set("program", e.target.value)}
                      >
                        {programs.map((p) => (
                          <option key={p.title}>{p.title}</option>
                        ))}
                        <option>Not sure yet — help me choose</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label>Consultation mode</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {([
                          { k: "video", label: "Video call", icon: "Video" as const },
                          { k: "clinic", label: "In clinic", icon: "Pin" as const },
                        ]).map((m) => {
                          const Ico = Icon[m.icon];
                          const active = f.mode === m.k;
                          return (
                            <button
                              key={m.k}
                              type="button"
                              onClick={() => set("mode", m.k as Form["mode"])}
                              className={cn(
                                "flex items-center justify-center gap-2 rounded-2xl border px-3 py-3.5 text-[13px] font-semibold transition",
                                active
                                  ? "border-brand-500 bg-brand-50 text-brand-700"
                                  : "border-brand-100 text-ink-soft hover:border-brand-300",
                              )}
                            >
                              <Ico className="h-4 w-4" />
                              {m.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <Label>Preferred date *</Label>
                      <input
                        type="date"
                        min={today}
                        className={cn(inputCls, "cursor-pointer", errors.date && "border-red-300 ring-2 ring-red-100")}
                        value={f.date}
                        onChange={(e) => set("date", e.target.value)}
                      />
                      {errors.date && <p className="mt-1 text-[11.5px] text-red-500">{errors.date}</p>}
                    </div>
                  </div>

                  <div className="mt-5">
                    <Label>Available time slots *</Label>
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {timeSlots.map((s, idx) => {
                        const disabled = idx === 3 || idx === 6;
                        return (
                          <button
                            key={s}
                            type="button"
                            disabled={disabled}
                            onClick={() => set("slot", s)}
                            className={cn(
                              "rounded-xl border px-2 py-2.5 text-[12.5px] font-semibold transition",
                              disabled
                                ? "cursor-not-allowed border-dashed border-brand-100 text-ink-soft/35 line-through"
                                : f.slot === s
                                  ? "border-brand-500 bg-brand-500 text-white shadow-[0_10px_22px_-12px_rgba(46,155,75,1)]"
                                  : "border-brand-100 text-ink-soft hover:border-brand-400 hover:text-brand-600",
                            )}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                    {errors.slot && <p className="mt-1 text-[11.5px] text-red-500">{errors.slot}</p>}
                  </div>

                  <div className="mt-5">
                    <Label>Anything we should know? (optional)</Label>
                    <textarea
                      rows={3}
                      className={cn(inputCls, "resize-none")}
                      placeholder="Medical conditions, allergies, medication, goals…"
                      value={f.notes}
                      onChange={(e) => set("notes", e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-bold text-white shadow-[0_18px_36px_-16px_rgba(46,155,75,1)] transition hover:-translate-y-0.5 hover:bg-brand-600"
                  >
                    Confirm Free Consultation <Icon.Arrow className="h-4 w-4" />
                  </button>
                  <p className="mt-3 text-center text-[11.5px] text-ink-soft/70">
                    By booking you agree to our privacy policy. We never share your health data.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* side panel */}
          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white">
                <div className="pointer-events-none absolute -top-20 -right-16 h-52 w-52 rounded-full bg-brand-600/40 blur-3xl" />
                <h3 className="relative text-xl font-extrabold">Visit the clinic</h3>
                <p className="relative mt-2 text-[13.5px] text-white/70">
                  Walk-ins welcome for body composition testing between 10 AM and 6 PM.
                </p>

                <ul className="relative mt-7 space-y-5 text-[13.5px]">
                  {[
                    { icon: "Pin" as const, title: "Address", value: clinic.address },
                    { icon: "Phone" as const, title: "Helpline", value: clinic.phone },
                    { icon: "Mail" as const, title: "Email", value: clinic.email },
                    { icon: "Clock" as const, title: "Clinic hours", value: clinic.hours },
                  ].map((row) => {
                    const Ico = Icon[row.icon];
                    return (
                      <li key={row.title} className="flex gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-leaf-300">
                          <Ico className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-[11px] font-bold tracking-widest text-white/45 uppercase">
                            {row.title}
                          </p>
                          <p className="mt-0.5 text-white/85">{row.value}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="overflow-hidden rounded-[2rem] border border-brand-100 bg-white">
                <div className="relative h-44 bg-gradient-to-br from-brand-100 via-leaf-50 to-brand-50">
                  <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 400 180" fill="none">
                    <path d="M0 120h160l40-50h200" stroke="#2E9B4B" strokeOpacity=".35" strokeWidth="8" />
                    <path d="M60 0v70l60 40v70" stroke="#6CBF43" strokeOpacity=".35" strokeWidth="6" />
                    <path d="M250 180V90l90-40" stroke="#2E9B4B" strokeOpacity=".25" strokeWidth="6" />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="relative grid h-12 w-12 place-items-center rounded-full bg-brand-500 text-white shadow-lg">
                      <Icon.Pin className="h-6 w-6" />
                      <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/40" />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-[14px] font-bold text-ink">Bandra West Flagship Clinic</p>
                    <p className="text-[12.5px] text-ink-soft">8 min from Bandra station · Valet parking</p>
                  </div>
                  <a
                    href="#book"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition hover:bg-brand-500 hover:text-white"
                  >
                    <Icon.Arrow className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex items-center gap-4 rounded-[2rem] border border-brand-100 bg-white p-6">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-red-50 text-red-500">
                  <Icon.Heart className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[14px] font-bold text-ink">Urgent nutrition support?</p>
                  <p className="text-[12.5px] text-ink-soft">
                    Post-surgery or hospital discharge cases get same-day slots.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
