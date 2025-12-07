import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
            <Header />
            <HeroBackground />

            <main className="container mx-auto px-4 pt-32 pb-16 relative z-10">
                <h1 className="text-4xl font-bold mb-8 gradient-text">Política de Privacidad</h1>

                <div className="prose prose-invert max-w-none">
                    <p className="mb-4 text-muted-foreground">
                        Última actualización: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introducción</h2>
                        <p className="text-muted-foreground">
                            En OPTIA, nos tomamos muy en serio la privacidad de sus datos. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos su información personal cuando visita nuestro sitio web o utiliza nuestros servicios.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Información que recopilamos</h2>
                        <p className="text-muted-foreground mb-4">
                            Podemos recopilar la siguiente información:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Información de contacto (nombre, correo electrónico, número de teléfono) cuando nos contacta.</li>
                            <li>Información técnica sobre su dispositivo y navegación (dirección IP, tipo de navegador).</li>
                            <li>Información sobre el uso de nuestro sitio web.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Uso de la información</h2>
                        <p className="text-muted-foreground mb-4">
                            Utilizamos su información para:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Proporcionar y mantener nuestros servicios.</li>
                            <li>Contactarle en respuesta a sus consultas.</li>
                            <li>Mejorar nuestro sitio web y servicios.</li>
                            <li>Cumplir con las obligaciones legales.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Cookies</h2>
                        <p className="text-muted-foreground">
                            Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se envía una cookie.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Contacto</h2>
                        <p className="text-muted-foreground">
                            Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos a través de nuestro formulario de contacto o enviando un correo electrónico.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
