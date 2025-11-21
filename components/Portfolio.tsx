import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SectionId, PortfolioItem } from '../types';

// Using abstract tech/building images to simulate security installations
const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Luxury Estate Fence", category: "Residential", imageUrl: "https://picsum.photos/id/1036/800/600" },
  { id: 2, title: "Corp HQ Access", category: "Commercial", imageUrl: "https://picsum.photos/id/48/800/600" },
  { id: 3, title: "Suburban Alarm Grid", category: "Residential", imageUrl: "https://picsum.photos/id/238/800/600" },
  { id: 4, title: "Automated Gates", category: "Automation", imageUrl: "https://picsum.photos/id/180/800/600" },
  { id: 5, title: "Warehouse CCTV", category: "Commercial", imageUrl: "https://picsum.photos/id/1076/800/600" },
  { id: 6, title: "Smart Home Integration", category: "Automation", imageUrl: "https://picsum.photos/id/370/800/600" },
];

const categories = ["All", "Residential", "Commercial", "Automation"];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id={SectionId.PORTFOLIO} className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Recent Installations</h2>
            <p className="text-slate-400">Showcasing our commitment to safety and quality workmanship.</p>
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === cat 
                    ? 'bg-brand-accent text-brand-dark font-bold' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-brand-accent text-sm font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;