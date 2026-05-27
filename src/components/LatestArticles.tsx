import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import {articles} from '../data/site';

export function LatestArticles() {
  return (
    <section id="articles" className="px-6 py-18 md:px-8 md:py-22 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{opacity: 0, x: -36}}
              whileInView={{opacity: 1, x: 0}}
              whileHover={{y: -8}}
              viewport={{once: true, amount: 0.2}}
              transition={{delay: index * 0.08, duration: 0.55}}
              className="group overflow-hidden rounded-[10px] border border-black/8 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)]"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                referrerPolicy="no-referrer"
              />
              <div className="px-5 py-5">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  <span>{article.date}</span>
                  <span className="h-1 w-1 rounded-full bg-black/20" />
                  <span>{article.category}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{article.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)] transition group-hover:translate-x-1">
                  查看内容
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
