import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-brand-bg border-t border-brand-accent/20 py-12 mt-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Navigation Links */}
          <nav className="flex items-center gap-8 md:gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className="text-sm font-bold text-brand-dark/40 hover:text-brand-accent hover:underline transition-colors tracking-tight"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Copyright Section */}
          <div className="text-sm font-medium text-brand-dark/20 tracking-tight">
            © {new Date().getFullYear()} Manik Tyagi Portfolio
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
