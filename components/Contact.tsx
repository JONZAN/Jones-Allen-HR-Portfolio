
import React from 'react';
import { cvData } from '../data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
             <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Collaborate</h2>
             <h3 className="font-modern text-6xl md:text-8xl font-extrabold tracking-tighter text-slate-900 leading-none">
              Ready to grow?
             </h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <a 
              href={`mailto:${cvData.email}`} 
              className="font-modern text-3xl md:text-5xl font-bold text-blue-600 hover:text-slate-900 underline decoration-blue-200 underline-offset-8 transition-all"
            >
              {cvData.email}
            </a>
            
            <div className="h-2 w-2 rounded-full bg-slate-200 hidden md:block"></div>
            
            <a 
              href={cvData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-modern text-3xl md:text-5xl font-bold text-slate-900 hover:text-blue-600 transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
