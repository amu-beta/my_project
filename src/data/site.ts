export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  cover: string;
  previewImages: string[];
  detailImages: string[];
  tags: string[];
  ctaLink?: string;
}

export const profile = {
  name: '林凯云',
  title: 'UI / UX 设计师',
  location: '广州',
  contact: '13711404604',
  email: 'chloelinlin33@gmail.com',
  portrait: '/images/regenerated_image_1778545670870.jpg',
  intro:
    '5 年全流程 UI 设计经验，以用户体验 + 数据驱动决策覆盖需求梳理、原型、视觉和落地；擅长把设计工具与 AI 体系结合到实际工作流里。',
  about:
    '专注出海产品、运营活动和品牌官网设计，强调体验、效率与转化并重，能从信息架构、视觉系统到交付落地完整推进。',
  heroImage: '/images/枫燧堂01.jpg',
  metrics: [
    {label: 'Years', value: '5+'},
    {label: 'Projects', value: '20+'},
    {label: 'AI Workflows', value: '10+'},
  ],
  highlights: [
    {
      title: '个人优势',
      description: '5 年全流程 UI 设计经验，覆盖原型、视觉、交互与落地，能独立推动 0-1 与改版项目。',
    },
    {
      title: '效率提效',
      description: '熟练使用 Figma、PS 与 AI 工具，把 AI 接入创意发散、素材生成和交互原型流程。',
    },
    {
      title: '业务理解',
      description: '擅长活动设计、海外产品和官网体系，能把设计目标和业务转化、数据目标对齐。',
    },
    {
      title: '跨团队协作',
      description: '能和产品、开发、运营高效协同，保证设计质量、还原度和上线节奏。',
    },
  ],
  tabs: {
    strengths: [
      '5 年全流程 UI 设计经验，以用户体验 + 数据驱动决策覆盖需求、原型、视觉与落地。',
      '精通 Figma / Photoshop / AIGC 工作流，能把 AI 融入图像、视频与交互原型自动化。',
      '负责过全渠道运营活动设计（H5、专题页、海报、视频等），结合数据优化转化。',
    ],
    experience: [
      {
        company: '很久文化（弘策科技）',
        role: 'UI 视觉设计师',
        period: '2022.03 - 至今',
        points: [
          '负责 0-1 产品设计主导：从需求拆解、信息架构、原型到视觉与交互全链路落地。',
          '主导 APP 全链路体验改版，重构用户路径与交互逻辑，打造轻量化国际化设计语言。',
          '建立多端统一设计系统与组件规范，落地 AI 辅助设计工作流，提升效率与一致性。',
          '负责 H5、专题页、海外投放素材与视频等运营素材设计，通过 AIGC 实现从脚本到成品的全流程制作。',
          '搭建 YouTube 内容体系，AIGC 赋能单条视频制作周期从 3 天缩短至 4 小时，效率提升 80%。',
          '跨团队协同产品、开发、运营，保障设计高质量还原与快速上线。',
        ],
      },
      {
        company: '广州金十信息科技有限公司',
        role: 'UI 设计',
        period: '2020.06 - 2022.01',
        points: [
          '负责「美港电讯 APP」界面设计与版本迭代，主导功能模块的 UI/UX 优化，平衡商业需求与用户体验。',
          '负责业务数据报告的信息可视化设计，通过层级梳理与视觉重构，提升数据可读性与专业度。',
        ],
      },
    ],
    projects: [
      {
        title: '先知命局 APP 0-1 搭建 + 全链路改版',
        role: 'UI',
        period: '2024.04 - 2026.03',
        points: [
          '独立完成 APP 从 0 到 1 设计落地，搭建基础信息架构、交互流程与视觉体系。',
          '改版阶段全面重构用户路径、交互逻辑与视觉风格，完成出海适配与去国风化迭代。',
          '数据成果：新用户 7 日留存提升 15%，周留存提升 18%，海外用户注册转化提升 25%，日使用时长提升 18%。',
        ],
      },
      {
        title: '听芝 APP',
        role: 'UI 设计',
        period: '2025.01 - 2026.03',
        points: [
          'AI 情绪问答、小陪伴系统、情感咨询渠道等模块设计，围绕“用户情绪表达与咨询转化”优化体验。',
          '项目推动互动率提升 47%，真人咨询率提升 14%，夜间活跃时长提升 21 分钟。',
        ],
      },
      {
        title: '枫燧堂（香港）官网',
        role: 'UI 设计',
        period: '2025.05 - 2026.01',
        points: [
          '设计枫燧堂 PC 端官网，整合法会预约、八字测算、道教文化及公益服务，搭建中式视觉体系与模块化响应式网站。',
          '3 个月内月均访问量 15,000+，法会预约量提升 60%，单场预约完成率 92%。',
        ],
      },
      {
        title: '先知命局新年活动运营设计',
        role: '视觉 / AIGC 内容创作',
        period: '2025.11 - 2026.01',
        points: [
          '主导 3D 沉浸式活动全案设计，优化参与路径，AIGC 全流程制作海报、素材、视频，整体效率提升 70%。',
          '数据成果：活动参与率从 33% → 68%；付费用户周回访率从 7% → 18%。',
        ],
      },
    ],
    skills: [
      {
        title: '设计',
        items: ['UI/UX 全流程', '交互优化', '信息架构', '设计系统', '数据可视化'],
      },
      {
        title: '工具',
        items: ['Figma', 'Photoshop', 'AIGC', 'LiblibAI', 'ComfyUI', 'NanoBanana', 'Claude', 'Codex'],
      },
      {
        title: '能力',
        items: ['出海适配', '跨团队协作', '需求分析', '数据驱动迭代'],
      },
    ],
  },
  timeline: [
    {
      period: '2025 - Now',
      title: 'AI + 设计探索',
      description: '把个人项目、视觉产出和设计方法重新整合，建立更适合长期展示的作品体系。',
    },
    {
      period: '2022 - 2025',
      title: '海外产品与运营设计',
      description: '参与海外命理和活动产品的视觉设计、专题活动页设计及品牌官网体验优化。',
    },
    {
      period: '2020 - 2022',
      title: 'UI / Visual 基础积累',
      description: '完善界面设计、视觉规范、组件表达和多端适配能力，形成稳定的设计输出方式。',
    },
    {
      period: '长期方向',
      title: '内容化个人品牌',
      description: '继续把设计案例、方法论和 AI 工作流沉淀为项目页、文章页和长期更新内容。',
    },
  ],
};

