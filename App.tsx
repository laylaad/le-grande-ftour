
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pillars } from './components/Pillars';
import { CountdownSection } from './components/CountdownSection';
import { Schedule } from './components/Schedule';
import { Venue } from './components/Venue';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-luxuryGold selection:text-luxuryBlack">
      <Navbar />
      <main>
        <Hero />
        <CountdownSection />
        <About />
        <Pillars />
        <Schedule />
        <Venue />
        <Registration />
      </main>
      <Footer />
    </div>
  );
};

export default App;
