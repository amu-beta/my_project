import {ArrowUpRight} from 'lucide-react';
import {motion} from 'motion/react';
import {useMemo, useState} from 'react';
import {projects} from '../data/site';

interface CategoryTabsShowcaseProps {
  onSelectProject: (projectId: string) => void;
}

type ShowcaseTabId = 'app' | 'website' | 'topic' | 'campaign';

const tabItems: {id: ShowcaseTabId; label: string; projectId: string}[] = [
  {id: 'app', label: 'App', projectId: 'seerq'},
  {id: 'website', label: '官网', projectId: 'pc'},
  {id: 'topic', label: '专题页', projectId: 'topic'},
  {id: 'campaign', label: '运营活动', projectId: 'luckynival'},
];

export function CategoryTabsShowcase({onSelectProject}: CategoryTabsShowcaseProps) {
  const [activeTab, setActiveTab] = useState<ShowcaseTabId>('app');

  const activeProject = useMemo(() => {
    const projectId = tabItems.find((item) => item.id === activeTab)?.projectId;
    return projects.find((project) => project.id === projectId) ?? projects[0];
  }, [activeTab]);

  return (
    <section className="px-6 py-18 md:px-8 md:py-22 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mt-2">
          <div className="flex flex-wrap items-center gap-3">
            {tabItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`rounded-[10px] px-4 py-2 text-sm font-medium transition ${
                  activeTab === item.id
                    ? 'bg-[var(--color-ink)] text-white shadow-[0_12px_28px_rgba(24,39,34,0.18)]'
                    : 'bg-transparent text-[var(--color-muted)] hover:bg-white/70 hover:text-[var(--color-ink)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <motion.article
            key={activeProject.id}
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.45, ease: 'easeOut'}}
            className="mt-8 grid items-center gap-6 rounded-[10px] bg-white/80 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-sm lg:grid-cols-[1.05fr_0.95fr] lg:p-6"
          >
            <div className="order-2 flex flex-col justify-between lg:order-1">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[var(--color-panel)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {activeProject.category}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">{activeProject.year}</span>
                </div>
                <h3 className="mt-4 font-display text-3xl tracking-[-0.05em] text-[var(--color-ink)] md:text-[2.2rem]">
                  {activeProject.title}
                </h3>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-[var(--color-muted)]">{activeProject.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[var(--color-panel)]/38 px-3 py-1 text-xs text-[var(--color-muted)]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onSelectProject(activeProject.id)}
                  className="primary-button px-5 py-3 text-sm font-semibold"
                >
                  查看案例
                  <ArrowUpRight size={14} />
                </button>
                {activeProject.ctaLink ? (
                  <a
                    href={activeProject.ctaLink}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button px-5 py-3 text-sm font-semibold"
                  >
                    打开项目
                    <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-[10px] bg-[var(--color-panel)]/28">
                <img
                  src={activeProject.cover}
                  alt={activeProject.title}
                  className="h-[260px] w-full object-cover md:h-[340px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {activeProject.previewImages.slice(0, 2).map((image) => (
                  <div key={image} className="overflow-hidden rounded-[10px] bg-[var(--color-panel)]/28">
                    <img
                      src={image}
                      alt=""
                      className="h-24 w-full object-cover md:h-28"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
