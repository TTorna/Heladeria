import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sabores from './pages/Sabores';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Sucursales from './pages/Sucursales';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sabores" element={<Sabores />} />
          {/*<Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />*/}
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;