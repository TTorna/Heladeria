import React from 'react';
import { tags } from '../data/tags';
import type { FilterType } from '../types';

interface FilterTagsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => onFilterChange(activeFilter === tag.id ? null : tag.id)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            tag.color
          } ${
            activeFilter === tag.id
              ? 'ring-2 ring-offset-2 ring-pink-500'
              : 'hover:ring-2 hover:ring-offset-2 hover:ring-pink-500/50'
          }`}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;