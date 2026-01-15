
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 py-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif tracking-[0.2em] mb-6">AROMAKARSA</h2>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
              A fragrance house born from the intersection of memory and nature. We craft scents that speak to the soul, using only the finest raw materials.
            </p>
            <div className="flex space-x-6">
              {['Instagram', 'Pinterest', 'Vogue'].map((platform) => (
                <a key={platform} href="#" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">
                  {platform}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-zinc-900">Discover</h3>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">All Collections</Link></li>
              <li><Link to="/about" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">The House</Link></li>
              <li><Link to="/contact" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Concierge</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-zinc-900">Join the Circle</h3>
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
              Subscribe for early access to new collections and poetic revelations.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-zinc-50 border border-zinc-200 px-4 py-3 text-xs tracking-widest focus:outline-none focus:border-zinc-900 flex-grow"
              />
              <button className="bg-zinc-900 text-white px-6 py-3 text-xs tracking-widest hover:bg-zinc-800 transition-colors uppercase">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} AROMAKARSA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] hover:text-zinc-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
