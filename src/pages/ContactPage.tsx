import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import HeroBackground from "@/components/HeroBackground";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
            <Header />
            <div className="pt-20">
                <HeroBackground />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
