import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Zap, Video, Key, Bell, Shield, Wrench, Server, CheckCircle } from 'lucide-react';
import { SectionId } from '../types';

interface ExtendedServiceItem {
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

const services: ExtendedServiceItem[] = [
  {
    title: "Electric Fencing",
    description: "Our flagship service. We install legal, high-voltage perimeter security that acts as the ultimate deterrent.",
    features: ["Wall-top & Free-standing", "COC Compliance Certificates", "Multi-zone setups"],
    iconName: "Zap"
  },
  {
    title: "Gate Automation",
    description: "Say goodbye to getting wet in the rain. We install and repair high-speed, secure gate motors.",
    features: ["Centurion Systems", "Anti-theft brackets", "Mobile app integration"],
    iconName: "Key"
  },
  {
    title: "CCTV Surveillance",
    description: "Keep eyes on your property 24/7. Remote viewing capabilities allow you to watch from anywhere.",
    features: ["IP & Analog HD Cameras", "Night Vision", "Motion Detection Recording"],
    iconName: "Video"
  },
  {
    title: "Alarm Systems",
    description: "Comprehensive intrusion detection that alerts you and your response company immediately.",
    features: ["Wireless & Wired Systems", "Outdoor Beams", "Smartphone Control"],
    iconName: "Bell"
  },
  {
    title: "Access Control",
    description: "Manage traffic flow into your residential estate or business premises with precision.",
    features: ["Biometric Readers", "Video Intercoms", "Tag/Card Systems"],
    iconName: "Server"
  },
  {
    title: "Repairs & Maintenance",
    description: "Security systems need care. We offer affordable maintenance plans to keep you protected.",
    features: ["Battery Replacements", "Fault Finding", "Upgrade Advice"],
    iconName: "Wrench"
  }
];

const iconMap: Record<string, React.ElementType> = {
  Zap, Video, Key, Bell, Shield, Wrench, Server
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-2 block"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Complete Security Solutions
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-brand-accent mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            From the initial trench digging to the final programming, we handle every aspect of your security installation with precision and care.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName];
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-brand-accent/40 hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-4 rounded-xl bg-slate-900 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
                    <motion.div
                       whileHover={{ rotate: 360 }}
                       transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                       <Icon size={32} strokeWidth={1.5} />
                    </motion.div>
                  </div>
                  <span className="text-5xl font-serif font-bold text-slate-800 group-hover:text-slate-700 transition-colors select-none">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-2 mt-auto border-t border-slate-700/50 pt-4">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
                      <CheckCircle size={14} className="text-brand-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;