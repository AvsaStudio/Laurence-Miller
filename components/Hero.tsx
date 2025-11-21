import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, MousePointer2 } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HERO} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-slate-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -left-20 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[80px]"
        />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">LHS Tabbins Security</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-8">
            Protecting What <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-600">
              Matters Most
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert installations of electric fencing, CCTV, and gate automation. We provide affordable labor and high-quality security systems for homes and businesses.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href={`#${SectionId.SERVICES}`}
              className="group relative px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-full overflow-hidden flex items-center gap-2 transition-all hover:bg-white hover:scale-105"
            >
              <span className="relative z-10">View Our Services</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={`#${SectionId.ABOUT}`}
              className="px-8 py-4 border border-slate-600 text-white rounded-full hover:border-brand-accent hover:text-brand-accent transition-all hover:scale-105"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <MousePointer2 className="w-5 h-5" />
      </motion.div>
    </section>
  );
};

export default Hero;