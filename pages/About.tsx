
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="relative h-[60vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1592914610354-fd35984456b6?auto=format&fit=crop&q=80&w=2000" alt="Laboratory" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-6xl font-serif tracking-tight">The House</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 mb-12">Origins</h2>
        <p className="text-2xl font-serif text-zinc-800 leading-relaxed italic mb-12">
          AROMAKARSA was founded in 2021 as a sanctuary for those who believe that fragrance is the silent language of the soul.
        </p>
        <div className="prose prose-zinc mx-auto text-zinc-600 leading-relaxed text-sm tracking-wide text-left space-y-8">
          <p>
            Our journey began in a small atelier tucked away in the highlands, where the founders started experimenting with wild-harvested resins and forgotten florals. The name itself, "Aroma-Karsa," is a fusion of the olfactory sense and the power of will—representing our intention to craft scents that evoke hidden desires and memories.
          </p>
          <p>
            We reject the mass-produced ethos of modern perfumery. Instead, we embrace the "slow scent" movement. Every batch of our perfume is hand-bottled and allowed to mature, ensuring that the complex molecules have time to find their perfect harmony before reaching your skin.
          </p>
          <p>
            Transparency is at our core. We tell you where our vetiver comes from, how our jasmine is harvested under the moonlight, and why we choose to use sustainable synthetic molecules alongside natural extracts to preserve biodiversity.
          </p>
        </div>
      </section>

      <section className="bg-zinc-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div>
            <span className="text-4xl font-serif mb-4 block">01</span>
            <h3 className="text-xs uppercase tracking-[0.3em] mb-4">Craftsmanship</h3>
            <p className="text-zinc-400 text-xs leading-loose">Small batches, high concentration, hand-poured in our private laboratory.</p>
          </div>
          <div>
            <span className="text-4xl font-serif mb-4 block">02</span>
            <h3 className="text-xs uppercase tracking-[0.3em] mb-4">Sustainability</h3>
            <p className="text-zinc-400 text-xs leading-loose">Plastic-free packaging and ethically sourced ingredients from family-owned farms.</p>
          </div>
          <div>
            <span className="text-4xl font-serif mb-4 block">03</span>
            <h3 className="text-xs uppercase tracking-[0.3em] mb-4">Emotion</h3>
            <p className="text-zinc-400 text-xs leading-loose">Every scent is developed around a specific narrative designed to stir the spirit.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
