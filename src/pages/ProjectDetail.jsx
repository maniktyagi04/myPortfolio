import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-brand-bg min-h-screen py-24 animate-in fade-in duration-1000">
      <div className="section-container">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-sm font-bold text-brand-dark/40 hover:text-brand-accent mb-16 transition-colors group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Collective
        </Link>

        {/* Title Section */}
        <div className="max-w-4xl border-b border-white/5 pb-16 mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tighter">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/60 leading-relaxed mb-12 font-medium">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-5 py-2 bg-white/5 text-white/80 text-xs font-black uppercase tracking-widest rounded-full border border-white/5">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-24">
            <section>
              <h2 className="text-3xl font-black mb-8 border-l-4 border-brand-accent pl-6 tracking-tight">Problem Statement</h2>
              <p className="text-xl text-brand-dark/60 leading-relaxed font-medium italic bg-brand-surface/20 p-8 rounded-3xl border border-white/5">
                "{project.problem}"
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black mb-8 border-l-4 border-brand-accent pl-6 tracking-tight">Approach & Architecture</h2>
              <p className="text-lg text-brand-dark/60 leading-relaxed whitespace-pre-line font-medium">
                {project.approach}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black mb-10 border-l-4 border-brand-accent pl-6 tracking-tight">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-4 p-6 bg-brand-surface/40 rounded-2xl border border-white/5 hover:border-brand-accent/20 transition-all">
                    <CheckCircle2 size={24} className="text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-white/80 font-bold leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
 
            {project.decisions && (
              <section>
                <h2 className="text-3xl font-black mb-8 border-l-4 border-brand-accent pl-6 tracking-tight">Architectural Decisions</h2>
                <div className="bg-brand-accent/5 p-8 rounded-3xl border border-brand-accent/10">
                  <p className="text-lg text-brand-dark/60 leading-relaxed font-medium">
                    {project.decisions}
                  </p>
                </div>
              </section>
            )}
 
            <section>
              <h2 className="text-3xl font-black mb-8 border-l-4 border-brand-accent pl-6 tracking-tight">Challenges & Solutions</h2>
              <p className="text-lg text-brand-dark/60 leading-relaxed font-medium">
                {project.challenges}
              </p>
            </section>
          </div>

          {/* Sidebar / Action Section */}
          <div className="space-y-12">
            <div className="bg-brand-surface p-10 rounded-[2.5rem] border border-white/5 sticky top-32 shadow-2xl">
              <h3 className="text-xl font-bold mb-8 tracking-tight">Engineering Specs</h3>
              <ul className="space-y-6 mb-12">
                <li className="flex justify-between text-sm">
                  <span className="text-brand-dark/40 font-bold uppercase tracking-widest">Industry</span>
                  <span className="font-black text-white">{project.industry}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-brand-dark/40 font-bold uppercase tracking-widest">Phase</span>
                  <span className="font-black text-white">{project.phase}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-brand-dark/40 font-bold uppercase tracking-widest">Role</span>
                  <span className="font-black text-white">{project.role}</span>
                </li>
              </ul>

              <div className="space-y-4">
                <a 
                  href={project.productionUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest"
                >
                  <ExternalLink size={20} /> Production Deployment
                </a>
                <a 
                  href={project.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary w-full py-5 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest"
                >
                  <Github size={20} /> Source Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
