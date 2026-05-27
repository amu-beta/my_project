import {motion} from 'motion/react';
import {ArrowUp} from 'lucide-react';
import {useEffect, useState} from 'react';

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 480);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.a
      href="#home"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      transition={{duration: 0.22}}
      className="fixed bottom-16 right-6 z-[60] flex flex-col items-center gap-2 text-sm font-medium text-[var(--color-ink)] transition hover:-translate-y-0.5 md:bottom-18 md:right-8"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/8 bg-[rgba(248,245,238,0.95)] shadow-[0_14px_34px_rgba(0,0,0,0.12)] backdrop-blur-md">
        <ArrowUp size={16} />
      </span>
      <span>回到顶部</span>
    </motion.a>
  );
}
