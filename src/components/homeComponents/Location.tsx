import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Visítanos
            </h2>
            <p className="text-gray-600 mb-8">
              Encuentra nuestro local en el corazón de la ciudad. Disfruta de nuestros
              helados artesanales en un ambiente acogedor y familiar.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="gap-4">
                <MapPin className="h-6 w-6 text-pink-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
                  <p className="text-gray-600">Av. Francisco Beiró 5135, Villa Devoto</p>
                </div>
              </div>
              <div className="gap-4">
                <Mail className="h-6 w-6 text-pink-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">info@vickens.com</p>
                </div>
              </div>
              <div className="gap-4">
                <Phone className="h-6 w-6 text-pink-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
                  <p className="text-gray-600">+54 11 1234 5678</p>
                </div>
              </div>
              
              <div className="items-start gap-4">
                <Clock className="h-6 w-6 text-pink-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Horario</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Lunes a Jueves: 16:00 - 00:00</li>
                    <li>Viernes: 16:00 - 01:00</li>
                    <li>Sábados: 12:00 - 01:00</li>
                    <li>Domingos y Feriados: 12:00 - 00:00</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.683516541259!2d-58.525064988019565!3d-34.61216357283851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb70022960cf7%3A0x5901947c35d459d4!2sVickens!5e0!3m2!1ses!2sar!4v1734568155884!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border:0 }} 
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title='Ubicación de la heladería'>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}