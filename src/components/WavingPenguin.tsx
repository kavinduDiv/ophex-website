



const WavingPenguin = () => {
    return (
        <div className="fixed bottom-0 right-8 z-50 hidden md:block">
            <div className="relative w-32 h-40">
                {/* Penguin Body */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-32 bg-gray-900 rounded-t-full rounded-b-2xl shadow-xl z-10">
                    {/* Belly */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-20 bg-white rounded-t-full rounded-b-xl z-20"></div>

                    {/* Eyes */}
                    <div className="absolute top-10 left-6 w-4 h-4 bg-white rounded-full z-20">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div className="absolute top-10 right-6 w-4 h-4 bg-white rounded-full z-20">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
                    </div>

                    {/* Beak */}
                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45 rounded-sm z-30"></div>

                    {/* Blush */}
                    <div className="absolute top-12 left-3 w-3 h-2 bg-primary/30 rounded-full blur-sm z-20"></div>
                    <div className="absolute top-12 right-3 w-3 h-2 bg-primary/30 rounded-full blur-sm z-20"></div>
                </div>

                {/* Feet */}
                <div className="absolute bottom-0 left-6 w-8 h-4 bg-primary rounded-full z-0"></div>
                <div className="absolute bottom-0 right-6 w-8 h-4 bg-primary rounded-full z-0"></div>

                {/* Left Wing (Static) */}
                <div className="absolute top-20 left-2 w-8 h-12 bg-gray-900 rounded-full -rotate-12 z-10"></div>

                {/* Right Wing (Waving) */}
                <div className="absolute top-20 -right-2 w-8 h-12 bg-gray-900 rounded-full origin-top-left z-10 animate-penguin-wave">
                    <div className="absolute inset-0 bg-gray-900 rounded-full"></div>
                </div>
            </div>

            <style>{`
        @keyframes penguin-wave {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-20deg); }
          50% { transform: rotate(10deg); }
          75% { transform: rotate(-20deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-penguin-wave {
          animation: penguin-wave 2s infinite ease-in-out;
        }
      `}</style>
        </div>
    );
};

export default WavingPenguin;
