import {motion, AnimatePresence} from 'motion/react';
import {useState} from 'react';
import {profile} from '../data/site';

const tabs = [
  {id: 'strengths', label: '个人优势'},
  {id: 'experience', label: '工作经历'},
  {id: 'projects', label: '项目经历'},
  {id: 'skills', label: '专业技能'},
] as const;

type TabId = (typeof tabs)[number]['id'];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabId>('strengths');

  return (
    <section id="about" className="px-6 py-18 md:px-8 md:py-22 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.aside
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.55}}
            className="rounded-[10px] border border-black/8 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)]"
          >
            <div className="flex items-start gap-4">
              <img
                src={profile.portrait}
                alt={profile.name}
                className="h-20 w-20 rounded-[10px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{profile.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{profile.title}</p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{profile.location} · {profile.contact}</p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{profile.email}</p>
              </div>
            </div>

            <div className="mt-6 rounded-[10px] bg-[var(--color-cream)] px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">求职意向</p>
              <p className="mt-3 text-base leading-8 text-[var(--color-ink)]">{profile.intro}</p>
            </div>
          </motion.aside>

          <motion.section
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.55, delay: 0.05}}
            className="self-start rounded-[10px] border border-black/8 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)]"
          >
            <div className="flex flex-wrap gap-2 border-b border-black/6 pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-[10px] px-4 py-2 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? 'bg-[var(--color-ink)] text-white'
                      : 'bg-[var(--color-cream)] text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'strengths' ? (
                <motion.div
                  key="strengths"
                  initial={{opacity: 0, y: 12}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -12}}
                  className="mt-6 space-y-4"
                >
                  {profile.tabs.strengths.map((item) => (
                    <div key={item} className="rounded-[10px] bg-[var(--color-cream)] px-5 py-5">
                      <p className="text-[15px] leading-8 text-[var(--color-ink)]">{item}</p>
                    </div>
                  ))}
                </motion.div>
              ) : null}

              {activeTab === 'experience' ? (
                <motion.div
                  key="experience"
                  initial={{opacity: 0, y: 12}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -12}}
                  className="mt-6 space-y-5"
                >
                  {profile.tabs.experience.map((job) => (
                    <div key={`${job.company}-${job.period}`} className="rounded-[10px] border border-black/8 bg-[var(--color-cream)] px-5 py-5">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">{job.company}</h3>
                          <p className="mt-1 text-sm text-[var(--color-muted)]">{job.role}</p>
                        </div>
                        <p className="text-sm text-[var(--color-muted)]">{job.period}</p>
                      </div>
                      <ul className="mt-4 space-y-3">
                        {job.points.map((point) => (
                          <li key={point} className="text-sm leading-7 text-[var(--color-ink)]">
                            • {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              ) : null}

              {activeTab === 'projects' ? (
                <motion.div
                  key="projects"
                  initial={{opacity: 0, y: 12}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -12}}
                  className="mt-6 space-y-5"
                >
                  {profile.tabs.projects.map((project) => (
                    <div key={`${project.title}-${project.period}`} className="rounded-[10px] border border-black/8 bg-[var(--color-cream)] px-5 py-5">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">{project.title}</h3>
                          <p className="mt-1 text-sm text-[var(--color-muted)]">{project.role}</p>
                        </div>
                        <p className="text-sm text-[var(--color-muted)]">{project.period}</p>
                      </div>
                      <ul className="mt-4 space-y-3">
                        {project.points.map((point) => (
                          <li key={point} className="text-sm leading-7 text-[var(--color-ink)]">
                            • {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              ) : null}

              {activeTab === 'skills' ? (
                <motion.div
                  key="skills"
                  initial={{opacity: 0, y: 12}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -12}}
                  className="mt-6 grid gap-4"
                >
                  {profile.tabs.skills.map((group) => (
                    <div key={group.title} className="rounded-[10px] border border-black/8 bg-[var(--color-cream)] px-5 py-5">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">{group.title}</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-full bg-white px-3 py-2 text-sm text-[var(--color-ink)]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
