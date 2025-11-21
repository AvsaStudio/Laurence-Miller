import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { Quote, ShieldAlert, Lightbulb, Handshake, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-slate-950 overflow-hidden relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-brand-accent font-bold uppercase tracking-widest mb-2">Our Origin</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              The Story of <br/><span className="text-brand-purple">LHS Tabbins</span>
            </h2>
          </div>

          {/* Story Flow */}
          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-16">
            
            {/* Chapter 1 */}
            <div className="relative pl-12 md:pl-16">
              <span className="absolute -left-[25px] top-0 p-3 bg-slate-900 border border-slate-700 rounded-full text-red-400">
                <ShieldAlert size={20} />
              </span>
              <h4 className="text-2xl font-bold text-white mb-4">The Spark</h4>
              <p className="text-slate-400 text-lg leading-relaxed italic mb-4 border-l-4 border-red-400/30 pl-4">
                "Coming home after a weekend away to find our house had been broken into and seeing the devastation on my mother’s face had to be one of the most earth shattering moments of my life."
              </p>
              <p className="text-slate-400 leading-relaxed">
                We immediately called around to see what we could do to beef up our security system. We happened to be living down the street from a gentleman named Jacques who had a security company. My sister and I called him up for suggestions.
              </p>
            </div>

            {/* Chapter 2 */}
            <div className="relative pl-12 md:pl-16">
              <span className="absolute -left-[25px] top-0 p-3 bg-slate-900 border border-slate-700 rounded-full text-brand-accent">
                <Lightbulb size={20} />
              </span>
              <h4 className="text-2xl font-bold text-white mb-4">Hands On</h4>
              <p className="text-slate-400 leading-relaxed mb-4">
                Jacques recommended an electric fence immediately. To afford it, we reduced costs by providing the labor. That's where I first got my hands dirty—digging holes for posts, trenching cables, and pulling conduit. 
              </p>
              <p className="text-slate-400 leading-relaxed">
                "I was blown away—a fence that can shock people and it's legal? Awesome." <br/>
                When we finished, gates opened with a button press, and the fence was live. Jacques told me, <span className="text-white font-medium">"Now the magic happens and you will be entering a world of no return."</span>
              </p>
            </div>

            {/* Chapter 3 */}
            <div className="relative pl-12 md:pl-16">
              <span className="absolute -left-[25px] top-0 p-3 bg-slate-900 border border-slate-700 rounded-full text-yellow-400">
                <Handshake size={20} />
              </span>
              <h4 className="text-2xl font-bold text-white mb-4">The Apprenticeship</h4>
              <p className="text-slate-400 leading-relaxed">
                During summer vacation, Jacques asked me to tag along. The first 6 months were a blast—racing around the city, tackling issues, doing installs. For the first time in 6 years, Jacques could finally take a vacation.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                When he returned, he asked: <span className="text-white font-medium">"Do you want to become a partner?"</span> <br/>
                A transfer later, and I was officially a business owner at the age of 20.
              </p>
            </div>

             {/* Chapter 4 */}
             <div className="relative pl-12 md:pl-16">
              <span className="absolute -left-[25px] top-0 p-3 bg-slate-900 border border-slate-700 rounded-full text-green-400">
                <Briefcase size={20} />
              </span>
              <h4 className="text-2xl font-bold text-white mb-4">A New Mission</h4>
              <p className="text-slate-400 leading-relaxed">
                My biggest push was our greatest challenge: <span className="text-white">Affordability</span>. I wanted growth and to make security accessible to more people. This vision eventually led us to part ways amicably to pursue different paths.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4 font-semibold">
                Thus, Hallen Stabbins was created.
              </p>
            </div>

          </div>

          <motion.div 
            className="mt-20 bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 relative overflow-hidden text-center"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="absolute top-8 left-8 text-slate-800 w-24 h-24 -z-0 transform -scale-x-100" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                "Security is not a privilege, <br/>it’s a right!"
              </h3>
              <p className="text-brand-accent tracking-widest uppercase font-bold text-sm">
                — Hallen Stabbins
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;