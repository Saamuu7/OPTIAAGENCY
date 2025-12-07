import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "Diseño Web", href: "#servicios" },
    { name: "Desarrollo", href: "#servicios" },
    { name: "E-commerce", href: "#servicios" },
    { name: "SEO", href: "#servicios" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contacto", href: "#contacto" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/opt.iaagency/", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/1234567890", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px gradient-bg" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#inicio" className="flex items-center">
              <img src="/logo.png" alt="OPTIA Logo" className="h-10 w-auto object-contain" />
            </a>
            <p className="text-muted-foreground mt-4 max-w-sm">
              Creamos experiencias digitales que transforman negocios. Tu éxito
              es nuestra misión.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/30 hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OPTIA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">
              Política de Privacidad
            </a>
            <a href="/terms-of-service" className="hover:text-foreground transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
