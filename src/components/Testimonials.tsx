import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content:
      "OPTIA transformó completamente nuestra presencia online. El diseño es impresionante y las conversiones aumentaron un 150%.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Fundador, EcoStore",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    content:
      "Profesionales, creativos y muy atentos. Nuestra tienda online supera todas las expectativas. Altamente recomendados.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Directora, Studio Creativo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    content:
      "El equipo de OPTIA entiende perfectamente las necesidades del cliente. Entregaron un sitio web que supera cualquier expectativa.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card via-card to-card/50 border border-primary/20">
            {/* Large quote mark */}
            <div className="absolute -top-6 left-8 text-8xl text-primary/20 font-serif">
              "
            </div>
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                {testimonials[0].content}
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30 ring-offset-2 ring-offset-background"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-lg">{testimonials[0].name}</div>
                  <div className="text-primary">{testimonials[0].role}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other testimonials - horizontal scroll on mobile */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="flex-1 max-w-md"
            >
              <div className="h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border border-border"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
