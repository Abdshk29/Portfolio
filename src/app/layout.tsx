import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { resumeData } from "@/data/resume";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${resumeData.personal.name} | ${resumeData.personal.title}`,
  description: resumeData.personal.summary,
  keywords: [
    "Muhammad Abdullah",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "NLP",
    "RAG",
    "FastAPI",
    "Next.js Portfolio",
    "CodeCelix",
    "AasaanLearn",
    "National Textile University",
  ],
  authors: [{ name: resumeData.personal.name }],
  openGraph: {
    title: `${resumeData.personal.name} | ${resumeData.personal.title}`,
    description: resumeData.personal.tagline,
    url: "https://muhammadabdullah.ai",
    siteName: `${resumeData.personal.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${resumeData.personal.name} | ${resumeData.personal.title}`,
    description: resumeData.personal.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased transition-colors duration-300 selection:bg-pink-500/30 selection:text-pink-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <BackgroundCanvas />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
