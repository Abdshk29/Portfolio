"use client";

import { useState } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { resumeData } from "@/data/resume";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#ec4899", "#f43f5e", "#d946ef", "#ffffff"],
        });
      } catch (err) {
        console.error("Confetti error", err);
      }

      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-600 dark:text-pink-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            Let's Connect &{" "}
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-600 dark:from-pink-500 dark:via-rose-400 dark:to-fuchsia-500 bg-clip-text text-transparent">
              Collaborate
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg"
          >
            Have a project, AI inquiry, or position to discuss? Send a direct message or connect via social links!
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card */}
            <a
              href={resumeData.personal.socials.email}
              className="p-6 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-xl flex items-center gap-4 hover:border-pink-500/50 transition-all shadow-xl shadow-pink-500/5 group block"
            >
              <div className="p-4 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/30 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <h4 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  {resumeData.personal.email}
                </h4>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={resumeData.personal.socials.phone}
              className="p-6 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-xl flex items-center gap-4 hover:border-pink-500/50 transition-all shadow-xl shadow-pink-500/5 group block"
            >
              <div className="p-4 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Phone / WhatsApp
                </span>
                <h4 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors font-mono">
                  {resumeData.personal.phone}
                </h4>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-xl flex items-center gap-4 shadow-xl shadow-pink-500/5">
              <div className="p-4 rounded-2xl bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border border-fuchsia-500/30">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Location
                </span>
                <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                  {resumeData.personal.location}
                </h4>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-xl space-y-4 shadow-xl shadow-pink-500/5">
              <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                Official Profiles
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={resumeData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/40 transition-all cursor-pointer group"
                >
                  <Linkedin className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>
                <a
                  href={resumeData.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/40 transition-all cursor-pointer group"
                >
                  <Github className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <span className="text-xs font-semibold">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-xl shadow-xl shadow-pink-500/5 space-y-6"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-pink-500/20 text-pink-600 dark:text-pink-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Message Delivered!
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm max-w-md mx-auto">
                  Thank you for writing. Muhammad Abdullah will review your message and reply back shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-950 text-pink-600 dark:text-pink-400 border border-pink-500/30 text-xs font-bold hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border text-zinc-900 dark:text-zinc-200 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? "border-rose-500 focus:ring-rose-500/50"
                          : "border-zinc-200 dark:border-zinc-800 focus:border-pink-500 focus:ring-pink-500/30"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1 pt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border text-zinc-900 dark:text-zinc-200 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-rose-500 focus:ring-rose-500/50"
                          : "border-zinc-200 dark:border-zinc-800 focus:border-pink-500 focus:ring-pink-500/30"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1 pt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="AI System Development / Role Opportunity"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 text-sm focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Hello Muhammad, I saw your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border text-zinc-900 dark:text-zinc-200 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? "border-rose-500 focus:ring-rose-500/50"
                        : "border-zinc-200 dark:border-zinc-800 focus:border-pink-500 focus:ring-pink-500/30"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1 pt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 text-white font-bold text-sm sm:text-base hover:shadow-lg hover:shadow-pink-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
