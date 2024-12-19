import React from 'react';
import { Award, Leaf, IceCream } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Tradición heladera desde 1950
            </h2>
            <p className="text-gray-600 mb-8">
              Nuestra historia comenzó hace más de 70 años, cuando nuestros abuelos
              trajeron las recetas originales desde Italia. Desde entonces, hemos
              mantenido la misma pasión por crear helados artesanales de la más
              alta calidad.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Calidad Premium</h3>
                <p className="text-sm text-gray-600">Ingredientes seleccionados</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">100% Natural</h3>
                <p className="text-sm text-gray-600">Sin conservantes</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IceCream className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Artesanal</h3>
                <p className="text-sm text-gray-600">Elaboración diaria</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className='flex justify-center'>
              <img
                src="https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80"
                alt="Heladería tradicional"
                className="imagenClass rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gray-50 border-2 border-pink-300 p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-pink-500 mb-1">70+</p>
              <p className="text-gray-600">Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}