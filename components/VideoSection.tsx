import React from 'react';
import { Reveal } from './Reveal';
import videoFile from '../assets/video.mp4';

export const VideoSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center text-center">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
          Watch This Short Video to Understand the Offer
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <div className="relative w-full max-w-3xl aspect-video mx-auto">
          <video
            src={videoFile}
            className="rounded-[4px] w-full h-full object-cover border border-white/20"
            controls
            preload="metadata"
          />
        </div>
      </Reveal>
    </section>
  );
};
