import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default App;