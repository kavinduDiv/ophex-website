import { ArrowRight, Sparkles, ChevronDown, Zap, Globe, Code2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { contactData } from "@/data/contact";

/* ── Animated Counter ─────────────────────────────────── */
const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numMatch = value.match(/(\d+)(.*)/);
  const target = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = numMatch ? numMatch[2] : "";
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v) + suffix);
  useEffect(() => {
    if (isInView && numMatch) {
      const controls = animate(motionValue, target, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, motionValue, target, numMatch]);
  if (!numMatch) return <span>{value}</span>;
  return <motion.span ref={ref}>{rounded}</motion.span>;
};

/* ── Floating Orb ─────────────────────────────────── */
const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    animate={{ y: [0, -30, 0], scale: [1, 1.08, 1] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

/* ── Glowing Grid Line ─────────────────────────────────── */
const GridLine = ({ vertical, pos }: { vertical?: boolean; pos: string }) => (
  <div
    className={`absolute ${vertical ? `left-[${pos}] top-0 w-px h-full` : `top-[${pos}] left-0 h-px w-full`} bg-gradient-to-${vertical ? "b" : "r"} from-transparent via-primary/10 to-transparent pointer-events-none`}
  />
);

/* ── Tech Badge ─────────────────────────────────── */
const TechBadge = ({ icon: Icon, label, color }: { icon: React.ElementType; label: string; color: string }) => (
  <motion.div
    whileHover={{ scale: 1.06, y: -2 }}
    className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/60 border border-white/10 backdrop-blur-md text-xs font-semibold shadow-lg ${color}`}
  >
    <Icon className="h-3 w-3" />
    {label}
  </motion.div>
);

/* ── Main Component ─────────────────────────────────── */
const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const stats = [
    { value: "20+", label: "Projects Delivered", icon: "🚀" },
    { value: "10+", label: "Happy Clients", icon: "🌟" },
    { value: "2+",  label: "Years in Business", icon: "📅" },
    { value: "24/7",label: "Support Available", icon: "🔧" },
  ];

  const wordVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const headline = "Build Your Digital Future".split(" ");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Deep gradient background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#0d1117] to-[#080c14]" />

      {/* ── Animated grid ── */}
      <div className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <GridLine vertical pos="25%" />
      <GridLine vertical pos="50%" />
      <GridLine vertical pos="75%" />
      <GridLine pos="30%" />
      <GridLine pos="60%" />

      {/* ── Glowing orbs ── */}
      <FloatingOrb className="w-[500px] h-[500px] top-[-100px] left-[-150px] bg-orange-500/[0.12]" delay={0} />
      <FloatingOrb className="w-[400px] h-[400px] bottom-[-80px] right-[-100px] bg-primary/[0.10]" delay={2.5} />
      <FloatingOrb className="w-[250px] h-[250px] top-[40%] left-[60%] bg-blue-500/[0.08]" delay={1.2} />

      {/* ── Mouse parallax glow ── */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] bg-primary/[0.07] pointer-events-none"
        animate={{ x: mousePos.x * 3, y: mousePos.y * 3 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{ top: "30%", left: "35%" }}
      />

      {/* ── Scanline cinematic overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px)",
        }}
      />

      {/* ── TOP: glowing badge ── */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 mt-28 mb-6 flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-primary text-sm font-semibold shadow-[0_0_30px_rgba(249,115,22,0.2)]"
      >
        <motion.span
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Sparkles className="h-4 w-4" />
        </motion.span>
        Sri Lanka's Premium Software Agency
        <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
      </motion.div>

      {/* ── HEADLINE ── */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-4">
          <span className="flex flex-wrap justify-center gap-x-4">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                className="text-white inline-block"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
          </span>

          {/* Gradient accent line */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-2"
          >
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #f97316 0%, #fb923c 30%, #fbbf24 60%, #f97316 100%)",
                backgroundSize: "200% 200%",
                animation: "shimmer-gradient 4s ease infinite",
              }}
            >
              with OPHEX Solutions
            </span>
          </motion.div>
        </h1>

        {/* Underline accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="h-[2px] w-48 mx-auto mt-4 mb-8 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, #f97316, transparent)" }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          We craft innovative software, stunning web experiences, and powerful mobile apps
          that transform businesses and captivate users.
        </motion.p>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <TechBadge icon={Code2}  label="Web Dev"  color="text-blue-400" />
          <TechBadge icon={Cpu}    label="AI & IoT"  color="text-orange-400" />
          <TechBadge icon={Globe}  label="E-Commerce" color="text-green-400" />
          <TechBadge icon={Zap}    label="Mobile Apps" color="text-purple-400" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          {/* Primary glowing button */}
          <a
            href={`https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent("Hello, I'd like to start a project with OPHEX.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] transition-shadow duration-300"
              style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
            >
              {/* Animated shimmer */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)", transform: "skewX(-20deg)" }}
              />
              <Sparkles className="h-4 w-4" />
              Start Your Project
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </a>

          {/* Secondary ghost button */}
          <Link to="/#services">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white/80 border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/25 transition-all duration-300"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 opacity-60" />
            </motion.button>
          </Link>
        </motion.div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -4 }}
              className="relative group text-center p-4 rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-md hover:border-primary/30 hover:bg-primary/[0.06] transition-all duration-300 cursor-default shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "0 0 25px rgba(249,115,22,0.12)" }}
              />
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-black text-primary mb-1">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-white/40 text-xs font-medium tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-20"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>

      {/* ── Bottom fade-out gradient ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
      />

      {/* Global shimmer keyframe */}
      <style>{`
        @keyframes shimmer-gradient {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
