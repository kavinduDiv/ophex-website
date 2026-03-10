import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Careers = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Sync theme
        const savedTheme = localStorage.getItem("theme");
        setIsDark(savedTheme !== "light");
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
        if (newTheme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30 selection:text-primary relative overflow-x-hidden flex flex-col">
            <Header isDark={isDark} toggleTheme={toggleTheme} />

            <main className="flex-1 flex flex-col items-center justify-center relative min-h-[70vh] pt-32 pb-24 md:pt-40 md:pb-32">
                {/* Background glowing orbs for tech feel matching NotFound/ServiceDetail */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

                <motion.div
                    className="text-center relative z-10 max-w-2xl px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="flex justify-center mb-8 text-primary"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                            <Briefcase size={48} strokeWidth={1.5} />
                        </div>
                    </motion.div>

                    <h1 className="mb-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                        Careers at <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">OPHEX</span>
                    </h1>
                    <h2 className="mb-8 text-xl md:text-2xl font-medium text-muted-foreground border border-border bg-card/50 backdrop-blur-sm inline-block px-6 py-2 rounded-full">
                        No Vacancies Available At The Moment
                    </h2>

                    <p className="mb-12 text-muted-foreground leading-relaxed text-lg max-w-xl mx-auto">
                        We are currently not hiring for any positions. As a fast-growing technology company building the future, we are always on the lookout for extraordinary talent. Please check back later for future opportunities!
                    </p>

                    <div className="flex items-center justify-center">
                        <Button asChild variant="outline" size="lg" className="gap-2 border-orange-500/50 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-full px-8 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                            <Link to="/">
                                <ArrowLeft size={18} />
                                Return to Home
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </main>

            <Footer isDark={isDark} />
        </div>
    );
};

export default Careers;
