import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Code,
  ShoppingCart,
  Search,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Diseño Web Profesional",
    description:
      "Creamos diseños únicos y atractivos que reflejan la identidad de tu marca.",
  },
  {
    icon: Code,
    title: "Desarrollo Web a Medida",
    description:
      "Soluciones personalizadas con las últimas tecnologías.",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online",
    description:
      "E-commerce optimizados para convertir visitantes en clientes.",
  },
  {
    icon: Search,
    title: "SEO & Optimización",
    description:
      "Posicionamiento en buscadores para aumentar tu visibilidad.",
  },
  {
    icon: Layers,
    title: "Branding y UX/UI",
    description:
      "Experiencias de usuario intuitivas y diseño de marca coherente.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Qué Hacemos</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
