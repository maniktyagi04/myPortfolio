import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import portrait from '../assets/PHOTO-2026-02-16-18-27-54.jpg';

const About = () => {
  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] lg:grid-rows-[auto_auto] gap-x-16 gap-y-12 items-start">
          
          {/* 1. Portrait: order-1 on mobile, column 2 on desktop */}
          <div className="order-1 lg:order-2 lg:col-start-2 lg:row-start-1 lg:sticky lg:top-40">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent/20 to-transparent rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 aspect-[4/3]">
                <img 
                  src={portrait} 
                  alt="Portrait" 
                  className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* 2. Narrative: order-2 on mobile, column 1 on desktop */}
          <div className="space-y-10 order-2 lg:order-1 lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Mern-Stack Engineer Focused on <span className="text-brand-accent">Systems</span> & Intelligent Platforms
            </h1>
            
            <div className="space-y-6 text-lg md:text-xl text-white/60 font-medium leading-relaxed max-w-2xl">
              <p>
                I’m a full-stack engineer passionate about building scalable, architecture-driven systems that simulate real-world complexity. My work goes beyond basic CRUD applications — I design modular backend systems, structured evaluation engines, and performance-focused frontend architectures.
              </p>
              <p>
                I have hands-on experience building role-based platforms with authentication, dynamic workflows, and analytics dashboards. Recently, I’ve been engineering AI-integrated systems that automate evaluation, generate insights, and improve decision workflows.
              </p>
              <p>
                My stack includes React, Node.js, Express, MongoDB, and modern AI tooling. I focus heavily on system design principles, clean architecture, and production-oriented thinking — always optimizing for scalability, maintainability, and performance.
              </p>
              <p>
                I’m constantly pushing myself to build systems that feel real, complex, and industry-grade.
              </p>
            </div>
          </div>

          {/* 3. Social Follow Links: order-3 on mobile, column 2 on desktop */}
          <div className="space-y-6 lg:pl-4 order-3 lg:order-3 lg:col-start-2 lg:row-start-2 lg:sticky lg:top-[calc(40px+450px)]">
            <a 
              href="https://github.com/maniktyagi04" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-6 group"
            >
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-accent/10 group-hover:border-brand-accent/20 transition-all duration-300">
                <Github size={28} className="text-white group-hover:text-brand-accent transition-colors" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors tracking-tight">Follow on GitHub</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/manikxcsai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-6 group"
            >
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#0077b5]/10 group-hover:border-[#0077b5]/20 transition-all duration-300">
                <Linkedin size={28} className="text-white group-hover:text-[#0077b5] transition-colors" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-[#0077b5] transition-colors tracking-tight">Follow on LinkedIn</span>
            </a>

            <a 
              href="https://www.instagram.com/iam_maniktyagi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-6 group"
            >
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#e4405f]/10 group-hover:border-[#e4405f]/20 transition-all duration-300">
                <Instagram size={28} className="text-white group-hover:text-[#e4405f] transition-colors" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-[#e4405f] transition-colors tracking-tight">Follow on Instagram</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;