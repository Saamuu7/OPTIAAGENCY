import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Lock, Hammer } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "StyleCut Manager",
    category: "Sistema de Gestión",
    image: "/portfolio_hairdresser.png",
    description: "Plataforma completa para peluquerías: web para clientes con citas online y panel de administración para gestión de agenda.",
    status: "active",
  },
  {
    title: "Ink Masters Studio",
    category: "Web App & Reservas",
    image: "/portfolio_tattoo.png",
    description: "Solución digital para estudios de tatuaje con sistema de reservas avanzado y gestión de artistas similar a StyleCut.",
    status: "active",
  },
  {
    title: "DriveMaster CRM",
    category: "CRM & Gestión",
    image: "/portfolio_driving_school.png",
    description: "Sistema integral de gestión para autoescuelas: control de alumnos, agenda de profesores y seguimiento de flota.",
    status: "active",
  },
  {
    title: "Próximamente",
    category: "En Desarrollo",
    image: "/optia_logo.jpg",
    description: "Información no disponible por el momento.",
    status: "coming_soon",
  },
  {
    title: "Próximamente",
    category: "En Desarrollo",
    image: "/optia_logo.jpg",
    description: "Información no disponible por el momento.",
    status: "coming_soon",
  },
  {
    title: "Próximamente",
    category: "En Desarrollo",
    image: "/optia_logo.jpg",
    description: "Información no disponible por el momento.",
    status: "in_progress",
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
              className={`group relative rounded-xl overflow-hidden bg-card border border-border transition-all duration-500 ${project.status === "active"
                ? "hover:border-primary/30 hover:glow"
                : "opacity-80"
                }`}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${project.status === "active"
                    ? "group-hover:scale-110"
                    : "grayscale filter blur-[2px]"
                    }`}
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500 ${project.status === "active"
                    ? "opacity-0 group-hover:opacity-100"
                    : "opacity-100 bg-black/40 flex items-center justify-center backdrop-blur-[1px]"
                    }`}
                >
                  {project.status !== "active" && (
                    <div className="bg-background/90 border border-primary/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 transform -rotate-3 hover:scale-105 transition-transform">
                      {project.status === "coming_soon" ? (
                        <>
                          <Lock className="w-4 h-4 text-primary" />
                          <span className="text-primary font-semibold text-sm">
                            Próximamente
                          </span>
                        </>
                      ) : (
                        <>
                          <Hammer className="w-4 h-4 text-primary" />
                          <span className="text-primary font-semibold text-sm">
                            En Construcción
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary text-sm font-medium">
                    {project.category}
                  </span>
                  {project.status !== "active" && (
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5 rounded-full">
                      {project.status === "coming_soon"
                        ? "Coming Soon"
                        : "WIP"}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={project.status !== "active"}
                  className={`border-primary/30 hover:bg-primary/10 hover:border-primary group/btn ${project.status !== "active" ? "opacity-50" : ""
                    }`}
                >
                  {project.status === "active" ? (
                    <>
                      Ver Proyecto
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </>
                  ) : (
                    <span>No Disponible</span>
                  )}
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
