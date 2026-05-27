import {motion, useMotionValue, useSpring, useTransform} from 'motion/react';
import {ArrowUpRight} from 'lucide-react';
import type {PointerEvent as ReactPointerEvent} from 'react';
import {useRef} from 'react';
import {profile, siteAssets} from '../data/site';

export function HeroSection() {
  const previewRef = useRef<HTMLDivElement>(null);
  const hoverX = useMotionValue(0);
  const hoverY = useMotionValue(0);
  const rotateX = useTransform(hoverY, [-50, 50], [7, -7]);
  const rotateY = useTransform(hoverX, [-50, 50], [-7, 7]);
  const smoothRotateX = useSpring(rotateX, {stiffness: 140, damping: 18});
  const smoothRotateY = useSpring(rotateY, {stiffness: 140, damping: 18});
  const smoothX = useSpring(hoverX, {stiffness: 120, damping: 20});
  const smoothY = useSpring(hoverY, {stiffness: 120, damping: 20});

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = previewRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const centeredX = ((relativeX / bounds.width) - 0.5) * 36;
    const centeredY = ((relativeY / bounds.height) - 0.5) * 28;

    hoverX.set(centeredX);
    hoverY.set(centeredY);
  };

  const handlePointerLeave = () => {
    hoverX.set(0);
    hoverY.set(0);
  };

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-18 pt-14 md:px-8 md:pb-24 md:pt-18 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <motion.p
            initial={{opacity: 0, y: 12}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.05, duration: 0.6}}
            className="inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)] shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
          >
            UI / Visual / AI Creative
          </motion.p>

          <motion.h1
            initial={{opacity: 0, y: 18}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.12, duration: 0.7}}
            className="mt-6 max-w-3xl"
          >
            <span className="font-hand text-[4rem] leading-[0.88] tracking-[-0.04em] text-[var(--color-ink)] md:text-[6rem]">
              {siteAssets.heroSignature}
            </span>
          </motion.h1>

          <motion.p
            initial={{opacity: 0, y: 18}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2, duration: 0.7}}
            className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] md:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{opacity: 0, y: 18}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.28, duration: 0.7}}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="#projects"
              whileHover={{y: -4, scale: 1.01}}
              whileTap={{scale: 0.98}}
              className="primary-button px-6 py-3 text-sm font-semibold"
            >
              查看项目
              <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{y: -4, scale: 1.01}}
              whileTap={{scale: 0.98}}
              className="secondary-button px-6 py-3 text-sm font-semibold"
            >
              关于我的经历
              <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{opacity: 0, scale: 0.96}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 0.18, duration: 0.8}}
          className="relative"
        >
          <div className="absolute inset-8 rounded-[2rem] bg-[linear-gradient(135deg,rgba(219,230,225,0.95),rgba(244,229,214,0.95))] blur-3xl" />
          <div className="relative">
            <motion.div
              ref={previewRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
            style={{x: smoothX, y: smoothY, rotateX: smoothRotateX, rotateY: smoothRotateY}}
            whileHover={{scale: 1.012}}
            className="relative overflow-hidden rounded-[10px] border border-black/8 bg-white p-5 shadow-[0_28px_80px_rgba(40,40,25,0.12)] [transform-style:preserve-3d]"
            >
              <img
                src={siteAssets.heroGifs[0]}
                alt="Selected design preview"
                className="aspect-[426/235] w-full rounded-[10px] object-cover"
                referrerPolicy="no-referrer"
              />

              <motion.div
                initial={{opacity: 0, y: 16}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.35, duration: 0.6}}
                style={{x: useTransform(smoothX, (value) => value * -0.45), y: useTransform(smoothY, (value) => value * -0.35)}}
                className="absolute bottom-28 left-10 rounded-[10px] border border-white/60 bg-[rgba(248,245,238,0.88)] px-4 py-4 shadow-[0_14px_32px_rgba(0,0,0,0.12)] backdrop-blur-md"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">Current Focus</p>
                <p className="mt-2 text-base font-semibold text-[var(--color-ink)]">AI-enhanced visual systems</p>
              </motion.div>

              <motion.div
                initial={{opacity: 0, x: 16}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 0.42, duration: 0.6}}
                style={{x: useTransform(smoothX, (value) => value * 0.55), y: useTransform(smoothY, (value) => value * 0.45)}}
                className="absolute right-9 top-18 max-w-[190px] rounded-[10px] border border-white/60 bg-white/92 px-4 py-4 shadow-[0_14px_32px_rgba(0,0,0,0.12)] backdrop-blur-md"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">AI / Layout / Motion</p>
              </motion.div>
            </motion.div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {profile.metrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  whileHover={{y: -6, scale: 1.02}}
                  transition={{type: 'spring', stiffness: 280, damping: 20}}
                  className="rounded-[10px] bg-[var(--color-panel)] px-4 py-4"
                >
                  <p className="text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">{metric.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
