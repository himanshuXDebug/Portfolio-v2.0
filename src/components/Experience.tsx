'use client';
import { useState } from 'react';
import { Calendar, MapPin, X, Milestone, ChevronRight } from 'lucide-react';
import { EXPERIENCES, ExperienceItem } from '@/data/experience';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const [journeyModal, setJourneyModal] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="py-20 border-t border-[#E5E0D8] dark:border-[#262626]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Work Experience" 
          subtitle="Click the experience card to view full milestone timeline"
        />

        <div className="flex flex-col gap-8">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={index}
              onClick={() => setJourneyModal(exp)}
              className="cursor-pointer group p-6 sm:p-8 rounded-xl border border-[#E5E0D8] dark:border-[#262626] bg-[#F2EFE9] dark:bg-[#161616] hover:border-[#C2410C] dark:hover:border-[#F97316] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#E5E0D8] dark:border-[#262626] pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-[#1C1917] dark:text-[#EDEDED] group-hover:text-[#C2410C] dark:group-hover:text-[#F97316] transition-colors">
                      {exp.role}
                    </h3>
                    <ChevronRight size={18} className="text-[#C2410C] dark:text-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm font-semibold text-[#C2410C] dark:text-[#F97316]">{exp.company}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {exp.duration}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 mb-6 text-sm text-stone-600 dark:text-stone-400">
                {exp.responsibilities.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#C2410C] dark:text-[#F97316] font-bold mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E5E0D8]/60 dark:border-[#262626]/60">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded bg-[#FAF8F5] dark:bg-[#0D0D0D] border border-[#E5E0D8] dark:border-[#262626] text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#C2410C] dark:text-[#F97316] group-hover:underline">
                  <Milestone size={14} /> View 5-Step Journey
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Complete Journey Timeline Modal */}
      {journeyModal && (
        <div 
          onClick={() => setJourneyModal(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-xl border border-[#E5E0D8] dark:border-[#262626] bg-[#FAF8F5] dark:bg-[#0D0D0D] p-6 sm:p-8 flex flex-col gap-6 shadow-2xl"
          >
            <div className="flex items-start justify-between border-b border-[#E5E0D8] dark:border-[#262626] pb-4">
              <div>
                <span className="text-xs font-mono text-[#C2410C] dark:text-[#F97316]">Cognizant Career Timeline</span>
                <h3 className="text-2xl font-bold text-[#1C1917] dark:text-[#EDEDED]">My Training & Project Journey</h3>
              </div>
              <button 
                onClick={() => setJourneyModal(null)}
                className="p-1.5 rounded-lg border border-[#E5E0D8] dark:border-[#262626] hover:bg-[#F2EFE9] dark:hover:bg-[#161616]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative border-l-2 border-[#C2410C] dark:border-[#F97316] ml-3 pl-6 flex flex-col gap-6 py-2">
              {journeyModal.milestones.map((m, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#FAF8F5] dark:bg-[#0D0D0D] border-2 border-[#C2410C] dark:border-[#F97316]" />
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#F2EFE9] dark:bg-[#161616] border border-[#E5E0D8] dark:border-[#262626] text-[11px] font-mono font-semibold text-[#C2410C] dark:text-[#F97316] mb-1">
                    {m.date}
                  </span>
                  <h4 className="font-bold text-sm text-[#1C1917] dark:text-[#EDEDED]">{m.title}</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5 leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setJourneyModal(null)}
              className="w-full py-3 rounded-lg bg-[#1C1917] text-[#FAF8F5] dark:bg-[#EDEDED] dark:text-[#0D0D0D] font-medium text-xs text-center hover:opacity-90 transition-opacity"
            >
              Close Journey Timeline
            </button>
          </div>
        </div>
      )}
    </section>
  );
}