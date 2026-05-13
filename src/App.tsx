import React, { useRef, useState, useEffect, useMemo, RefObject } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from 'motion/react';
import { Mail, X, ArrowUpRight, Globe, Github } from 'lucide-react';

const IMAGES = [
  {
    url: '/images/attachments.png',
    rotation: -18,
    offsetX: -120,
    offsetY: -200,
    targetX: -700,
    targetY: -500,
    title: '运势·轻玄学专题',
  },
  {
    url: '/images/macos-folder.png',
    rotation: -10,
    offsetX: 140,
    offsetY: -260,
    targetX: 700,
    targetY: -450,
    title: '枫燧堂 PC 端官网',
  },
  {
    url: '/images/regenerated_image_1778581831465.png',
    rotation: 5,
    offsetX: -160,
    offsetY: -20,
    targetX: -650,
    targetY: 450,
    title: 'Luckynival AIGC',
  },
  {
    url: '/images/regenerated_image_1778581837870.png',
    rotation: 12,
    offsetX: 180,
    offsetY: 40,
    targetX: 650,
    targetY: 550,
    title: 'AI 六爻卜卦',
  },
  {
    url: '/images/regenerated_image_1778582370775.png',
    rotation: 19,
    offsetX: 0,
    offsetY: 120,
    targetX: 0,
    targetY: 750,
    title: '先知命局 SeerQ',
  },
];

const PROJECT_LIST = [
  {
    id: 'luckynival',
    title: '先知好运节',
    category: 'Visual Design',
    description: 'AIGC 赋能海外新年活动视觉设计。探索 AIGC 在运营视觉中的全链路应用，从创意构思到素材生成，极大提升运营提效与视觉深度处理。',
    image: '/images/regenerated_image_1778581837870.png',
    ctaLink: 'https://h5.seeronnet.net/dist/new-year-2026/',
    detailImages: [
      '/images/luckynival_detail_3.jpg',
      '/images/luckynival_detail_4.png',
      '/images/luckynival_detail_5.jpg',
      '/images/luckynival_detail_6.jpg'
    ]
  },
  {
    id: 'divination',
    title: 'AI 六爻卜卦产品设计',
    category: 'Product Design',
    description: 'AI 赋能传统易学App。结合传统智慧与人工智能，为用户提供专业、精准、易懂的卦象解析，让古老易学焕发数字新生。',
    image: '/images/regenerated_image_1778581831465.png',
    ctaLink: '#',
    detailImages: [
      '/images/divination_detail_1.jpg',
      '/images/divination_detail_2.jpg',
      '/images/divination_detail_2.gif'
    ]
  },
  {
    id: 'seerq',
    title: 'SeerQ DESIGN',
    category: 'Product Design',
    description: '面向全球用户的海外数字服务 App。致力于打造全球领先的数字命理服务平台，提供极致的用户体验与视觉感受。',
    image: '/images/regenerated_image_1778581837870.png',
    ctaLink: 'https://play.google.com/store/apps/details?id=com.mmc.seer.onnet&hl=zh',
    detailImages: [
      '/images/xianzhi1.jpg',
      '/images/xianzhi4.gif',
      '/images/xianzhi2.png',
      '/images/xianzhi3.png'
    ]
  },
  {
    id: 'pc',
    title: '枫燧堂 PC 官网',
    category: 'Web Design',
    description: '传统文化 brand 官网设计，偏简约东方高级质感。优化 PC 端布局、浏览逻辑，展示品牌文化、业务体系，提升品牌专业度与视觉质感。',
    image: '/images/regenerated_image_1778581837870.png',
    ctaLink: 'https://fengsuitang.com/',
    detailImages: [
      '/images/fengsui1.jpg',
      '/images/fengsui2.jpg',
    ]
  },
  {
    id: 'topic',
    title: '专题页设计及运营设计（专题）',
    category: 'Visual Design',
    description: '针对海外产品做专题活动、营销落地页设计。统一视觉规范，优化信息层级，用于活动引流、功能推广。标准化页面体系，提升运营转化、缩短改版周期。',
    image: '/images/regenerated_image_1778545657832.jpg',
    ctaLink: 'https://www.seeronnet.com/seer/onlinecs',
    detailImages: [
      '/images/zhuangti1.jpg',
      '/images/zhuangti2.jpg',
      '/images/zhuangti3.jpg',
      '/images/zhuangti5.gif',
      '/images/zhuangti6.gif',
      '/images/zhuangti7.gif',
      '/images/zhuangti4.jpg',
      '/images/zhuangti8.gif',
      '/images/zhuangti9.gif',
    ]
  },
];