export const siteAssets = {
  githubUrl: 'https://github.com/amu-beta/my_project',
  heroSignature: 'Chloe Lin',
  heroGifs: ['/images/ship.gif'],
};

export const exploreItems = [
  {
    eyebrow: 'Design & Build',
    title: '设计&开发',
    description: '把创意和想法落地为真实的项目。',
    image: '/images/attachments.png',
    cta: '查看更多',
    href: '#projects',
  },
  {
    eyebrow: 'Writing',
    title: '写作',
    description: '风格指南、设计笔记和思考。',
    image: '/images/cover-travel.png',
    cta: '内容页下一步接入',
    href: '#articles',
  },
  {
    eyebrow: 'Experience',
    title: '体验',
    description: '我觉得很棒、值得反复研究的产品。',
    image: '/images/day.png',
    cta: '收藏灵感与参考',
    href: '#about',
  },
  {
    eyebrow: 'Tools',
    title: '工具',
    description: '自己开发用于工作流提效的工具！',
    image: '/images/Snipaste_2026-05-12_07-30-10.png',
    cta: '整理个人工具箱',
    href: '#projects',
  },
  {
    eyebrow: 'Stack',
    title: '技能贴纸墙',
    description: '把常用工具、前端技术和设计软件收进同一个模块里，视觉上更像你的参考图。',
    image: '/images/regenerated_image_1778581488443.png',
    cta: '展示我的工作栈',
    href: '#home',
  },
];

