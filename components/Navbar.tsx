
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-12">
        <div className="text-xl font-bold tracking-tight text-slate-900">
          JONES<span className="text-blue-600">ALLEN.</span>
        </div>
        <div className="hidden space-x-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <a 
          href="#contact" 
          className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-all"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
