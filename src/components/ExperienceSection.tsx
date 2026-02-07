import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, Calendar, CheckCircle2, ChevronDown, Zap } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const experiences = [
  {
    company: "Kerala State Electricity Board",
    role: "Sub Engineer – Transmission Construction",
    period: "Jan 2023 – Sep 2023",
    location: "India",
    current: false,
    highlight: "Transgrid 2.0 Sabari Lines Package",
    responsibilities: [
      "Executed 220/110 kV Extra High Tension Transmission Tower Construction under Transgrid 2.0 Sabari Lines Package",
      "Supervised tower foundation, erection, earthing & line stringing",
      "Ensured engineering quality standards across all project phases",
      "Provided technical guidance to contractors and field teams",
      "Monitored documentation and project progress milestones",
      "Maintained on-site safety compliance and protocols",
    ],
  },
  {
    company: "Kerala State Electricity Board",
    role: "Sub Engineer – Operation & Maintenance",
    period: "Nov 2019 – Dec 2022",
    location: "India",
    current: false,
    highlight: "Power Infrastructure Management",
    responsibilities: [
      "Preventive maintenance of electrical infrastructure systems",
      "Fault monitoring, diagnosis, and resolution",
      "Operational reliability management of power systems",
      "Equipment inspection and performance optimization",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState<string[]>([experiences[0].role]);

  const toggleItem = (role: string) => {
    setOpenItems(prev => 
      prev.includes(role) 
        ? prev.filter(item => item !== role)
        : [...prev, role]
    );
  };

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Career Path
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Professional Experience
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Building expertise in power transmission infrastructure and systems engineering
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/30" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline Milestone Icon */}
                <div className="absolute left-6 md:left-8 w-5 h-5 -translate-x-1/2 bg-background rounded-full border-4 border-accent flex items-center justify-center z-10">
                  <Zap className="w-2 h-2 text-accent" />
                </div>

                {/* Content Card */}
                <div className="ml-14 md:ml-20">
                  <Collapsible 
                    open={openItems.includes(exp.role)}
                    onOpenChange={() => toggleItem(exp.role)}
                  >
                    <div className="card-glass">
                      <CollapsibleTrigger className="w-full text-left">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            {/* Highlight Badge */}
                            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-3">
                              {exp.highlight}
                            </span>
                            
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                              <Building2 className="w-4 h-4" />
                              {exp.company}
                            </div>
                            
                            <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                              {exp.role}
                            </h3>
                            
                            <div className="flex items-center gap-4 text-sm">
                              <span className="flex items-center gap-2 text-accent">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </span>
                              <span className="text-muted-foreground">
                                📍 {exp.location}
                              </span>
                            </div>
                          </div>
                          
                          <ChevronDown 
                            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                              openItems.includes(exp.role) ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-border/50"
                        >
                          <ul className="space-y-3">
                            {exp.responsibilities.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