const FEATURED_WORKS = [
  {
    id: 'luckynival-work',
    title: '先知好运节',
    subtitle: 'AIGC 赋能海外新年活动视觉设计',
    icon: '🎨',
    bgColor: 'bg-orange-50',
    logoUrl: '/images/featured_luckynival_logo.png',
    accentColor: 'text-orange-600',
    previews: [
      '/images/haoyun3.png',
      '/images/haoyun2.png',
      '/images/haoyun1.png'
    ],
    layouts: [
      { initial: { x: 0, y: 0, rotate: 0, opacity: 0, scale: 0.5 }, animate: { x: 0, y: 20, rotate: 0, opacity: 1, scale: 1 } },
      { initial: { x: -250, y: 0, rotate: -20, opacity: 0 }, animate: { x: -180, y: 50, rotate: -12, opacity: 1 } },
      { initial: { x: 250, y: 0, rotate: 20, opacity: 0 }, animate: { x: 180, y: 50, rotate: 12, opacity: 1 } }
    ]
  },
  {
    id: 'divination-work',
    title: 'AI 六爻卜卦',
    subtitle: 'AI 赋能传统易学App',
    icon: '📜',
    bgColor: 'bg-blue-50',
    logoUrl: '/images/featured_divination_logo.png',
    accentColor: 'text-blue-600',
    previews: [
      '/images/liuyao3.png',
      '/images/liuyao2.png',
      '/images/liuyao1.png'
    ],
    layouts: [
      { initial: { x: 0, y: -100, rotate: 0, opacity: 0 }, animate: { x: 0, y: -60, rotate: 0, opacity: 1 } },
      { initial: { x: 0, y: 50, rotate: 0, opacity: 0 }, animate: { x: -80, y: 100, rotate: -8, opacity: 1 } },
      { initial: { x: 0, y: 50, rotate: 0, opacity: 0 }, animate: { x: 80, y: 100, rotate: 8, opacity: 1 } }
    ]
  },
  {
    id: 'seerq-work',
    title: 'SeerQ DESIGN',
    subtitle: '面向全球用户的海外数字服务 App',
    icon: '👁️',
    bgColor: 'bg-emerald-50',
    logoUrl: '/images/featured_seerq_logo.png',
    accentColor: 'text-emerald-600',
    previews: [
      '/images/app3.png',
      '/images/app2.png',
      '/images/app1.png'
    ],
    layouts: [
      { initial: { x: -150, y: -150, rotate: -15, opacity: 0 }, animate: { x: -60, y: -40, rotate: -5, opacity: 1 } },
      { initial: { x: 0, y: 0, rotate: 0, opacity: 0 }, animate: { x: 20, y: 40, rotate: 2, opacity: 1 } },
      { initial: { x: 150, y: 150, rotate: 15, opacity: 0 }, animate: { x: 100, y: 120, rotate: 8, opacity: 1 } }
    ]
  }
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECT_LIST[0] | null>(null);

  // Disable scrolling when project is selected
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', '33% start'],
  });

  // Smooth out the scroll progress for animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Text layer transforms
  const textOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const textScale = useTransform(smoothProgress, [0, 0.4], [0.5, 1]);

  return (
    <div ref={containerRef} className="relative bg-[#FDFCF9] selection:bg-purple-100">
      {/* SVG Filters for "Self-made World" Aesthetic */}
      <svg className="hidden">
        <filter id="manga-sketch">
          <feTurbulence type="turbulence" baseFrequency="0.02 0.05" numOctaves="2" seed="1" result="noise">
            <animate attributeName="seed" values="1;2;3;4;5" dur="0.4s" repeatCount="indefinite" calcMode="discrete" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
        </filter>
      </svg>

      {/* Glassmorphism Navigation Bar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit px-8 py-3 bg-white/40 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center gap-8">
        <a href="#" className="flex items-center gap-2 pt-1 group">
          <span className="font-sans text-[12px] font-black tracking-[0.2em] text-gray-800 hover:text-purple-600 transition-colors">首页</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#work" className="text-[12px] font-black text-gray-800 hover:text-purple-600 transition-colors tracking-widest whitespace-nowrap uppercase">我的作品</a>
          <a href="#about" className="text-[12px] font-black text-gray-800 hover:text-purple-600 transition-colors tracking-widest whitespace-nowrap uppercase">关于我</a>
        </div>
      </nav>

      {/* Hero Section Wrapper */}
      <div className="h-[300vh] relative">
        <div className="sticky top-0 h-[600px] w-full flex items-center justify-center overflow-hidden">
          {/* Top Header */}
          <div className="absolute top-0 w-full p-8 px-12 flex justify-between items-center z-50 mix-blend-difference text-white">
            <div className="text-[7px] font-medium tracking-[0.4em] uppercase opacity-50">Copyright © Chloe Lin</div>
          </div>



          {/* Text Layer */}
          <motion.div
            style={{ opacity: textOpacity, scale: textScale }}
            className="relative z-30 flex flex-col items-center text-center max-w-4xl px-6"
          >
            <h1 className="flex flex-col items-center leading-none">
              <span className="text-[50px] font-hand text-black mb-4">Chloe Lin</span>
              <span className="text-xl md:text-2xl font-bold tracking-[0.4em] text-gray-400 uppercase">Portfolio</span>
            </h1>
            <p className="mt-8 text-gray-400 text-sm md:text-base font-medium max-w-lg tracking-tight leading-relaxed opacity-80">
              我是林凯云，一个拥有超过5年经验的UI视觉设计师，在这里可以了解更多关于我的项目和信息，未来发展目标结合AI做更好的设计
            </p>
            <motion.a
              href="#work"
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgb(126, 34, 206)",
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="mt-10 px-10 py-5 bg-purple-600 text-white font-extrabold text-base rounded-xl shadow-2xl shadow-purple-600/20 cursor-pointer block"
            >
              Start Project
            </motion.a>
          </motion.div>

          {/* Image Stack Layer */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="relative w-[180px] h-[220px]">
              {IMAGES.map((img, index) => (
                <ImageCard
                  key={index}
                  image={img}
                  progress={smoothProgress}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Latest Works Section (我的作品) */}
      <FeaturedSection onProjectSelect={setSelectedProject} />

      {/* All Works Gallery Section */}
      <AllWorksSection onProjectSelect={setSelectedProject} />

      {/* Resume Section (个人简历) */}
      <div id="about">
        <ResumeSection />
      </div>

      {/* Project Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-sm">© 2025 Chloe . All rights reserved.</p>
      </footer>

      {/* Decorative background grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Mouse Follower Trail */}
      <CursorTrail />
    </div>
  );
}

/**
 * Mouse Cursor Trail Component
 * Creates a "string" of icons that follow the mouse with physics-based delay
 */
function CursorTrail() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const trailIcons = [
    '/images/xingxing.png',
    '/images/xingxing.png',
    '/images/xingxing.png',
    '/images/xingxing.png',
    '/images/xingxing.png',
    '/images/xingxing.png'
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);

      // Reset stillness timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {trailIcons.map((icon, index) => (
        <TrailItem 
          key={index} 
          index={index} 
          mouseX={mouseX} 
          mouseY={mouseY} 
          icon={icon} 
          isVisible={isVisible}
        />
      ))}
    </div>
  );
}

