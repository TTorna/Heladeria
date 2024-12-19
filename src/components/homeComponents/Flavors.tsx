import React from 'react';
import { flavors } from '../../data/flavors1';

export default function Flavors() {
  return (
    <section id="sabores" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestros Sabores
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de helados artesanales, elaborados diariamente
            con ingredientes naturales de la más alta calidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {flavors.map((flavor) => (
            <div key={flavor.name} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="h-48 overflow-hidden">
                <img
                  src={flavor.imageUrl}
                  alt={flavor.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {flavor.name}
                </h3>
                <p className="text-gray-600">
                  {flavor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}