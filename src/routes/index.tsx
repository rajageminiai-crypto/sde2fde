import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Bot, Boxes, BrainCircuit, Briefcase, Building2, Cloud, Code2, Compass, Cpu, Database,
  GraduationCap, Layers, Rocket, Server, ShieldCheck, Sparkles, Target, Users, Workflow, ChevronDown, UserRound, Award,
} from "lucide-react";
import heroImg from "@/assets/hero-fde.jpg";
import { Header } from "@/components/site/Header";
import { Curriculum } from "@/components/site/Curriculum";
import { ContactPair, FloatingWhatsApp, InstagramButton, WhatsAppButton } from "@/components/site/ContactButtons";
import { Logo } from "@/components/site/Logo";
import { mentor, modules, techGroups } from "@/data/curriculum";
import { contactConfig } from "@/config/contact";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SDE2FDE — Become a Forward Deployed Engineer | Powered by Coding Masters" },
      { name: "description", content: "From Software Engineer to Forward Deployed Engineer. Explore the 24-module AI FDE curriculum, OmniGuard capstone and mentor K SubRaj Sir." },
      { property: "og:title", content: "SDE2FDE — Forward Deployed Engineer. The Future Is Here." },
      { property: "og:description", content: "Explore the 24-module AI Forward Deployed Engineer program by Coding Masters: LLMs, RAG, agents, enterprise integration and deployment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("font-display text-xs font-semibold tracking-[0.22em] md:text-sm", className)}>{children}</p>;
}

