import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface FeaturedCollectionProps {
  products: Product[];
  title: string;
  subtitle?: string;
}

const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({ products, title, subtitle }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!sliderRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    
    return () => {
      window.removeEventListener('resize', checkScrollability);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    
    const scrollAmount = 330; // Approximately the width of one product card + gap
    const newPosition = direction === 'left' 
      ? sliderRef.current.scrollLeft - scrollAmount 
      : sliderRef.current.scrollLeft + scrollAmount;
    
    sliderRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    
    // Check scrollability after scroll animation completes
    setTimeout(checkScrollability, 300);
  };

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-heading">{title}</h2>
          {subtitle && <p className="text-navy-500 mt-1">{subtitle}</p>}
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full border ${
              canScrollLeft 
                ? 'border-navy-200 hover:bg-navy-50 text-navy-900' 
                : 'border-navy-100 text-navy-300 cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-3 rounded-full border ${
              canScrollRight 
                ? 'border-navy-200 hover:bg-navy-50 text-navy-900' 
                : 'border-navy-100 text-navy-300 cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto hide-scrollbar gap-6 pb-4"
        onScroll={checkScrollability}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map(product => (
          <div key={product.id} className="flex-shrink-0 w-[280px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default FeaturedCollection;