import {motion} from 'motion/react';
import {ArrowUpRight, X} from 'lucide-react';
import {type Project} from '../data/site';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({project, onClose}: ProjectModalProps) {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className="fixed inset-0 z-[100] overflow-y-auto bg-[rgba(248,245,238,0.94)] px-6 py-6 backdrop-blur-md md:px-8"
    >
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/8 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.12)]">
        <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-[2rem] border-b border-black/6 bg-white/92 px-5 py-4 backdrop-blur-md md:px-7">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">{project.category}</p>
            <h2 className="mt-2 font-display text-2xl tracking-[-0.03em] text-[var(--color-ink)]">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/8 text-[var(--color-muted)] transition hover:bg-[var(--color-ink)] hover:text-white"
            aria-label="Close project detail"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-5 py-8 md:px-7 md:py-10">
          <p className="max-w-3xl text-base leading-8 text-[var(--color-muted)]">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[var(--color-panel)] px-3 py-1 text-xs text-[var(--color-muted)]">
                {tag}
              </span>
            ))}
          </div>

          {project.ctaLink ? (
            <a
              href={project.ctaLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              打开项目
              <ArrowUpRight size={14} />
            </a>
          ) : null}

          <div className="mt-10 space-y-6">
            {project.detailImages.map((image, index) => (
              <div key={image} className="overflow-hidden rounded-[1.5rem] bg-[var(--color-panel)]">
                <img
                  src={image}
                  alt={`${project.title} detail ${index + 1}`}
                  className="w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
