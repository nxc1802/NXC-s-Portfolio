'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/Section';
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaAws,
  FaDatabase,
  FaGithub,
  FaSlack,
  FaProjectDiagram,
  FaNetworkWired,
  FaRobot,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiVercel,
  SiGraphql,
  SiJavascript,
  SiHtml5,
  SiVite,
  SiJest,
  SiAntdesign,
  SiThreedotjs,
  SiFlask,
  SiFastapi,
  SiAwslambda,
  SiGooglecloud,
  SiFirebase,
  SiSupabase,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiElasticsearch,
  SiSqlalchemy,
  SiLangchain,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiHuggingface,
  SiKeras,
  SiOpencv,
  SiOllama,
  SiPlotly,
  SiGithubactions,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { TbVector, TbVectorTriangle } from 'react-icons/tb';
import {
  LuLayoutDashboard,
  LuServer,
  LuDatabase as LuDatabaseLine,
  LuBrain,
  LuCircuitBoard,
  LuSparkles,
} from 'react-icons/lu';
import techStackData from '@/data/techstack.json';

interface TechItem {
  name: string;
  proficiency: number;
  years: string;
}

interface TechStackData {
  [key: string]: TechItem[];
}

const iconMap: { [key: string]: React.ReactElement } = {
  // Frontend
  React: <FaReact className="text-cyan-200" />,
  'Next.js': <SiNextdotjs className="text-white" />,
  TypeScript: <SiTypescript className="text-blue-300" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-300" />,
  'JavaScript (ES6+)': <SiJavascript className="text-yellow-300" />,
  HTML5: <SiHtml5 className="text-orange-400" />,
  Vite: <SiVite className="text-purple-300" />,
  Jest: <SiJest className="text-red-400" />,
  'Ant Design': <SiAntdesign className="text-blue-400" />,
  'React Native': <FaReact className="text-sky-300" />,
  'Three.js': <SiThreedotjs className="text-slate-100" />,

  // Backend
  'Node.js': <FaNodeJs className="text-emerald-300" />,
  'Express.js': <SiExpress className="text-gray-200" />,
  NestJS: <SiNestjs className="text-rose-200" />,
  Flask: <SiFlask className="text-slate-100" />,
  FastAPI: <SiFastapi className="text-teal-300" />,
  'Serverless (AWS Lambda)': <SiAwslambda className="text-orange-400" />,
  'Google Cloud Functions': <SiGooglecloud className="text-blue-400" />,

  // Database
  MongoDB: <SiMongodb className="text-emerald-300" />,
  PostgreSQL: <SiPostgresql className="text-indigo-300" />,
  'Pinecone (Vector)': <TbVector className="text-emerald-300" />,
  'Qdrant (Vector)': <TbVectorTriangle className="text-rose-300" />,
  'Firebase / Firestore': <SiFirebase className="text-amber-400" />,
  Supabase: <SiSupabase className="text-emerald-400" />,
  MySQL: <SiMysql className="text-sky-400" />,
  SQLite: <SiSqlite className="text-blue-300" />,
  Redis: <SiRedis className="text-rose-400" />,
  Elasticsearch: <SiElasticsearch className="text-yellow-400" />,
  'SQLAlchemy (Python)': <SiSqlalchemy className="text-red-300" />,
  GraphQL: <SiGraphql className="text-pink-300" />,

  // AI & ML
  Python: <SiPython className="text-yellow-300" />,
  TensorFlow: <SiTensorflow className="text-amber-400" />,
  PyTorch: <SiPytorch className="text-rose-400" />,
  LangChain: <SiLangchain className="text-emerald-300" />,
  Mastra: <LuBrain className="text-purple-300" />,
  'ReAct Agent': <FaRobot className="text-indigo-300" />,
  'Scikit-learn': <SiScikitlearn className="text-orange-300" />,
  Pandas: <SiPandas className="text-indigo-200" />,
  NumPy: <SiNumpy className="text-sky-300" />,
  'Hugging Face': <SiHuggingface className="text-yellow-300" />,
  Keras: <SiKeras className="text-red-400" />,
  OpenCV: <SiOpencv className="text-green-300" />,
  'Matplotlib / Seaborn': <SiPlotly className="text-sky-300" />,
  Ollama: <SiOllama className="text-slate-100" />,

  // DevOps
  Docker: <FaDocker className="text-sky-300" />,
  'GitHub Actions': <SiGithubactions className="text-blue-300" />,
  Vercel: <SiVercel className="text-white" />,
  AWS: <FaAws className="text-orange-300" />,
  'Google Cloud Platform': <SiGooglecloud className="text-blue-400" />,
  'Microsoft Azure': <VscAzure className="text-sky-400" />,

  // Other Tools
  Github: <FaGithub className="text-white" />,
  Git: <FaGitAlt className="text-orange-400" />,
  Figma: <FaFigma className="text-purple-300" />,
  'REST API': <FaNetworkWired className="text-cyan-300" />,
  WebSockets: <FaNetworkWired className="text-amber-300" />,
  Slack: <FaSlack className="text-pink-300" />,
  'Agile / Scrum': <FaProjectDiagram className="text-emerald-300" />,
};

