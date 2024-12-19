import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { IceCreamCarousel } from '../components/IceCreamCarousel';
import { CategoryFilter } from '../components/CategoryFilter';
import { flavors, categories } from '../data/flavors1';
import FlavorList from '../components/FlavorList';
import FilterTags from '../components/FilterTags';
import type { FilterType } from '../types/index';
import Footer from '../components/Footer';

function Sabores() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState<FilterType>(null);
    
    const filteredFlavors = flavors.filter((flavor) => {
        const matchesCategory = selectedCategory === 'all' || flavor.category === selectedCategory;
        const matchesSearch = flavor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            flavor.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-brown-900 w-full overflow-x-hidden">
            <header className="bg-brown-900 shadow-lg">
                <Navbar />
            </header>
            <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 ">
                {/* Hero Section */}
                <div className="mt-16 mb-6 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white">Sabores del mes</h2>
                <p className="text-xl text-gray-300">
                    Ver todos los sabores
                </p>
                </div>

                {/* Category Filter */}
                <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                />

                {/* Ice Cream Grid
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredFlavors.map((flavor) => (
                    <IceCreamCard key={flavor.name} {...flavor} />
                ))}
                </div>*/}

                {/* Ice Cream Carousel */}
                <IceCreamCarousel flavors={filteredFlavors} />

                {/*filteredFlavors.length === 0 && (
                <div className="mt-12 text-center">
                    <p className="text-lg text-gray-300">No se encontraron sabores que coincidan con tu búsqueda.</p>
                </div>
                )*/}

            </main>
      
            {/* Wave Divider */}
            <div id="all-flavors" className="wave-divider">
            <svg
                viewBox="0 0 1440 120"
                className="fill-brown-900 w-full h-[120px] transform translate-y-[-1px]"
                preserveAspectRatio="none"
            >
                <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
                </path>
            </svg>
            </div>
        
            {/* Ice Cream Grid Section */}
            <div className="bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Todos los sabores</h2>
                <FilterTags activeFilter={activeFilter} onFilterChange={setActiveFilter} />
                <FlavorList activeFilter={activeFilter} />
            </main>
                <Footer />
            </div>
        </div>
    );
}

export default Sabores;