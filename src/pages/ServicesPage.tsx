import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import HeroBackground from "@/components/HeroBackground";

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
            <Header />
            <div className="pt-20"> {/* Add padding top to account for fixed header */}
                <HeroBackground />
                <Services />
            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;
