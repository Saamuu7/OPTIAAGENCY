import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "Diseño Limpio y Moderno",
    description:
      "Creamos interfaces elegantes y funcionales que destacan tu marca.",
    number: "01",
  },
  {
    icon: Zap,
    title: "Experiencia en Conversión",
    description:
      "Optimizamos cada elemento para maximizar resultados y conversiones.",
    number: "02",
  },
  {
    icon: Shield,
    title: "Webs Rápidas y Seguras",
    description:
      "Rendimiento superior con las mejores prácticas de seguridad.",
    number: "03",
  },
  {
    icon: Users,
    title: "Acompañamiento Personalizado",
    description:
      "Te guiamos en cada paso del proceso con atención dedicada.",
    number: "04",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20">
          {/* Left side - sticky title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 lg:sticky lg:top-32"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Por Qué Elegirnos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
              Tu Éxito es Nuestra{" "}
              <span className="gradient-text">Prioridad</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Más de 50 proyectos exitosos nos respaldan
            </p>
            
            {/* Decorative element */}
            <div className="hidden lg:block mt-12">
              <div className="w-24 h-1 gradient-bg rounded-full" />
            </div>
          </motion.div>

          {/* Right side - timeline style list */}
          <div className="lg:w-2/3 space-y-0">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Connecting line */}
                {index < reasons.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-full bg-gradient-to-b from-primary/30 to-transparent" />
                )}
                
                <div className="flex items-start gap-6 py-8 border-b border-border/50 group-hover:border-primary/30 transition-colors">
                  {/* Number/Icon */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-foreground group-hover:border-primary transition-all duration-300">
                      {reason.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <reason.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-8">
                      {reason.description}
                    </p>
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

export default WhyChooseUs;
