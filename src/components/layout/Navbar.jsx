import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="pill-nav shadow-brand-accent/5">
      <div className="flex items-center space-x-1">
        <div className="flex items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`pill-link ${isActive(item.href) ? 'active-pill font-bold' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
