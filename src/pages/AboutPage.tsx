import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials"; /* Include Testimonials/WhyChooseUs here as they relate to 'About' or keep them on Index? I'll include elements relevant to company info */
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroBackground from "@/components/HeroBackground";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
            <Header />
            <div className="pt-20">
                <HeroBackground />
                <About />
                <WhyChooseUs />
                <Testimonials />
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
