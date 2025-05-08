import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  
  if (cart.length === 0) {
    return (
      <div className="container py-16">
        <div className="bg-white rounded-lg shadow-sm p-10 text-center max-w-md mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-navy-50 rounded-full mb-6">
            <ShoppingBag size={24} className="text-navy-600" />
          </div>
          <h1 className="text-2xl font-heading mb-4">Your Cart is Empty</h1>
          <p className="text-navy-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/" className="btn btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-cream-50">
      <div className="container py-8">
        <h1 className="text-3xl font-heading mb-6">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cart.map(item => (
              <div key={`${item.product.id}-${item.size}-${item.color}`} className="bg-white rounded-lg shadow-sm p-4 mb-4 flex flex-col sm:flex-row">
                <div className="sm:w-32 mb-4 sm:mb-0">
                  <div className="aspect-square rounded overflow-hidden">
                    <img 
                      src={item.product.imageUrl} 
                      alt={item.product.title} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                <div className="flex-1 sm:ml-6">
                  <div className="flex justify-between mb-2">
                    <Link to={`/product/${item.product.id}`} className="text-lg font-medium hover:text-navy-600">
                      {item.product.title}
                    </Link>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-navy-400 hover:text-error-500"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    {item.color && (
                      <div className="text-sm text-navy-600">
                        Color: <span className="font-medium">{item.color}</span>
                      </div>
                    )}
                    {item.size && (
                      <div className="text-sm text-navy-600">
                        Size: <span className="font-medium">{item.size}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-navy-200 rounded">
                      <button 
                        onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 flex items-center justify-center border-r border-navy-200"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                        className="w-10 h-8 text-center focus:outline-none"
                      />
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border-l border-navy-200"
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                      {item.quantity > 1 && (
                        <div className="text-xs text-navy-500">
                          ${item.product.price.toFixed(2)} each
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-medium mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-navy-600">Subtotal ({totalItems} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-navy-600">Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-success-500">Free</span>
                  ) : (
                    <span>${shipping.toFixed(2)}</span>
                  )}
                </div>
                
                <div className="flex justify-between">
                  <span className="text-navy-600">Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                {shipping > 0 && (
                  <div className="text-sm text-navy-500 italic pt-2">
                    Add ${(100 - subtotal).toFixed(2)} more to qualify for free shipping
                  </div>
                )}
                
                <div className="pt-4 border-t border-navy-100 flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button className="btn btn-primary w-full mb-4">
                Proceed to Checkout
              </button>
              
              <Link to="/" className="btn btn-outline w-full">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;