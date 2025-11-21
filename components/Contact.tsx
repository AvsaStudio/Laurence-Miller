import React from 'react';
import { SectionId } from '../types';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Let's Start a Project</h2>
            <p className="text-slate-400 mb-10 text-lg">
              Have an idea? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 rounded-lg text-brand-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <p className="text-slate-500">hello@lhstabbins.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 rounded-lg text-brand-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <p className="text-slate-500">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 rounded-lg text-brand-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Visit Us</h4>
                  <p className="text-slate-500">123 Creative Ave, Design City, DC 20000</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:bg-brand-accent hover:text-brand-dark transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 ml-1">First Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 ml-1">Last Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-slate-400 ml-1">Email</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-400 ml-1">Message</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="button" className="w-full bg-brand-accent text-brand-dark font-bold py-4 rounded-xl hover:bg-white transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;