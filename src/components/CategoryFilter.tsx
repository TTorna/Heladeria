import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-2 flex flex-wrap items-center justify-center gap-3">
      <button
        onClick={() => onCategoryChange('all')}
        className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
          selectedCategory === 'all'
            ? 'bg-yellow-500 text-brown-900 shadow-lg'
            : 'bg-brown-800 text-gray-300 hover:bg-brown-700'
        }`}
      >
        Todos los sabores
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
            selectedCategory === category
              ? 'bg-yellow-500 text-brown-900 shadow-lg'
              : 'bg-brown-800 text-gray-300 hover:bg-brown-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}