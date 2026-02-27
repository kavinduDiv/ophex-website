import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ophexDark from "@/assets/ophex_dark.png";
import ophexLight from "@/assets/ophex_light.png";

const circuitPaths = [
  "M 0 150 H 300 L 350 200 H 800 L 850 150 H 1920",
  "M 0 300 H 150 L 200 250 H 500 L 550 300 H 1920",
  "M 0 700 H 400 L 450 750 H 900 L 950 700 H 1920",
  "M 0 900 H 600 L 650 850 H 1200 L 1250 900 H 1920",
  "M 1920 200 H 1600 L 1550 250 H 1200 L 1150 200 H 0",
  "M 1920 600 H 1400 L 1350 550 H 800 L 750 600 H 0",
  "M 1920 800 H 1700 L 1650 750 H 1300 L 1250 800 H 0",
  "M 200 0 V 150 L 250 200 V 500 L 200 550 V 1080",
  "M 1600 0 V 300 L 1550 350 V 800 L 1600 850 V 1080",
  "M 0 450 H 250 L 300 400 H 600",
  "M 1920 500 H 1500 L 1450 450 H 1000",
  "M 0 850 H 350 L 400 900 H 700",
  "M 1920 350 H 1750 L 1700 400 H 1300",
  "M 800 0 V 200 L 850 250 V 400",
  "M 1200 1080 V 900 L 1150 850 V 600"
];

const PageLoader = () => {
  const [loading, setLoading] = useState(() => !sessionStorage.getItem("hasLoadedOnce"));
  const [fadeOut, setFadeOut] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // If not loading on initial render, skip setting timers entirely
    if (!loading) return;

    // Mark as loaded for future navigation in this session
    sessionStorage.setItem("hasLoadedOnce", "true");

    // Start fade out after 5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 5000);

    // Remove loader completely after fade out completes
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 5500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] overflow-hidden transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
        }`}
    >
      {/* Absolute Black Background */}
      <div className="absolute inset-0 bg-black pointer-events-none" />

      {/* Dynamic Neon Circuit Paths (SVG) */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
        >
          {circuitPaths.map((d, i) => (
            <g key={i}>
              {/* Faint background track */}
              <path
                d={d}
                fill="none"
                stroke="rgba(249,115,22,0.15)"
                strokeWidth="1"
              />
              {/* Animated glowing spark traveling along the path */}
              <motion.path
                d={d}
                fill="none"
                stroke="rgba(249,115,22,1)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="150 4000"
                initial={{ strokeDashoffset: 4000 }}
                animate={{ strokeDashoffset: -4000 }}
                transition={{
                  duration: Math.random() * 3 + 3, // Random speed between 3s and 6s
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 2, // Staggered start times
                }}
                className="drop-shadow-[0_0_8px_rgba(249,115,22,1)]"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="flex flex-col items-center gap-12 relative z-10 w-full max-w-md px-8">

        {/* Logo Container */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={logoLoaded ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.8, opacity: 0, y: 20 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="relative h-28 w-64 flex items-center justify-center z-10 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            {/* Base Dark Logo */}
            <img
              src={ophexDark}
              alt=""
              onLoad={() => setLogoLoaded(true)}
              className="absolute inset-0 w-full h-full object-contain"
            />
            {/* Alternating Light Logo for "Brightening" Effect */}
            <motion.img
              src={ophexLight}
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Loading Progress Section */}
        <div className="w-full flex flex-col items-center gap-4">

          {/* Progress Bar Container */}
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative">
            {/* The actual progressing bar */}
            <motion.div
              className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-orange-600 via-orange-400 to-amber-300 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4.8, ease: "easeInOut" }} // Finished just before fade out
            />
            {/* Sparkle on the leading edge */}
            <motion.div
              className="absolute top-0 bottom-0 w-4 bg-white blur-[2px]"
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 4.8, ease: "easeInOut" }}
            />
          </div>

          {/* Status Text Sequence */}
          <div className="h-6 w-full flex items-center justify-center relative overflow-hidden">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [20, 0, 0, -20], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.6, times: [0, 0.2, 0.8, 1], delay: 0 }}
              className="absolute text-orange-400/80 font-mono text-sm tracking-widest uppercase"
            >
              Establishing Connection...
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [20, 0, 0, -20], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.6, times: [0, 0.2, 0.8, 1], delay: 1.6 }}
              className="absolute text-orange-400/80 font-mono text-sm tracking-widest uppercase"
            >
              Loading Assets...
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 3.2 }}
              className="absolute text-orange-400 font-mono text-sm tracking-widest uppercase font-bold drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]"
            >
              System Ready
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PageLoader;
