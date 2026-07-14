import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Orb from './Orb';
import BlurText from './BlurText';

export interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage = ({ onEnter }: LandingPageProps) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#07070a] text-white selection:bg-red-500 selection:text-white">
      {/* Interactive Orb Background from React Bits */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.6}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          backgroundColor="#07070a"
        />
      </div>

      {/* Subtle radial overlay for readability and depth */}
      <div className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,7,10,0.6)_60%,#07070a_100%)]" />

      {/* Main Content Container */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-widest text-white/70 backdrop-blur-md uppercase"
        >
          <Sparkles className="h-4 w-4 text-red-500" />
          <span>Interactive WebGL Experience</span>
        </motion.div>

        {/* Title using BlurText component */}
        <div className="mb-4">
          <BlurText
            text="AMAAN SAYED"
            delay={150}
            animateBy="letters"
            direction="top"
            className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl"
        >
          Step into a red-and-black universe crafted with custom shaders, liquid aesthetics, and interactive 3D motion.
        </motion.p>

        {/* View Portfolio Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <button
            onClick={onEnter}
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-red-500/40 bg-gradient-to-r from-red-600 to-red-800 px-9 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-[0_0_35px_rgba(255,27,45,0.4)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-red-400 hover:shadow-[0_0_55px_rgba(255,27,45,0.8)] active:scale-95"
          >
            <span className="relative z-10">View Portfolio</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            
            {/* Button hover shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
          </button>
        </motion.div>
      </div>

      {/* Bottom hint text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/50 uppercase"
      >
        Move cursor to interact with Orb
      </motion.div>
    </div>
  );
};
