'use client';
import { useState } from 'react';
import { PROJECTS, Project } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import SectionHeading from './SectionHeading';

interface ProjectsProps {
  showToast: (msg: string) => void;
}

export default function Projects({ showToast }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 border-t border-[#E5E0D8] dark:border-[#262626]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Real-world web applications, POS systems, and AI tools built by Himanshu"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onSelect={() => setSelectedProject(project)}
              showToast={showToast}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          showToast={showToast}
        />
      )}
    </section>
  );
}