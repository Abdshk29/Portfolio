"use client";

import { ArrowUp, Code2, Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import { resumeData } from "@/data/resume";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-zinc-200 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-950/95 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 p-0.5 shadow-sm shadow-pink-500/20">
            <div className="w-full h-full bg-white dark:bg-zinc-950 rounded-[10px] flex items-center justify-center">
              <Code2 className="w-4 h-4 text-pink-600 dark:text-pink-400" />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-200">
              {resumeData.personal.name}
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              AI/ML Engineer & Full-Stack Developer
            </p>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="text-center text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
          <span>© {new Date().getFullYear()} {resumeData.personal.name}. Designed with</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          <span>in Next.js 15 & Motion.</span>
        </div>

        {/* Right: Social Links & Back to Top */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400">
            <a
              href={resumeData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-pink-600 dark:hover:text-pink-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={resumeData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-pink-600 dark:hover:text-pink-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={resumeData.personal.socials.email}
              className="p-2 rounded-lg hover:text-pink-600 dark:hover:text-pink-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={resumeData.personal.socials.phone}
              className="p-2 rounded-lg hover:text-pink-600 dark:hover:text-pink-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/40 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
