import HeroSection from "../components/Hero/HeroSection";
import ProductSection from "../features/products/components/ProductSection";
import ProductCollection from "../features/products/components/ProductCollection";

function HomePage() {
    return (
        <main className="hero">
            <HeroSection />
            <ProductSection title="This Week" />
            <ProductCollection />
        </main>
    );
}

export default HomePage;
