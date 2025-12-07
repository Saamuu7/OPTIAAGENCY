import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-muted-foreground">
                Estamos aquí para ayudarte a convertir tus ideas en realidad.
                Contáctanos y empecemos a construir algo increíble juntos.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:optiasmma@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">optiasmma@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/34646236118"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-whatsapp/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-whatsapp flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <div className="font-medium">+34 646 236 188</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Ubicación</div>
                  <div className="font-medium">Remoto - Global</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-xl bg-card border border-border space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    required
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                  Asunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="¿En qué podemos ayudarte?"
                  required
                  className="bg-muted border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={5}
                  required
                  className="bg-muted border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-bg hover:glow-strong transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
