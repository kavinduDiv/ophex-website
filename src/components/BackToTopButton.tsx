import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTopButton = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll progress percentage
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;

            // Update state
            setScrollProgress(Number(scroll));
            setIsVisible(totalScroll > 10); // Show on tiniest scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const radius = 26;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - scrollProgress * circumference;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 15 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Super smooth spring-like ease
                    // bg-background/30 backdrop-blur-md matches the glass transparency of service cards
                    // w-14 h-14 matches WhatsApp button sizing (approx 56px)
                    className="fixed bottom-6 left-6 z-[100] group flex items-center justify-center w-14 h-14 rounded-full bg-background/30 backdrop-blur-md shadow-lg border border-primary/20 hover:border-orange-500/50 hover:bg-background/50 hover:scale-[1.15] transition-all duration-300 pointer-events-auto hover:shadow-[0_0_25px_rgba(249,115,22,0.7)]"
                    aria-label="Back to Top"
                >
                    {/* Progress SVG Ring */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-500 transform -rotate-90">

                        <defs>
                            {/* The mask is what fills up with the scroll. We use Framer Motion to make it perfectly smooth. */}
                            <mask id="circuit-Mask" scale="1.02">
                                <motion.circle
                                    cx="28" cy="28" r={radius}
                                    stroke="white" strokeWidth="8" fill="none"
                                    strokeLinecap="round"
                                    strokeDasharray={circumference}
                                    initial={{ strokeDashoffset: circumference }}
                                    animate={{ strokeDashoffset }}
                                    transition={{ ease: "easeOut", duration: 0.1 }}
                                />
                            </mask>
                        </defs>

                        {/* Background Circuit Track (Dashed faint lines) - Give circle a little hue so it matches the aesthetic */}
                        <circle
                            cx="28"
                            cy="28"
                            r={radius}
                            className="stroke-orange-500/10 fill-none"
                            strokeWidth="2"
                            strokeDasharray="4 6"
                        />

                        {/* Bright Orange Electric Circuit Line, revealed by scroll mask - Glow only on progress */}
                        <circle
                            cx="28"
                            cy="28"
                            r={radius}
                            className="stroke-orange-500 fill-none drop-shadow-[0_0_6px_rgba(249,115,22,0.8)] mix-blend-screen transition-all duration-[50ms]"
                            strokeWidth="3"
                            strokeDasharray="4 6"
                            strokeLinecap="round"
                            mask="url(#circuit-Mask)"
                        />

                        {/* Glowing Circuit Nodes (Little dots making it look electrifying/circuity) */}
                        <circle cx="28" cy="2" r="2" className="fill-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,1)]" mask="url(#circuit-Mask)" />
                        <circle cx="54" cy="28" r="2" className="fill-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,1)]" mask="url(#circuit-Mask)" />
                        <circle cx="28" cy="54" r="2" className="fill-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,1)]" mask="url(#circuit-Mask)" />
                        <circle cx="2" cy="28" r="2" className="fill-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,1)]" mask="url(#circuit-Mask)" />
                    </svg>

                    {/* Icon inside the circle - no separate arrow hover scaling to keep it centered when button scales */}
                    <ArrowUp className="w-6 h-6 text-foreground group-hover:text-orange-500 transition-colors duration-300 relative z-10" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTopButton;
