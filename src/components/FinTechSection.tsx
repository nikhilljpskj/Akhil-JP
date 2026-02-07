import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, TrendingUp, Network, Layers } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Systems Engineering",
    description: "Deep understanding of complex infrastructure systems from power transmission experience",
  },
  {
    icon: TrendingUp,
    title: "Financial Technology",
    description: "UK Master's degree specializing in digital finance and banking technology",
  },
  {
    icon: Network,
    title: "Digital Ecosystems",
    description: "Bridging physical infrastructure with emerging digital financial platforms",
  },
  {
    icon: Layers,
    title: "Interdisciplinary Approach",
    description: "Unique combination of engineering rigor and financial technology knowledge",
  },
];

const FinTechSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Unique Value Proposition
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Engineering Meets Financial Technology
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="card-glass">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                With a foundation in <span className="text-accent font-semibold">electrical infrastructure engineering</span> and 
                a Master's degree in <span className="text-primary font-semibold">Financial Technology</span> from the UK, 
                Akhil bridges the gap between physical infrastructure systems and digital financial ecosystems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His interdisciplinary education enables him to understand both complex systems engineering 
                and emerging financial technologies—creating unique perspectives for technology-driven 
                infrastructure and financial innovation.
              </p>
              
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex flex-wrap gap-3">
                  {['FinTech', 'Power Systems', 'Digital Finance', 'Systems Thinking'].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-accent/10 to-primary/10 text-foreground border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card-glass p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-display font-semibold text-foreground text-sm mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinTechSection;
