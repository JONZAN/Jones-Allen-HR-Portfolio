
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 py-12">
      <div className="container mx-auto px-6 text-center lg:px-12">
        <p className="text-slate-500">
          © {new Date().getFullYear()} Jones Allen Sam S. Built for the future of People Operations.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
