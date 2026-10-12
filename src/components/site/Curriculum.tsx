import { useState } from "react";
import { ChevronDown, Flag } from "lucide-react";
import { modules, phases } from "@/data/curriculum";
import { cn } from "@/lib/utils";
import { ContactPair } from "./ContactButtons";

const accents = ["bg-grad-vp", "bg-grad-cb", "bg-grad-so", "bg-grad-vc"];
const dots = ["bg-cyan", "bg-pink", "bg-sun"];

export function Curriculum() {
  const [open, setOpen] = useState<Set<number>>(new Set([1]));
  const all = open.size === modules.length;
  const toggle = (n: number) =>
    setOpen((s) => {
      const next = new Set(s);
      next.has(n) ? next.delete(n) : next.add(n);
      return next;
    });

  return (
    <section id="curriculum" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan">COMPLETE CURRICULUM</p>
        <h2 className="mt-3 text-4xl font-bold md:text-6xl">
          24 modules. <span className="text-gradient-fde">8 phases.</span> One path.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          The full syllabus from the Coding Masters AI Forward Deployed Engineer program, in its original order.
        </p>
        <div className="mt-8 flex items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">{open.size} of {modules.length} expanded</span>
          <button
            onClick={() => setOpen(all ? new Set() : new Set(modules.map((m) => m.n)))}
            className="rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
          >
            {all ? "Collapse all" : "Expand all"}
          </button>
        </div>

        <div className="mt-8 space-y-14">
          {phases.map((p) => (
            <div key={p.n}>
              <div className="mb-5 flex items-baseline gap-3">
                <span className={cn("rounded-full px-3 py-1 font-display text-xs font-bold text-primary-foreground", accents[(p.n - 1) % 4])}>
                  PHASE {["I", "II", "III", "IV", "V", "VI", "VII", "VIII"][p.n - 1]}
                </span>
                <h3 className="text-xl font-semibold md:text-2xl">{p.name}</h3>
              </div>
              <div className="space-y-3">
                {modules.filter((m) => m.phase === p.n).map((m) => {
                  const isOpen = open.has(m.n);
                  return (
                    <div key={m.n} className={cn("overflow-hidden rounded-2xl border bg-card/60 transition-all", isOpen && "gradient-border shadow-card")}>
                      <button onClick={() => toggle(m.n)} aria-expanded={isOpen} className="flex w-full items-center gap-4 p-4 text-left md:p-5">
                        <span className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-lg font-bold text-primary-foreground", accents[m.n % 4])}>
                          {String(m.n).padStart(2, "0")}
                        </span>
                        <span className="flex-1">
                          <span className="block font-display text-base font-semibold md:text-lg">{m.title}</span>
                          <span className="block text-sm text-muted-foreground">{m.tagline}</span>
                        </span>
                        <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform", isOpen && "rotate-180")} />
                      </button>
                      {isOpen && (
                        <div className="border-t px-4 pb-5 pt-4 md:px-5">
                          <div className="grid gap-5 md:grid-cols-3">
                            {m.sections.map((s, i) => (
                              <div key={s.title}>
                                <p className="font-display text-sm font-semibold">{s.title}</p>
                                <ul className="mt-2 space-y-1.5">
                                  {s.topics.map((t) => (
                                    <li key={t} className="flex gap-2 text-sm text-muted-foreground">
                                      <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", dots[i])} />
                                      {t}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-5 flex gap-3 rounded-xl bg-secondary p-4">
                            <Flag className="h-5 w-5 shrink-0 text-sun" />
                            <p className="text-sm">
                              <span className="font-semibold">{m.n === 23 ? "" : "Mini-project — "}{m.project.title}: </span>
                              <span className="text-muted-foreground">{m.project.desc}</span>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-grad-nv p-8 text-center gradient-border md:p-12">
          <h3 className="text-3xl font-bold md:text-4xl">Want to Know More? Chat with Us →</h3>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">Ask about duration, schedule, fees and enrolment directly with the Coding Masters team.</p>
          <ContactPair source="curriculum" className="mt-6 justify-center" />
        </div>
      </div>
    </section>
  );
}
