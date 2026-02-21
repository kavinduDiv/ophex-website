import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Ghost, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    // Theme Initialization
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 overflow-hidden relative">
      {/* Background glowing orbs for tech feel */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="text-center relative z-10 max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex justify-center mb-8 text-muted-foreground/50"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Ghost size={120} strokeWidth={1} />
        </motion.div>

        <h1 className="mb-2 text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-sm">404</h1>
        <h2 className="mb-6 text-2xl font-semibold text-foreground tracking-tight">System Node Disconnected</h2>

        <p className="mb-10 text-muted-foreground leading-relaxed">
          The coordinate <code className="bg-muted px-2 py-1 rounded text-primary text-sm">{location.pathname}</code> does not exist in our mainframe.
          It may have been relocated, deleted, or you might have entered an invalid sector.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button asChild variant="default" size="lg" className="gap-2 bg-orange-500 hover:bg-orange-600 outline-none text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]">
            <Link to="/">
              <Home size={18} />
              Return to Base
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-orange-500/30 hover:bg-orange-500/10"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={18} />
            Go Back Prior
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
