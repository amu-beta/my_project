import {motion} from 'motion/react';
import {ArrowUpRight} from 'lucide-react';
import {projects} from '../data/site';

interface FeaturedProjectsProps {
  onSelectProject: (projectId: string) => void;
}

export function FeaturedProjects({onSelectProject}: FeaturedProjectsProps) {
  return (
    <section id="projects" className="px-6 py-18 md:px-8 md:py-22 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Featured Works</p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-[var(--color-ink)] md:text-5xl">
              精选项目
            </h2>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              whileHover={{y: -5}}
              viewport={{once: true, amount: 0.16}}
              transition={{delay: index * 0.08, duration: 0.55}}
              className="grid items-center gap-5 overflow-hidden rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-[0_14px_36px_rgba(0,0,0,0.05)] lg:grid-cols-[1.08fr_0.92fr] lg:p-6"
            >
              <div className="order-2 flex flex-col justify-between lg:order-1">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[var(--color-panel)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {project.category}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">{project.year}</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl tracking-[-0.04em] text-[var(--color-ink)] md:text-[2rem]">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-7 text-[var(--color-muted)]">{project.description}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-black/8 px-3 py-1 text-xs text-[var(--color-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    查看案例
                    <ArrowUpRight size={14} />
                  </button>
                  {project.ctaLink ? (
                    <a
                      href={project.ctaLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
                    >
                      打开项目
                      <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="overflow-hidden rounded-[1.3rem] bg-[var(--color-panel)]/25">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="h-[240px] w-full object-cover transition duration-500 hover:scale-[1.03] md:h-[270px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {project.previewImages.slice(0, 2).map((image) => (
                    <div key={image} className="overflow-hidden rounded-[0.9rem] bg-[var(--color-panel)]/25">
                      <img
                        src={image}
                        alt=""
                        className="h-20 w-full object-cover transition duration-500 hover:scale-[1.04] md:h-24"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
