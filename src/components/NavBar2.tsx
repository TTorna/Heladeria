import React, { useState, useEffect } from 'react';
import { Menu, X, IceCream, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 500;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-pink-500 shadow-lg'
      : 'bg-white shadow-lg'
  }`;

  const linkClasses = `transition-colors ${
    scrolled ? 'text-white hover:text-pink-200' : 'text-teal-500 hover:text-teal-400'
  }`;

  return (
    <>
        <nav className={navClasses}>
          <div className="max-w-7xl mx-auto font-bold px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              {/* Logo */}
              <div className="flex items-center">
                <Link className="flex items-center space-x-2" to="/">
                  <IceCream className={`h-8 w-8 ${scrolled ? 'text-white' : 'text-teal-500'}`} />
                  <span className={`text-2xl font-bold ${scrolled ? 'text-white' : 'text-teal-500'}`}>
                    Vickens
                  </span>
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">

                {/* Products Dropdown
                <div className="relative group">
                  <button
                    onClick={() => toggleDropdown('productos')}
                    className={`flex items-center space-x-1 ${linkClasses}`}
                  >
                    <span>Productos</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === 'productos' && (
                    <div className={dropdownClasses}>
                      {menuItems.productos.map((item) => (
                        <a key={item} href="#" className={dropdownItemClasses}>
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>*/}

                {/* Company Dropdown
                <div className="relative group">
                  <button
                    onClick={() => toggleDropdown('empresa')}
                    className={`flex items-center space-x-1 ${linkClasses}`}
                  >
                    <span>Nosotros</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === 'empresa' && (
                    <div className={dropdownClasses}>
                      {menuItems.empresa.map((item) => (
                        <a key={item} href="#" className={dropdownItemClasses}>
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>*/}

                <Link className={linkClasses} to="/">Home</Link>
                <Link className={linkClasses} to="/sabores">Sabores</Link>
                {/*<Link className={linkClasses} to="/nosotros">Nosotros</Link>*/}
                <Link className={linkClasses} to="https://pedidos.masdelivery.com/vickens">Pedir</Link>
                <Link className={linkClasses} to="/sucursales">
                  <button className={`flex items-center gap-2 rounded-full px-4 py-2 font-medium ${
                      scrolled ? 'bg-white text-pink-500 hover:text-pink-700' : 'bg-teal-500 text-white'
                    }`}>
                    <MapPin className="h-6 w-6" />
                  </button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={linkClasses}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className={`md:hidden border-t ${scrolled ? 'bg-pink-500' : 'bg-white'}`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Home Section */}
                <div className="space-y-2">
                  
                  <Link className={`w-full flex justify-between items-center font-medium px-3 py-2 ${linkClasses}`} to="/">Home</Link>

                </div>

                {/* Sabores Section */}
                <div className="space-y-2">

                    <Link className={`w-full flex justify-between items-center font-medium px-3 py-2 ${linkClasses}`} to="/sabores">Sabores</Link>

                </div>

                {/*<Link className={`block font-medium px-3 py-2 ${linkClasses}`} to="/nosotros">Nosotros</Link>*/}

                <Link className={`block font-medium px-3 py-2 ${linkClasses}`} to="/contacto">Pedir</Link>
                
                <Link className={`w-full flex justify-between items-center px-1 py-2 ${linkClasses}`} to="/sucursales">
                  <button className={`flex w-full justify-start items-center gap-2 rounded-full px-4 py-2 font-medium ${
                      scrolled ? 'bg-white text-pink-500 hover:text-pink-700' : 'bg-teal-500 text-white'
                    }`}>
                    <MapPin className="h-6 w-6" />
                    <span>Sucursales</span>
                  </button>
                </Link>
              </div>
            </div>
          )}
        </nav>
    </>
  );
};

export default Navbar2;