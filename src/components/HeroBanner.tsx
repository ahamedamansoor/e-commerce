import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-navy-900 text-white py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg" 
          alt="Stylish children's clothing" 
          className="object-cover w-full h-full opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 animate-slide-up">
            Luxury Essentials for<br />Men & Children
          </h1>
          
          <p className="text-lg md:text-xl text-navy-100 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Discover premium clothing and toys crafted with exceptional quality and timeless design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/category/men"
              className="btn btn-gold"
            >
              Shop Men's Collection
            </Link>
            
            <Link
              to="/category/kids-clothing"
              className="btn btn-outline text-white border-white/30 hover:bg-white/10"
            >
              Explore Kids' Range
            </Link>
          </div>
        </div>
      </div>
      
      {/* Highlights Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy-800 py-3 bg-opacity-80 hidden md:block">
        <div className="container">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center justify-center">
              <span className="text-gold-500 text-sm font-medium mr-2">Free Shipping</span>
              <span className="text-navy-200 text-xs">On all orders over $100</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-gold-500 text-sm font-medium mr-2">Easy Returns</span>
              <span className="text-navy-200 text-xs">30-day money back guarantee</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-gold-500 text-sm font-medium mr-2">Customer Support</span>
              <span className="text-navy-200 text-xs">24/7 dedicated assistance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;