interface TrailItemProps {
  key?: React.Key;
  index: number;
  mouseX: any;
  mouseY: any;
  icon: string;
  isVisible: boolean;
}

function TrailItem({ index, mouseX, mouseY, icon, isVisible }: TrailItemProps) {
  // Incremental stiffness and damping create the "sequential following" (chain) effect
  const stiffness = 200 - index * 25;
  const damping = 30 + index * 4;

  const x = useSpring(mouseX, { stiffness, damping });
  const y = useSpring(mouseY, { stiffness, damping });
  
  // Visual settings per icon in trail
  const baseOpacity = Math.max(0, 0.8 - (index * 0.12));
  const scale = Math.max(0.4, 0.8 - (index * 0.08));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isVisible ? baseOpacity : 0,
        x: x.get(), // Use current spring value to avoid jumping
        y: y.get() 
      }}
      style={{
        x,
        y,
        scale,
        translateX: "-50%",
        translateY: "-50%",
      }}
      transition={{
        opacity: { duration: 0.5, ease: "easeInOut" }
      }}
      className="absolute top-0 left-0 w-6 h-6 pointer-events-none"
    >
      <img 
        src={icon} 
        alt="" 
        className="w-full h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}

interface ProjectCardProps {
  project: typeof PROJECT_LIST[0];
  index: number;
  total: number;
  onOpen: () => void;
  key?: any;
}

