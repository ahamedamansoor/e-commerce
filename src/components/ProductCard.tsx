import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="product-image">
          <img 
            src={product.imageUrl} 
            alt={product.title} 
            className="object-cover w-full h-full"
          />
          
          {product.isNew && (
            <span className="product-badge bg-navy-900">New</span>
          )}
          
          {discount > 0 && (
            <span className="product-badge bg-error-500">{discount}% Off</span>
          )}
          
          <div className="quick-view-button">
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={handleAddToCart}
                className="flex items-center justify-center w-10 h-10 p-2 text-navy-900 bg-white rounded-full hover:bg-gold-500 transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingBag size={18} />
              </button>
              <Link
                to={`/product/${product.id}`}
                className="flex items-center justify-center w-10 h-10 p-2 text-navy-900 bg-white rounded-full hover:bg-gold-500 transition-colors"
                aria-label="Quick view"
              >
                <Eye size={18} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium text-navy-900 mb-1">{product.title}</h3>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold-500' : 'text-navy-200'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-navy-500">({product.reviews})</span>
          </div>
          
          <div className="flex items-center">
            <span className="text-lg font-medium text-navy-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-navy-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;