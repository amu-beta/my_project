import {motion} from 'motion/react';
import {Github, Mail} from 'lucide-react';
import {siteAssets} from '../data/site';

const navItems = [
  {label: '首页', href: '#home'},
  {label: '项目', href: '#projects'},
  {label: '文章', href: '#articles'},
  {label: '关于', href: '#about'},
];

export function Header() {
  return (
    <motion.header
      initial={{y: -24, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.6, ease: 'easeOut'}}
      className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(250,247,240,0.72)] backdrop-blur-xl"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4 md:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-3 justify-self-start">
          <div>
            <p className="font-display text-lg leading-none text-[var(--color-ink)]">Chloe Lin</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">Project UIAI</p>
          </div>
        </a>

        <nav className="hidden items-center justify-center gap-10 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-ink)]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <a
            href="mailto:hello@chloelin.design"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white text-[var(--color-muted)] transition hover:-translate-y-0.5 hover:text-[var(--color-ink)]"
            aria-label="Email Chloe Lin"
          >
            <Mail size={16} />
          </a>
          <a
            href={siteAssets.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white text-[var(--color-muted)] transition hover:-translate-y-0.5 hover:text-[var(--color-ink)]"
            aria-label="Github"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
