
import React from 'react';
import { cvData } from '../data';

const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="bg-slate-950 py-32 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400">Toolkit</h2>
            <h3 className="mt-6 font-modern text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1]">
              Equipped for the <br />
              <span className="text-blue-500">Intelligent</span> Era.
            </h3>
            <p className="mt-10 text-xl text-slate-400 font-medium leading-relaxed max-w-md">
              Combining traditional HR excellence with modern AI capabilities to build high-performance cultures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cvData.skills.map((skill, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                   <div className="h-1.5 w-10 bg-blue-600 rounded-full group-hover:w-16 transition-all duration-500"></div>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="font-modern text-lg font-bold tracking-tight text-white">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