function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start start'],
  });

  // Entry scale: starts smaller and reaches full size as it hits the top
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  // Optional: subtle opacity fade as it comes in
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div 
      ref={targetRef} 
      className="h-[100vh] flex items-center justify-center sticky top-0"
      // We remove the index offset to allow "direct coverage" (perfect overlap)
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ 
          scale,
          opacity,
          boxShadow: "0 40px 100px rgba(0,0,0,0.15)"
        }}
        className={`relative w-full max-w-3xl aspect-[16/9] bg-[#FDFCF9] rounded-[32px] overflow-hidden flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} border border-gray-100/50 backdrop-blur-sm group/card cursor-pointer`}
        onClick={onOpen}
      >
        {/* Image Side */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-1000 ease-out group-hover:scale-105 brightness-110"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-10 flex flex-col justify-center items-start bg-[#FDFCF9] z-10">
          <div className="mb-6">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-[9px] font-black uppercase tracking-[0.3em] mb-4 inline-block"
            >
              {project.category}
            </motion.span>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-black mb-4 tracking-tighter leading-[0.85]">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs font-medium">
              {project.description}
            </p>
          </div>
          
          <motion.button
            whileHover={{ x: 10 }}
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
            className="flex items-center gap-3 text-black font-extrabold text-lg group cursor-pointer"
          >
            Explore Case
            <div className="w-10 h-10 rounded-full border-2 border-black/5 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300">
              <span className="text-xl">→</span>
            </div>
          </motion.button>
        </div>

        {/* Index Number */}
        <div className="absolute top-8 right-8 font-display text-7xl font-black text-black/[0.03] pointer-events-none select-none leading-none">
          {index + 1}
        </div>
      </motion.div>
    </div>
  );
}



const ALL_WORKS_CATEGORY = [
  { id: 'all', label: '全部' },
  { id: 'app', label: 'app' },
  { id: 'web', label: '网页' },
  { id: 'topic', label: '专题' },
  { id: 'ops', label: '运营设计' },
];

const ALL_WORKS_DATA = [
  {
    id: 'luckynival-all',
    title: '先知好运节 - 运营设计',
    subtitle: 'AIGC 赋能海外新年活动视觉设计',
    category: 'ops',
    label: '运营',
    image: '/images/fengmian8.jpg',
    secondaryImage: '/images/fengmian2.jpg',
    num: '05',
    tag: '推荐'
  },
  {
    id: 'topic-all',
    title: '专题页设计及运营设计（专题）',
    subtitle: '海外专题活动全链路设计案例',
    category: 'topic',
    label: '专题',
    image: '/images/fengmian6.jpg',
    secondaryImage: '/images/fengmian1.jpg',
    num: '04',
  },
  {
    id: 'pc-all',
    title: '枫燧堂 PC 官网',
    subtitle: '品牌官网全案设计',
    category: 'web',
    label: 'PC',
    image: '/images/fengmian7.jpg',
    secondaryImage: '/images/fengmian3.jpg',
    num: '03',
  },
  {
    id: 'divination-all',
    title: '六爻卜卦',
    subtitle: 'AI 赋能传统易学App',
    category: 'app',
    label: 'APP',
    image: '/images/fengmian9.jpg',
    secondaryImage: '/images/fengmian4.jpg',
    num: '02',
  },
  {
    id: 'seerq-all',
    title: '先知命局',
    subtitle: '面向全球用户的海外数字服务 App',
    category: 'app',
    label: 'APP',
    image: '/images/fengmian10.jpg',
    secondaryImage: '/images/fengmian.jpg',
    num: '01',
  }
];