function Hero() {
  const [fde, setFde] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setFde((v) => !v), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="top" className="relative overflow-hidden bg-grad-nv pt-32 md:pt-36">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet/40 blur-3xl" />
      <div className="absolute -right-32 top-60 h-96 w-96 rounded-full bg-pink/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 md:px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Eyebrow className="text-cyan">FORWARD DEPLOYED ENGINEER · THE FUTURE IS HERE</Eyebrow>
          <h1 className="mt-5 text-5xl font-bold leading-[1.02] md:text-7xl">
            Don't Just Write Code. <span className="text-gradient-fde">Build What Comes Next.</span>
          </h1>
          <div className="mt-6 flex items-center gap-3 font-display text-3xl font-bold md:text-4xl" aria-label="SDE to FDE">
            <span className={cn("transition-all duration-700", fde ? "text-muted-foreground/50 line-through" : "")}>SDE</span>
            <ArrowRight className="h-7 w-7 text-sun" />
            <span className={cn("transition-all duration-700", fde ? "scale-110 text-gradient-fde" : "opacity-40")}>FDE</span>
          </div>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Explore the world of Forward Deployed Engineering, where software engineering, applied AI, intelligent agents, and real-world problem solving come together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#curriculum" className="inline-flex items-center gap-2 rounded-full bg-grad-vp px-6 py-3.5 font-display text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
              Explore the Curriculum ↓
            </a>
            <WhatsAppButton source="hero" label="Chat on WhatsApp ↗" />
            <InstagramButton source="hero" />
          </div>
          <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-muted-foreground">POWERED BY CODING MASTERS</p>
        </div>
        <div className="relative">
          <div className="gradient-border rounded-3xl shadow-card">
            <img src={heroImg} alt="Floating code editors, an AI agent dashboard and an upward arrow over a network of connected systems" width={1600} height={1008} className="rounded-3xl" />
          </div>
          <div className="glass absolute -left-4 bottom-8 hidden animate-float rounded-2xl p-4 md:block">
            <p className="font-mono text-xs text-cyan">agent.deploy()</p>
            <p className="mt-1 flex items-center gap-2 text-sm font-semibold"><span className="h-2 w-2 rounded-full bg-whatsapp" /> Deployed to production</p>
          </div>
          <div className="glass absolute -right-3 -top-5 hidden animate-float-slow rounded-2xl p-4 md:block">
            <p className="text-xs text-muted-foreground">Modules</p>
            <p className="font-display text-3xl font-bold text-gradient-so">24</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Transformation() {
  const steps = ["CODE", "INTELLIGENCE", "SOLUTION", "REAL-WORLD IMPACT"];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % steps.length), 1600);
    return () => clearInterval(t);
  }, []);
  const sde = ["Building and maintaining applications", "Implementing technical requirements", "Developing APIs and software features", "Testing and maintaining systems"];
  const fde = ["Understanding real-world business problems", "Working closely with users and stakeholders", "Building AI-powered applications", "Integrating models, agents, APIs and enterprise systems", "Prototyping, deploying and improving practical solutions", "Connecting engineering work to customer outcomes"];
  return (
    <section id="what-is-fde" className="scroll-mt-24 bg-paper py-24 text-paper-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Eyebrow className="text-violet">WHAT IS FDE?</Eyebrow>
        <h2 className="mt-3 max-w-3xl text-4xl font-bold md:text-6xl">From Software Engineer to Forward Deployed Engineer</h2>
        <p className="mt-4 max-w-2xl text-paper-muted">
          A Forward Deployed Engineer works close to the customer — turning a real business problem into a working, deployed AI solution. Responsibilities vary by company; this is the broader shape of the role.
        </p>
        <div className="mt-10 flex flex-wrap gap-2 md:gap-3">
          {steps.map((s, k) => (
            <div key={s} className="flex items-center gap-2 md:gap-3">
              <span className={cn("rounded-full px-4 py-2 font-display text-sm font-bold transition-all duration-500 md:text-base", k <= i ? "bg-grad-vp text-primary-foreground shadow-glow" : "bg-paper-foreground/5 text-paper-muted")}>{s}</span>
              {k < steps.length - 1 && <ArrowRight className="h-4 w-4 text-paper-muted" />}
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-paper-foreground/10 bg-background/0 p-8">
            <div className="flex items-center gap-3"><Code2 className="h-6 w-6 text-eblue" /><h3 className="text-2xl font-bold">Software engineering often involves</h3></div>
            <ul className="mt-6 space-y-3">{sde.map((t) => <li key={t} className="flex gap-3 text-paper-muted"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-eblue" />{t}</li>)}</ul>
          </div>
          <div className="rounded-3xl bg-grad-nv p-8 text-foreground shadow-card gradient-border">
            <div className="flex items-center gap-3"><Rocket className="h-6 w-6 text-sun" /><h3 className="text-2xl font-bold">Forward Deployed Engineering can involve</h3></div>
            <ul className="mt-6 space-y-3">{fde.map((t) => <li key={t} className="flex gap-3 text-muted-foreground"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink" />{t}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyFDE() {
  const cards = [
    { icon: BrainCircuit, t: "AI-Powered Applications", d: "LLMs, prompt and model engineering, advanced RAG and multimodal document intelligence.", g: "bg-grad-vp" },
    { icon: Workflow, t: "Intelligent Agents & Workflows", d: "Tool calling, LangGraph, multi-agent systems and MCP with human approval built in.", g: "bg-grad-cb" },
    { icon: Target, t: "Real-World Problem Solving", d: "Customer discovery, process analysis, BRDs and technical specs before writing code.", g: "bg-grad-so" },
    { icon: Rocket, t: "Deployment & Customer Impact", d: "Docker, Kubernetes, CI/CD, UAT, go-live, hypercare and reliability engineering.", g: "bg-grad-vc" },
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Eyebrow className="text-pink">WHY FORWARD DEPLOYED ENGINEERING?</Eyebrow>
        <h2 className="mt-3 text-4xl font-bold md:text-6xl">Engineering Is Moving <span className="text-gradient-fde">Beyond Code.</span></h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.t} className="group rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
              <span className={cn("flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground transition-transform group-hover:rotate-6", c.g)}><c.icon className="h-6 w-6" /></span>
              <h3 className="mt-5 text-xl font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ambition() {
  return (
    <section className="relative overflow-hidden bg-grad-vp py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6">
        <Eyebrow className="text-sun">AIM HIGHER</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-4xl text-5xl font-bold leading-[1.02] text-primary-foreground md:text-8xl">Your Next Career Chapter Starts Here.</h2>
        <p className="mt-8 font-display text-6xl font-bold text-gradient-so md:text-9xl">₹70 LPA</p>
        <p className="mx-auto mt-2 max-w-xl text-sm text-primary-foreground/80">
          An aspirational benchmark, not a typical or guaranteed outcome. Career results depend on skills, experience, employer, market conditions and individual performance.
        </p>
        <a href="#roadmap" className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-4 font-display font-semibold text-foreground transition-transform hover:-translate-y-0.5">
          Discover the FDE Skill Path →
        </a>
      </div>
    </section>
  );
}

function Roadmap() {
  const items = [
    { icon: Layers, t: "Program structure", d: "24 modules across 8 phases — from foundations to forward deployed engineering and production." },
    { icon: UserRound, t: "Mentor", d: "Led by K SubRaj Sir, Lead Trainer at Coding Masters, with 25+ years of IT experience." },
    { icon: BrainCircuit, t: "Curriculum", d: "Python, data, backend, frontend, cloud, LLMs, RAG, agents, security, LLMOps, enterprise integration and delivery." },
    { icon: Code2, t: "Practical learning", d: "Every module ends with a hands-on mini-project — build something real." },
    { icon: ShieldCheck, t: "Capstone", d: "OmniGuard — an Enterprise AI Field Service Platform built end to end." },
    { icon: Briefcase, t: "Career readiness", d: "Module 24 covers technical & client presentations, portfolio and interview preparation." },
  ];
  return (
    <section id="roadmap" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Eyebrow className="text-sun">PROGRAM OVERVIEW</Eyebrow>
        <h2 className="mt-3 max-w-3xl text-4xl font-bold md:text-6xl">Your Roadmap to Forward Deployed Engineering.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <div key={c.t} className="glass rounded-3xl p-6">
              <c.icon className="h-7 w-7 text-cyan" />
              <h3 className="mt-4 text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Duration, schedule, fees and batch dates aren't listed in the program document — ask the team on WhatsApp or Instagram.</p>
        <a href="#curriculum" className="mt-6 inline-flex items-center gap-2 rounded-full border px-6 py-3 font-display text-sm font-semibold hover:bg-secondary">View the full curriculum ↓</a>
      </div>
    </section>
  );
}

function Projects() {
  const minis = modules.filter((m) => m.n !== 23);
  const capstone = modules.find((m) => m.n === 23)!;
  const flow = ["Discover", "Design", "Build", "Integrate", "Secure", "Deploy", "Monitor"];
  return (
    <section id="projects" className="scroll-mt-24 bg-paper py-24 text-paper-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Eyebrow className="text-pink">PROJECTS & CAPSTONE</Eyebrow>
        <h2 className="mt-3 text-4xl font-bold md:text-6xl">Learn by Building Real Solutions.</h2>

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-grad-nv p-8 text-foreground shadow-card md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="rounded-full bg-grad-so px-3 py-1 font-display text-xs font-bold text-navy-deep">MODULE 23 · CAPSTONE</span>
              <h3 className="mt-5 text-5xl font-bold md:text-6xl"><span className="text-gradient-fde">OmniGuard</span></h3>
              <p className="mt-2 text-xl font-medium">Enterprise AI Field Service Platform</p>
              <p className="mt-4 text-muted-foreground">One project that brings the whole program together — from customer discovery and BRD/TDD to a secured, deployed and monitored enterprise AI platform.</p>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {flow.map((f, k) => (
                  <span key={f} className="flex items-center gap-2">
                    <span className="rounded-lg glass px-3 py-1.5 text-sm font-semibold">{k + 1}. {f}</span>
                    {k < flow.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-cyan" />}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {capstone.sections.map((s, i) => (
                <div key={s.title} className="glass rounded-2xl p-5">
                  <p className={cn("font-display text-sm font-bold", ["text-cyan", "text-pink", "text-sun"][i])}>{s.title}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">{s.topics.map((t) => <li key={t}>· {t}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="mt-16 text-2xl font-bold">Mini-projects in every module</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {minis.map((m) => (
            <div key={m.n} className="rounded-2xl border border-paper-foreground/10 p-5 transition-all hover:-translate-y-1 hover:border-violet/50">
              <p className="font-display text-xs font-bold text-violet">MODULE {String(m.n).padStart(2, "0")}</p>
              <p className="mt-1 font-display text-lg font-semibold">{m.project.title}</p>
              <p className="mt-1 text-sm text-paper-muted">{m.project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mentor() {
  return (
    <section id="mentor" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="gradient-border flex aspect-[4/5] flex-col items-center justify-center rounded-[2rem] bg-grad-nv p-8 text-center">
          <span className="flex h-36 w-36 items-center justify-center rounded-full bg-grad-vp shadow-glow">
            <span className="font-display text-5xl font-bold text-primary-foreground">KS</span>
          </span>
          <p className="mt-6 font-display text-3xl font-bold">{mentor.name}</p>
          <p className="mt-1 text-muted-foreground">{mentor.role}</p>
          <p className="mt-4 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-widest text-cyan">TRANSFORMING PROFESSIONALS INTO AI INNOVATORS</p>
        </div>
        <div>
          <Eyebrow className="text-cyan">MENTOR</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold md:text-6xl">Learn from Experience.</h2>
          <p className="mt-6 text-lg text-muted-foreground">{mentor.bio}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <p className="flex items-center gap-2 font-display font-semibold"><Award className="h-5 w-5 text-sun" /> Certifications & credentials</p>
              <ul className="mt-3 space-y-2">{mentor.certifications.map((c) => <li key={c} className="flex gap-2 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />{c}</li>)}</ul>
            </div>
            <div>
              <p className="flex items-center gap-2 font-display font-semibold"><Sparkles className="h-5 w-5 text-pink" /> Specialties & expertise</p>
              <ul className="mt-3 space-y-2">{mentor.specialties.map((c) => <li key={c} className="flex gap-2 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />{c}</li>)}</ul>
            </div>
          </div>
          <ContactPair source="mentor" className="mt-10" />
        </div>
      </div>
    </section>
  );
}

const techColor: Record<string, string> = { cyan: "text-cyan", yellow: "text-sun", pink: "text-pink", violet: "text-violet", blue: "text-eblue", orange: "text-orange" };
const techIcon: Record<string, typeof Code2> = { cyan: Code2, yellow: Database, pink: BrainCircuit, violet: Bot, blue: Cloud, orange: Building2 };

function TechEcosystem() {
  return (
    <section className="bg-grad-nv py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Eyebrow className="text-orange">TECHNOLOGY ECOSYSTEM</Eyebrow>
        <h2 className="mt-3 text-4xl font-bold md:text-6xl">Connect AI to the <span className="text-gradient-fde">Real World.</span></h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((g) => {
            const Icon = techIcon[g.color];
            return (
              <div key={g.name} className="glass rounded-3xl p-6">
                <p className={cn("flex items-center gap-2 font-display font-semibold", techColor[g.color])}><Icon className="h-5 w-5" /> {g.name}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((t) => <span key={t} className="rounded-full border bg-background/40 px-3 py-1.5 text-sm transition-colors hover:border-cyan/60">{t}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const a = [
    { icon: Code2, t: "Software engineers", d: "Extend your coding skills into AI systems, agents and customer-facing delivery." },
    { icon: Server, t: "Backend developers", d: "Build on APIs and data skills with FastAPI, RAG, tool calling and enterprise integration." },
    { icon: Layers, t: "Full-stack developers", d: "Ship complete AI apps — React interfaces, streaming chat UX and production backends." },
    { icon: Boxes, t: "Platform engineers", d: "Apply cloud, Kubernetes and CI/CD to LLMOps, observability and reliable AI." },
    { icon: Cpu, t: "Experienced developers exploring applied AI", d: "A structured path from foundations to an enterprise capstone and portfolio." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Eyebrow className="text-violet">WHO IS THIS FOR?</Eyebrow>
        <h2 className="mt-3 text-4xl font-bold md:text-6xl">Built for engineers ready to go further.</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {a.map((c) => (
            <div key={c.t} className="rounded-3xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-cyan">
              <c.icon className="h-7 w-7 text-cyan" />
              <h3 className="mt-4 font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Prerequisites and eligibility aren't specified in the program document — please confirm with the team.</p>
      </div>
    </section>
  );
}

function Outcomes() {
  const o = [
    "Build AI applications with LLMs and structured prompts",
    "Design production-grade RAG with citations and hybrid retrieval",
    "Engineer safe agents, multi-agent workflows and MCP integrations",
    "Secure AI systems with guardrails and red teaming",
    "Evaluate and monitor AI quality, latency and cost",
    "Integrate AI with SAP, Salesforce, ServiceNow and legacy systems",
    "Design AI systems with HLD, LLD and architecture decisions",
    "Run discovery, write BRDs/TDDs and deliver to stakeholders",
    "Deploy with Docker, Kubernetes, CI/CD and handle go-live",
  ];
  return (
    <section className="bg-paper py-24 text-paper-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Eyebrow className="text-eblue">LEARNING OUTCOMES</Eyebrow>
        <h2 className="mt-3 text-4xl font-bold md:text-6xl">Build Skills That Go Beyond Coding.</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {o.map((t, i) => (
            <div key={t} className="flex gap-4 rounded-2xl border border-paper-foreground/10 p-5">
              <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-display text-sm font-bold text-primary-foreground", ["bg-grad-vp", "bg-grad-cb", "bg-grad-vc"][i % 3])}>{i + 1}</span>
              <p className="font-medium">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    { icon: GraduationCap, t: "Learn core skills", d: "Phases I–II" },
    { icon: BrainCircuit, t: "Engineer AI systems", d: "Phases III–IV" },
    { icon: Building2, t: "Work with the enterprise", d: "Phases V–VI" },
    { icon: Users, t: "Deploy forward", d: "Phase VII" },
    { icon: Rocket, t: "Capstone & portfolio", d: "Phase VIII" },
  ];
  const roles = ["Forward Deployed Engineer", "Full-Stack AI Engineer", "GenAI / LLM Engineer", "AI Agent Engineer", "AI Solutions Engineer"];
  return (
    <section id="career-path" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Eyebrow className="text-sun">THE LEARNING JOURNEY</Eyebrow>
        <h2 className="mt-3 text-4xl font-bold md:text-6xl">One path, <span className="text-gradient-so">five big moves.</span></h2>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.t} className="relative rounded-3xl border bg-card p-6">
              <span className="font-display text-5xl font-bold text-muted-foreground/30">0{i + 1}</span>
              <s.icon className="mt-2 h-7 w-7 text-pink" />
              <p className="mt-3 font-semibold">{s.t}</p>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-3xl glass p-8">
          <p className="flex items-center gap-2 font-display text-xl font-semibold"><Compass className="h-6 w-6 text-cyan" /> Career pathways to explore</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {roles.map((r, i) => <span key={r} className={cn("rounded-full px-4 py-2 font-display text-sm font-semibold text-primary-foreground", ["bg-grad-vp", "bg-grad-cb", "bg-grad-vc"][i % 3])}>{r}</span>)}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Role titles vary by employer. The program builds skills relevant to these paths; it does not guarantee a specific role.</p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What is a Forward Deployed Engineer?", a: "An engineer who works close to customers to understand real business problems and build, integrate and deploy practical AI solutions — combining software engineering, applied AI and delivery skills." },
    { q: "How many modules does the program have?", a: "24 modules organised into 8 phases, from Python and engineering foundations through AI engineering, enterprise integration, system design, FDE delivery and a capstone." },
    { q: "What is OmniGuard?", a: "The Module 23 capstone — an Enterprise AI Field Service Platform that combines discovery, LLM + RAG, agentic workflows, React/FastAPI, ERP/SAP integration, security, deployment and monitoring." },
    { q: "Who is the mentor?", a: "K SubRaj Sir, Lead Trainer at Coding Masters, with 25+ years of IT experience and an M.Sc. in Computer Science from Manipal University." },
    { q: "Are there hands-on projects?", a: "Yes. Every module includes a mini-project, followed by the OmniGuard capstone and a final FDE portfolio and presentation." },
    { q: "What is the duration, schedule and fee?", a: "These details aren't in the program document. Please reach out on WhatsApp or Instagram for confirmation." },
    { q: "Who runs the training?", a: "SDE2FDE is the discovery brand. The training program is delivered by Coding Masters, who handle all program enquiries." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-24 bg-paper py-24 text-paper-foreground md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Eyebrow className="text-violet">FAQ</Eyebrow>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">Questions, answered.</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-paper-foreground/10">
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 p-5 text-left font-display font-semibold">
                {f.q}
                <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform", open === i && "rotate-180")} />
              </button>
              {open === i && <p className="px-5 pb-5 text-paper-muted">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative overflow-hidden bg-grad-nv py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-5xl font-bold md:text-7xl">The future is <span className="text-gradient-fde">forward deployed.</span></h2>
        <p className="mt-5 text-lg text-muted-foreground">Talk to the Coding Masters team about the program, curriculum and enrolment.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <WhatsAppButton source="closing" label="Talk to Us on WhatsApp →" />
          <InstagramButton source="closing" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground">From Software Engineer to Forward Deployed Engineer.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <WhatsAppButton source="footer" label="WhatsApp" className="px-5 py-2.5" />
          <InstagramButton source="footer" label="Instagram" className="px-5 py-2.5" />
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl px-4 text-xs text-muted-foreground md:px-6">
        © {new Date().getFullYear()} SDE2FDE · Program delivered by Coding Masters · <a className="underline" href={contactConfig.instagramUrl} target="_blank" rel="noopener noreferrer">@sde2fde</a>
      </p>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Transformation />
        <WhyFDE />
        <Ambition />
        <Roadmap />
        <Curriculum />
        <Projects />
        <Mentor />
        <TechEcosystem />
        <Audience />
        <Outcomes />
        <Journey />
        <FAQ />
        <Closing />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
