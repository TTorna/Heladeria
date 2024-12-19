import NavbarAzul from "../components/NavbarAzul";

function Nosotros () {
    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden">
            <header className="bg-teal-300 shadow-lg">
                <NavbarAzul />
            </header>
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-4xl font-bold text-yellow-500">¡Somos a Vickens!</h1>
            </div>
        </div>
    );
}

export default Nosotros