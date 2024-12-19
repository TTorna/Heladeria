import React from 'react';
import { flavors } from '../data/flavors';
import FlavorCard from './FlavorCard';
import type { FilterType } from '../types';

interface FlavorListProps {
  activeFilter: FilterType;
}

const FlavorList: React.FC<FlavorListProps> = ({ activeFilter }) => {
  const filterFlavors = (category: string) => {
    if (!activeFilter || activeFilter === 'todos') return flavors[category];
    
    return flavors[category].filter(flavor => {
      if (activeFilter === 'recomendado') return flavor.isRecommended;
      if (activeFilter === 'nuevo') return flavor.isNew;
      return flavor.tags.some(tag => 
        tag.toLowerCase().replace(/\s+/g, '-') === activeFilter
      );
    });
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
        {Object.entries(flavors).map(([category]) => {
          const filteredFlavors = filterFlavors(category);
          if (filteredFlavors.length === 0) return null;

          return (
            <div key={category} className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
              <div className="space-y-2">
                {filteredFlavors.map((flavor) => (
                  <FlavorCard key={flavor.name} flavor={flavor} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlavorList;