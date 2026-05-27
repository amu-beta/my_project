import {ArrowUpRight} from 'lucide-react';
import {motion, useMotionValue, useScroll, useSpring, useTransform} from 'motion/react';
import type {PointerEvent as ReactPointerEvent} from 'react';
import {useRef} from 'react';
import {projects} from '../data/site';

interface AllProjectsSliderProps {
  onSelectProject: (projectId: string) => void;
}

const finalBanner = {
  image: '/images/xianzhi1.jpg',
  sideImages: [
    '/images/fengsui1.jpg',
    '/images/liuyao1.png',
    '/images/haoyun1.png',
  ],
};

export function AllProjectsSlider({onSelectProject}: AllProjectsSliderProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const smoothDragX = useSpring(dragX, {stiffness: 120, damping: 18});
  const smoothDragY = useSpring(dragY, {stiffness: 120, damping: 18});

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.9,
  });

  const trackX = useTransform(smoothProgress, [0, 0.76], ['0vw', '-156vw']);
  const titleX = useTransform(smoothProgress, [0, 0.28], ['0vw', '-58vw']);
  const stageOpacity = useTransform(smoothProgress, [0, 0.76, 0.84], [1, 1, 0]);
  const finalOpacity = useTransform(smoothProgress, [0.82, 0.9, 1], [0, 0.95, 1]);
  const finalScale = useTransform(smoothProgress, [0.82, 1], [0.97, 1]);
  const finalY = useTransform(smoothProgress, [0.82, 1], [0, 0]);
  const sideOneX = useTransform(smoothDragX, (value) => value * -0.8);
  const sideOneY = useTransform(smoothDragY, (value) => value * -0.6);
  const mainX = useTransform(smoothDragX, (value) => value * 0.35);
  const mainY = useTransform(smoothDragY, (value) => value * 0.25);
  const sideTwoX = useTransform(smoothDragX, (value) => value * 0.7);
  const sideTwoY = useTransform(smoothDragY, (value) => value * -0.35);
  const sideThreeX = useTransform(smoothDragX, (value) => value * 0.9);
  const sideThreeY = useTransform(smoothDragY, (value) => value * 0.75);

  const handleBannerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = bannerRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 26;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 18;

    dragX.set(x);
    dragY.set(y);
  };

  const handleBannerLeave = () => {
    dragX.set(0);
    dragY.set(0);
  };

  return (
    <section ref={sectionRef} id="projects" className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[var(--color-cream)]">
        <motion.div style={{x: titleX, opacity: stageOpacity}} className="absolute left-0 top-0 z-20 flex h-full items-start px-6 pt-12 md:px-8 lg:px-10">
          <div className="mt-[26vh] flex flex-col items-center gap-2 text-center">
            <p className="section-kicker">All Projects</p>
            <h2 className="font-display text-[1.5rem] leading-[0.92] tracking-[-0.07em] text-[var(--color-ink)] md:text-[2rem] lg:text-[2.5rem]">
              全部项目
            </h2>
          </div>
        </motion.div>

        <motion.div style={{x: trackX, opacity: stageOpacity}} className="absolute inset-y-0 left-[18vw] flex w-max items-center gap-3 px-6 md:left-[16vw] lg:left-[14vw]">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex h-[66vh] w-[40vw] min-w-[320px] max-w-[540px] shrink-0 flex-col rounded-[20px]"
            >
              <div className="overflow-hidden rounded-[20px] bg-[#f5f2eb]">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="aspect-[4/3] w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-1 flex-col px-1 pt-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[var(--color-panel)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {project.category}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">{project.year}</span>
                </div>
                <h3 className="mt-3 text-[1.7rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)] lg:text-[2rem]">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-[420px] text-[14px] leading-7 text-[var(--color-muted)]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full bg-[var(--color-panel)]/35 px-3 py-1 text-xs text-[var(--color-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project.id)}
                      className="primary-button px-4 py-3 text-sm font-semibold"
                    >
                      查看案例
                      <ArrowUpRight size={14} />
                    </button>
                    {project.ctaLink ? (
                      <a
                        href={project.ctaLink}
                        target="_blank"
                        rel="noreferrer"
                        className="secondary-button px-4 py-3 text-sm font-semibold"
                      >
                        打开项目
                        <ArrowUpRight size={14} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>

        <motion.div
          style={{opacity: finalOpacity, scale: finalScale, y: finalY}}
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
        >
          <div className="w-full max-w-[1400px] px-6 md:px-8 lg:px-10">
            <div
              ref={bannerRef}
              onPointerMove={handleBannerMove}
              onPointerLeave={handleBannerLeave}
              className="pointer-events-auto relative h-[54vh] w-full"
            >
              <motion.div style={{x: sideOneX, y: sideOneY}} className="absolute left-[4%] top-[10%] z-10 w-[24%] overflow-hidden rounded-[20px] bg-[#f5f2eb] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                  <img src={finalBanner.sideImages[0]} alt="" className="h-[30vh] w-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div style={{x: mainX, y: mainY}} className="absolute left-[22%] top-[0%] z-20 w-[38%] overflow-hidden rounded-[20px] bg-[#f5f2eb] shadow-[0_18px_50px_rgba(0,0,0,0.1)]">
                  <img src={finalBanner.image} alt="" className="h-[54vh] w-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div style={{x: sideTwoX, y: sideTwoY}} className="absolute right-[6%] top-[12%] z-10 w-[28%] overflow-hidden rounded-[20px] bg-[#f5f2eb] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                  <img src={finalBanner.sideImages[1]} alt="" className="h-[28vh] w-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div style={{x: sideThreeX, y: sideThreeY}} className="absolute right-[14%] bottom-[2%] z-30 w-[22%] overflow-hidden rounded-[20px] bg-[#f5f2eb] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                  <img src={finalBanner.sideImages[2]} alt="" className="h-[20vh] w-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="px-6 lg:hidden">
        <div className="mx-auto max-w-6xl">
          <div className="pt-10">
            <p className="section-kicker">All Projects</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.92] tracking-[-0.06em] text-[var(--color-ink)]">
              全部项目
            </h2>
          </div>
          <div className="mt-8 grid gap-5">
            {projects.map((project) => (
              <article key={project.id} className="overflow-hidden rounded-[20px] bg-white">
                <img src={project.cover} alt={project.title} className="h-[220px] w-full object-cover" referrerPolicy="no-referrer" />
                <div className="px-5 pb-6 pt-5">
                  <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">{project.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--color-muted)]">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
