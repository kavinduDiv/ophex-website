import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/animations/ScrollReveal";

const ContactSection = () => {
  //   const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // toast({
    //   title: "Message Sent!",
    //   description: "We'll get back to you as soon as possible.",
    // });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      content: "123 Tech Park, Silicon Valley,\nCA 94000, USA",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (234) 567-890",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@orhex.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-morph" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to start your project? Get in touch and let's discuss how we
            can help transform your ideas into reality.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal variant="fade-right" delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
                  We'd love to hear from you. Whether you have a question about our
                  services, products, or anything else, our team is ready to answer
                  all your questions.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <ScrollReveal
                      key={item.title}
                      variant="fade-left"
                      delay={200 + index * 100}
                    >
                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          {item.title === "Phone" ? (
                            <a href={`tel:${item.content.replace(/[^\d+]/g, "")}`} className="block text-muted-foreground whitespace-pre-line hover:text-primary transition-colors">
                              {item.content}
                            </a>
                          ) : item.title === "Email" ? (
                            <a href={`mailto:${item.content}`} className="block text-muted-foreground whitespace-pre-line hover:text-primary transition-colors">
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground whitespace-pre-line">
                              {item.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal variant="fade-left" delay={200}>
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover transition-shadow duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="h-12 transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="h-12 transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    className="h-12 transition-all duration-300 focus:shadow-glow"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    required
                    className="h-12 transition-all duration-300 focus:shadow-glow"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="transition-all duration-300 focus:shadow-glow"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full hover-glow transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
