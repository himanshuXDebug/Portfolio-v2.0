'use client';
import { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Calendar } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  showToast: (msg: string) => void;
}

export default function ProjectModal({ project, onClose, showToast }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border border-[#E5E0D8] dark:border-[#262626] bg-[#FAF8F5] dark:bg-[#0D0D0D] p-6 sm:p-8 flex flex-col gap-6 shadow-xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#E5E0D8] dark:border-[#262626] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-medium text-[#C2410C] dark:text-[#F97316]">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-stone-500 flex items-center gap-1">
                <Calendar size={12} /> {project.period}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#1C1917] dark:text-[#EDEDED]">{project.title}</h2>
            <p className="text-xs font-mono text-stone-500">{project.subtitle}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg border border-[#E5E0D8] dark:border-[#262626] hover:bg-[#F2EFE9] dark:hover:bg-[#161616]"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-4 text-sm text-stone-600 dark:text-stone-400">
          <div className="p-4 rounded-lg bg-[#F2EFE9] dark:bg-[#161616] border border-[#E5E0D8] dark:border-[#262626]">
            <h4 className="font-semibold text-xs font-mono uppercase tracking-wider text-[#1C1917] dark:text-[#EDEDED] mb-1">
              Problem Statement
            </h4>
            <p>{project.problem}</p>
          </div>

          <div className="p-4 rounded-lg bg-[#F2EFE9] dark:bg-[#161616] border border-[#E5E0D8] dark:border-[#262626]">
            <h4 className="font-semibold text-xs font-mono uppercase tracking-wider text-[#1C1917] dark:text-[#EDEDED] mb-1">
              Solution & Architecture
            </h4>
            <p>{project.solution}</p>
          </div>

          <div>
            <h4 className="font-semibold text-xs font-mono uppercase tracking-wider text-[#1C1917] dark:text-[#EDEDED] mb-2">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <CheckCircle2 size={14} className="text-[#C2410C] dark:text-[#F97316]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xs font-mono uppercase tracking-wider text-[#1C1917] dark:text-[#EDEDED] mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-[#F2EFE9] dark:bg-[#161616] border border-[#E5E0D8] dark:border-[#262626] text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E5E0D8] dark:border-[#262626]">
          <button
            onClick={() => {
              if (project.github) window.open(project.github, '_blank');
              else showToast(`GitHub repository unavailable for ${project.title}`);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E5E0D8] dark:border-[#262626] text-xs font-medium hover:border-[#C2410C] dark:hover:border-[#F97316]"
          >
            <Github size={14} /> Repository
          </button>
          <button
            onClick={() => {
              if (project.demo) window.open(project.demo, '_blank');
              else showToast(`Demo preview unavailable for ${project.title}`);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C2410C] text-white dark:bg-[#F97316] dark:text-[#0D0D0D] text-xs font-medium hover:opacity-90"
          >
            <ExternalLink size={14} /> Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}