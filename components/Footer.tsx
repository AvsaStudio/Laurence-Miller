import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark py-8 border-t border-slate-800 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-500">
          © {new Date().getFullYear()} LHS Tabbins. All rights reserved. 
          <span className="mx-2">|</span>
          <span className="text-xs">Built with React & Gemini</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;