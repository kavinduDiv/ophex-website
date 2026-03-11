import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, ArrowLeft, Send, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactData } from "@/data/contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Careers = () => {
    const [isDark, setIsDark] = useState(true);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        portfolio: "",
        message: ""
    });

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleApply = (e: React.FormEvent) => {
        e.preventDefault();
        
        const subject = encodeURIComponent(`Job Application - ${formData.position} - ${formData.firstName} ${formData.lastName}`);
        
        const body = encodeURIComponent(`
Hi Ophex Team,

I am writing to express my interest in joining your team. Please find my application details below:

--- APPLICATION DETAILS ---
Position Applied For: ${formData.position}

Applicant Name: ${formData.firstName} ${formData.lastName}
Email Address: ${formData.email}
Phone Number: ${formData.phone}
Portfolio / LinkedIn: ${formData.portfolio || "Not provided"}

--- COVER LETTER / MESSAGE ---
${formData.message}

---------------------------

[IMPORTANT: I WILL ATTACH MY CV/RESUME TO THIS EMAIL BEFORE SENDING]
        `.trim());

        window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30 selection:text-primary relative overflow-x-hidden flex flex-col">
            <Header isDark={isDark} toggleTheme={toggleTheme} />

            <main className="flex-1 flex flex-col items-center relative min-h-[70vh] pt-32 pb-24 md:pt-40 md:pb-32">
                {/* Background glowing orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

                <motion.div
                    className="text-center relative z-10 max-w-2xl px-4 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="flex justify-center mb-8 text-primary"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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

                    <p className="text-muted-foreground leading-relaxed text-lg max-w-xl mx-auto">
                        While we are not actively hiring, we are always on the lookout for extraordinary talent. If you believe you'd be a great fit for our future, proactively submit your details and CV below!
                    </p>
                </motion.div>

                {/* Application Form Section */}
                <motion.div 
                    className="w-full max-w-3xl px-4 relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-6 md:p-10 shadow-2xl">
                        <div className="mb-8 text-center">
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 mb-2">Proactive Application</h3>
                            <p className="text-muted-foreground">Fill out the required details to prepare your application email.</p>
                        </div>

                        <form onSubmit={handleApply} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">First Name *</label>
                                    <input 
                                        type="text" id="firstName" name="firstName" required
                                        value={formData.firstName} onChange={handleInputChange}
                                        className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">Last Name *</label>
                                    <input 
                                        type="text" id="lastName" name="lastName" required
                                        value={formData.lastName} onChange={handleInputChange}
                                        className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                                    <input 
                                        type="email" id="email" name="email" required
                                        value={formData.email} onChange={handleInputChange}
                                        className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone Number *</label>
                                    <input 
                                        type="tel" id="phone" name="phone" required
                                        value={formData.phone} onChange={handleInputChange}
                                        className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="position" className="text-sm font-medium">Desired Position *</label>
                                    <input 
                                        type="text" id="position" name="position" required
                                        value={formData.position} onChange={handleInputChange}
                                        className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="e.g. Frontend Developer"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="portfolio" className="text-sm font-medium">LinkedIn / Portfolio URL</label>
                                    <input 
                                        type="url" id="portfolio" name="portfolio"
                                        value={formData.portfolio} onChange={handleInputChange}
                                        className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="https://linkedin.com/..."
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Cover Letter / Message *</label>
                                <textarea 
                                    id="message" name="message" required rows={5}
                                    value={formData.message} onChange={handleInputChange}
                                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-y"
                                    placeholder="Tell us why you'd be a great fit for Ophex..."
                                />
                            </div>

                            {/* CV Attachment Instruction UI */}
                            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <Paperclip className="text-orange-500 w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-1 text-foreground">Prepare Your CV</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Clicking the submit button will prepare an email addressed to our team with all your details above safely formatted. 
                                        <strong className="text-foreground font-semibold"> You must manually attach your CV/Resume to the email before hitting send!</strong>
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-border/50 mt-6">
                                <Button asChild variant="ghost" className="hover:bg-transparent hover:text-orange-500 transition-colors">
                                    <Link to="/" className="flex items-center gap-2">
                                        <ArrowLeft size={16} /> Back to Home
                                    </Link>
                                </Button>
                                
                                <Button type="submit" size="lg" className="w-full sm:w-auto bg-primary hover:bg-orange-600 text-white gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all px-8 rounded-full">
                                    <Send size={18} />
                                    Prepare Application Email
                                </Button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </main>

            <Footer isDark={isDark} />
        </div>
    );
};

export default Careers;
