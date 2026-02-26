
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { Pricing } from './components/Pricing';
import { SeatingPlan } from './components/SeatingPlan';
import { CountdownSection } from './components/CountdownSection';
import { Schedule } from './components/Schedule';
import { Venue } from './components/Venue';
import { Footer } from './components/Footer';
import { Press } from './components/Press';

const App: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    const element = document.getElementById('inscription-hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-luxuryGold selection:text-luxuryBlack">
      <Navbar />
      <main>
        <Hero selectedPlan={selectedPlan} />
        <CountdownSection />
        <Pillars />
        <Pricing onSelectPlan={handleSelectPlan} />
        <SeatingPlan />
        <Schedule />
        <Press />
        <Venue />
      </main>
      <Footer />
    </div>
  );
};

export default App;
