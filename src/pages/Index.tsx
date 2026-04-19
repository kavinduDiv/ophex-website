import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ClientsSection from "@/components/sections/ClientsSection";

import TechnologiesSection from "@/components/sections/TechnologiesSection";
import ContactSection from "@/components/sections/ContactSection";
import PageLoader from "@/components/animations/PageLoader";

import FloatingShapes from "@/components/animations/FloatingShapes";

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  // Explicit hash scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150); // slight delay to ensure layout is ready
      }
    }
  }, [location.hash, location.pathname]);

  useEffect(() => {
    // Check system preference or saved preference
    const savedTheme = localStorage.getItem("theme");


    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Reset page title on home
  useEffect(() => {
    document.title = "OPHEX Solutions | Leading Software Agency";
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-background relative">
      <PageLoader />
      <FloatingShapes />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <ClientsSection />
        {/* <PortfolioSection /> */}
        <TechnologiesSection />
        <ContactSection />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
};

export default Index;
