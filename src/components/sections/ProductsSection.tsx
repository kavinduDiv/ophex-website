import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { products } from "@/data/products";

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Innovative <span className="text-gradient">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Scalable, enterprise-grade software designed to optimize your operations.
          </p>
        </ScrollReveal>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <ScrollReveal
              key={product.id}
              variant="fade-up"
              className={`delay-${index * 100} group relative flex flex-col h-[550px] overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:border-orange-500/50`}
            >
              <Link to={`/products/${product.id}`} className="flex flex-col h-full w-full">
                {/* Image Background */}
                <div className="absolute inset-0 h-1/2 overflow-hidden pointer-events-none">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900" />
                </div>

                {/* Decorative Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full p-6 pt-48">

                  {/* Badge Container */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20 self-start transition-colors duration-300 group-hover:bg-primary/20">
                    <product.icon size={14} className="text-primary" />
                    <span className="text-primary">{product.title}</span>
                  </div>

                  {/* Subtitle / Catchphrase */}
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                    {product.subtitle}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">
                    {product.description}
                  </p>

                  {/* Features Wrap */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.slice(0, 3).map((feat, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 text-slate-300 text-[11px] font-medium rounded border border-white/10">
                        {feat}
                      </span>
                    ))}
                    {product.features.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 text-slate-400 text-[11px] font-medium rounded border border-white/10">
                        +{product.features.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Button - Glides up seamlessly */}
                  <div
                    className="w-full inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium bg-slate-800 text-white gap-2 transition-all duration-300 border border-slate-700 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] mt-auto"
                  >
                    Explore {product.title}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
