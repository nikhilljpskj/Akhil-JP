import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, MapPin, Calendar } from "lucide-react";

const certificates = [
  {
    title: "Electrical AutoCAD",
    institution: "CAD Centre, Adoor",
    year: "2022",
    description: "Proficiency in electrical schematic design and drafting using AutoCAD.",
  },
  {
    title: "Autodesk Revit MEP",
    institution: "CAD Centre, Adoor",
    year: "2022",
    description: "Building information modeling for mechanical, electrical, and plumbing systems.",
  },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Credentials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Certificates & Licenses
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-base group hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {cert.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {cert.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.year}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
