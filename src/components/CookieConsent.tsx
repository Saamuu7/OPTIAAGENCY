import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { X, Cookie, ShieldCheck, ShieldAlert } from "lucide-react";

const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Delay showing to not overwhelm immediate load
            const timer = setTimeout(() => setShowConsent(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem("cookie-consent", "all");
        setShowConsent(false);
    };

    const handleAcceptNecessary = () => {
        localStorage.setItem("cookie-consent", "necessary");
        setShowConsent(false);
    };

    const handleRejectAll = () => {
        localStorage.setItem("cookie-consent", "rejected");
        setShowConsent(false);
    };


    return (
        <AnimatePresence>
            {showConsent && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
                >
                    <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">

                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <Cookie size={24} />
                                    </div>
                                    <h3 className="text-xl font-semibold">Valoramos tu privacidad</h3>
                                </div>

                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar el contenido.
                                    Puedes configurar tus preferencias o aceptar todas las cookies. Consulta nuestra{" "}
                                    <a href="/privacy-policy" className="text-primary hover:underline">Política de Privacidad</a>.
                                </p>

                                {showDetails && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        className="space-y-3 pt-2 text-sm text-foreground/80"
                                    >
                                        <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                                            <ShieldCheck className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                            <div>
                                                <span className="font-semibold block">Necesarias (Siempre activas)</span>
                                                <span className="text-xs text-muted-foreground">Esenciales para que la web funcione correctamente. No guardan datos personales.</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 border border-transparent hover:border-primary/20 transition-colors">
                                            <ShieldAlert className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                            <div>
                                                <span className="font-semibold block">Analíticas y Marketing</span>
                                                <span className="text-xs text-muted-foreground">Nos ayudan a entender cómo usas la web para mejorarla.</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                                {!showDetails ? (
                                    <Button
                                        variant="outline"
                                        onClick={() => setShowDetails(true)}
                                        className="md:order-1"
                                    >
                                        Configurar
                                    </Button>
                                ) : (
                                    <Button
                                        variant="outline"
                                        onClick={handleAcceptNecessary}
                                        className="md:order-1"
                                    >
                                        Solo necesarias
                                    </Button>
                                )}

                                <Button
                                    onClick={handleAcceptAll}
                                    className="gradient-bg hover:glow-strong md:order-2"
                                >
                                    Aceptar todas
                                </Button>
                            </div>

                            <button
                                onClick={() => setShowConsent(false)}
                                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground md:hidden"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