const categories = [
  {
    name: 'Frontend',
    key: 'frontend',
    icon: LuLayoutDashboard,
    accent: 'from-cyan-400 via-blue-400 to-indigo-500',
    glow: 'shadow-[0_25px_55px_rgba(6,182,212,0.35)]',
    tagline: 'Interfaces & delightful UX',
    description: 'Crafting vibrant experiences with React, Next.js, and thoughtful motion.',
  },
  {
    name: 'Backend',
    key: 'backend',
    icon: LuServer,
    accent: 'from-emerald-400 via-teal-400 to-green-500',
    glow: 'shadow-[0_25px_55px_rgba(16,185,129,0.3)]',
    tagline: 'APIs & system design',
    description: 'Designing reliable services, clean architectures, and secure APIs.',
  },
  {
    name: 'Database',
    key: 'database',
    icon: LuDatabaseLine,
    accent: 'from-sky-400 via-indigo-500 to-purple-500',
    glow: 'shadow-[0_25px_55px_rgba(79,70,229,0.3)]',
    tagline: 'Data orchestration',
    description: 'Guarding data integrity with modern document and relational systems.',
  },
  {
    name: 'AI & ML',
    key: 'ai',
    icon: LuBrain,
    accent: 'from-violet-400 via-fuchsia-400 to-rose-400',
    glow: 'shadow-[0_25px_55px_rgba(217,70,239,0.35)]',
    tagline: 'Cognitive engineering',
    description: 'Researching and shipping applied AI with Python, transformers, and agents.',
  },
  {
    name: 'DevOps',
    key: 'devops',
    icon: LuCircuitBoard,
    accent: 'from-amber-400 via-orange-400 to-rose-400',
    glow: 'shadow-[0_25px_55px_rgba(251,146,60,0.35)]',
    tagline: 'Automation & reliability',
    description: 'Keeping releases smooth with containers, CI/CD, and smart monitoring.',
  },
  {
    name: 'Other Tools',
    key: 'other',
    icon: LuSparkles,
    accent: 'from-slate-200 via-zinc-300 to-white',
    glow: 'shadow-[0_25px_55px_rgba(226,232,240,0.25)]',
    tagline: 'Creative allies',
    description: 'Collaboration and design utilities that round out the toolkit.',
  },
];

const getProficiencyColor = (proficiency: number) => {
  if (proficiency >= 90) return 'from-emerald-300 to-emerald-500';
  if (proficiency >= 75) return 'from-sky-300 to-blue-500';
  if (proficiency >= 60) return 'from-amber-300 to-orange-400';
  return 'from-rose-400 to-pink-500';
};

const formatExperienceLabel = (years: string) => {
  const numeric = Number.parseFloat(years);
  const isApproximate = years.includes('+') || years.includes('-');
  const isPlural = Number.isNaN(numeric) ? true : numeric > 1 || isApproximate;
  return `${years} year${isPlural ? 's' : ''} experience`;
};

const TechStack = () => {
  const [activeCategory, setActiveCategory] = React.useState(categories[0].key);
  const [hoveredCategory, setHoveredCategory] = React.useState<string | null>(null);

  const handleActivate = (key: string) => {
    setActiveCategory(key);
  };

  const activeMeta = categories.find((category) => category.key === activeCategory) || categories[0];
  const techs = (techStackData as TechStackData)[activeCategory] || [];
  const avg = techs.length
    ? Math.round(techs.reduce((acc, t) => acc + t.proficiency, 0) / techs.length)
    : 0;

  return (
    <Section id="tech" title="TECH STACK">
      <div className="flex flex-col gap-10">
        <div className="flex gap-6 flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 justify-start sm:justify-center items-center">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.key;
            const isHovered = hoveredCategory === category.key;

            return (
              <button
                key={category.key}
                type="button"
                onMouseEnter={() => {
                  setHoveredCategory(category.key);
                  handleActivate(category.key);
                }}
                onMouseLeave={() => setHoveredCategory(null)}
                onFocus={() => handleActivate(category.key)}
                onClick={() => handleActivate(category.key)}
                aria-pressed={isActive}
                className="flex flex-col items-center justify-start group relative min-h-[5rem]"
              >
                <div
                  className={`rounded-xl bg-slate-800/50 border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-200 ${
                    isHovered ? 'bg-slate-700/70 border-white/20 w-16 h-16 text-3xl -mt-2' : 'w-12 h-12 text-2xl'
                  }`}
                >
                  <Icon />
                </div>
                <div className="absolute top-[4rem] left-1/2 -translate-x-1/2 w-max">
                  {isHovered && (
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-100 text-center whitespace-nowrap">
                      {category.name}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/30 p-8 backdrop-blur-2xl shadow-[0_30px_80px_rgba(2,6,23,0.65)]"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.4em] text-cyan-200 mb-2">
                  {activeMeta.tagline}
                </p>
                <h3 className="text-3xl md:text-4xl font-heading font-semibold text-white">
                  {activeMeta.name}
                </h3>
                <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                  {activeMeta.description}
                </p>
              </div>
              <div className="w-full lg:w-auto flex items-center">
                <div className="rounded-2xl border border-white/10 px-5 py-4 text-center w-full">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Avg. Proficiency
                  </p>
                  <p className="text-3xl font-bold text-white">{avg}%</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {techs.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ translateY: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="text-lg">
                        {iconMap[tech.name] || <FaDatabase className="text-white" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white truncate">{tech.name}</p>
                        <p className="text-[10px] uppercase tracking-wider text-gray-400">
                          {formatExperienceLabel(tech.years)}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-slate-100 flex-shrink-0">
                      {tech.proficiency}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${getProficiencyColor(
                        tech.proficiency,
                      )}`}
                      initial={{ width: '0%' }}
                      animate={{ width: `${tech.proficiency}%` }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default TechStack;
