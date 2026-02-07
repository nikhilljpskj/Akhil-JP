import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users, Target, Wrench } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Passion for innovative engineering solutions",
  },
  {
    icon: Wrench,
    title: "Technical Expertise",
    description: "Specialized in transmission systems",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Understanding infrastructure & society",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "Committed to quality & safety",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">About Me</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Powering Infrastructure with Precision
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an Electrical Engineer with a passion for innovation and reliable 
                engineering solutions. Currently serving as a Sub Engineer at Kerala State 
                Electricity Board, I specialize in transmission construction and system operations.
              </p>
              <p>
                My background combines technical expertise with sociological insight, enabling 
                me to understand both infrastructure development and its community impact. With 
                over five years of field experience, I bring a unique perspective to power 
                transmission projects.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest 
                advancements in electrical engineering and power systems technology.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="card-base group hover:border-accent/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
