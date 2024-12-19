import NavbarAzul from "../components/NavbarAzul";
import Hero from '../components/homeComponents/Hero';
import About from '../components/homeComponents/About';
import Footer from '../components/Footer';

function Home () {
    
    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden">
            <header className="bg-teal-300 shadow-lg">
                <NavbarAzul />
            </header>
            <div className="min-h-screen">
                <Hero />
                <About />
                <Footer />
            </div>
        </div>
    );
}

export default Home