
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12 max-w-7xl">
        <a href="#" className="flex items-center gap-0">
          <div className="font-modern text-2xl font-black tracking-tighter uppercase flex items-baseline">
            <span className="text-slate-900">JONES</span>
            <span className="text-blue-600">ALLEN</span>
          </div>
        </a>
        
        <div className="flex items-center">
          <a 
            href="#contact" 
            className="rounded-full bg-slate-900 px-7 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 active:scale-95"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
