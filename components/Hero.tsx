
import React from 'react';
import { cvData } from '../data';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* Background 3D Abstract Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-[20%] right-[15%] w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
      </div>

      <div className="container mx-auto max-w-7xl z-10 px-6 pt-24 pb-12 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-slate-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Dubai Based HR Strategist</span>
            </div>

            <h1 className="font-modern text-6xl md:text-8xl font-extrabold tracking-tighter text-slate-900 leading-[0.9]">
              Redefining <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Human Capital.</span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-xl text-slate-500 leading-relaxed font-medium">
              Jones Allen Sam S — An AI-augmented workplace strategist focused on user-centric employee experiences and culture growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-slate-900 text-white font-bold text-lg hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-slate-200"
              >
                Inquire Now
              </a>
              <a 
                href="#experience" 
                className="w-full sm:w-auto px-10 py-5 rounded-2xl glass font-bold text-lg text-slate-900 hover:bg-white transition-all duration-300"
              >
                The Work
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            {/* 3D-Like Abstract Component */}
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-[4rem] rotate-6 animate-float-slow"></div>
              <div className="absolute inset-0 bg-white glass shadow-2xl rounded-[4rem] -rotate-3 p-8 border border-white/40 animate-float flex flex-col justify-center items-center text-center space-y-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl shadow-lg flex items-center justify-center mb-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="font-modern text-4xl font-bold text-slate-900 tracking-tight">AI + HR</p>
                  <p className="text-slate-500 font-medium">Augmenting the future of operations.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-2xl font-bold text-blue-600">85%</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Efficiency</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-2xl font-bold text-indigo-600">100%</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Human</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Accents */}
              <div className="absolute -top-10 -right-10 w-24 h-24 glass rounded-full flex items-center justify-center animate-float-delayed shadow-xl">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 glass rounded-3xl flex items-center justify-center animate-float-slow shadow-xl">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Name Banner with Seamless Marquee Scroll */}
      <div className="w-full select-none overflow-hidden border-y border-slate-100 bg-white py-12 flex items-center">
        <div className="flex whitespace-nowrap animate-marquee">
          <h2 className="font-modern text-[20vw] font-black text-slate-900 leading-none tracking-tighter uppercase pr-12">
            JONES ALLEN
          </h2>
          <h2 className="font-modern text-[20vw] font-black text-slate-900 leading-none tracking-tighter uppercase pr-12">
            JONES ALLEN
          </h2>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
