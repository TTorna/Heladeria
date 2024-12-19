import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { MapPin, Navigation } from 'lucide-react';

interface Location {
  id: number;
  name: string;
  address: string;
  coords: { lat: number; lng: number };
}

const locations: Location[] = [
  {
    id: 1,
    name: "Heladería Centro",
    address: "Av. 9 de Julio 1234, Buenos Aires",
    coords: { lat: -34.603722, lng: -58.381592 }
  },
  {
    id: 2,
    name: "Heladería Palermo",
    address: "Honduras 5600, Buenos Aires",
    coords: { lat: -34.588517, lng: -58.438854 }
  },
  {
    id: 3,
    name: "Heladería Belgrano",
    address: "Av. Cabildo 2100, Buenos Aires",
    coords: { lat: -34.561851, lng: -58.458098 }
  },
  {
    id: 4,
    name: "Heladería Recoleta",
    address: "Av. Santa Fe 1500, Buenos Aires",
    coords: { lat: -34.596044, lng: -58.388246 }
  }
];

const Sucursales = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
        version: 'weekly'
      });

      const google = await loader.load();
      
      if (mapRef.current) {
        const mapInstance = new google.maps.Map(mapRef.current, {
          center: { lat: -34.603722, lng: -58.381592 },
          zoom: 12,
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9e9e9e" }]
            }
          ]
        });

        setMap(mapInstance);

        // Create markers for each location
        const newMarkers = locations.map(location => {
          const marker = new google.maps.Marker({
            position: location.coords,
            map: mapInstance,
            title: location.name,
            animation: google.maps.Animation.DROP
          });

          marker.addListener('click', () => {
            setSelectedLocation(location);
          });

          return marker;
        });

        setMarkers(newMarkers);
      }
    };

    initMap();
  }, []);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
    map?.panTo(location.coords);
    map?.setZoom(15);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-white p-6 overflow-y-auto shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Nuestras Sucursales</h1>
        <div className="space-y-4">
          {locations.map(location => (
            <div
              key={location.id}
              className={`p-4 rounded-lg cursor-pointer transition-all ${
                selectedLocation?.id === location.id
                  ? 'bg-blue-50 border-2 border-blue-500'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
              onClick={() => handleLocationClick(location)}
            >
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">{location.name}</h3>
                  <p className="text-sm text-gray-600">{location.address}</p>
                  <button
                    className="mt-2 text-sm text-blue-600 flex items-center hover:text-blue-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`https://www.google.com/maps/dir/?api=1&destination=${location.coords.lat},${location.coords.lng}`);
                    }}
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    Cómo llegar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 relative">
        <div ref={mapRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default Sucursales;