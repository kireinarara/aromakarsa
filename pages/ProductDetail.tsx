
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-zinc-500 uppercase tracking-widest">Fragrance not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-in fade-in duration-700">
      <Link to="/shop" className="inline-flex items-center text-xs tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors mb-12">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
        </svg>
        BACK TO COLLECTION
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        {/* Left: Images */}
        <div className="space-y-8">
          <div className="aspect-[4/5] bg-zinc-100 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
             <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600" alt="detail 1" className="aspect-square object-cover" />
             <img src="https://images.unsplash.com/photo-1588405864443-ec387d7b13c1?auto=format&fit=crop&q=80&w=600" alt="detail 2" className="aspect-square object-cover" />
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-4">{product.category}</span>
          <h1 className="text-5xl font-serif mb-6 tracking-tight text-zinc-900">{product.name}</h1>
          <p className="text-2xl text-zinc-900 mb-8 font-light">${product.price.toFixed(2)}</p>
          
          <div className="prose prose-zinc mb-12">
            <p className="text-zinc-600 leading-relaxed italic">
              {product.description}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={added}
            className={`w-full py-5 text-xs tracking-[0.3em] uppercase transition-all duration-300 border ${
              added 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-zinc-900 border-zinc-900 text-white hover:bg-zinc-800'
            }`}
          >
            {added ? 'ADDED TO ATELIER' : 'ADD TO BAG'}
          </button>

          {/* Fragrance Notes */}
          <div className="mt-16 space-y-10 border-t border-zinc-100 pt-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6">Fragrance Profile</h4>
              
              <div className="space-y-8">
                <div>
                  <h5 className="text-xs font-semibold tracking-widest uppercase mb-3 text-zinc-900">Top Notes</h5>
                  <p className="text-sm text-zinc-500">{product.notes.top.join(', ')}</p>
                </div>
                <div>
                  <h5 className="text-xs font-semibold tracking-widest uppercase mb-3 text-zinc-900">Heart Notes</h5>
                  <p className="text-sm text-zinc-500">{product.notes.heart.join(', ')}</p>
                </div>
                <div>
                  <h5 className="text-xs font-semibold tracking-widest uppercase mb-3 text-zinc-900">Base Notes</h5>
                  <p className="text-sm text-zinc-500">{product.notes.base.join(', ')}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <details className="group border-b border-zinc-100 pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-xs font-semibold tracking-widest uppercase text-zinc-900">Shipping & Delivery</span>
                  <span className="transition-transform group-open:rotate-180">+</span>
                </summary>
                <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                  Complimentary carbon-neutral shipping on all orders over $150. Hand-packaged with botanical parchment.
                </p>
              </details>
              <details className="group border-b border-zinc-100 pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-xs font-semibold tracking-widest uppercase text-zinc-900">Sustainability</span>
                  <span className="transition-transform group-open:rotate-180">+</span>
                </summary>
                <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                  Our bottles are made of 40% recycled glass and are fully recyclable. We use zero plastic in our shipping materials.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
