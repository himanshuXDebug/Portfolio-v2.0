import { Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import { EDUCATION } from '@/data/education';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-[#E5E0D8] dark:border-[#262626]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Education & Academic Background" 
          subtitle="Degree, core computer science coursework, and academic distinctions"
        />

        <div className="flex flex-col gap-8">
          {EDUCATION.map((edu, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-xl border border-[#E5E0D8] dark:border-[#262626] bg-[#F2EFE9] dark:bg-[#161616] flex flex-col gap-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#E5E0D8] dark:border-[#262626] pb-4">
                <div>
                  
                  <h3 className="text-2xl font-bold text-[#1C1917] dark:text-[#EDEDED]">{edu.degree}</h3>
                  <p className="text-base font-semibold text-[#C2410C] dark:text-[#F97316]">{edu.institution}</p>
                </div>
                <div className="flex flex-col md:items-end gap-1 text-xs font-mono text-stone-500">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {edu.duration}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {edu.location}</span>
                </div>
              </div>

              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                {edu.description}
              </p>

              {/* Structured Coursework Grid */}
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#EDEDED] flex items-center gap-2">
                  <BookOpen size={14} className="text-[#C2410C] dark:text-[#F97316]" /> Core Academic Modules
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {edu.coursework.map((mod, i) => (
                    <div key={i} className="p-4 rounded-lg bg-[#FAF8F5] dark:bg-[#0D0D0D] border border-[#E5E0D8] dark:border-[#262626] flex flex-col gap-2">
                      <span className="text-xs font-mono font-semibold text-[#C2410C] dark:text-[#F97316]">{mod.category}</span>
                      <ul className="flex flex-col gap-1 text-xs text-stone-600 dark:text-stone-400">
                        {mod.topics.map((t, tIdx) => (
                          <li key={tIdx} className="flex items-center gap-1.5">
                            <span className="text-[#C2410C] dark:text-[#F97316]">•</span> {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights & Achievements */}
              <div className="flex flex-col gap-2 pt-2 border-t border-[#E5E0D8]/60 dark:border-[#262626]/60">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#EDEDED] flex items-center gap-2">
                  <Award size={14} className="text-[#C2410C] dark:text-[#F97316]" /> Key Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {edu.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400 font-mono">
                      <span className="text-[#C2410C] dark:text-[#F97316] font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}