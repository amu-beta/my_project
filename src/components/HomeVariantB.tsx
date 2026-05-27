import {ArrowRight, ArrowUpRight, BadgeCheck, Clock3, Layers3, Sparkles} from 'lucide-react';
import {motion} from 'motion/react';
import type {FC, ReactNode} from 'react';
import {articles, profile, projects} from '../data/site';

interface HomeVariantBProps {
  onSelectProject: (projectId: string) => void;
}

export function HomeVariantB({onSelectProject}: HomeVariantBProps) {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="relative">
      <section id="home" className="px-6 pt-8 md:px-8 md:pt-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-black/8 bg-[linear-gradient(135deg,#101915_0%,#203028_52%,#c89254_100%)] text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
          <div className="grid gap-8 px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <motion.div
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.65}}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/75 backdrop-blur-md">
                <Sparkles size={14} />
                Version B
              </div>
              <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.93] tracking-[-0.05em] md:text-7xl">
                把作品集做成一页更像杂志封面的视觉叙事。
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
                {profile.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
                >
                  看精选项目
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/14"
                >
                  看我的方法
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {profile.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[1.3rem] border border-white/12 bg-white/10 px-4 py-4 backdrop-blur-md">
                    <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{metric.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/65">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 18, scale: 0.98}}
              animate={{opacity: 1, y: 0, scale: 1}}
              transition={{duration: 0.75, delay: 0.08}}
              className="relative"
            >
              <div className="absolute inset-6 rounded-[2rem] bg-black/20 blur-3xl" />
              <div className="relative grid gap-4">
                <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
                  <div className="overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/10 p-3 backdrop-blur-md">
                    <img
                      src={profile.heroImage}
                      alt={profile.name}
                      className="h-[290px] w-full rounded-[1.45rem] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-[1.6rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/60">Focus</p>
                      <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white">内容结构 / 转化路径 / 视觉一致性</p>
                    </div>
                    <div className="overflow-hidden rounded-[1.6rem] border border-white/12 bg-white/10 p-3 backdrop-blur-md">
                      <img
                        src={featuredProjects[0].cover}
                        alt={featuredProjects[0].title}
                        className="h-[156px] w-full rounded-[1.3rem] object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.6rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-white/70">
                      <Layers3 size={16} />
                      <span className="text-[11px] uppercase tracking-[0.24em]">Build System</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/82">
                      把设计系统、内容结构和 AI 辅助流程收拢成更稳定的输出方式。
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-white/70">
                      <Clock3 size={16} />
                      <span className="text-[11px] uppercase tracking-[0.24em]">Delivery</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/82">
                      以更短的路径交付项目，同时保留可复用的模块和长期更新空间。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionShell
        id="projects"
        eyebrow="Selected Cases"
        title="精选项目"
        description="B 版把项目做得更像案例墙，减少大段文字，强调封面、标签和视觉节奏。"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onSelectProject={onSelectProject} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Working Style"
        title="我的工作方式"
        description="把经验、协作和输出标准收成一组短句，方便快速理解你的能力结构。"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {profile.highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.2}}
              transition={{delay: index * 0.06, duration: 0.5}}
              className="rounded-[1.6rem] border border-black/8 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center gap-2 text-[var(--color-muted)]">
                <BadgeCheck size={16} />
                <span className="text-[11px] uppercase tracking-[0.24em]">Point {String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="articles"
        eyebrow="Notes"
        title="文章入口"
        description="用更轻的列表排版，给后续的内容更新留出自然位置。"
      >
        <div className="space-y-4">
          {articles.map((article) => (
            <motion.article
              key={article.title}
              initial={{opacity: 0, y: 14}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.2}}
              transition={{duration: 0.45}}
              className="grid gap-4 rounded-[1.5rem] border border-black/8 bg-white p-4 shadow-[0_12px_34px_rgba(0,0,0,0.04)] md:grid-cols-[160px_1fr]"
            >
              <img src={article.image} alt={article.title} className="h-36 w-full rounded-[1.1rem] object-cover" referrerPolicy="no-referrer" />
              <div className="flex flex-col justify-between gap-4 py-1 md:py-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    <span>{article.date}</span>
                    <span className="h-1 w-1 rounded-full bg-black/20" />
                    <span>{article.category}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{article.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">{article.excerpt}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]">
                  继续阅读
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="about"
        eyebrow="About"
        title="关于我"
        description="B 版把详细经历收成时间线和技能条，更适合快速扫读。"
      >
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.aside
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5}}
            className="rounded-[1.8rem] border border-black/8 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)]"
          >
            <img
              src={profile.portrait}
              alt={profile.name}
              className="h-24 w-24 rounded-[1.5rem] object-cover"
              referrerPolicy="no-referrer"
            />
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{profile.name}</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{profile.title}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{profile.about}</p>
          </motion.aside>

          <div className="grid gap-4">
            {profile.timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{opacity: 0, x: 16}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{delay: index * 0.05, duration: 0.45}}
                className="rounded-[1.5rem] border border-black/8 bg-white p-5 shadow-[0_12px_34px_rgba(0,0,0,0.04)]"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">{item.period}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">{item.title}</h3>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    <Clock3 size={14} />
                    Milestone
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
              </motion.div>
            ))}

            <div className="grid gap-4 sm:grid-cols-3">
              {profile.tabs.skills.map((group) => (
                <div key={group.title} className="rounded-[1.4rem] border border-black/8 bg-[var(--color-panel)]/25 p-5">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-white px-3 py-2 text-sm text-[var(--color-ink)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}

interface SectionShellProps {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

function SectionShell({id, eyebrow, title, description, children}: SectionShellProps) {
  return (
    <section id={id} className="px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">{eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">{title}</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">{description}</p>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
  onSelectProject: (projectId: string) => void;
}

const ProjectCard: FC<ProjectCardProps> = ({project, index, onSelectProject}) => {
  return (
    <motion.article
      initial={{opacity: 0, y: 16}}
      whileInView={{opacity: 1, y: 0}}
      whileHover={{y: -6}}
      viewport={{once: true, amount: 0.2}}
      transition={{delay: index * 0.08, duration: 0.5}}
      className="group overflow-hidden rounded-[1.8rem] border border-black/8 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)]"
    >
      <img src={project.cover} alt={project.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          <span>{project.category}</span>
          <span className="h-1 w-1 rounded-full bg-black/20" />
          <span>{project.year}</span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-[var(--color-panel)]/40 px-3 py-1 text-xs text-[var(--color-muted)]">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
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
              <ArrowRight size={14} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
};
