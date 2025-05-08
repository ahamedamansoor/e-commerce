export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: Category;
  imageUrl: string;
  images: string[];
  colors: string[];
  sizes: string[];
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  rating: number;
  reviews: number;
}

export type Category = 'men' | 'kids-clothing' | 'kids-toys';

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

export interface FilterOptions {
  priceRange: [number, number];
  colors: string[];
  sizes: string[];
  onSale: boolean;
  inStock: boolean;
}