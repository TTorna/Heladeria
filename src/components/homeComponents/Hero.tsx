import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80"
          alt="Ice cream background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Descubre el auténtico sabor del helado artesanal
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Elaborados diariamente con ingredientes naturales y las mejores materias primas
          </p>
          <div className="flex gap-4">
            <Link className="bg-teal-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full flex items-center gap-2 transition transform hover:scale-105" to="/sabores">
              Ver Sabores
              <ArrowRight className="h-5 w-5" />
            </Link>            
            <Link className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full transition" to="/sucursales">
              Ubicación
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}