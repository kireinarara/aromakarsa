
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl font-serif mb-8 tracking-tight">Connect</h1>
          <p className="text-zinc-500 uppercase text-xs tracking-widest leading-loose mb-12 max-w-md">
            Our concierge team is available to assist you in discovering your signature scent or managing an existing order.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-4">Inquiries</h3>
              <p className="text-sm tracking-widest hover:text-zinc-500 transition-colors cursor-pointer">CONCIERGE@AROMAKARSA.COM</p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-4">Press</h3>
              <p className="text-sm tracking-widest hover:text-zinc-500 transition-colors cursor-pointer">PRESS@AROMAKARSA.COM</p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-4">Atelier</h3>
              <p className="text-sm text-zinc-800 leading-relaxed max-w-xs">
                124 RUE DU PARFUM,<br />
                75001 PARIS, FRANCE<br />
                BY APPOINTMENT ONLY.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-zinc-100">
          <form className="space-y-8">
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 block mb-4">Full Name</label>
              <input type="text" className="w-full bg-zinc-50 border border-zinc-100 px-4 py-3 text-xs tracking-widest focus:outline-none focus:border-zinc-900 transition-colors" />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 block mb-4">Email</label>
              <input type="email" className="w-full bg-zinc-50 border border-zinc-100 px-4 py-3 text-xs tracking-widest focus:outline-none focus:border-zinc-900 transition-colors" />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 block mb-4">Message</label>
              <textarea rows={6} className="w-full bg-zinc-50 border border-zinc-100 px-4 py-3 text-xs tracking-widest focus:outline-none focus:border-zinc-900 transition-colors"></textarea>
            </div>
            <button type="button" className="w-full bg-zinc-900 text-white py-4 text-xs tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
