import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Science (MS) – Financial Technology",
    institution: "University of Salford",
    location: "United Kingdom",
    period: "Sep 2023",
    flag: "🇬🇧",
    description: "Focus: Financial Systems, Digital Finance, Data & Technology in Banking",
    tags: ['Financial Systems', 'Digital Finance', 'Data Analytics', 'Banking Technology'],
  },
  {
    degree: "Master of Arts (MA) – Sociology",
    institution: "Indira Gandhi National Open University",
    location: "India",
    period: "Jun 2020 – Jul 2022",
    flag: "🇮🇳",
    description: "Understanding social dynamics and community impact of infrastructure development.",
    tags: [],
  },
  {
    degree: "Bachelor of Technology (B.Tech) – Electrical & Electronics Engineering",
    institution: "College of Engineering, Adoor",
    location: "India",
    period: "2016 – 2019",
    flag: "🇮🇳",
    description: "Core engineering principles with focus on power systems and electronics.",
    tags: [],
  },
  {
    degree: "Diploma in Electrical & Electronics Engineering",
    institution: "NSS Polytechnic College Pandalam",
    location: "India",
    period: "2013 – 2016",
    flag: "🇮🇳",
    description: "Foundation in electrical engineering concepts and practical applications.",
    tags: [],
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Academic Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Education & Qualifications
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A multidisciplinary academic foundation spanning engineering, technology, and social sciences
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/30" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline Milestone Icon */}
                <div className="absolute left-6 md:left-8 w-5 h-5 -translate-x-1/2 bg-background rounded-full border-4 border-accent flex items-center justify-center z-10">
                  <GraduationCap className="w-2 h-2 text-accent" />
                </div>

                {/* Content Card */}
                <div className="ml-14 md:ml-20">
                  <div className="card-glass">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{edu.flag}</span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                      </div>
                      <span className="year-badge">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {edu.degree}
                    </h3>

                    <p className="text-primary font-medium text-sm mb-2">
                      {edu.institution}
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>

                    {edu.tags.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <div className="flex flex-wrap gap-2">
                          {edu.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
