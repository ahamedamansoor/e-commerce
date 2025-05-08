import React from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryBanner from '../components/CategoryBanner';
import FeaturedCollection from '../components/FeaturedCollection';
import ProductGrid from '../components/ProductGrid';
import { getFeaturedProducts, getNewArrivals, getOnSaleProducts } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const saleProducts = getOnSaleProducts();
  
  return (
    <div>
      <HeroBanner />
      
      <div className="container py-16">
        <FeaturedCollection 
          products={featuredProducts}
          title="Featured Products"
          subtitle="Our carefully selected premium collection"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <CategoryBanner 
            title="Men's Collection"
            description="Discover our premium range of men's clothing designed for style and comfort."
            imageUrl="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg"
            link="/category/men"
          />
          
          <CategoryBanner 
            title="Kids' Clothing"
            description="Explore our adorable and durable clothing collection for children."
            imageUrl="https://images.pexels.com/photos/5693890/pexels-photo-5693890.jpeg"
            link="/category/kids-clothing"
          />
        </div>
        
        <CategoryBanner 
          title="Kids' Toys"
          description="Explore our selection of educational and fun toys designed to inspire creativity and development."
          imageUrl="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg"
          link="/category/kids-toys"
          position="right"
        />
        
        <div className="my-16 py-16 bg-cream-100 -mx-4 px-4">
          <div className="text-center mb-8">
            <span className="text-sm font-medium text-gold-600 mb-2 block">Limited Time</span>
            <h2 className="text-3xl md:text-4xl font-heading mb-2">Special Offers</h2>
            <p className="text-navy-600 max-w-2xl mx-auto">Shop our exclusive sale items with special discounts for a limited time only.</p>
          </div>
          
          <ProductGrid products={saleProducts} />
        </div>
        
        <div className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading mb-2">New Arrivals</h2>
            <p className="text-navy-500 max-w-2xl mx-auto">Discover the latest additions to our collections</p>
          </div>
          
          <ProductGrid products={newArrivals} />
        </div>
        
        <div className="bg-navy-900 text-white rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex items-center">
              <div>
                <span className="text-gold-500 font-medium mb-2 block">Stay Connected</span>
                <h2 className="text-3xl font-heading mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-navy-200 mb-6">
                  Be the first to know about new collections, exclusive offers, and seasonal discounts.
                </p>
                
                <div className="flex w-full max-w-md">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow p-3 text-navy-900 rounded-l focus:outline-none"
                  />
                  <button className="bg-gold-500 text-navy-900 font-medium px-6 rounded-r hover:bg-gold-400 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/1620788/pexels-photo-1620788.jpeg" 
                alt="Subscribe to newsletter"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;