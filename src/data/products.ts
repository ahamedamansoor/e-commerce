import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Wool Blazer',
    price: 289.99,
    originalPrice: 349.99,
    description: 'A timeless wool blazer with a modern cut. Perfect for both casual and formal occasions. Made from premium materials for lasting quality.',
    category: 'men',
    imageUrl: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg',
    images: [
      'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg',
      'https://images.pexels.com/photos/6626904/pexels-photo-6626904.jpeg',
      'https://images.pexels.com/photos/6626905/pexels-photo-6626905.jpeg',
    ],
    colors: ['Navy', 'Charcoal', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    isFeatured: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: '2',
    title: 'Slim Fit Cotton Shirt',
    price: 89.99,
    description: 'A versatile slim fit shirt made from 100% organic cotton. Features a modern spread collar and rounded cuffs.',
    category: 'men',
    imageUrl: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg',
    images: [
      'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg',
      'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg',
      'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg',
    ],
    colors: ['White', 'Light Blue', 'Pink'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    rating: 4.6,
    reviews: 89,
  },
  {
    id: '3',
    title: 'Kids Colorful Raincoat',
    price: 69.99,
    description: 'A waterproof and windproof raincoat with fun patterns. Features a hood and reflective details for safety.',
    category: 'kids-clothing',
    imageUrl: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg',
    images: [
      'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg',
      'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg',
      'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg',
    ],
    colors: ['Yellow', 'Blue', 'Pink'],
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviews: 56,
  },
  {
    id: '4',
    title: 'Wooden Building Blocks',
    price: 39.99,
    description: 'A set of 50 premium wooden building blocks in various shapes and colors. Perfect for developing motor skills and creativity.',
    category: 'kids-toys',
    imageUrl: 'https://images.pexels.com/photos/5623063/pexels-photo-5623063.jpeg',
    images: [
      'https://images.pexels.com/photos/5623063/pexels-photo-5623063.jpeg',
      'https://images.pexels.com/photos/5623063/pexels-photo-5623063.jpeg',
      'https://images.pexels.com/photos/5623063/pexels-photo-5623063.jpeg',
    ],
    colors: ['Multi'],
    sizes: ['One Size'],
    inStock: true,
    rating: 4.7,
    reviews: 112,
  },
  {
    id: '5',
    title: 'Cashmere Sweater',
    price: 189.99,
    description: 'Luxurious cashmere sweater with a classic crew neck. Soft, warm, and incredibly comfortable for everyday wear.',
    category: 'men',
    imageUrl: 'https://images.pexels.com/photos/7691068/pexels-photo-7691068.jpeg',
    images: [
      'https://images.pexels.com/photos/7691068/pexels-photo-7691068.jpeg',
      'https://images.pexels.com/photos/7691068/pexels-photo-7691068.jpeg',
      'https://images.pexels.com/photos/7691068/pexels-photo-7691068.jpeg',
    ],
    colors: ['Camel', 'Gray', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    isFeatured: true,
    rating: 4.9,
    reviews: 78,
  },
  {
    id: '6',
    title: 'Kids Denim Overalls',
    price: 59.99,
    originalPrice: 79.99,
    description: 'Durable denim overalls with adjustable straps and multiple pockets. Perfect for play and everyday adventures.',
    category: 'kids-clothing',
    imageUrl: 'https://images.pexels.com/photos/6162932/pexels-photo-6162932.jpeg',
    images: [
      'https://images.pexels.com/photos/6162932/pexels-photo-6162932.jpeg',
      'https://images.pexels.com/photos/6162932/pexels-photo-6162932.jpeg',
      'https://images.pexels.com/photos/6162932/pexels-photo-6162932.jpeg',
    ],
    colors: ['Light Blue', 'Dark Blue'],
    sizes: ['2Y', '3Y', '4Y', '5Y', '6Y'],
    inStock: true,
    rating: 4.5,
    reviews: 42,
  },
  {
    id: '7',
    title: 'Interactive Learning Robot',
    price: 129.99,
    description: 'An educational robot that teaches coding basics, math, and science through fun interactive games and challenges.',
    category: 'kids-toys',
    imageUrl: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    images: [
      'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
      'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
      'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    ],
    colors: ['Blue', 'Pink'],
    sizes: ['One Size'],
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviews: 63,
  },
  {
    id: '8',
    title: 'Kids Winter Parka',
    price: 119.99,
    description: 'A warm and cozy winter parka with faux fur hood trim and water-resistant outer shell. Perfect for cold weather adventures.',
    category: 'kids-clothing',
    imageUrl: 'https://images.pexels.com/photos/6975591/pexels-photo-6975591.jpeg',
    images: [
      'https://images.pexels.com/photos/6975591/pexels-photo-6975591.jpeg',
      'https://images.pexels.com/photos/6975591/pexels-photo-6975591.jpeg',
      'https://images.pexels.com/photos/6975591/pexels-photo-6975591.jpeg',
    ],
    colors: ['Navy', 'Red', 'Green'],
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    inStock: true,
    rating: 4.7,
    reviews: 89,
  },
  {
    id: '9',
    title: 'Men\'s Italian Leather Shoes',
    price: 249.99,
    description: 'Handcrafted Italian leather dress shoes with a classic design. Features Goodyear welted construction for durability and comfort.',
    category: 'men',
    imageUrl: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg',
    images: [
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg',
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg',
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg',
    ],
    colors: ['Brown', 'Black', 'Tan'],
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    inStock: true,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: '10',
    title: 'Creative Art Set for Kids',
    price: 45.99,
    description: 'A comprehensive art set with crayons, markers, colored pencils, watercolors, and drawing paper. Perfect for nurturing creativity.',
    category: 'kids-toys',
    imageUrl: 'https://images.pexels.com/photos/159579/crayons-coloring-book-coloring-book-159579.jpeg',
    images: [
      'https://images.pexels.com/photos/159579/crayons-coloring-book-coloring-book-159579.jpeg',
      'https://images.pexels.com/photos/159579/crayons-coloring-book-coloring-book-159579.jpeg',
      'https://images.pexels.com/photos/159579/crayons-coloring-book-coloring-book-159579.jpeg',
    ],
    colors: ['Multi'],
    sizes: ['One Size'],
    inStock: true,
    isFeatured: true,
    rating: 4.8,
    reviews: 214,
  },
  {
    id: '11',
    title: 'Men\'s Slim Fit Chinos',
    price: 79.99,
    originalPrice: 99.99,
    description: 'Versatile slim fit chinos made from premium cotton with a touch of stretch for comfort. Perfect for both casual and smart casual looks.',
    category: 'men',
    imageUrl: 'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg',
    images: [
      'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg',
      'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg',
      'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg',
    ],
    colors: ['Khaki', 'Navy', 'Olive', 'Gray'],
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    inStock: true,
    rating: 4.6,
    reviews: 92,
  },
  {
    id: '12',
    title: 'Kids Summer Dress',
    price: 49.99,
    description: 'A beautiful cotton summer dress with floral pattern. Breathable fabric perfect for warm days and special occasions.',
    category: 'kids-clothing',
    imageUrl: 'https://images.pexels.com/photos/5096638/pexels-photo-5096638.jpeg',
    images: [
      'https://images.pexels.com/photos/5096638/pexels-photo-5096638.jpeg',
      'https://images.pexels.com/photos/5096638/pexels-photo-5096638.jpeg',
      'https://images.pexels.com/photos/5096638/pexels-photo-5096638.jpeg',
    ],
    colors: ['Blue', 'Pink', 'Yellow'],
    sizes: ['3Y', '4Y', '5Y', '6Y', '7Y', '8Y'],
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 67,
  },
];

export const getFeaturedProducts = () => {
  return products.filter(product => product.isFeatured);
};

export const getNewArrivals = () => {
  return products.filter(product => product.isNew);
};

export const getOnSaleProducts = () => {
  return products.filter(product => product.originalPrice && product.originalPrice > product.price);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: string, category: string, limit = 4) => {
  return products
    .filter(product => product.category === category && product.id !== productId)
    .slice(0, limit);
};