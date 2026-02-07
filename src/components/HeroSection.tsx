import { motion } from "framer-motion";
import { Download, Mail, Zap, MapPin, Globe } from "lucide-react";

const HeroSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Akhil_Prakash_Resume.pdf";
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Global Profile Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap gap-3 mb-4"
            >
              <span className="country-badge">
                <span>🇬🇧</span>
                UK Postgraduate
              </span>
              <span className="country-badge">
                <span>🇮🇳</span>
                Power Sector Experience
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
            >
              <Globe className="w-4 h-4" />
              Infrastructure & Technology Professional
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              Akhil Prakash
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-primary font-medium mb-4"
            >
              Electrical Engineer | FinTech Graduate | Infrastructure & Technology Professional
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-lg"
            >
              A multidisciplinary engineer combining infrastructure engineering, systems thinking, 
              and modern financial technology knowledge. Bridging physical systems with digital finance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-2 text-muted-foreground mb-8"
            >
              <MapPin className="w-4 h-4 text-accent" />
              <span>Kerala, India | UK Graduate</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={handleDownloadResume} className="btn-primary flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <a href="#contact" className="btn-outline flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Circular decorative elements */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-border animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-8 rounded-full border-2 border-accent/30" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-accent">
                <Zap className="w-20 h-20 text-primary-foreground" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 top-1/4 card-glass"
              >
                <p className="text-2xl font-bold text-accent">MS FinTech</p>
                <p className="text-sm text-muted-foreground">Salford</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -right-8 bottom-1/4 card-glass"
              >
                <p className="text-2xl font-bold text-accent">5+ Years</p>
                <p className="text-sm text-muted-foreground">Power Sector</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
