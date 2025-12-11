import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Mail, Instagram } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Hablemos de Tu Proyecto
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            ¿Listo para llevar tu negocio al siguiente nivel? Cuéntanos tu idea.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:optiasmma@gmail.com"
              className="flex flex-col items-center p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
            >
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <div className="font-medium text-lg">optiasmma@gmail.com</div>
              </div>
            </a>

            <a
              href="https://wa.me/34646236118"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 rounded-xl bg-card border border-border hover:border-whatsapp/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
            >
              <div className="w-16 h-16 rounded-full bg-whatsapp flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">WhatsApp</div>
                <div className="font-medium text-lg text-whatsapp">+34 646 236 188</div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/opt.iaagency/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 rounded-xl bg-card border border-border hover:border-pink-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">Síguenos</div>
                <div className="font-medium text-lg">@opt.iaagency</div>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center text-muted-foreground">
            <p>Estamos disponibles para atenderte y resolver todas tus dudas sin compromiso.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
