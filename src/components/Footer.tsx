import {Mail} from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-black/5 px-6 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl tracking-[-0.03em] text-[var(--color-ink)]">Chloe Lin</p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">Designing product experiences with a sharper content structure.</p>
        </div>
        <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
          <a href="mailto:hello@chloelin.design" className="inline-flex items-center gap-2 transition hover:text-[var(--color-ink)]">
            <Mail size={14} />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
