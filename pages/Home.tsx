
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=2000" 
            alt="Perfume background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <span className="text-white text-xs uppercase tracking-[0.5em] mb-6 animate-in slide-in-from-bottom-4 duration-700">The Soul of Scent</span>
          <h1 className="text-white text-5xl md:text-8xl font-serif mb-10 tracking-tight animate-in slide-in-from-bottom-8 duration-1000">
            AROMAKARSA
          </h1>
          <Link 
            to="/shop" 
            className="group relative inline-block px-12 py-5 bg-white text-zinc-900 text-xs tracking-[0.3em] uppercase hover:bg-zinc-900 hover:text-white transition-all duration-500 animate-in slide-in-from-bottom-12 duration-1000"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-8">The Philosophy</h2>
        <p className="text-2xl md:text-3xl font-serif text-zinc-800 leading-relaxed italic mb-10">
          "Fragrance is the most intense form of memory. At Aromakarsa, we don't just create perfumes; we capture moments, emotions, and the unseen beauty of existence."
        </p>
        <div className="w-16 h-[1px] bg-zinc-200 mx-auto"></div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h3 className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-2">Curated Selection</h3>
              <h2 className="text-3xl font-serif">Featured Fragrances</h2>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-zinc-100 mb-6 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                </div>
                <div className="text-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-2 block">{product.category}</span>
                  <h3 className="text-lg font-serif tracking-widest mb-2 group-hover:text-zinc-500 transition-colors">{product.name}</h3>
                  <p className="text-sm text-zinc-900">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetic Section */}
      <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="aspect-square">
          <img src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=1200" alt="About brand" className="w-full h-full object-cover" />
        </div>
        <div className="flex items-center justify-center p-12 md:p-24 bg-[#f4f2ee]">
          <div className="max-w-md">
            <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-6">Our Craft</h2>
            <h3 className="text-3xl font-serif mb-8 leading-snug">Sustainably sourced, meticulously blended.</h3>
            <p className="text-zinc-600 leading-relaxed mb-10">
              Each bottle of Aromakarsa is a result of years of research and passion. We work with local farmers across the globe to bring you the purest extracts while ensuring the planet remains as fragrant for generations to come.
            </p>
            <Link to="/about" className="inline-block border border-zinc-900 px-8 py-3 text-xs tracking-widest uppercase hover:bg-zinc-900 hover:text-white transition-all">
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
