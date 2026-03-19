
import { useEffect, useState } from "react";

const ServicePenguin = ({ serviceId, isRelativeOnDesktop = false, isAbsoluteTopMobile = false }: { serviceId: string, isRelativeOnDesktop?: boolean, isAbsoluteTopMobile?: boolean }) => {
    const [isBlinking, setIsBlinking] = useState(false);
    const [lookDirection, setLookDirection] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isPecking, setIsPecking] = useState(false);

    // Random blinking logic
    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 200);
        }, 4000);
        return () => clearInterval(blinkInterval);
    }, []);

    // Random eye movement logic
    useEffect(() => {
        const moveInterval = setInterval(() => {
            const x = Math.random() * 6 - 3;
            const y = Math.random() * 4 - 2;
            setLookDirection({ x, y });
        }, 3000);
        return () => clearInterval(moveInterval);
    }, []);

    const handleInteraction = () => {
        setIsPecking(true);
        setTimeout(() => setIsPecking(false), 500);
    };

    const getVariant = () => {
        switch (serviceId) {
            case "web-development": return "coding";
            case "ecommerce": return "shopping";
            case "app-development": return "mobile";
            case "software-development": return "server";
            case "marketing": return "marketing";
            case "iot-ai": return "iot";
            default: return "waving";
        }
    };

    const getMessage = (variant: string) => {
        switch (variant) {
            case "coding": return "Writing clean code!";
            case "shopping": return "Ready to shop?";
            case "mobile": return "Tap tap tap!";
            case "server": return "System stable.";
            case "marketing": return "Loud & Clear!";
            case "iot": return "Processing...";
            default: return "Hello there!";
        }
    };

    const variant = getVariant();
    const message = getMessage(variant);

    return (
        <div
            className={`
        ${isAbsoluteTopMobile ? 'absolute xl:relative' : (isRelativeOnDesktop ? 'fixed xl:relative' : 'fixed')} z-50 transition-all duration-1000 ease-in-out pointer-events-none
        
        /* Mobile: Compact, dynamically anchored, smaller */
        w-[240px] h-[320px] scale-[0.55] 
        ${isAbsoluteTopMobile ? '-top-8 right-10 origin-top-right' : 'right-4 bottom-0 origin-bottom-right'}
        
        /* Tablet: Slightly larger */
        md:w-[400px] md:h-[500px] md:scale-75
        ${isAbsoluteTopMobile ? 'md:-top-12 md:-right-12' : 'md:-right-12 md:bottom-0'}

        /* Desktop: Full size, better positioned, toggleable absolute/relative */
        xl:w-[600px] xl:h-[700px] xl:-right-16 ${isRelativeOnDesktop ? 'xl:top-0 xl:-translate-y-0 xl:scale-100' : 'xl:top-[55%] xl:-translate-y-1/2 xl:scale-90'} xl:origin-center
      `}
        >
            <div className={`relative w-full h-full transition-transform duration-300`}>

                {/* === SPEECH BUBBLE (Quote Style) === */}
                {/* Desktop & Mobile Unified Quote Style - Next to Head */}
                <div className={`
            absolute z-[60] bg-white text-slate-900 border-2 border-slate-200 
            px-3 py-2 md:px-4 md:py-3 rounded-2xl rounded-tr-none shadow-xl transform transition-all duration-300 origin-right pointer-events-auto
            ${isHovered || isPecking ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-50 translate-x-4'}
            
            /* Positioning */
            top-16 right-[75%] w-32  /* Mobile: Smaller, closer */
            md:top-24 md:right-[85%] md:w-48 /* Desktop: Larger, offset */
        `}>
                    <p className="font-bold text-xs md:text-sm leading-tight text-center">{message}</p>

                    {/* Triangle pointer */}
                    <div className="absolute top-0 -right-2 w-0 h-0 border-t-[10px] border-t-slate-200 border-r-[10px] border-r-transparent"></div>
                    <div className="absolute top-[2px] -right-[5px] w-0 h-0 border-t-[8px] border-t-white border-r-[8px] border-r-transparent z-10"></div>
                </div>

                {/* === SCENE BACKGROUNDS === */}

                {/* Coding: Desk setup - Desktop only */}
                {variant === "coding" && (
                    <div className="hidden xl:block absolute bottom-[15%] right-20 w-80 xl:w-[400px] h-4 bg-[#5D4037] rounded-sm transform -skew-x-12 z-20 shadow-lg origin-bottom-right">
                        <div className="absolute top-4 left-10 w-4 h-32 bg-[#4E342E] skew-x-12"></div>
                        <div className="absolute top-4 right-20 w-4 h-32 bg-[#4E342E] skew-x-12"></div>
                    </div>
                )}

                {/* Server: Rack — visible on mobile with smaller size */}
                {variant === "server" && (
                    <div className="flex absolute bottom-20 right-2 md:right-10 w-20 md:w-32 xl:w-48 h-40 md:h-64 xl:h-[500px] bg-slate-800 border-4 border-slate-700 rounded-lg z-0 flex-col gap-1 p-2 xl:p-3 shadow-2xl origin-bottom-right">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="flex gap-2 items-center h-4 xl:h-8 bg-slate-900 px-2 rounded border-t border-slate-700 overflow-hidden">
                                <div className={`w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full ${i % 3 === 0 ? 'bg-green-500 animate-pulse' : 'bg-slate-600'}`}></div>
                                <div className={`w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full ${i % 2 === 0 ? 'bg-blue-500 animate-blink' : 'bg-slate-600'}`}></div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Marketing: Growth Chart */}
                {variant === "marketing" && (
                    <div className="absolute top-24 right-4 w-48 xl:w-64 h-48 xl:h-64 z-0 opacity-80 scale-75 xl:scale-100 origin-top-right">
                        <div className="w-full h-full border-l-4 border-b-4 border-slate-300 relative">
                            <div className="absolute bottom-0 left-2 w-8 h-0 bg-red-400 rounded-t-sm animate-grow-1"></div>
                            <div className="absolute bottom-0 left-12 w-8 h-0 bg-yellow-400 rounded-t-sm animate-grow-2"></div>
                            <div className="absolute bottom-0 left-24 w-8 h-0 bg-blue-400 rounded-t-sm animate-grow-3"></div>
                            <div className="absolute bottom-0 left-36 w-8 h-0 bg-green-500 rounded-t-sm animate-grow-4"></div>
                        </div>
                    </div>
                )}



                {/* === THE PENGUIN === */}
                <div
                    className={`absolute left-2 md:left-20 xl:left-1/3 transition-all duration-700 ease-in-out z-30 pointer-events-auto cursor-pointer
          ${variant === "coding" ? "bottom-[18%] xl:bottom-[22%]" : "bottom-10 xl:bottom-24"}
          ${isPecking ? 'translate-y-4 rotate-3' : 'hover:-translate-y-2'}
        `}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleInteraction}
                    // Hide original body for IOT variant to replace with new structure
                    style={{ display: variant === 'iot' ? 'none' : 'block' }}
                >

                    {/* Body Shape */}
                    <div className="relative w-40 xl:w-56 h-52 xl:h-72 bg-gradient-to-br from-slate-800 to-slate-950 rounded-[50%_50%_45%_45%_/_60%_60%_35%_35%] shadow-2xl overflow-hidden border-2 border-slate-900/50">
                        {/* Texture */}
                        {variant !== 'iot' && (
                            <div className="absolute top-4 right-10 w-10 h-10 bg-white/5 rounded-full blur-xl"></div>
                        )}

                        {/* Belly */}
                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-28 xl:w-40 h-40 xl:h-56 rounded-[50%_50%_40%_40%_/_70%_70%_30%_30%] shadow-inner ${variant === 'iot'
                            ? 'bg-gradient-to-b from-slate-300 to-slate-400 border-x border-slate-500/30'
                            : 'bg-gradient-to-b from-white to-gray-100'
                            }`}>
                            {variant === 'iot' && (
                                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-24 flex flex-col gap-2 opacity-50">
                                    <div className="h-0.5 w-full bg-slate-500"></div>
                                    <div className="h-0.5 w-full bg-slate-500"></div>
                                    <div className="h-0.5 w-full bg-slate-500"></div>
                                </div>
                            )}
                        </div>

                        {/* === FACE LAYER === */}
                        <div className="absolute inset-0 z-50">
                            {/* Eyes */}
                            <div className="absolute top-16 xl:top-20 left-1/2 -translate-x-1/2 w-32 flex justify-between px-4 xl:px-6">
                                {/* Left Eye */}
                                <div className="relative w-8 xl:w-10 h-10 xl:h-12 bg-white rounded-full shadow-lg border border-gray-100 overflow-hidden">
                                    <div
                                        className={`absolute w-3 xl:w-4 h-4 xl:h-5 rounded-full transition-transform duration-300 ${variant === 'iot' ? 'bg-orange-500 shadow-[0_0_10px_#f97316]' : 'bg-slate-900'}`}
                                        style={{
                                            top: '50%', left: '50%',
                                            transform: `translate(-50%, -50%) translate(${lookDirection.x}px, ${lookDirection.y}px) scaleY(${isBlinking ? 0.1 : 1})`
                                        }}
                                    >
                                        <div className="absolute top-0.5 right-1 w-1 h-1 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                {/* Right Eye */}
                                <div className="relative w-8 xl:w-10 h-10 xl:h-12 bg-white rounded-full shadow-lg border border-gray-100 overflow-hidden">
                                    <div
                                        className={`absolute w-3 xl:w-4 h-4 xl:h-5 rounded-full transition-transform duration-300 ${variant === 'iot' ? 'bg-orange-500 shadow-[0_0_10px_#f97316]' : 'bg-slate-900'}`}
                                        style={{
                                            top: '50%', left: '50%',
                                            transform: `translate(-50%, -50%) translate(${lookDirection.x}px, ${lookDirection.y}px) scaleY(${isBlinking ? 0.1 : 1})`
                                        }}
                                    >
                                        <div className="absolute top-0.5 right-1 w-1 h-1 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Beak */}
                            <div className={`absolute top-24 xl:top-32 left-1/2 -translate-x-1/2 w-6 xl:w-8 h-6 xl:h-8 rotate-45 rounded-lg shadow-sm border mt-2 transition-all duration-100 ${variant === 'iot'
                                ? 'bg-gray-700 border-gray-600'
                                : 'bg-gradient-to-r from-orange-500 to-yellow-500 border-orange-600'
                                } ${isPecking ? 'scale-90 rotate-12' : ''}`}>
                                <div className="absolute top-1 left-1 w-2 h-2 bg-white/30 rounded-full"></div>
                            </div>

                            {/* Blush */}
                            <div className="absolute top-24 xl:top-28 left-6 xl:left-8 w-6 h-4 bg-pink-400/40 rounded-full blur-md"></div>
                            <div className="absolute top-24 xl:top-28 right-6 xl:right-8 w-6 h-4 bg-pink-400/40 rounded-full blur-md"></div>
                        </div>

                        {/* Screen Reflection (Web Dev) - Below Face */}
                        {variant === "coding" && (
                            <div className="absolute inset-0 bg-blue-500/10 z-40 mix-blend-overlay animate-pulse-slow mask-image-face"></div>
                        )}
                    </div>

                    {/* Feet */}
                    <div className={`absolute -bottom-3 left-6 xl:left-8 w-12 xl:w-16 h-6 xl:h-8 rounded-full z-0 shadow-md ${variant === 'iot' ? 'bg-gray-600' : 'bg-orange-600'}`}></div>
                    <div className={`absolute -bottom-3 right-6 xl:right-8 w-12 xl:w-16 h-6 xl:h-8 rounded-full z-0 shadow-md ${variant === 'iot' ? 'bg-gray-600' : 'bg-orange-600'}`}></div>


                    {/* === ACCESSORIES & ARMS (Layered carefully) === */}

                    {/* CODE: Laptop & Typing - POSITIONED LOWER */}
                    {variant === "coding" && (
                        <>
                            {/* Laptop - Lowered significantly to not block face */}
                            <div className="absolute bottom-4 xl:bottom-8 left-1/2 -translate-x-1/2 w-48 xl:w-64 z-50">
                                {/* Screen */}
                                <div className="absolute bottom-2 left-0 w-full h-24 xl:h-32 bg-slate-800 rounded-t-lg transform origin-bottom -skew-x-12 z-30 border-4 border-slate-700 overflow-hidden shadow-2xl flex items-center justify-center">
                                    <div className="w-full h-full bg-slate-900 relative overflow-hidden">
                                        {/* Fake Code */}
                                        <div className="p-2 space-y-1 opacity-70">
                                            {[1, 2, 3, 4].map(i => <div key={i} className="h-1 bg-green-500 rounded animate-type-code" style={{ width: `${Math.random() * 80 + 20}%`, animationDelay: `${i * 0.2}s` }}></div>)}
                                        </div>
                                    </div>
                                    {/* Logo */}
                                    <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-white/10 rounded-full blur-sm"></div>
                                </div>
                                {/* Keyboard Base */}
                                <div className="absolute bottom-0 -left-6 w-56 xl:w-72 h-3 bg-slate-700 rounded-full z-40 shadow-lg"></div>
                            </div>

                            {/* Arms - Adjusted for lower laptop */}
                            <div className="absolute top-36 xl:top-48 -left-4 xl:-left-8 w-12 xl:w-16 h-16 xl:h-20 bg-slate-800 rounded-full rotate-[60deg] z-40 animate-type-fast border-l-4 border-slate-900/50"></div>
                            <div className="absolute top-36 xl:top-48 -right-4 xl:-right-8 w-12 xl:w-16 h-16 xl:h-20 bg-slate-800 rounded-full -rotate-[60deg] z-40 animate-type-fast-delay border-r-4 border-slate-900/50"></div>
                        </>
                    )}

                    {/* ECOMMERCE: Bags - Adjusted to avoid cutoff */}
                    {variant === "shopping" && (
                        <>
                            <div className="absolute top-24 xl:top-40 -left-4 xl:-left-12 z-50 animate-bob scale-75 xl:scale-100">
                                {["#ef4444", "#3b82f6", "#eab308"].map((color, i) => (
                                    <div key={i} className="absolute w-16 h-20 xl:w-20 xl:h-24 rounded-md border-b-4 border-black/20 origin-top shadow-xl"
                                        style={{
                                            backgroundColor: color,
                                            transform: `rotate(${i * 10 - 10}deg) translateX(${i * 5}px)`,
                                            top: `${i * 10}px`
                                        }}>
                                        <div className="absolute -top-6 xl:-top-8 left-1/2 -translate-x-1/2 w-8 xl:w-10 h-8 xl:h-10 border-4 rounded-full border-b-transparent" style={{ borderColor: color }}></div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Arm Waving Credit Card - Pulled in */}
                            <div className="absolute top-28 xl:top-36 right-0 xl:right-4 w-12 xl:w-16 h-20 xl:h-24 bg-slate-800 rounded-full -rotate-[45deg] z-40 animate-wave-card origin-top">
                                <div className="absolute bottom-0 right-0 w-12 xl:w-16 h-8 xl:h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md shadow-lg transform rotate-90 translate-y-6 xl:translate-y-8 border border-white/20">
                                    <div className="absolute top-2 left-2 w-3 h-2 bg-yellow-400 rounded-sm"></div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* MOBILE: Giant Phone - Adjusted to avoid cutoff */}
                    {variant === "mobile" && (
                        <>
                            <div className="absolute top-28 xl:top-10 -left-4 xl:-left-10 w-24 xl:w-32 h-40 xl:h-56 bg-black border-4 border-gray-800 rounded-3xl z-40 transform -rotate-12 shadow-2xl flex flex-col items-center overflow-hidden origin-bottom-right">
                                <div className="w-full h-8 bg-gray-900 border-b border-gray-800 flex justify-center items-center">
                                    <div className="w-8 xl:w-12 h-1 bg-gray-700 rounded-full"></div>
                                </div>
                                <div className="w-full flex-1 bg-white relative">
                                    {/* App UI */}
                                    <div className="absolute inset-0 bg-slate-100 flex flex-col p-2 gap-2">
                                        <div className="w-full h-16 xl:h-20 bg-primary/20 rounded-xl animate-pulse"></div>
                                        <div className="flex gap-1 xl:gap-2">
                                            <div className="w-8 xl:w-10 h-8 xl:h-10 bg-blue-200 rounded-lg"></div>
                                            <div className="w-8 xl:w-10 h-8 xl:h-10 bg-green-200 rounded-lg"></div>
                                            <div className="w-8 xl:w-10 h-8 xl:h-10 bg-purple-200 rounded-lg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Arm Tapping - Pulled in */}
                            <div className="absolute top-24 xl:top-32 right-0 xl:right-4 w-12 xl:w-16 h-20 xl:h-24 bg-slate-800 rounded-full origin-top -rotate-[60deg] z-50 animate-tap-finger">
                                <div className="absolute bottom-0 w-6 xl:w-8 h-6 xl:h-8 bg-slate-800 rounded-full"></div>
                            </div>
                        </>
                    )}

                    {/* MARKETING: Megaphone */}
                    {variant === "marketing" && (
                        <>
                            {/* Megaphone */}
                            <div className="absolute top-24 xl:top-20 -right-8 xl:-right-16 w-20 xl:w-28 h-20 xl:h-28 z-50 transform -rotate-12 animate-shout origin-left">
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 xl:w-12 h-8 xl:h-10 bg-orange-600 rounded-r-md"></div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-14 xl:w-20 h-14 xl:h-20 border-y-[14px] xl:border-y-[20px] border-r-[14px] xl:border-r-[20px] border-l-0 border-y-transparent border-r-orange-500"></div>
                                <div className="absolute -bottom-4 left-4 w-3 xl:w-4 h-12 xl:h-16 bg-gray-800 rounded-full rotate-12 border-2 border-gray-700"></div>
                            </div>

                            {/* Arms */}
                            <div className="absolute top-28 xl:top-36 right-0 xl:right-4 w-12 xl:w-16 h-16 xl:h-20 bg-slate-800 rounded-full origin-top -rotate-[100deg] z-30"></div>
                            <div className="absolute top-32 xl:top-44 -left-4 xl:-left-8 w-12 xl:w-16 h-16 xl:h-20 bg-slate-800 rounded-full rotate-[30deg] z-30"></div>
                        </>
                    )}

                    {/* SERVER: Maintenance - Wrench lowered to hand */}
                    {variant === "server" && (
                        <>
                            {/* Wrench - Lowered to align with hand */}
                            <div className="absolute top-28 xl:top-36 -right-20 xl:-right-32 w-24 xl:w-32 h-10 z-50 transform -rotate-12 origin-left animate-wrench-turn">
                                <div className="w-full h-3 xl:h-4 bg-gray-400 rounded-full shadow-md border border-gray-500 relative">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 xl:w-10 h-8 xl:h-10 border-4 border-gray-300 rounded-full border-r-transparent"></div>
                                </div>
                            </div>

                            {/* Arms - Pulled in */}
                            <div className="absolute top-28 xl:top-36 right-0 xl:right-4 w-12 xl:w-16 h-16 xl:h-20 bg-slate-800 rounded-full origin-top -rotate-[80deg] z-30"></div>
                            <div className="absolute top-32 xl:top-44 -left-4 xl:-left-8 w-12 xl:w-16 h-16 xl:h-20 bg-slate-800 rounded-full rotate-[120deg] z-30">
                                <div className="absolute bottom-0 w-32 xl:w-40 h-2 bg-blue-500 rounded-full transform rotate-90 -translate-x-16 xl:-translate-x-20"></div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* === IOT VARIANT (EVE STYLE) === */}
            {variant === "iot" && (
                <div
                    className={`absolute left-2 md:left-20 xl:left-1/3 transition-all duration-700 ease-in-out z-30 pointer-events-auto cursor-pointer bottom-4 md:bottom-24 xl:bottom-40
                        ${isPecking ? 'scale-95' : 'hover:scale-105'}
                        flex flex-col items-center
                        `}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleInteraction}
                >
                    {/* Electro-Magnetic Field / Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>

                    {/* Floating Head */}
                    <div className="relative mb-4 w-32 xl:w-40 h-24 xl:h-28 bg-gradient-to-br from-white via-slate-100 to-slate-300 rounded-[50%_50%_45%_45%_/_60%_60%_40%_40%] shadow-[0_10px_20px_rgba(0,0,0,0.1)] z-50 animate-float-slow">
                        {/* Face Screen */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-24 xl:w-32 h-16 xl:h-20 bg-black rounded-[45%] overflow-hidden shadow-inner flex items-center justify-center gap-3 xl:gap-4">
                            {/* Neon Orange Eyes */}
                            <div className={`w-6 xl:w-8 h-4 xl:h-5 bg-[#f97316] rounded-full shadow-[0_0_15px_#f97316] transition-all duration-100 ${isBlinking ? 'scale-y-10' : 'scale-y-100'}`}
                                style={{ transform: `translate(${lookDirection.x * 2}px, ${lookDirection.y * 2}px) scaleY(${isBlinking ? 0.1 : 1})` }}></div>
                            <div className={`w-6 xl:w-8 h-4 xl:h-5 bg-[#f97316] rounded-full shadow-[0_0_15px_#f97316] transition-all duration-100 ${isBlinking ? 'scale-y-10' : 'scale-y-100'}`}
                                style={{ transform: `translate(${lookDirection.x * 2}px, ${lookDirection.y * 2}px) scaleY(${isBlinking ? 0.1 : 1})` }}></div>

                            {/* Cute Digital Beak */}
                            <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#f97316] drop-shadow-[0_0_5px_#f97316]"></div>
                        </div>

                        {/* Gloss Reflection */}
                        <div className="absolute top-2 left-6 w-8 h-4 bg-white/40 rounded-full rotate-12 blur-[1px]"></div>
                    </div>

                    {/* Connection Waves (Neck) */}
                    <div className="absolute top-[5.5rem] xl:top-[6.4rem] left-1/2 -translate-x-1/2 w-12 h-8 flex flex-col items-center justify-center gap-1 opacity-60">
                        {[1, 2, 3].map(i => (
                            <div key={i} className={`w-full h-[1px] bg-cyan-400 shadow-[0_0_5px_#22d3ee] rounded-full animate-ping-slow`} style={{ animationDelay: `${i * 0.5}s` }}></div>
                        ))}
                    </div>

                    {/* Floating Body */}
                    <div className="relative w-36 xl:w-48 h-48 xl:h-64 bg-gradient-to-br from-white via-slate-100 to-slate-200 rounded-[50%_50%_40%_40%_/_60%_60%_30%_30%] shadow-2xl z-40 animate-float-medium flex flex-col items-center overflow-hidden">
                        {/* Chest Light */}
                        <div className="mt-8 w-16 h-16 bg-gradient-to-br from-slate-200 to-white rounded-full border border-slate-300/50 flex items-center justify-center shadow-inner">
                            <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_#4ade80] animate-pulse"></div>
                        </div>
                    </div>

                    {/* Floating Arms */}
                    <div className="absolute top-36 -left-8 xl:-left-12 w-10 xl:w-14 h-32 xl:h-40 bg-gradient-to-r from-white to-slate-200 rounded-full shadow-lg z-40 animate-float-reverse origin-top rotate-12"></div>
                    <div className="absolute top-36 -right-8 xl:-right-12 w-10 xl:w-14 h-32 xl:h-40 bg-gradient-to-l from-white to-slate-200 rounded-full shadow-lg z-40 animate-float-reverse-delayed origin-top -rotate-12"></div>

                </div>
            )}

            <style>{`
        /* Animations */
        @keyframes type-fast {
            0%, 100% { transform: rotate(60deg) translateY(0); }
            50% { transform: rotate(65deg) translateY(-8px); }
        }
        @keyframes type-fast-delay {
            0%, 100% { transform: rotate(-60deg) translateY(0); }
            50% { transform: rotate(-65deg) translateY(-8px); }
        }
        .animate-type-fast { animation: type-fast 0.15s infinite; }
        .animate-type-fast-delay { animation: type-fast-delay 0.15s infinite 0.07s; }

        @keyframes type-code {
            0% { width: 0; opacity: 1; }
            100% { width: 100%; opacity: 0; }
        }
        .animate-type-code { animation: type-code 1s infinite steps(4); }

        @keyframes bob {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-bob { animation: bob 2s infinite ease-in-out; }

        @keyframes wave-card {
            0%, 100% { transform: rotate(-45deg); }
            50% { transform: rotate(-60deg); }
        }
        .animate-wave-card { animation: wave-card 1.5s infinite ease-in-out; }

        @keyframes tap-finger {
            0%, 100% { transform: rotate(-60deg); }
            50% { transform: rotate(-70deg) translateX(-5px); }
        }
        .animate-tap-finger { animation: tap-finger 0.3s infinite; }

        @keyframes wrench-turn {
            0%, 100% { transform: rotate(-10deg); }
            50% { transform: rotate(10deg); }
        }
        .animate-wrench-turn { animation: wrench-turn 1s infinite ease-in-out; }

        @keyframes shout {
             0%, 100% { transform: rotate(-12deg) scale(1); }
             50% { transform: rotate(-15deg) scale(1.05); }
        }
        .animate-shout { animation: shout 0.5s infinite; }

        @keyframes grow-1 { from { height: 0; } to { height: 40%; } }
        @keyframes grow-2 { from { height: 0; } to { height: 60%; } }
        @keyframes grow-3 { from { height: 0; } to { height: 50%; } }
        @keyframes grow-4 { from { height: 0; } to { height: 90%; } }
        
        .animate-grow-1 { animation: grow-1 1s ease-out forwards; }
        .animate-grow-2 { animation: grow-2 1.2s ease-out forwards; }
        .animate-grow-3 { animation: grow-3 1.4s ease-out forwards; }
        .animate-grow-4 { animation: grow-4 1.6s ease-out forwards; }

        .animate-grow-4 { animation: grow-4 1.6s ease-out forwards; }

        @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }

        @keyframes float-medium {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        .animate-float-medium { animation: float-medium 3s ease-in-out infinite; }

        @keyframes float-reverse {
            0%, 100% { transform: translateY(0) rotate(12deg); }
            50% { transform: translateY(-10px) rotate(8deg); }
        }
        .animate-float-reverse { animation: float-reverse 3.5s ease-in-out infinite; }

        @keyframes float-reverse-delayed {
            0%, 100% { transform: translateY(0) rotate(-12deg); }
            50% { transform: translateY(-10px) rotate(-8deg); }
        }
        .animate-float-reverse-delayed { animation: float-reverse-delayed 3.5s ease-in-out infinite 0.5s; }

        @keyframes ping-slow {
             75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }

        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        .animate-blink { animation: blink 0.5s infinite; }
      `}</style>
        </div>

    );
};

export default ServicePenguin;
