"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Code, Layers, Database, Wrench, Sparkles } from "lucide-react";
import { resumeData } from "@/data/resume";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiFastapi,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiFirebase,
  SiMongodb,
  SiN8N,
  SiGithub,
  SiGooglecolab,
  SiKaggle,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandOpenai } from "react-icons/tb";

function PineconeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} style={props.style}>
      <path d="M12 2L8.5 7.5h7L12 2zm-5 6L3.5 13.5h17L17 8H7zm-2.5 6.5L1 19.5h22L19.5 14.5H4.5zM11 20.5h2v2h-2v-2z" />
    </svg>
  );
}

const categoryIcons: Record<string, React.ElementType> = {
  Languages: Code,
  "Frameworks & Libraries": Layers,
  "Databases & Vector DBs": Database,
  "Tools & Platforms": Wrench,
};

interface TechIconInfo {
  Component: React.ElementType;
  color: string;
  label?: string;
}

interface TechLogo {
  icons: TechIconInfo[];
}

const skillLogoMap: Record<string, TechLogo> = {
  Python: {
    icons: [{ Component: SiPython, color: "#3776AB" }],
  },
  TypeScript: {
    icons: [{ Component: SiTypescript, color: "#3178C6" }],
  },
  JavaScript: {
    icons: [{ Component: SiJavascript, color: "#F7DF1E" }],
  },
  "HTML/CSS": {
    icons: [
      { Component: SiHtml5, color: "#E34F26", label: "HTML5" },
      { Component: SiCss, color: "#1572B6", label: "CSS3" },
    ],
  },
  FastAPI: {
    icons: [{ Component: SiFastapi, color: "#009688" }],
  },
  "Next.js": {
    icons: [{ Component: SiNextdotjs, color: "currentColor" }],
  },
  TailwindCSS: {
    icons: [{ Component: SiTailwindcss, color: "#06B6D4" }],
  },
  "RAG Systems": {
    icons: [{ Component: TbBrandOpenai, color: "#10A37F", label: "OpenAI / RAG" }],
  },
  PineCone: {
    icons: [{ Component: PineconeIcon, color: "#10B981" }],
  },
  Supabase: {
    icons: [{ Component: SiSupabase, color: "#3ECF8E" }],
  },
  Firebase: {
    icons: [{ Component: SiFirebase, color: "#FFCA28" }],
  },
  MongoDB: {
    icons: [{ Component: SiMongodb, color: "#47A248" }],
  },
  "n8n Workflow Automation": {
    icons: [{ Component: SiN8N, color: "#FF6D5A" }],
  },
  GitHub: {
    icons: [{ Component: SiGithub, color: "currentColor" }],
  },
  "VS Code": {
    icons: [{ Component: VscVscode, color: "#007ACC" }],
  },
  "Google Colab & Kaggle": {
    icons: [
      { Component: SiGooglecolab, color: "#F9AB00", label: "Google Colab" },
      { Component: SiKaggle, color: "#20BEFF", label: "Kaggle" },
    ],
  },
  Vercel: {
    icons: [{ Component: SiVercel, color: "currentColor" }],
  },
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...resumeData.skills.map((s) => s.category)];

  const filteredSkills =
    activeCategory === "All"
      ? resumeData.skills
      : resumeData.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-600 dark:text-pink-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-600 dark:from-pink-500 dark:via-rose-400 dark:to-fuchsia-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg"
          >
            Core programming languages, frameworks, databases, and AI tooling from my technical stack.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? "text-white bg-gradient-to-r from-pink-500 to-rose-500 shadow-md shadow-pink-500/25"
                    : "text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredSkills.map((group, groupIdx) => {
              const Icon = categoryIcons[group.category] || Cpu;
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
                  className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-xl space-y-6 shadow-xl shadow-pink-500/5 hover:border-pink-500/40 transition-colors"
                >
                  {/* Category Title */}
                  <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
                    <div className="p-3 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-600 dark:text-pink-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                        {group.category}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {group.skills.length} core technologies
                      </p>
                    </div>
                  </div>

                  {/* Skill Items with Logos replacing Percentages */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.skills.map((skill) => {
                      const logoData = skillLogoMap[skill.name];
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800/80 hover:bg-white dark:hover:bg-zinc-800/80 transition-all duration-300 group shadow-sm hover:shadow-md hover:border-pink-500/30"
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500 group-hover:scale-150 transition-transform shrink-0" />
                            <span className="font-semibold text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors truncate">
                              {skill.name}
                            </span>
                          </div>

                          {/* Technology Brand Logo(s) */}
                          <div className="flex items-center gap-1.5 shrink-0">
                            {logoData ? (
                              logoData.icons.map((iconInfo, idx) => {
                                const IconComp = iconInfo.Component;
                                return (
                                  <div
                                    key={idx}
                                    title={iconInfo.label || skill.name}
                                    className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-700/80 group-hover:border-pink-500/40 shadow-xs flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                  >
                                    <IconComp
                                      className="w-5 h-5"
                                      style={{
                                        color:
                                          iconInfo.color === "currentColor"
                                            ? undefined
                                            : iconInfo.color,
                                      }}
                                    />
                                  </div>
                                );
                              })
                            ) : (
                              <div className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700">
                                <Sparkles className="w-5 h-5 text-pink-500" />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


