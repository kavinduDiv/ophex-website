import { ArrowRight, Sparkles, ChevronDown, Zap, Globe, Code2, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { contactData } from "@/data/contact";

/* ── Animated Counter ─────────────────────────────── */
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

/* ── Main Component ─────────────────────────────────── */
const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  /* Throttled CSS-var parallax – zero React re-renders */
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return; // Skip entirely on mobile

    const handleMouse = (e: MouseEvent) => {
      if (rafRef.current) return; // already queued
      rafRef.current = requestAnimationFrame(() => {
        if (glowRef.current) {
          const x = (e.clientX / window.innerWidth - 0.5) * 60;
          const y = (e.clientY / window.innerHeight - 0.5) * 60;
          glowRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        }
        rafRef.current = null;
      });
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const stats = [
    { value: "20+",  label: "Projects Delivered", icon: "🚀" },
    { value: "10+",  label: "Happy Clients",       icon: "🌟" },
    { value: "2+",   label: "Years in Business",   icon: "📅" },
    { value: "24/7", label: "Support Available",   icon: "🔧" },
  ];

  const wordVariants = {
    hidden:  { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: (i: number) => ({
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const headline = "Build Your Digital Future".split(" ");

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Static deep background (no GPU cost) ── */}
      <div className="absolute inset-0 bg-[#0a0a14]" />

      {/* ── Static grid – CSS only, no animation ── */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Static corner glows (no blur animation, will-change:transform) ── */}
      <div
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ── Mouse-tracked glow (desktop only, CSS transform, no re-render) ── */}
      <div
        ref={glowRef}
        className="hidden md:block absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)",
          willChange: "transform",
          transition: "transform 0.1s linear",
        }}
      />

      {/* ── Scanline micro-texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.6) 2px, rgba(255,255,255,0.6) 4px)",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 pt-28 pb-8 max-w-5xl mx-auto w-full">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-7 flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold shadow-[0_0_24px_rgba(249,115,22,0.15)]"
        >
          <Sparkles className="h-4 w-4" />
          Sri Lanka's Premium Software Agency
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </motion.div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black leading-[1.06] tracking-tight mb-4">
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

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="inline-block mt-2 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #f97316 0%, #fb923c 35%, #fbbf24 65%, #f97316 100%)",
              backgroundSize: "200%",
              animation: "shimmer-gradient 5s ease infinite",
            }}
          >
            with OPHEX Solutions
          </motion.span>
        </h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 0.9, ease: "easeOut" }}
          className="h-px w-44 mx-auto mt-5 mb-7 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, #f97316, transparent)" }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-8 leading-relaxed font-light"
        >
          We craft innovative software, stunning web experiences, and powerful mobile apps
          that transform businesses and captivate users.
        </motion.p>

        {/* Tech badges — no individual hover GPU cost, simple CSS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-9"
        >
          {[
            { icon: Code2, label: "Web Dev",    color: "text-blue-400"   },
            { icon: Cpu,   label: "AI & IoT",   color: "text-orange-400" },
            { icon: Globe, label: "E-Commerce", color: "text-green-400"  },
            { icon: Zap,   label: "Mobile Apps",color: "text-purple-400" },
          ].map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold ${color}`}
            >
              <Icon className="h-3 w-3" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href={`https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent("Hello, I'd like to start a project with OPHEX.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-shadow duration-300 active:scale-95"
            style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
          >
            <Sparkles className="h-4 w-4" />
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </a>

          <Link
            to="/#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white/75 border border-white/15 bg-white/[0.05] hover:bg-white/10 hover:border-white/25 transition-colors duration-300 active:scale-95"
          >
            Explore Services
            <ArrowRight className="h-4 w-4 opacity-60" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-2xl border border-white/8 bg-white/[0.04] hover:border-primary/25 hover:bg-primary/[0.06] transition-colors duration-300 cursor-default"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-black text-primary mb-1">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-white/40 text-xs font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30 z-10"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
      />

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
