import React from 'react';
import { IceCream, MapPin, Phone, Clock } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <IceCream className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold text-gray-800">Gelato Dreams</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-pink-500 transition">Inicio</a>
            <a href="#sabores" className="text-gray-700 hover:text-pink-500 transition">Sabores</a>
            <a href="#nosotros" className="text-gray-700 hover:text-pink-500 transition">Nosotros</a>
            <a href="#ubicacion" className="text-gray-700 hover:text-pink-500 transition">Ubicación</a>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-pink-500" />
              <span className="text-sm text-gray-600">+34 555 123 456</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-pink-500" />
              <span className="text-sm text-gray-600">11:00 - 23:00</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}