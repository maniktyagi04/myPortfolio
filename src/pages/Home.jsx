import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, Github, Linkedin, Twitter, MessageSquare, Instagram, Briefcase, Terminal } from 'lucide-react';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import portrait from '../assets/portrait.png';

const ProjectCard = ({ project }) => (
  <div className="card group h-full flex flex-col p-10">
    <div className="mb-10">
      <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center text-brand-accent shadow-lg shadow-brand-accent/5">
        <Terminal size={24} />
      </div>
    </div>
    
    <div className="flex-grow">
      <h3 className="text-xl font-black mb-4 tracking-tighter uppercase text-white group-hover:text-brand-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-brand-dark/50 text-base mb-10 line-clamp-3 leading-relaxed font-medium">
        {project.shortDescription}
      </p>
    </div>

    <div>
      <Link 
        to={`/projects/${project.id}`}
        className="btn-primary w-full px-8 rounded-full flex items-center justify-center gap-3 transition-all transform group-hover:scale-[1.02]"
      >
        <LinkIcon size={18} /> VIEW PROJECT
      </Link>
    </div>
  </div>
);

const Home = () => {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center pt-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-10 order-2 lg:order-1">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                  Building Scalable Systems with <span className="text-brand-accent text-glow">AI-Driven</span> Intelligence.
                </h1>
                <p className="text-xl text-brand-dark/50 max-w-xl font-medium leading-relaxed">
                  Mern-stack, Full-Stack engineer focused on system design, performance optimization, and production-grade architecture. I design and build intelligent platforms that replicate real-world complexity — from AI-powered evaluation engines to modular, role-based systems built for scale.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-primary px-10">
                  Explore Work
                </Link>
                <Link to="/contact" className="btn-secondary px-10">
                  Contact Me
                </Link>
              </div>

              {/* Social Media Row */}
              <div className="flex gap-4 pt-6">
                <a href="https://github.com/maniktyagi04" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/50 transition-all duration-300 hover:bg-[#333] hover:text-white hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/manikxcsai/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/50 transition-all duration-300 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]/50 hover:shadow-[0_0_20px_rgba(0,119,181,0.3)] hover:-translate-y-1">
                  <Linkedin size={20} />
                </a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/50 transition-all duration-300 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]/50 hover:shadow-[0_0_20px_rgba(29,161,242,0.3)] hover:-translate-y-1">
                  <Twitter size={20} />
                </a>
                <a href="https://www.instagram.com/iam_maniktyagi/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/50 transition-all duration-300 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(238,42,123,0.3)] hover:-translate-y-1">
                  <Instagram size={20} />
                </a>
                <a href="mailto:manik.tyagi@adypu.edu.in" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/50 transition-all duration-300 hover:bg-brand-accent hover:text-white hover:border-brand-accent/50 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:-translate-y-1">
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>

            {/* Right Column: Image - Aligned top with text */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end self-start lg:pt-0">
              <div className="relative group animate-float">
                <div className="absolute inset-0 bg-brand-accent opacity-20 blur-3xl group-hover:opacity-30 transition-opacity"></div>
                <div className="relative transition-all duration-700">
                  <img 
                    src={portrait} 
                    alt="Manik Tyagi Portrait" 
                    className="w-[320px] md:w-[420px] rounded-[2rem] shadow-2xl border border-white/5 object-cover aspect-[4/5]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid Directly Below Hero row but separate from text column */}
          <div className="mt-20 lg:mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 border-t border-white/5">
        <div className="section-container">
          <div className="bg-brand-surface p-12 md:p-20 rounded-[3rem] border border-white/5 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-[6px] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                <Briefcase size={24} />
              </div>
              <h2 className="text-4xl font-black tracking-tight">Engineering Journey</h2>
            </div>

            <div className="space-y-16">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12 border-l border-white/5 last:border-0 pb-16 last:pb-0 group">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-brand-accent/20 border-2 border-brand-accent group-hover:scale-125 transition-transform z-10"></div>
                  
                  <div className="relative p-8 rounded-2xl border border-transparent transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:bg-white/[0.03] hover:border-brand-accent/20 hover:shadow-[0_0_30px_rgba(20,184,166,0.1)]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-black text-white mb-1">{exp.company}</h3>
                        <p className="text-brand-accent font-bold text-sm tracking-widest uppercase">{exp.role}</p>
                      </div>
                      <span className="text-xs font-black text-brand-dark/30 tracking-[0.2em]">{exp.date}</span>
                    </div>

                    <ul className="space-y-4">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="text-brand-dark/50 text-base leading-relaxed font-medium flex items-start gap-4">
                          <Terminal size={14} className="mt-1.5 shrink-0 text-brand-accent/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
