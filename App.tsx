
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { SeatingPlan } from './components/SeatingPlan';
import { CountdownSection } from './components/CountdownSection';
import { Schedule } from './components/Schedule';
import { Venue } from './components/Venue';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-luxuryGold selection:text-luxuryBlack">
      <Navbar />
      <main>
        <Hero />
        <SeatingPlan />
        <CountdownSection />
        <Pillars />
        <Schedule />
        <Venue />
      </main>
      <Footer />
    </div>
  );
};

export default App;
