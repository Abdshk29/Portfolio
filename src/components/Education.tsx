"use client";

import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";
import { resumeData } from "@/data/resume";

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-600 dark:text-pink-400 text-xs font-semibold uppercase tracking-wider"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            Education &{" "}
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-600 dark:from-pink-500 dark:via-rose-400 dark:to-fuchsia-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg"
          >
            Formal AI degree program alongside industry certifications in automation and office productivity.
          </motion.p>
        </div>

        {/* Education & Certifications Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Degree Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-xl space-y-6 shadow-xl shadow-pink-500/5 hover:border-pink-500/40 transition-colors"
          >
            <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div className="p-3.5 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-600 dark:text-pink-400">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {resumeData.education[0].degree}
                </h3>
                <p className="text-sm text-pink-600 dark:text-pink-400 font-medium">
                  {resumeData.education[0].institution}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 gap-2 font-mono">
              <span className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
                <Calendar className="w-4 h-4" />
                {resumeData.education[0].period}
              </span>
              <span className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                <MapPin className="w-4 h-4" />
                {resumeData.education[0].location}
              </span>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Key Focus & Achievements
              </h4>
              {resumeData.education[0].highlights?.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-pink-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Certifications Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-xl space-y-6 shadow-xl shadow-pink-500/5"
          >
            <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Certifications
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Recognized credentials & automation achievements
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {resumeData.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between hover:border-pink-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-pink-600 dark:text-pink-400 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-200">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        Issuer: {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded-md bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
