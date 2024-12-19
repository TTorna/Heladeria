import React from 'react';
import { Star, Leaf, Cookie } from 'lucide-react';
import type { Flavor } from '../types';
import { tags } from '../data/tags';

interface FlavorCardProps {
  flavor: Flavor;
}

const FlavorCard: React.FC<FlavorCardProps> = ({ flavor }) => {
  return (
    <div className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg p-3">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="text-base font-medium text-gray-900">{flavor.name}</h4>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {flavor.tags.map((tag) => (
              <span
                key={tag}
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${tags.find((a) => a.name === tag)?.color}`}
              >
                {tag === 'Vegano' && <Leaf className="w-3 h-3 mr-1" />}
                {tag === 'Sin TACC' && <Cookie className="w-3 h-3 mr-1" />}
                {tag}
                
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-1.5 ml-4">
          {flavor.isRecommended && (
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          )}
          {flavor.isNew && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
              Nuevo
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlavorCard;