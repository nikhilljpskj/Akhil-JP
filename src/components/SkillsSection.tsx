import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Monitor, Brain, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Zap,
    color: "accent",
    skills: [
      "Electrical Power Systems",
      "Transmission Line Construction",
      "Electrical Maintenance & Operations",
      "Substation Systems",
    ],
  },
  {
    title: "Financial Technology",
    icon: TrendingUp,
    color: "primary",
    skills: [
      "Digital Finance Systems",
      "Financial Technology Concepts",
      "Data-driven Systems Thinking",
      "Tech-enabled Infrastructure",
    ],
  },
  {
    title: "Software Skills",
    icon: Monitor,
    color: "accent",
    skills: [
      "AutoCAD Electrical",
      "Autodesk Revit MEP",
      "Data Analysis Tools",
      "Technical Documentation",
    ],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    color: "primary",
    skills: [
      "Problem Solving",
      "Technical Planning",
      "Team Coordination",
      "Field Supervision",
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Skills & Competencies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="card-glass h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl ${category.color === 'accent' ? 'bg-gradient-to-br from-accent/20 to-accent/5' : 'bg-gradient-to-br from-primary/20 to-primary/5'} flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                </div>
                <h3 className="font-display font-semibold text-base text-foreground">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-3 text-muted-foreground text-sm"
                  >
                    <span className={`w-2 h-2 rounded-full ${category.color === 'accent' ? 'bg-accent' : 'bg-primary'}`} />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
