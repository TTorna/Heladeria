import React from 'react';
import { X } from 'lucide-react';

interface IceCreamFlavor {
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  isNew?: boolean;
  isRecommended?: boolean;
  isTacc?: boolean;
}

export function IceCreamCard({ 
  name, 
  description, 
  imageUrl, 
  category,
  tags,
  isNew,
  isRecommended,
  isTacc 
}: IceCreamFlavor) {
  return (
    <div className="group perspective">
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden transition-all duration-500 ease-out transform-gpu hover:scale-105 hover:-rotate-y-12 hover:shadow-2xl">
        {/* Card Content Container */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Image with zoom effect */}
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Tags container with fade in */}
        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 z-20 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {isRecommended && (
            <span className="rounded-full bg-pink-600 px-3 py-1 text-sm font-medium text-white shadow-lg">
              Recomendado
            </span>
          )}
          {isNew && (
            <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-medium text-white shadow-lg">
              Nuevo
            </span>
          )}
          {!isTacc && (
            <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-800 flex items-center gap-1 shadow-lg">
              <X className="h-4 w-4" /> Sin TACC
            </span>
          )}
          {tags.filter(tag => tag !== 'Recomendado' && tag !== 'Nuevo' && tag !== 'Sin TACC').map((tag) => (
            <span key={tag} className="rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-800 shadow-lg">
              {tag}
            </span>
          ))}
        </div>

        {/* Title container with slide up */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{name}</h3>
          <p className="text-gray-200 text-sm drop-shadow-lg">{description}</p>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -rotate-45"></div>
      </div>
    </div>
  );
}