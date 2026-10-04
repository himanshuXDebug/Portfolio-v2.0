'use client';
import { SKILL_CATEGORIES } from '@/data/skills';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-[#E5E0D8] dark:border-[#262626]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Tools, languages, and technologies in my toolkit"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl border border-[#E5E0D8] dark:border-[#262626] bg-[#F2EFE9] dark:bg-[#161616] flex flex-col gap-4"
            >
              <h3 className="font-bold text-base text-[#1C1917] dark:text-[#EDEDED] border-b border-[#E5E0D8] dark:border-[#262626] pb-2">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#E5E0D8] dark:border-[#262626] bg-[#FAF8F5] dark:bg-[#0D0D0D] text-xs font-mono"
                  >
                    <span className="font-medium text-[#1C1917] dark:text-[#EDEDED]">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}