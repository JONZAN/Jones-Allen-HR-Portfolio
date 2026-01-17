
import React from 'react';
import { cvData } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-50 py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">The Philosophy</h2>
            <h3 className="font-modern text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-none">
              Empathy scaled through <span className="text-slate-400">technology.</span>
            </h3>
            <p className="mt-8 text-xl md:text-2xl leading-relaxed text-slate-500 font-medium max-w-3xl">
              {cvData.summary}
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: "AI-Augmented", desc: "Optimizing HR workflows using Generative AI to drive administrative efficiency.", icon: "⚡" },
              { title: "UX-Centric", desc: "Viewing the workplace through the lens of a designer to improve the daily human experience.", icon: "🎨" },
              { title: "Empathy-First", desc: "Ensuring that data and automation serve to empower, not replace, human value.", icon: "❤️" }
            ].map((value, i) => (
              <div key={i} className="group rounded-3xl bg-white p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h4 className="font-modern text-2xl font-bold text-slate-900">{value.title}</h4>
                <p className="mt-4 text-slate-500 font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
