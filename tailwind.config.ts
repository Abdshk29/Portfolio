import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          pink: "#ec4899",
          rose: "#f43f5e",
          magenta: "#db2777",
          fuchsia: "#d946ef",
          violet: "#a855f7",
        },
        dark: {
          bg: "#09090b",
          surface: "#121215",
          card: "#18181b",
          border: "#27272a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "pink-glow": "pinkGlow 4s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        pinkGlow: {
          "0%": { opacity: "0.3", filter: "blur(20px)" },
          "100%": { opacity: "0.7", filter: "blur(35px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
