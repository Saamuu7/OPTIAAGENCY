import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "StyleCut Manager",
    category: "Sistema de Gestión",
    image: "/portfolio_hairdresser.png",
    description: "Plataforma completa para peluquerías: web para clientes con citas online y panel de administración para gestión de agenda.",
  },
  {
    title: "Ink Masters Studio",
    category: "Web App & Reservas",
    image: "/portfolio_tattoo.png",
    description: "Solución digital para estudios de tatuaje con sistema de reservas avanzado y gestión de artistas similar a StyleCut.",
  },
  {
    title: "DriveMaster CRM",
    category: "CRM & Gestión",
    image: "/portfolio_driving_school.png",
    description: "Sistema integral de gestión para autoescuelas: control de alumnos, agenda de profesores y seguimiento de flota.",
  },
  {
    title: "App Financiera",
    category: "Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Dashboard interactivo para gestión financiera con visualización de datos.",
  },
  {
    title: "Inmobiliaria Luxury",
    category: "Portal Web",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    description: "Portal inmobiliario de lujo con búsqueda avanzada y tours virtuales.",
  },
  {
    title: "Agencia Creativa",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
    description: "Portfolio creativo con animaciones inmersivas y diseño único.",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Nuestros Proyectos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explora algunos de nuestros trabajos más destacados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:glow transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <span className="text-primary text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary group/btn"
                >
                  Ver Proyecto
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
