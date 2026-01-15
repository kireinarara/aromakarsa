
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 'All' | 'Woody' | 'Floral' | 'Amber' | 'Fresh' | 'Musk';
