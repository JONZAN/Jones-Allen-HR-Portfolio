
import React from 'react';
import { cvData } from '../data';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
          {/* Work Experience */}
          <div>
            <div className="space-y-4 mb-16">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">Career</h2>
              <h3 className="font-modern text-5xl font-extrabold text-slate-900 tracking-tighter">Experience</h3>
            </div>
            
            <div className="space-y-16">
              {cvData.experience.map((exp, i) => (
                <div key={i} className="group relative">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h4 className="font-modern text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h4>
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-slate-400 font-bold uppercase text-xs tracking-widest hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                        >
                          {exp.company} — {exp.location}
                          {exp.link && (
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </a>
                      </div>
                      <span className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-xs font-bold border border-slate-100">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.description?.map((desc, idx) => (
                        <li key={idx} className="text-slate-500 font-medium leading-relaxed flex items-start gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-24">
            <div>
              <div className="space-y-4 mb-12">
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-purple-600">Learning</h2>
                <h3 className="font-modern text-5xl font-extrabold text-slate-900 tracking-tighter">Education</h3>
              </div>
              <div className="space-y-6">
                {cvData.education.map((edu, i) => (
                  <div key={i} className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                    <h4 className="font-modern text-xl font-bold text-slate-900">{edu.degree}</h4>
                    <p className="text-blue-600 font-bold text-sm mt-1">{edu.institution}</p>
                    <p className="mt-4 text-xs font-bold text-slate-400 tracking-widest uppercase">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-modern text-2xl font-bold text-slate-900 mb-8">Specializations</h4>
              <div className="flex flex-wrap gap-4">
                {cvData.certifications.map((cert, i) => (
                  <div key={i} className="glass px-6 py-4 rounded-2xl border border-slate-200 text-sm font-bold text-slate-700 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
