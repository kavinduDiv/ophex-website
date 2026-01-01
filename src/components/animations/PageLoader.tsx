import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    // Remove loader after fade animation
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo with pulse animation */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping-slow rounded-full bg-primary/20" />
          <div className="relative animate-pulse-scale">
            <img src={logo} alt="ORHEX" className="h-20 w-auto" />
          </div>
        </div>

        {/* Loading spinner */}
        <div className="relative">
          <div className="loader-ring">
            <div className="loader-ring-inner" />
          </div>
        </div>

        {/* Loading text with typing effect */}
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="animate-pulse">Loading</span>
          <span className="loading-dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
