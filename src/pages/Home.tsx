import Navbar2 from "../components/Navbar2";
import Hero from '../components/homeComponents/Hero';
import About from '../components/homeComponents/About';
import Footer from '../components/Footer';

function Home () {
    
    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden">
            <header className="bg-teal-300 shadow-lg">
                <Navbar2 />
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