import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
            <Header />
            <HeroBackground />

            <main className="container mx-auto px-4 pt-32 pb-16 relative z-10">
                <h1 className="text-4xl font-bold mb-8 gradient-text">Términos de Servicio</h1>

                <div className="prose prose-invert max-w-none">
                    <p className="mb-4 text-muted-foreground">
                        Última actualización: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Aceptación de los Términos</h2>
                        <p className="text-muted-foreground">
                            Al acceder y utilizar el sitio web de OPTIA, usted acepta cumplir y estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Servicios</h2>
                        <p className="text-muted-foreground">
                            OPTIA ofrece servicios de diseño y desarrollo web. Nos reservamos el derecho de modificar o retirar el servicio en cualquier momento sin previo aviso.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Propiedad Intelectual</h2>
                        <p className="text-muted-foreground">
                            El servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de OPTIA y sus licenciantes.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Enlaces a otros sitios web</h2>
                        <p className="text-muted-foreground">
                            Nuestro servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por OPTIA. OPTIA no tiene control ni asume responsabilidad alguna por el contenido, las políticas de privacidad o las prácticas de sitios web o servicios de terceros.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Ley aplicable</h2>
                        <p className="text-muted-foreground">
                            Estos Términos se regirán e interpretarán de acuerdo con las leyes vigentes, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Contacto</h2>
                        <p className="text-muted-foreground">
                            Si tiene alguna pregunta sobre estos Términos de Servicio, por favor contáctenos.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsOfService;
