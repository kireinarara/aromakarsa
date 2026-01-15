
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'OUD NOIR',
    price: 185.00,
    category: 'Woody',
    description: 'An enigmatic blend of dark agarwood and rare spices, designed for the sophisticated soul who thrives in the shadows of the night.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    notes: {
      top: ['Saffron', 'Cinnamon'],
      heart: ['Rose', 'Patchouli'],
      base: ['Agarwood (Oud)', 'Amber', 'Sandalwood']
    }
  },
  {
    id: '2',
    name: 'ROSE ÉTHÉRÉE',
    price: 160.00,
    category: 'Floral',
    description: 'A delicate yet powerful floral symphony that captures the essence of a dew-kissed morning in a forgotten French garden.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
    notes: {
      top: ['Bergamot', 'Litchi'],
      heart: ['Turkish Rose', 'Peony'],
      base: ['White Musk', 'Vanilla', 'Cedar']
    }
  },
  {
    id: '3',
    name: 'AMBRE D\'OR',
    price: 195.00,
    category: 'Amber',
    description: 'Liquid gold captured in glass. A warm, resinous embrace that lingers on the skin like a sunset in the Mediterranean.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    notes: {
      top: ['Cardamom', 'Pink Pepper'],
      heart: ['Labdanum', 'Incense'],
      base: ['Amber', 'Benzoin', 'Vanilla']
    }
  },
  {
    id: '4',
    name: 'CITRUS VELVET',
    price: 145.00,
    category: 'Fresh',
    description: 'Crisp citrus notes softened by a velvet-like musk finish. Refreshing, vibrant, and effortlessly elegant for daily wear.',
    image: 'https://images.unsplash.com/photo-1616948055600-8f940c4516eb?auto=format&fit=crop&q=80&w=800',
    notes: {
      top: ['Lemon', 'Mandarin'],
      heart: ['Neroli', 'Jasmine'],
      base: ['Vetiver', 'Ambroxan', 'Musk']
    }
  },
  {
    id: '5',
    name: 'MYSTIQUE MUSK',
    price: 170.00,
    category: 'Musk',
    description: 'A skin-close scent that feels like a second layer of identity. Mysterious, clean, and deeply intimate.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
    notes: {
      top: ['White Tea', 'Aldehydes'],
      heart: ['Iris', 'Mimosa'],
      base: ['Musk', 'Rice Powder', 'Ambergris']
    }
  },
  {
    id: '6',
    name: 'SANTAL SOUFFLÉ',
    price: 175.00,
    category: 'Woody',
    description: 'Creamy sandalwood meeting the softness of a breeze. A grounding fragrance that brings a sense of serenity and balance.',
    image: 'https://images.unsplash.com/photo-1588405864443-ec387d7b13c1?auto=format&fit=crop&q=80&w=800',
    notes: {
      top: ['Cardamom', 'Violet Leaf'],
      heart: ['Sandalwood', 'Cypriol'],
      base: ['Leather', 'Cedar', 'Guaiac Wood']
    }
  }
];
