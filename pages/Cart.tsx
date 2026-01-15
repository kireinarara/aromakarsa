
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-serif mb-6">Your bag is empty</h1>
        <p className="text-zinc-500 uppercase tracking-widest text-xs mb-10">Capture your first memory from our collection.</p>
        <Link 
          to="/shop" 
          className="bg-zinc-900 text-white px-12 py-4 text-xs tracking-widest uppercase hover:bg-zinc-800 transition-colors"
        >
          Browse Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-serif mb-16 text-center">Your Bag</h1>

      <div className="space-y-12">
        {cart.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row md:items-center gap-8 pb-12 border-b border-zinc-100">
            <Link to={`/product/${item.id}`} className="w-full md:w-32 aspect-[3/4] overflow-hidden bg-zinc-100 flex-shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </Link>

            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <Link to={`/product/${item.id}`} className="text-lg font-serif tracking-widest hover:text-zinc-500 transition-colors">{item.name}</Link>
                <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-6">{item.category}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center border border-zinc-200">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-4 py-2 hover:bg-zinc-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm font-medium border-x border-zinc-200">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-4 py-2 hover:bg-zinc-50 transition-colors"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-red-600 transition-colors border-b border-zinc-200"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 md:max-w-md md:ml-auto space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between text-xs tracking-widest uppercase text-zinc-500">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xs tracking-widest uppercase text-zinc-500">
            <span>Shipping</span>
            <span>Complimentary</span>
          </div>
          <div className="pt-4 border-t border-zinc-100 flex justify-between text-lg font-serif">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <Link 
          to="/checkout" 
          className="block w-full bg-zinc-900 text-white text-center py-5 text-xs tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all shadow-xl"
        >
          Proceed to Checkout
        </Link>
        <Link 
          to="/shop" 
          className="block text-center text-xs tracking-widest text-zinc-400 uppercase hover:text-zinc-900 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