export const projects: Project[] = [
  {
    id: 'seerq',
    title: '先知命局 SeerQ DESIGN',
    category: 'Product Design',
    year: '2024 - 2026',
    description:
      '面向全球用户的数字命理产品设计，围绕内容阵地、咨询转化、海外适配与视觉统一，持续迭代产品体验。',
    cover: '/images/cover-seerq.jpg',
    previewImages: ['/images/app1.png', '/images/app2.png', '/images/app3.png'],
    detailImages: ['/images/xianzhi1.jpg', '/images/xianzhi4.gif', '/images/xianzhi2.png', '/images/xianzhi3.png'],
    tags: ['Global Product', 'Mobile', 'UI System'],
    ctaLink: 'https://play.google.com/store/apps/details?id=com.mmc.seer.onnet&hl=zh',
  },
  {
    id: 'divination',
    title: 'AI 六爻卜卦',
    category: 'Product Design',
    year: '2025',
    description:
      '结合传统易学与 AI 解析能力，围绕移动端体验建立更清晰、更易理解的产品界面、内容卡片与结果表达。',
    cover: '/images/cover-liuyao.jpg',
    previewImages: ['/images/liuyao1.png', '/images/liuyao2.png', '/images/liuyao3.png'],
    detailImages: ['/images/divination_detail_1.jpg', '/images/divination_detail_2.jpg', '/images/divination_detail_2.gif'],
    tags: ['App UI', 'AI Experience', 'Traditional Culture'],
  },
  {
    id: 'topic',
    title: '运势专题改版',
    category: 'Visual Design',
    year: '2025',
    description:
      '通过视觉升级、体验优化与结构重构，解决命理 H5 视觉杂乱、转化路径模糊与用户信任感不足的问题。',
    cover: '/images/cover-topic.jpg',
    previewImages: ['/images/zhuangti1.jpg', '/images/zhuangti2.jpg', '/images/zhuangti3.jpg'],
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
    ],
    tags: ['H5', 'Landing Page', 'Conversion', 'Visual Refresh'],
    ctaLink: 'https://www.seeronnet.com/seer/onlinecs',
  },
  {
    id: 'pc',
    title: '枫燧堂（香港）PC 端官网',
    category: 'Web Design',
    year: '2025',
    description:
      '整合法会预约、八字测算、道教文化和公益服务，搭建中式视觉体系与模块化 PC 官网浏览体验。',
    cover: '/images/cover-fengsuitang.jpg',
    previewImages: ['/images/fengsui1.jpg', '/images/fengsui2.jpg'],
    detailImages: ['/images/fengsui1.jpg', '/images/fengsui2.jpg'],
    tags: ['Brand Website', 'PC', 'Chinese Aesthetic'],
    ctaLink: 'https://fengsuitang.com/',
  },
  {
    id: 'luckynival',
    title: '运营活动视觉设计',
    category: 'AIGC Visual',
    year: '2025 - 2026',
    description:
      'AIGC 赋能海外新年活动视觉设计，从主视觉概念、互动场景到落地页与延展素材，形成完整活动表达。',
    cover: '/images/cover-operations.jpg',
    previewImages: ['/images/haoyun1.png', '/images/haoyun2.png', '/images/haoyun3.png'],
    detailImages: [
      '/images/luckynival_detail_3.jpg',
      '/images/luckynival_detail_4.png',
      '/images/luckynival_detail_5.jpg',
      '/images/luckynival_detail_6.jpg',
    ],
    tags: ['AIGC', 'Campaign', 'Overseas', 'Visual System', 'Operations'],
    ctaLink: 'https://h5.seeronnet.net/dist/new-year-2026/',
  },
];

export const articles = [
  {
    title: '把作品集从展示页改成内容型首页',
    date: 'May 2026',
    category: 'Portfolio',
    excerpt: '记录这次个人站改版的思路：为什么不再堆满动画，而是开始重视信息架构、模块关系和长期更新能力。',
    image: '/images/attachments.png',
  },
  {
    title: 'AIGC 在活动视觉里的实际使用方式',
    date: 'May 2026',
    category: 'AIGC',
    excerpt: '从灵感发散、风格探索到延展素材生成，整理一套更贴近真实工作流程的 AI 辅助设计方法。',
    image: '/images/regenerated_image_1778581040611.png',
  },
  {
    title: '海外产品设计里，视觉和转化如何一起考虑',
    date: 'May 2026',
    category: 'Product',
    excerpt: '结合过往项目，拆解视觉层级、品牌感和用户理解成本之间的平衡关系。',
    image: '/images/xianzhi-mingju.jpg',
  },
];
