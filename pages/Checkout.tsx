
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-20 h-20 bg-zinc-900 text-white rounded-full flex items-center justify-center mb-8">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-serif mb-4">Your journey begins.</h1>
        <p className="text-zinc-500 uppercase tracking-widest text-xs max-w-sm mb-12 leading-relaxed">
          Order #AK-{Math.floor(Math.random() * 1000000)} confirmed. Your chosen scent is being prepared at our atelier.
        </p>
        <Link 
          to="/" 
          className="bg-zinc-900 text-white px-12 py-4 text-xs tracking-widest uppercase hover:bg-zinc-800 transition-colors"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-3xl font-serif mb-12">Checkout</h1>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold border-b border-zinc-100 pb-2">Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="FIRST NAME" className="bg-transparent border-b border-zinc-200 py-3 text-xs tracking-widest focus:outline-none focus:border-zinc-900" />
                <input required type="text" placeholder="LAST NAME" className="bg-transparent border-b border-zinc-200 py-3 text-xs tracking-widest focus:outline-none focus:border-zinc-900" />
              </div>
              <input required type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-zinc-200 py-3 text-xs tracking-widest focus:outline-none focus:border-zinc-900" />
            </div>

            <div className="space-y-6">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold border-b border-zinc-100 pb-2">Shipping Address</h2>
              <input required type="text" placeholder="ADDRESS" className="w-full bg-transparent border-b border-zinc-200 py-3 text-xs tracking-widest focus:outline-none focus:border-zinc-900" />
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="CITY" className="bg-transparent border-b border-zinc-200 py-3 text-xs tracking-widest focus:outline-none focus:border-zinc-900" />
                <input required type="text" placeholder="POSTAL CODE" className="bg-transparent border-b border-zinc-200 py-3 text-xs tracking-widest focus:outline-none focus:border-zinc-900" />
              </div>
              <input required type="text" placeholder="COUNTRY" className="w-full bg-transparent border-b border-zinc-200 py-3 text-xs tracking-widest focus:outline-none focus:border-zinc-900" />
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold border-b border-zinc-100 pb-2">Payment</h2>
              <div className="p-4 bg-zinc-50 border border-zinc-100 text-xs tracking-widest text-zinc-500 uppercase">
                Payment is simulated for this demonstration.
              </div>
            </div>

            <button type="submit" className="w-full bg-zinc-900 text-white py-5 text-xs tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all shadow-xl">
              Complete Order &bull; ${totalPrice.toFixed(2)}
            </button>
          </form>
        </div>

        <div className="bg-zinc-50 p-8 md:p-12 h-fit border border-zinc-100">
          <h2 className="text-xl font-serif mb-8">Summary</h2>
          <div className="space-y-6 mb-12">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-xs uppercase tracking-widest">
                <div className="flex items-center space-x-4">
                  <span className="text-zinc-400">({item.quantity}x)</span>
                  <span>{item.name}</span>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-8 border-t border-zinc-200">
            <div className="flex justify-between text-xs tracking-widest uppercase text-zinc-500">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs tracking-widest uppercase text-zinc-500">
              <span>Shipping</span>
              <span>Complimentary</span>
            </div>
            <div className="flex justify-between text-lg font-serif pt-4">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
