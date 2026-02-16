import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, Square } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectGridCard = ({ project }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-12 hover:shadow-2xl transition-all duration-500 flex flex-col items-start text-left border border-white/5 group hover:border-brand-accent/20">
    {/* Teal Square Icon */}
    <div className="w-16 h-16 bg-brand-bg border-2 border-brand-accent rounded-xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(13,148,136,0.2)]">
      <Square size={32} className="text-brand-accent fill-brand-accent/10" />
    </div>
    
    <h3 className="text-xl font-black mb-6 tracking-tight text-white uppercase leading-tight min-h-[3rem] group-hover:text-brand-accent transition-colors">
      {project.title}
    </h3>
    
    <p className="text-white/60 mb-12 leading-relaxed font-medium text-base">
      {project.shortDescription}
    </p>

    <div className="mt-auto w-full">
      <Link 
        to={`/projects/${project.id}`}
        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-accent/10 text-brand-accent rounded-xl font-bold text-sm tracking-tight hover:bg-brand-accent hover:text-white transition-all group/btn"
      >
        <LinkIcon size={18} className="group-hover/btn:rotate-45 transition-transform" /> VIEW PROJECT
      </Link>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="section-container max-w-7xl">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-[5.5rem] font-bold mb-12 tracking-tight text-white leading-[1.05]">
            Systems Built with <span className="text-brand-accent">Architectural</span> Intent.
          </h1>
          <p className="text-lg md:text-xl text-white/40 font-medium leading-relaxed max-w-3xl">
            Each project represents deliberate engineering decisions — from modular backend design and role-based control to AI-integrated evaluation pipelines and analytics-driven dashboards. I focus on building production-oriented systems that simulate real-world complexity, prioritizing scalability, clean architecture, and performance over surface-level features.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectGridCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
