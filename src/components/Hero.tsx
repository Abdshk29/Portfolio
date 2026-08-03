"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  Terminal,
} from "lucide-react";
import { resumeData } from "@/data/resume";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading, Bio & Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6 text-center sm:text-left"
            >
              {/* Main Name & Title */}
              <div className="space-y-2">
                <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight sm:leading-none">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-600 dark:from-pink-500 dark:via-rose-400 dark:to-fuchsia-500 bg-clip-text text-transparent">
                    {resumeData.personal.name}
                  </span>
                </h1>
                <h2 className="text-base sm:text-2xl lg:text-3xl font-semibold text-zinc-700 dark:text-zinc-300 flex items-center justify-center sm:justify-start gap-2">
                  <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 dark:text-pink-500 shrink-0" />
                  <span>{resumeData.personal.title}</span>
                </h2>
              </div>

              {/* Tagline Paragraph */}
              <p className="text-sm sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed mx-auto sm:mx-0">
                {resumeData.personal.tagline}
              </p>

              {/* Key Skill Tags */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                {[
                  "Machine Learning",
                  "Computer Vision",
                  "NLP & RAG",
                  "FastAPI",
                  "Next.js",
                  "Python",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                    className="px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-lg bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-pink-500/50 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  >
                    #{skill}
                  </motion.span>
                ))}
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 pt-2"
              >
                <a
                  href={resumeData.personal.resumePdfUrl}
                  download="Muhammad_Abdullah_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 text-white font-bold text-sm sm:text-base hover:shadow-lg hover:shadow-pink-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <FileDown className="w-5 h-5 text-white" />
                  <span>Download Resume</span>
                </a>

                <a
                  href="#projects"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-sm sm:text-base hover:border-pink-500/50 hover:text-pink-600 dark:hover:text-pink-400 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-pink-500 dark:text-pink-400" />
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-pink-600 dark:hover:text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-pink-500 dark:text-pink-400" />
                  <span>Contact Me</span>
                </a>
              </motion.div>

              {/* Social Links Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 pt-2 text-zinc-600 dark:text-zinc-400"
              >
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold w-full sm:w-auto text-center sm:text-left">
                  Direct Channels:
                </span>
                <a
                  href={resumeData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/40 transition-all hover:scale-110 flex items-center gap-2 text-xs"
                >
                  <Linkedin className="w-4 h-4 text-pink-500 dark:text-pink-400" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href={resumeData.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/40 transition-all hover:scale-110 flex items-center gap-2 text-xs"
                >
                  <Github className="w-4 h-4 text-pink-500 dark:text-pink-400" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href={resumeData.personal.socials.email}
                  aria-label="Email"
                  className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/40 transition-all hover:scale-110 flex items-center gap-2 text-xs"
                >
                  <Mail className="w-4 h-4 text-pink-500 dark:text-pink-400" />
                  <span className="font-medium">Email</span>
                </a>
                <a
                  href={resumeData.personal.socials.phone}
                  aria-label="Phone"
                  className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/40 transition-all hover:scale-110 flex items-center gap-2 text-xs"
                >
                  <Phone className="w-4 h-4 text-pink-500 dark:text-pink-400" />
                  <span className="font-mono">{resumeData.personal.phone}</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: Professional Circular Profile Photo Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 relative flex justify-center w-full"
            >
              {/* Glowing Backdrop Circle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 via-rose-400/20 to-fuchsia-600/30 rounded-full blur-3xl transform scale-95" />

              {/* Profile Photo Container */}
              <div className="relative p-2 sm:p-2.5 rounded-full bg-gradient-to-b from-pink-500/40 via-rose-400/30 to-fuchsia-600/40 border border-pink-500/40 shadow-2xl max-w-[260px] xs:max-w-[300px] sm:max-w-[340px] w-full aspect-square mx-auto">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-white/20 dark:border-zinc-800">
                  <Image
                    src={resumeData.personal.photoUrl}
                    alt={resumeData.personal.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent opacity-40" />
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
