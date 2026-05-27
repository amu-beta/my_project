import {AnimatePresence} from 'motion/react';
import {useEffect, useState} from 'react';
import {AllProjectsSlider} from './components/AllProjectsSlider';
import {AboutSection} from './components/AboutSection';
import {BackToTopButton} from './components/BackToTopButton';
import {CategoryTabsShowcase} from './components/CategoryTabsShowcase';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {HeroSection} from './components/HeroSection';
import {LatestArticles} from './components/LatestArticles';
import {ProjectModal} from './components/ProjectModal';
import {projects} from './data/site';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProjectId ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProjectId]);

  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null;

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fbf8f1_0%,#f7f3ea_48%,#f3ede2_100%)] text-[var(--color-ink)]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(223,231,225,0.72),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(242,224,202,0.5),_transparent_26%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(24,39,34,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,39,34,0.035)_1px,transparent_1px)] [background-size:40px_40px]" />

      <Header />

      <main className="relative z-10">
        <HeroSection />
        <CategoryTabsShowcase onSelectProject={setSelectedProjectId} />
        <AllProjectsSlider onSelectProject={setSelectedProjectId} />
        <LatestArticles />
        <AboutSection />
      </main>

      <Footer />
      <BackToTopButton />

      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProjectId(null)} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
