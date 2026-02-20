import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg";

const PageLoader = () => {
  const circuitLines = Array.from({ length: 15 }); // 15 horizontal circuit lines
  const [loading, setLoading] = useState(() => !sessionStorage.getItem("hasLoadedOnce"));
  const [fadeOut, setFadeOut] = useState(false);

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

      {/* Dynamic Neon Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        {circuitLines.map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_8px_rgba(249,115,22,0.8)]"
            style={{
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`, // Random line length
              left: "-300px", // Start off-screen left
            }}
            animate={{
              left: "120%", // Move off-screen right
            }}
            transition={{
              duration: Math.random() * 2 + 1.5, // Random speed
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-12 relative z-10 w-full max-w-md px-8">

        {/* Logo Container */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Futuristic spinning rings around logo */}
          <motion.div
            className="absolute -inset-6 rounded-full border-2 border-orange-500/20 border-t-orange-500 border-b-orange-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-8 rounded-full border border-dashed border-orange-500/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <img
            src={logo}
            alt="ORHEX Software"
            className="h-28 w-auto relative z-10 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"
          />
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
