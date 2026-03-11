import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Headset } from "lucide-react";
import { motion } from "framer-motion";
import { contactData } from "@/data/contact";

const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={`https://wa.me/${contactData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[100] group flex items-center justify-center p-3 rounded-full bg-white text-black transition-colors duration-300"
            style={{
                boxShadow: isHovered
                    ? "0 0 20px 5px rgba(249, 115, 22, 0.6)"
                    : "0 4px 10px rgba(0, 0, 0, 0.5)",
            }}
            animate={{
                scale: isHovered ? 1.05 : [1, 1.05, 1],
            }}
            transition={{
                duration: isHovered ? 0.3 : 2,
                repeat: isHovered ? 0 : Infinity,
                ease: "easeInOut"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Contact us on WhatsApp"
        >
            {/* Radiating Idle Rings */}
            {!isHovered && (
                <>
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-orange-500 pointer-events-none"
                        initial={{ opacity: 0.8, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.8 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-orange-500 pointer-events-none"
                        initial={{ opacity: 0.8, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.8 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                    />
                </>
            )}

            {/* Tooltip Chat Bubble */}
            <div className="absolute right-full mr-4 px-4 py-2 bg-black/80 backdrop-blur-md text-white text-sm font-medium rounded-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10 flex items-center gap-2 shadow-lg shadow-black/20 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[5px] after:w-2 after:h-2 after:bg-black/80 after:rotate-45 after:border-r after:border-t after:border-white/10">
                <Headset size={16} className="text-orange-500" />
                Contact us on WhatsApp
            </div>

            {/* Icon */}
            <FaWhatsapp className="w-8 h-8 relative z-10" />
        </motion.a>
    );
};

export default WhatsAppButton;