function AllWorksSection({ onProjectSelect }: { onProjectSelect: (p: typeof PROJECT_LIST[0]) => void }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);

  const filteredWorks = ALL_WORKS_DATA.filter(work => 
    activeCategory === 'all' || work.category === activeCategory
  );

  return (
    <section className="bg-[#FDFCF9] py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Gallery Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-24 pl-[1px]">
          {ALL_WORKS_CATEGORY.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 transition-all duration-300 border ${
                idx === 0 ? 'py-2' : 'h-[38px] py-2'
              } rounded-full text-sm font-bold ${
                activeCategory === cat.id 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300'
              }`}
            >
              {cat.label} {cat.id === 'all' && <span className="opacity-50 ml-1">({ALL_WORKS_DATA.length})</span>}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {filteredWorks.map((work) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={work.id}
              className="flex flex-col group cursor-pointer"
              onMouseEnter={() => setHoveredWork(work.id)}
              onMouseLeave={() => setHoveredWork(null)}
              onClick={() => {
                const baseId = work.id.split('-')[0];
                const project = PROJECT_LIST.find(p => p.id === baseId) || PROJECT_LIST[0];
                onProjectSelect(project);
              }}
            >
              <div className="flex items-center justify-between mb-4 px-1">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">- {work.label} -</span>
                <span className="text-[10px] font-mono font-bold text-gray-300">({work.num})</span>
              </div>
              
              <div className="relative h-[223.5px] w-full max-w-[372.5px] rounded-[10px] overflow-hidden bg-gray-50 mb-8 group shadow-sm hover:shadow-xl transition-shadow duration-500">
                <img
                  src={work.image}
                  alt={work.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-200 ${
                    hoveredWork === work.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                  referrerPolicy="no-referrer"
                />
                <img
                  src={work.secondaryImage}
                  alt={`${work.title} hover`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-200 ${
                    hoveredWork === work.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>

              <div className="space-y-2 px-1">
                <div className="flex items-center gap-2">
                  {work.tag && (
                    <span className="px-2 py-0.5 bg-blue-500 text-white text-[9px] font-black rounded uppercase">
                      {work.tag}
                    </span>
                  )}
                  <h3 className="text-xl font-black text-[#333] tracking-tight group-hover:text-purple-600 transition-colors">
                    {work.title}
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors leading-relaxed">
                  {work.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const RESUME_DATA = {
  advantages: [
    {
      title: "全链路 UI/UX 设计经验",
      desc: "主导APP全架构，打造轻量化国际化设计语言，支撑海外市场拓展。"
    },
    {
      title: "效率提升与 AIGC 应用",
      desc: "熟练使用 AIGC 工具（LiblibAI / ComfyUI / NanoBanana）自动生成素材与设计系统组件，AI 辅助生成组件文档、交互文档。"
    },
    {
      title: "运营活动设计",
      desc: "全渠道负责 H5、专题页面、活动海报、视频等设计，结合数据优化用户转化。"
    },
    {
      title: "沟通协作与全局视野",
      desc: "擅长跨团队协作、平衡产品策略、业务目标与用户体验。"
    }
  ],
  experience: [
    {
      company: "弘策科技",
      role: "视觉设计师",
      period: "2022.03 - 2026.03",
      points: [
        "0-1 产品设计主导：负责先知命局 APP 从 0 到 1 全流程设计，包含需求拆解、信息架构等落地。",
        "产品迭代与改版：主导 APP 全链路体验改版，打造轻量化国际化设计语言，支撑海外市场拓展。",
        "设计体系搭建：建立多端统一设计系统与组件规范，落地 AI 辅助设计工作流，提升效率 60%+。",
        "全场景运营：策划并执行全渠道活动设计（H5、专题页、视频），通过数据分析优化转化。"
      ]
    },
    {
      company: "广州金十信息科技有限公司",
      role: "UI 设计师",
      period: "2020.06 - 2022.01",
      points: [
        "负责「美港电讯 APP」界面设计与版本迭代，主导功能模块 UI/UX 优化，平衡商业需求与用户体验。",
        "业务数据报告可视化设计：通过层级梳理与视觉重构，提升数据内容的可读性与专业度。"
      ]
    }
  ],
  skills: {
    capabilities: ["高级 UI/UX 全流程", "交互活动优化", "信息架构", "设计系统", "数据可视化", "运营全方案"],
    tools: ["Figma", "Photoshop", "LiblibAI", "ComfyUI", "NanoBanana"],
    core: ["出海产品装备", "团队协作", "需求分析", "数据驱动设计", "效率优化", "AI 辅助前端开发", "运营活动设计"]
  }
};

function ResumeSection() {
  const [activeTab, setActiveTab] = useState<'adv' | 'exp' | 'skills'>('adv');

  const tabs = [
    { id: 'adv', label: '个人优势', num: '01' },
    { id: 'exp', label: '工作经历', num: '02' },
    { id: 'skills', label: '专业技能', num: '03' },
  ] as const;

  return (
    <section className="bg-[#FDFCF9] py-32 border-t border-[#E9E4DB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header - Editorial Style */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center justify-center md:justify-start gap-2 mb-6"
             >
                <div className="w-12 h-[1px] bg-purple-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-purple-600">Background</span>
             </motion.div>
             <h2 
               className="text-4xl md:text-6xl font-hand text-[#333] tracking-tighter leading-[0.9] mb-8"
               style={{ filter: "url(#manga-sketch)" }}
             >
               Resume
             </h2>
             <p className="text-[#666] font-medium leading-relaxed max-w-lg text-sm mx-auto md:mx-0">
               我是林凯云，一个拥有超过 5 年经验的 UI 视觉设计师，在这里可以了解更多关于我的项目和信息，未来发展目标结合 AI 做更好的设计。
             </p>
          </div>
          
          <div className="flex items-center gap-8 bg-white p-4 rounded-[10px] border border-[#E9E4DB] shadow-sm">
             <div className="text-right pl-4">
                <p className="text-2xl font-black text-[#333] tracking-tight uppercase">Chloe Lin</p>
                <p className="text-[10px] font-bold text-[#999] uppercase tracking-[0.2em] mt-1">Product Designer</p>
             </div>
             <div className="relative w-24 h-24 group">
                <div className="absolute inset-0 bg-purple-100 rounded-[10px] rotate-6 scale-95 group-hover:rotate-12 transition-transform duration-500" />
                <div className="relative w-full h-full rounded-[10px] overflow-hidden border-2 border-white shadow-lg bg-white">
                    <img 
                      src="/images/regenerated_image_1778545670870.jpg" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                      alt="Avatar"
                      referrerPolicy="no-referrer"
                    />
                </div>
             </div>
          </div>
        </div>

        {/* Modular Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Sidebar Navigation */}
           <div className="lg:col-span-3 space-y-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full group relative p-8 rounded-[10px] border-2 text-left transition-all duration-500 overflow-hidden ${
                    activeTab === tab.id 
                      ? 'bg-[#333] text-white border-[#333] shadow-2xl translate-x-2' 
                      : 'bg-white border-[#E9E4DB] hover:border-purple-200 text-[#999]'
                  }`}
                >
                  <div className="relative z-10">
                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-3 block transition-colors ${activeTab === tab.id ? 'text-purple-400' : 'text-[#ccc]'}`}>
                      {tab.num}
                    </span>
                    <span className="text-base font-black tracking-tight block">{tab.label}</span>
                  </div>
                  
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="active-accent"
                      className="absolute top-1/2 right-6 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400"
                    />
                  )}
                  
                  <div className={`absolute bottom-[-20%] right-[-10%] text-4xl font-black opacity-10 select-none transition-transform duration-700 ${activeTab === tab.id ? 'translate-y-0 scale-110' : 'translate-y-12'}`}>
                    {tab.label}
                  </div>
                </button>
              ))}
              
              <div className="p-8 rounded-[10px] border border-dashed border-[#E9E4DB] mt-8">
                 <p className="text-[11px] font-black text-purple-600 uppercase tracking-widest mb-2">Connect</p>
                 <a href="mailto:chloelinlin33@gmail.com" className="text-[13px] font-bold text-[#333] hover:text-purple-600 transition-colors">
                   chloelinlin33@gmail.com
                 </a>
              </div>
           </div>

           {/* Main Content Area */}
           <div className="lg:col-span-9">
              <div className="bg-white rounded-[10px] p-8 md:p-16 border border-[#E9E4DB] shadow-sm relative overflow-hidden min-h-[600px]">
                 <AnimatePresence mode="wait">
                    {activeTab === 'adv' && (
                      <motion.div
                        key="adv"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
                      >
                        {RESUME_DATA.advantages.map((adv, i) => (
                          <div key={i} className="group">
                             <div className="flex items-baseline gap-4 mb-6">
                               <span className="font-mono text-xl text-purple-100 group-hover:text-purple-600 transition-colors duration-500">0{i+1}</span>
                               <h4 className="text-lg font-black text-[#333] tracking-tighter">{adv.title}</h4>
                             </div>
                             <p className="text-[#666] text-xs leading-relaxed font-medium pl-12 border-l-2 border-gray-50 group-hover:border-purple-100 transition-colors">
                               {adv.desc}
                             </p>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {activeTab === 'exp' && (
                      <motion.div
                        key="exp"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-20"
                      >
                        {RESUME_DATA.experience.map((item, i) => (
                          <div key={i} className="relative">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
                               <div className="max-w-md">
                                  <h3 className="text-xl font-black text-[#333] mb-2">{item.company}</h3>
                                  <p className="text-purple-600 font-bold tracking-widest text-[9px] uppercase">{item.role}</p>
                               </div>
                               <div className="font-mono text-xs font-bold text-[#999] bg-[#FDFCF9] px-3 py-1.5 rounded-full border border-[#E9E4DB]">
                                  {item.period}
                               </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                               {item.points.map((point, j) => (
                                 <div key={j} className="bg-[#FDFCF9] p-6 rounded-[10px] border border-[#E9E4DB]/60 hover:border-purple-100 transition-colors group">
                                    <p className="text-[#666] text-[13px] leading-relaxed font-medium group-hover:text-[#333] transition-colors">
                                      {point}
                                    </p>
                                 </div>
                               ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {activeTab === 'skills' && (
                      <motion.div
                        key="skills"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="space-y-16"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                           <div className="space-y-12">
                              <div>
                                 <h4 className="text-[10px] font-black text-purple-600 uppercase tracking-[0.5em] mb-8 flex items-center gap-4">
                                   设计能力 <div className="flex-1 h-[1px] bg-purple-50" />
                                 </h4>
                                 <div className="flex flex-wrap gap-3">
                                   {RESUME_DATA.skills.capabilities.map((s, i) => (
                                     <span key={i} className="px-4 py-2 bg-white border border-[#E9E4DB] rounded-2xl text-[11px] font-bold text-[#555] hover:shadow-lg hover:border-purple-200 transition-all cursor-default">
                                       {s}
                                     </span>
                                   ))}
                                 </div>
                              </div>
                              
                              <div>
                                 <h4 className="text-[9px] font-black text-blue-600 uppercase tracking-[0.5em] mb-8 flex items-center gap-4">
                                   常用工具 <div className="flex-1 h-[1px] bg-blue-50" />
                                 </h4>
                                 <div className="flex flex-wrap gap-3">
                                   {RESUME_DATA.skills.tools.map((s, i) => (
                                     <span key={i} className="px-4 py-2 bg-blue-50/20 border border-blue-100/50 rounded-2xl text-[11px] font-black text-blue-700">
                                       {s}
                                     </span>
                                   ))}
                                 </div>
                              </div>
                           </div>

                           <div className="bg-[#FDFCF9] p-10 rounded-[10px] border border-[#E9E4DB]">
                              <h4 className="text-[9px] font-black text-orange-600 uppercase tracking-[0.5em] mb-8">核心优势</h4>
                              <div className="space-y-6">
                                 {RESUME_DATA.skills.core.map((s, i) => (
                                   <div key={i} className="flex items-center gap-6 group">
                                      <div className="w-8 h-8 rounded-full bg-white border border-orange-100 flex items-center justify-center font-mono text-[10px] text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                                        {i+1}
                                      </div>
                                      <span className="text-[13px] font-bold text-[#333] tracking-tight">{s}</span>
                                   </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                      </motion.div>
                    )}
                 </AnimatePresence>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}


function FeaturedSection({ onProjectSelect }: { onProjectSelect: (p: typeof PROJECT_LIST[0]) => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const reversedWorks = useMemo(() => [...FEATURED_WORKS].reverse(), [FEATURED_WORKS]);
  const previewIndex = hoveredIndex ?? 0;

  return (
    <section id="work" className="relative bg-[#FDFCF9] pt-0 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 md:px-12">
        <div className="flex items-center gap-1 mb-0 pb-4">
          <h2 
            className="font-hand text-[32px] font-extrabold text-[#333] tracking-tight"
            style={{ filter: "url(#manga-sketch)" }}
          >
            My Works
          </h2>
          <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[11px] border-l-[#333] border-b-[7px] border-b-transparent mt-1 pl-[1px] ml-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 w-full max-w-[580px]">
            {reversedWorks.map((work, i) => {
              // Find matching project from list for the click handler
              const projectId = work.id.replace('-work', '');
              const project = PROJECT_LIST.find(p => p.id === projectId) || PROJECT_LIST[0];

              return (
                <motion.div
                  key={work.id}
                  onClick={() => onProjectSelect(project)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    backgroundColor: "rgba(255, 255, 255, 1)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`group relative bg-[#FDFCF9] border-2 border-[#E9E4DB] rounded-[10px] px-8 py-4 flex items-center gap-8 w-full min-h-[100px] transition-all ${hoveredIndex !== null && hoveredIndex !== i ? 'opacity-40 grayscale-[0.5]' : 'opacity-100'}`}
                >
                  <div className="w-20 h-20 flex items-center justify-center overflow-hidden shrink-0">
                    <img src={work.logoUrl} alt={work.title} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-extrabold text-[#333] tracking-tight">
                      {work.title}
                    </h3>
                    <p className="text-[#999] text-base font-medium tracking-wide">
                      {work.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Floating Previews */}
          <div className="relative h-[420px] lg:h-[600px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={previewIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Background Image (Dashboard/Large) */}
                <motion.div
                  initial={reversedWorks[previewIndex].layouts[0].initial}
                  animate={reversedWorks[previewIndex].layouts[0].animate}
                  transition={{ type: "spring", stiffness: 50, damping: 15 }}
                  className="absolute z-10 w-[72%] max-w-[450px] h-[240px] lg:h-[320px] overflow-hidden"
                >
                  <img 
                    src={reversedWorks[previewIndex].previews[1]} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Foreground Image 1 (Mobile) */}
                <motion.div
                  initial={reversedWorks[previewIndex].layouts[1].initial}
                  animate={reversedWorks[previewIndex].layouts[1].animate}
                  transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
                  className="absolute z-30 w-[130px] lg:w-[180px] h-[280px] lg:h-[380px] overflow-hidden"
                >
                  <img 
                    src={reversedWorks[previewIndex].previews[0]} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Foreground Image 2 (Secondary Mobile/Card) */}
                <motion.div
                  initial={reversedWorks[previewIndex].layouts[2].initial}
                  animate={reversedWorks[previewIndex].layouts[2].animate}
                  transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.2 }}
                  className="absolute z-20 w-[150px] lg:w-[200px] h-[220px] lg:h-[280px] overflow-hidden"
                >
                  <img 
                    src={reversedWorks[previewIndex].previews[2]} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
