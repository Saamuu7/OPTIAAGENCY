import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className={`pointer-events-auto relative w-full max-w-5xl rounded-full border transition-all duration-300 ${scrolled || isOpen
          ? "bg-background/80 backdrop-blur-md border-white/10 shadow-lg py-2"
          : "bg-transparent border-transparent py-4"
          }`}
      >
        <div className="px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img src="/logo.png" alt="OPTIA Logo" className="h-16 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-secondary/30 p-1 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              className="hidden md:inline-flex rounded-full gradient-bg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 px-6"
              asChild
            >
              <a href="/contacto">Empezar</a>
            </Button>

            <button
              className="md:hidden p-2 text-foreground hover:bg-secondary rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 bg-card/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden mx-2"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors group"
                  >
                    <span className="text-foreground font-medium">{link.name}</span>
                    <span className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
                <div className="h-px bg-border my-2" />
                <Button className="w-full rounded-xl gradient-bg" asChild>
                  <a href="/contacto">Empezar Proyecto</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};

export default Header;
