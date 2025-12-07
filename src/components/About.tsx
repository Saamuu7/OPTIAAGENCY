import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

const values = [
  { icon: Target, label: "Claridad", description: "Comunicación directa y transparente" },
  { icon: Lightbulb, label: "Rendimiento", description: "Sitios rápidos y optimizados" },
  { icon: TrendingUp, label: "Diseño Estratégico", description: "Cada decisión con propósito" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Impulsamos Negocios con{" "}
              <span className="gradient-text">Tecnología</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              En OPTIA, creemos que cada negocio merece una presencia digital
              excepcional. Combinamos creatividad, tecnología y estrategia para
              crear experiencias web que no solo se ven increíbles, sino que
              también generan resultados reales.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestro enfoque se centra en entender tus objetivos y traducirlos
              en soluciones digitales que conecten con tu audiencia y potencien
              el crecimiento de tu marca.
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-card border border-border"
                >
                  <value.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium block">{value.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Equipo OPTIA trabajando"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 p-4 rounded-xl glass border-glow"
            >
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Proyectos Exitosos</div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-primary/20 animate-pulse-glow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
