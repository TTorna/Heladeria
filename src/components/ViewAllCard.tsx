import React from 'react';
import { ChevronDown } from 'lucide-react';

export function ViewAllCard() {
  const scrollToAllFlavors = () => {
    const element = document.getElementById('all-flavors');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="group perspective h-full">
      <button
        onClick={scrollToAllFlavors}
        className="relative aspect-[3/4] w-full rounded-lg overflow-hidden transition-all duration-500 ease-out transform-gpu hover:scale-105 hover:-rotate-y-12 hover:shadow-2xl bg-gradient-to-b from-yellow-400 to-yellow-600 flex flex-col items-center justify-center text-brown-900"
      >
        <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        
        <ChevronDown className="h-16 w-16 mb-4 animate-bounce" />
        <h3 className="text-2xl font-bold text-center px-4">Ver todos los sabores</h3>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -rotate-45"></div>
      </button>
    </div>
  );
}