interface ProjectDetailProps {
  project: typeof PROJECT_LIST[0];
  onClose: () => void;
}

function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const detailImages = project.detailImages || [project.image];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-white overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top Navigation */}
      <div className="sticky top-0 z-[210] w-full px-8 py-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600">{project.category}</span>
          <div className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="text-sm font-bold text-gray-900">{project.title}</span>
        </div>
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
        >
          <X size={20} />
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Header Content */}
        <div className="mb-20">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-[40px] font-black text-gray-900 tracking-tighter mb-8 leading-tight"
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-12"
          >
            {project.description}
          </motion.p>
          
          {project.ctaLink && project.ctaLink !== '#' && (
            <motion.a
              href={project.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-4 bg-purple-600 text-white rounded-full font-bold text-base hover:bg-purple-700 transition-colors shadow-xl shadow-purple-200"
            >
              查看链接 <ArrowUpRight size={20} />
            </motion.a>
          )}
        </div>

        {/* Image Gallery - One image per row */}
        <div className="space-y-12">
          {detailImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 24, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.2) }}
              className="w-full overflow-hidden"
            >
              <img 
                src={img} 
                className="w-full h-auto object-cover" 
                alt={`${project.title} detail ${idx + 1}`}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-32 pt-16 border-t border-gray-100 flex flex-col items-center">
          <p className="text-gray-400 text-sm font-medium mb-8">感谢阅读</p>
          <button 
            onClick={onClose}
            className="px-12 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all underline-offset-4"
          >
            返回首页
          </button>
        </div>
      </div>
    </motion.div>
  );
}

interface ImageCardProps {
  key?: any;
  image: typeof IMAGES[0];
  progress: any;
  index: number;
}

function ImageCard({ image, progress, index }: ImageCardProps) {
  // Movement transforms - now all images move upwards and disappear
  const x = useTransform(progress, [0, 0.4], [image.offsetX, image.targetX * 0.5]);
  const y = useTransform(progress, [0, 0.4], [image.offsetY, -window.innerHeight]);
  const scrollScale = useTransform(progress, [0, 0.4], [1, 0.4]);
  const rotate = useTransform(progress, [0, 0.4], [image.rotation, image.rotation * 2]);
  const opacity = useTransform(progress, [0.2, 0.35], [1, 0]);

  return (
    <motion.div
      style={{
        x,
        y,
        scale: scrollScale,
        rotate,
        opacity,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: "easeOut" }}
      className="absolute inset-0 w-[180px] h-[220px] pointer-events-auto"
    >
      <motion.div
        whileHover={{ 
          scale: 1.1,
          y: -15
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-full cursor-pointer"
      >
        <img
          src={image.url}
          alt=""
          className="w-full h-full object-contain select-none"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </motion.div>
  );
}
