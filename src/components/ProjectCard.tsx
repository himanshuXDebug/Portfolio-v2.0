'use client';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
  showToast: (msg: string) => void;
}

export default function ProjectCard({ project, onSelect, showToast }: ProjectCardProps) {
  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.github) {
      window.open(project.github, '_blank');
    } else {
      showToast(`GitHub repository for "${project.title}" is currently private.`);
    }
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.demo) {
      window.open(project.demo, '_blank');
    } else {
      showToast(`Live preview for "${project.title}" is currently unavailable.`);
    }
  };

  return (
    <div 
      onClick={onSelect}
      className="group cursor-pointer p-6 rounded-xl border border-[#E5E0D8] dark:border-[#262626] bg-[#F2EFE9] dark:bg-[#161616] hover:border-[#C2410C] dark:hover:border-[#F97316] transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#FAF8F5] dark:bg-[#0D0D0D] border border-[#E5E0D8] dark:border-[#262626] text-[11px] font-mono font-medium text-[#C2410C] dark:text-[#F97316]">
            {project.badge.includes('Star') && <Star size={12} className="fill-[#C2410C] dark:fill-[#F97316]" />}
            {project.badge}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleGithubClick}
              className="p-1.5 rounded hover:bg-[#E5E0D8] dark:hover:bg-[#262626] transition-colors"
              title="GitHub Repository"
            >
              <Github size={16} />
            </button>
            <button
              onClick={handleDemoClick}
              className="p-1.5 rounded hover:bg-[#E5E0D8] dark:hover:bg-[#262626] transition-colors"
              title="Live Demo"
            >
              <ExternalLink size={16} />
            </button>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#1C1917] dark:text-[#EDEDED] group-hover:text-[#C2410C] dark:group-hover:text-[#F97316] transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-stone-500 mb-4">{project.subtitle} • <span className="text-[#C2410C] dark:text-[#F97316]">{project.period}</span></p>

        <div className="mb-4">
          <p className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Problem:</p>
          <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">{project.problem}</p>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E5E0D8] dark:border-[#262626]">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span 
              key={idx}
              className="px-2 py-0.5 rounded bg-[#FAF8F5] dark:bg-[#0D0D0D] border border-[#E5E0D8] dark:border-[#262626] text-[10px] font-mono text-stone-600 dark:text-stone-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 rounded bg-[#FAF8F5] dark:bg-[#0D0D0D] border border-[#E5E0D8] dark:border-[#262626] text-[10px] font-mono text-stone-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}