import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import HeroBackground from "@/components/HeroBackground";

const PortfolioPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
            <Header />
            <div className="pt-20">
                <HeroBackground />
                <Portfolio />
            </div>
            <Footer />
        </div>
    );
};

export default PortfolioPage;
