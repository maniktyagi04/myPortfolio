import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-brand-bg min-h-screen pt-24 pb-20 animate-in fade-in duration-1000">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight text-white leading-tight">
            Open to Engineering Opportunities & Technical Collaboration
          </h1>
          
          {/* Narrative Content */}
          <div className="space-y-6 text-lg md:text-xl text-white/50 font-medium leading-relaxed mb-12">
            <p>
              I’m currently open to internship opportunities, engineering collaborations, and technical discussions around scalable systems, AI-integrated platforms, and backend architecture. If you’re building something challenging or looking for a systems-focused developer, I’d be glad to connect.
            </p>
            <p>
              You can reach me directly via mail at <a href="mailto:manik.tyagi@adypu.edu.in" className="text-brand-accent hover:underline">manik.tyagi@adypu.edu.in</a> or through <a href="https://www.linkedin.com/in/manikxcsai/" target="_blank" rel="noopener noreferrer" className="text-brand-accent font-bold hover:underline">LinkedIn</a>. I aim to respond promptly to serious inquiries.
            </p>
          </div>

          {/* Social Links List */}
          <div className="space-y-8 mb-12">
            <a href="https://github.com/maniktyagi04" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-accent/10 group-hover:border-brand-accent/20 transition-all duration-300 shadow-lg">
                <Github size={28} className="text-brand-accent" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors tracking-tight">Follow on GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/manikxcsai/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-[#0077b5]/10 hover:border-[#0077b5]/20 transition-all duration-300 shadow-lg">
                <Linkedin size={28} className="text-brand-accent" />
              </div>
              <span className="text-xl font-bold text-white transition-colors tracking-tight">Follow on LinkedIn</span>
            </a>

            <a href="https://www.instagram.com/iam_maniktyagi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-[#e4405f]/10 hover:border-[#e4405f]/20 transition-all duration-300 shadow-lg">
                <Instagram size={28} className="text-brand-accent" />
              </div>
              <span className="text-xl font-bold text-white transition-colors tracking-tight">Follow on Instagram</span>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 mb-12 max-w-[200px]"></div>

          {/* Email Footer */}
          <a href="mailto:manik.tyagi@adypu.edu.in" className="flex items-center gap-6 group">
            <div className="w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Mail size={24} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">manik.tyagi@adypu.edu.in</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
