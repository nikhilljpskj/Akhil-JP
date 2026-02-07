import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Settings, Activity, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Transmission Line Construction Project",
    description: "Led the construction of high-voltage transmission lines connecting substations across multiple districts, ensuring reliable power distribution.",
    icon: Zap,
    tags: ["High Voltage", "Infrastructure", "Field Work"],
    color: "accent",
  },
  {
    title: "Substation Maintenance Project",
    description: "Comprehensive maintenance and upgradation of electrical substations to improve efficiency and reduce downtime.",
    icon: Settings,
    tags: ["Maintenance", "Substations", "Optimization"],
    color: "primary",
  },
  {
    title: "Electrical System Operation Optimization",
    description: "Implemented optimized operational procedures to enhance system reliability and reduce fault occurrence rates.",
    icon: Activity,
    tags: ["Operations", "Optimization", "Reliability"],
    color: "accent",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group card-base hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${project.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'} flex items-center justify-center`}>
                  <project.icon className={`w-6 h-6 ${project.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              
              <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
