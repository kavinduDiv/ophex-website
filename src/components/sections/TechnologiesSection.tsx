
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";


// Tech Data with Real Logo URLs (Simple Icons + Wikimedia Fallbacks)
const technologies = [
  // Frontend
  { name: "React", category: "Frontend", color: "#61DAFB", image: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Vue.js", category: "Frontend", color: "#4FC08D", image: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
  { name: "Next.js", category: "Frontend", color: "#000000", image: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Tailwind", category: "Frontend", color: "#06B6D4", image: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "HTML5", category: "Frontend", color: "#E34F26", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { name: "CSS3", category: "Frontend", color: "#1572B6", image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  { name: "JavaScript", category: "Frontend", color: "#F7DF1E", image: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", category: "Frontend", color: "#3178C6", image: "https://cdn.simpleicons.org/typescript/3178C6" },

  // Backend
  { name: "Node.js", category: "Backend", color: "#339933", image: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", category: "Backend", color: "#3776AB", image: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Java", category: "Backend", color: "#007396", image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
  { name: "PHP", category: "Backend", color: "#777BB4", image: "https://cdn.simpleicons.org/php/777BB4" },
  { name: ".NET", category: "Backend", color: "#512BD4", image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" },

  // Mobile
  { name: "Flutter", category: "Mobile", color: "#02569B", image: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "React Native", category: "Mobile", color: "#61DAFB", image: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Kotlin", category: "Mobile", color: "#7F52FF", image: "https://cdn.simpleicons.org/kotlin/7F52FF" },
  { name: "Swift", category: "Mobile", color: "#F05138", image: "https://cdn.simpleicons.org/swift/F05138" },

  // Database & Cloud
  { name: "PostgreSQL", category: "Database", color: "#4169E1", image: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", category: "Database", color: "#47A248", image: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "AWS", category: "Cloud", color: "#FF9900", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Docker", category: "DevOps", color: "#2496ED", image: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Git", category: "DevOps", color: "#F05032", image: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Redis", category: "Database", color: "#DC382D", image: "https://cdn.simpleicons.org/redis/DC382D" },
  { name: "Firebase", category: "Cloud", color: "#FFCA28", image: "https://cdn.simpleicons.org/firebase/FFCA28" },
];

const categories = ["Frontend", "Backend", "Mobile", "Database", "Cloud", "DevOps"];

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-24 bg-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Mobile: Logo Grid as Background */}
        <div className="lg:hidden absolute inset-0 z-0 opacity-[0.03] overflow-hidden">
          <div className="grid grid-cols-4 gap-4 p-4 opacity-50">
            {technologies.map((tech, i) => (
              <div key={i} className="flex items-center justify-center aspect-square">
                <img src={tech.image} alt="" className="w-full h-full object-contain filter grayscale" />
              </div>
            ))}
            {/* Repeat to fill */}
            {technologies.map((tech, i) => (
              <div key={`repeat-${i}`} className="flex items-center justify-center aspect-square">
                <img src={tech.image} alt="" className="w-full h-full object-contain filter grayscale" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-morph pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Technologies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Cutting-Edge <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We leverage the latest technologies to build robust, scalable,
            and future-proof solutions.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN: Categories & Lists (Prominent on Mobile) */}
          <div className="space-y-10 relative z-10">
            {categories.map((category, categoryIndex) => (
              <ScrollReveal
                key={category}
                variant="fade-up"
                delay={categoryIndex * 100}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-8 w-1 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 pl-4">
                  {technologies
                    .filter((t) => t.category === category)
                    .map((tech) => (
                      <div
                        key={tech.name}
                        className="group px-4 py-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default shadow-sm hover:shadow-md flex items-center gap-2"
                      >
                        {/* Small icon for list items too */}
                        <img src={tech.image} alt="" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* RIGHT COLUMN: The "Bunch" of Logos (Desktop Only) */}
          <div className="hidden lg:block relative sticky top-24 p-8 xl:p-12 bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-4 gap-6 xl:gap-8 justify-items-center">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="relative w-20 h-20 xl:w-24 xl:h-24 flex items-center justify-center bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 cursor-pointer group"
                  whileHover={{
                    scale: 1.25,
                    rotate: Math.random() > 0.5 ? 8 : -8,
                    zIndex: 50,
                    boxShadow: `0 15px 30px -5px ${tech.color}50`,
                    borderColor: tech.color
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -12, 0], // Increased float distance
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: i * 0.03 },
                    scale: { duration: 0.5, delay: i * 0.03 },
                    y: {
                      duration: 3 + Math.random() * 3, // Randomize float speed more
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 5 // Randomize start times significantly
                    }
                  }}
                >
                  <img src={tech.image} alt={tech.name} className="w-10 h-10 xl:w-12 xl:h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />

                  {/* Hover Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-popover text-popover-foreground font-medium text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none z-50 border border-border">
                    {tech.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
