export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="SDE2FDE home">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-grad-vp shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 18 L11 11 L14 14 L20 6" />
          <path d="M14 6 H20 V12" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-bold tracking-tight">
          SDE<span className="text-gradient-so">2</span><span className="text-gradient-fde">FDE</span>
        </span>
        {!compact && <span className="mt-0.5 block text-[9px] font-semibold tracking-[0.2em] text-muted-foreground">POWERED BY CODING MASTERS</span>}
      </span>
    </a>
  );
}
