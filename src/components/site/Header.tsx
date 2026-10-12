import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./ContactButtons";
import { cn } from "@/lib/utils";

const links = [
  { href: "#what-is-fde", label: "What Is FDE?" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#projects", label: "Projects" },
  { href: "#mentor", label: "Mentor" },
  { href: "#career-path", label: "Career Path" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-40 transition-all duration-300", scrolled ? "py-2" : "py-4")}>
      <div className={cn("mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 transition-all duration-300 md:px-6", scrolled ? "glass mx-3 py-2 md:mx-auto" : "py-2")}>
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <WhatsAppButton source="nav" label="Chat on WhatsApp" className="px-5 py-2.5" />
        </div>
        <button className="rounded-lg p-2 lg:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={cn("mx-3 overflow-hidden rounded-2xl transition-all duration-300 lg:hidden", open ? "glass mt-2 max-h-[520px] p-4" : "max-h-0")}>
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-display text-lg font-medium hover:bg-secondary">
              {l.label}
            </a>
          ))}
          <WhatsAppButton source="mobile-nav" className="mt-3" />
        </nav>
      </div>
    </header>
  );
}
