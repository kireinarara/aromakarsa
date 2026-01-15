
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Category } from '../types';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  
  const categories: Category[] = ['All', 'Woody', 'Floral', 'Amber', 'Fresh', 'Musk'];
  
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="mb-20 text-center">
        <h1 className="text-5xl font-serif mb-6 tracking-tight">The Collection</h1>
        <p className="text-zinc-500 max-w-xl mx-auto uppercase text-xs tracking-widest leading-loose">
          Discover our curated range of olfactory experiences, crafted for every mood, memory, and moment.
        </p>
      </header>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-zinc-100 pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 relative pb-1 ${
              activeCategory === cat ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-900'
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-900"></span>
            )}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`} 
            className="group animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <div className="aspect-[4/5] overflow-hidden bg-zinc-100 mb-6 relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <button className="w-full bg-white text-zinc-900 py-4 text-[10px] tracking-widest uppercase font-semibold shadow-xl">
                  Quick View
                </button>
              </div>
            </div>
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-2 block">{product.category}</span>
              <h3 className="text-lg font-serif tracking-widest mb-1">{product.name}</h3>
              <p className="text-sm text-zinc-600">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-zinc-500 uppercase tracking-widest text-sm">No scents found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
