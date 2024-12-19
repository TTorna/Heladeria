import Navbar2 from "../components/NavBar2";
import Location from "../components/homeComponents/Location";

function Sucursales () {
    return (
        <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
            <header className="bg-teal-300 shadow-lg">
                <Navbar2 />
            </header>
            <main className="flex items-center justify-center h-screen p-4">
                <section className="maps">
                    <Location />
                </section>
            </main>
        </div>
    );
}

export default Sucursales