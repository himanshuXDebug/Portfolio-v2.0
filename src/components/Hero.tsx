'use client';
import { Github, Linkedin, Mail, Terminal, FileText } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  showToast: (msg: string) => void;
}

const resumeUrl = '/resume.pdf';

export default function Hero({ onOpenContact, showToast }: HeroProps) {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-7 flex flex-col gap-6">


            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Hi, I'm <span className="underline decoration-[#C2410C] dark:decoration-[#F97316] underline-offset-8">Himanshu</span>.
              <br />
              Software Developer.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
              I build clean, scalable backend systems and web applications using <strong className="text-[#1C1917] dark:text-[#EDEDED]">Java, Spring Boot, JavaScript, and React</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-[#1C1917] text-[#FAF8F5] dark:bg-[#EDEDED] dark:text-[#0D0D0D] font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href={resumeUrl}
                download
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#E5E0D8] dark:border-[#262626] bg-[#F2EFE9] dark:bg-[#161616] font-medium text-sm hover:border-[#C2410C] dark:hover:border-[#F97316] transition-colors"
              >
                <FileText size={16} />
                <span>Resume</span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5 pt-4 border-t border-[#E5E0D8] dark:border-[#262626]">
              <a
                href="https://github.com/himanshuXDebug"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono hover:text-[#C2410C] dark:hover:text-[#F97316]"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/himanshuj020/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono hover:text-[#C2410C] dark:hover:text-[#F97316]"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 text-xs font-mono hover:text-[#C2410C] dark:hover:text-[#F97316]"
              >
                <Mail size={16} /> Email
              </button>
            </div>
          </div>

          {/* Terminal Box */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#E5E0D8] dark:border-[#262626] bg-[#F2EFE9] dark:bg-[#161616] overflow-hidden shadow-sm">
              <div className="px-4 py-3 bg-[#E5E0D8]/50 dark:bg-[#262626]/50 border-b border-[#E5E0D8] dark:border-[#262626] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="flex items-center gap-2 text-[#C2410C] dark:text-[#F97316] text-xs font-mono">
                  <Terminal size={14} /> himanshu.config.js
                </div>
              </div>
              <pre className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-stone-700 dark:text-stone-300">
<code>{`const developer = {
  name: "Himanshu",
  role: "Analyst Trainee @ Cognizant",
  location: "Gurugram, Haryana, India",
  status: "Building software systems"
};`}</code>
              </pre>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}