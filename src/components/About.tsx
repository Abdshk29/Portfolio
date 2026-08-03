"use client";

import { motion } from "motion/react";
import { User, Cpu, Sparkles, Target, Zap, GraduationCap, Building2, FileDown } from "lucide-react";
import { resumeData } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-600 dark:text-pink-400 text-xs font-semibold uppercase tracking-wider"
          >
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            Engineering{" "}
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-600 dark:from-pink-500 dark:via-rose-400 dark:to-fuchsia-500 bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg"
          >
            Delivering scalable artificial intelligence models and high-performance full-stack web applications.
          </motion.p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-xl flex flex-col justify-between space-y-6 shadow-xl shadow-pink-500/5"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/30">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Muhammad Abdullah — AI/ML Engineer
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    BS Artificial Intelligence • National Textile University
                  </p>
                </div>
              </div>

              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-base">
                {resumeData.personal.summary}
              </p>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                During my AI Automation Internship at <strong className="text-pink-600 dark:text-pink-400 font-semibold">CodeCelix</strong>, I developed client-facing intelligent tools including a <strong className="text-rose-600 dark:text-rose-400 font-semibold">Smart Resume Analyzer</strong> and a <strong className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold">real-time Speech-to-Text streaming engine</strong>. My capstone project, <strong className="text-pink-600 dark:text-pink-300 font-semibold">AasaanLearn</strong>, won 1st Position among BS AI Final Year Projects for providing accessible educational tools for Dyslexic, Autistic, and Visually Impaired students.
              </p>
            </div>

            {/* Core Values / Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-pink-600 dark:text-pink-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-200">FastAPI & Next.js</h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Scalable Full-Stack</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-200">NLP & RAG Systems</h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Vector Search & LLMs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-200">Production AI</h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Real-World Automation</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stat Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            {/* Card 1: Experience */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-xl flex items-center gap-4 hover:border-pink-500/50 transition-colors shadow-xl shadow-pink-500/5">
              <div className="p-4 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-wider">
                  Work Experience
                </span>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">
                  AI Automation Intern
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">CodeCelix (Remote)</p>
              </div>
            </div>

            {/* Card 2: Degree */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-xl flex items-center gap-4 hover:border-pink-500/50 transition-colors shadow-xl shadow-pink-500/5">
              <div className="p-4 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                  Degree Program
                </span>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">
                  BS Artificial Intelligence
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">National Textile Univ (2022–2026)</p>
              </div>
            </div>

            {/* Resume Download Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/30 backdrop-blur-xl flex items-center justify-between gap-4 shadow-xl">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                  Official Resume PDF
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-300">
                  Download my full curriculum vitae
                </p>
              </div>
              <a
                href={resumeData.personal.resumePdfUrl}
                download="Muhammad_Abdullah_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-xs flex items-center gap-2 transition-all shrink-0 cursor-pointer shadow-md shadow-pink-500/20"
              >
                <FileDown className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
