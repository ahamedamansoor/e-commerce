import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, Check, Star, Truck, RotateCcw, Shield } from 'lucide-react';
import FeaturedCollection from '../components/FeaturedCollection';
import { getProductById, getRelatedProducts } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (productId) {
      const foundProduct = getProductById(productId);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.imageUrl);
        setSelectedColor(foundProduct.colors[0]);
        setSelectedSize(foundProduct.sizes[0]);
        
        const related = getRelatedProducts(productId, foundProduct.category);
        setRelatedProducts(related);
      }
    }
  }, [productId]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedSize, selectedColor);
    }
  };
  
  if (!product) {
    return (
      <div className="container py-16 text-center">
        <p>Loading product...</p>
      </div>
    );
  }
  
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;
  
  return (
    <div className="bg-cream-50">
      <div className="container py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2">
            <li><Link to="/" className="text-navy-500 hover:text-navy-700">Home</Link></li>
            <li className="text-navy-300">/</li>
            <li>
              <Link 
                to={`/category/${product.category}`} 
                className="text-navy-500 hover:text-navy-700"
              >
                {product.category === 'men' 
                  ? "Men's Clothing" 
                  : product.category === 'kids-clothing' 
                    ? "Kids' Clothing" 
                    : "Kids' Toys"}
              </Link>
            </li>
            <li className="text-navy-300">/</li>
            <li className="text-navy-700 truncate max-w-[200px]">{product.title}</li>
          </ol>
        </nav>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Images */}
            <div>
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <img 
                  src={selectedImage} 
                  alt={product.title} 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`aspect-square rounded border-2 overflow-hidden ${
                      selectedImage === image 
                        ? 'border-navy-900' 
                        : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.title} - View ${index + 1}`} 
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-heading mb-2">{product.title}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} 
                      className={i < Math.floor(product.rating) ? 'text-gold-500' : 'text-navy-300'} 
                    />
                  ))}
                </div>
                <span className="text-navy-600">{product.rating.toFixed(1)}</span>
                <span className="mx-2 text-navy-300">•</span>
                <span className="text-navy-600">{product.reviews} reviews</span>
              </div>
              
              <div className="flex items-baseline mb-6">
                <span className="text-2xl font-medium mr-3">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-navy-400 line-through mr-3">${product.originalPrice.toFixed(2)}</span>
                    <span className="text-sm font-medium px-2 py-1 bg-error-100 text-error-500 rounded">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>
              
              <p className="text-navy-700 mb-6">{product.description}</p>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Color: <span className="font-normal">{selectedColor}</span></h3>
                <div className="flex space-x-3">
                  {product.colors.map(color => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`
                        w-10 h-10 rounded-full border-2 flex items-center justify-center
                        ${selectedColor === color ? 'border-navy-900' : 'border-navy-200'}
                      `}
                      aria-label={`Select ${color} color`}
                    >
                      <div 
                        className="w-8 h-8 rounded-full" 
                        style={{ backgroundColor: color.toLowerCase() }}
                      ></div>
                      {selectedColor === color && (
                        <Check size={14} className="absolute text-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium">Size: <span className="font-normal">{selectedSize}</span></h3>
                  <button className="text-sm text-navy-600 hover:text-navy-900">Size Guide</button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        py-2 border rounded text-center
                        ${selectedSize === size 
                          ? 'bg-navy-900 text-white border-navy-900' 
                          : 'border-navy-200 hover:border-navy-400'
                        }
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Quantity</h3>
                <div className="flex items-center border border-navy-200 rounded w-fit">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center border-r border-navy-200"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-12 h-10 text-center focus:outline-none"
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center border-l border-navy-200"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-1"
                >
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button className="btn btn-outline flex items-center justify-center">
                  <Heart size={18} className="mr-2" />
                  Save
                </button>
              </div>
              
              {/* Product Details */}
              <div className="space-y-4 border-t border-navy-100 pt-6">
                <div className="flex items-start">
                  <Truck size={18} className="text-navy-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Free Shipping</h4>
                    <p className="text-sm text-navy-500">On all orders over $100</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RotateCcw size={18} className="text-navy-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Easy Returns</h4>
                    <p className="text-sm text-navy-500">30-day money back guarantee</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield size={18} className="text-navy-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Secure Checkout</h4>
                    <p className="text-sm text-navy-500">Encrypted payment processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <FeaturedCollection 
            products={relatedProducts}
            title="You May Also Like"
            subtitle="Based on your selection"
          />
        )}
      </div>
    </div>
  );
};

export default ProductPage;