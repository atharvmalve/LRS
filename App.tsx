import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { FinalCTA } from './components/FinalCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col items-center w-full max-w-7xl mx-auto px-6 space-y-32 pb-32 pt-12 md:pt-24">
        <Hero />
        <VideoSection />
        <FinalCTA />
      </main>
    </div>
  );
};

export default App;