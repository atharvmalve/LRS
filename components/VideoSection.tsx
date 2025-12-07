import React from 'react';
import { Reveal } from './Reveal';

export const VideoSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center text-center">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
          Watch This Short Video to Understand the Offer
        </h2>
      </Reveal>

      <Reveal delay={200}>
  <div
    className="
      relative 
      w-screen
      mx-auto 
      aspect-video
      
    "
  >
    <iframe
      src="https://player.vimeo.com/video/1144317084?h=dc96e9d12a&title=0&byline=0&portrait=0&badge=0"
      className="rounded-[4px] w-full h-full border border-white/20 py-4 md:px-36"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
  </div>
</Reveal>

    </section>
  );
};
