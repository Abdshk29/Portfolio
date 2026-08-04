"use client";

import { motion } from "motion/react";
import { FolderGit2, ExternalLink, Github, Trophy, ArrowUpRight, Code2 } from "lucide-react";
import { resumeData } from "@/data/resume";

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-600 dark:text-pink-400 text-xs font-semibold uppercase tracking-wider"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            AI & Full-Stack{" "}
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-600 dark:from-pink-500 dark:via-rose-400 dark:to-fuchsia-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg"
          >
            Data-driven applications built with modern AI architectures, NLP pipelines, and web frameworks.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, idx) => {
            const hasLiveDemo = Boolean(project.liveUrl);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl bg-white/90 dark:bg-zinc-900/70 border backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl shadow-pink-500/5 transition-all duration-300 group overflow-hidden ${
                  project.award
                    ? "border-amber-500/40 hover:border-amber-500/80"
                    : "border-zinc-200 dark:border-zinc-800/80 hover:border-pink-500/50 hover:shadow-pink-500/10"
                }`}
              >
                {/* Award Banner top bar */}
                {project.award && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 via-pink-500 to-amber-500 text-slate-950 px-4 py-1.5 text-xs font-bold flex items-center justify-center gap-1.5 shadow-md">
                    <Trophy className="w-4 h-4 fill-slate-950" />
                    <span>{project.award}</span>
                  </div>
                )}

                <div className={`space-y-4 ${project.award ? "pt-4" : ""}`}>
                  {/* Title & Subtitle */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors flex items-center gap-2">
                          {project.title}
                          {hasLiveDemo && (
                            <ArrowUpRight className="w-5 h-5 text-zinc-400 dark:text-zinc-500 group-hover:text-pink-600 dark:group-hover:text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          )}
                        </h3>
                      </div>
                      {project.subtitle && (
                        <p className="text-xs text-pink-600 dark:text-pink-400 font-mono mt-1 font-medium">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 group-hover:border-pink-500/40 transition-colors">
                      <Code2 className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Tech Stack Tags & Action Links */}
                <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    {hasLiveDemo && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-pink-500/20 cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-950 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
                        <span>GitHub Repo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
