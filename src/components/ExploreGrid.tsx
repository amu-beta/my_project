import {motion} from 'motion/react';
import {ArrowDown, ArrowRight} from 'lucide-react';
import {exploreItems} from '../data/site';

export function ExploreGrid() {
  const [designBuild, writing, experience, tools, stack] = exploreItems;

  return (
    <section className="px-6 py-18 md:px-8 md:py-22 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Explore</p>
            <h2 className="mt-4 inline-flex items-center gap-4 font-display text-5xl tracking-[-0.05em] text-[var(--color-ink)] md:text-6xl">
              探索
              <ArrowDown className="mt-2 text-[var(--color-muted)]" size={46} strokeWidth={1.4} />
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[var(--color-muted)]">
            把作品、写作、工具和工作方式拆成几个入口，让首页既能展示作品，也能持续承载内容更新。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_0.98fr]">
          <div className="grid gap-6">
            <ExploreCard item={designBuild} imageClassName="object-contain object-right" />
            <ExploreCard item={experience} imageClassName="object-contain object-right-bottom" />
          </div>

          <div className="grid gap-6">
            <ExploreCard item={writing} imageClassName="object-contain object-right" />
            <ExploreCard item={tools} imageClassName="object-contain object-right-bottom" />
          </div>

          <motion.article
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{delay: 0.18, duration: 0.55}}
            className="group overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)] lg:row-span-2"
          >
            <a href={stack.href} className="flex h-full flex-col">
              <div className="px-6 pt-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">{stack.eyebrow}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{stack.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--color-muted)]">{stack.description}</p>
              </div>
              <div className="mt-6 flex-1 overflow-hidden bg-[var(--color-panel)]/35">
                <img
                  src={stack.image}
                  alt={stack.title}
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

interface ExploreCardProps {
  item: (typeof exploreItems)[number];
  imageClassName?: string;
}

function ExploreCard({item, imageClassName}: ExploreCardProps) {
  return (
    <motion.article
      initial={{opacity: 0, y: 18}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.55}}
      className="group overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)]"
    >
      <a
        href={item.href}
        className="grid min-h-[270px] grid-cols-1 items-center gap-4 px-6 py-6 md:grid-cols-[1.08fr_0.92fr]"
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">{item.eyebrow}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{item.title}</h3>
          <p className="mt-3 max-w-xs text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] transition group-hover:text-[var(--color-ink)]">
            {item.cta}
            <ArrowRight size={14} />
          </span>
        </div>
        <div className="h-full overflow-hidden rounded-[1.5rem] bg-[var(--color-panel)]/35">
          <img
            src={item.image}
            alt={item.title}
            className={`h-full w-full transition duration-500 group-hover:scale-[1.04] ${imageClassName ?? 'object-cover'}`}
            referrerPolicy="no-referrer"
          />
        </div>
      </a>
    </motion.article>
  );
}
