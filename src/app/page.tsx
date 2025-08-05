import Discover from "@/components/discover";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Steps from "@/components/steps";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <section className="relative bg-gradient-to-r from-[#01083D] to-[#01083D]/90">
                <Steps />
            </section>
            <Discover />
            <Footer />
        </>
    );
}
