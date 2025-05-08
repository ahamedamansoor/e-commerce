import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ChevronDown, GridIcon, List } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import FilterSidebar from '../components/FilterSidebar';
import { getProductsByCategory } from '../data/products';
import { FilterOptions, Product } from '../types';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  const [filter, setFilter] = useState<FilterOptions>({
    priceRange: [0, 500],
    colors: [],
    sizes: [],
    onSale: false,
    inStock: true,
  });
  
  const categoryNames: Record<string, string> = {
    'men': "Men's Clothing",
    'kids-clothing': "Kids' Clothing",
    'kids-toys': "Kids' Toys",
  };
  
  useEffect(() => {
    if (categoryId) {
      const products = getProductsByCategory(categoryId);
      setProducts(products);
      setFilteredProducts(products);
    }
  }, [categoryId]);
  
  useEffect(() => {
    // Apply filters
    let result = [...products];
    
    // Price filter
    result = result.filter(product => 
      product.price >= filter.priceRange[0] && product.price <= filter.priceRange[1]
    );
    
    // Color filter
    if (filter.colors.length > 0) {
      result = result.filter(product => 
        product.colors.some(color => 
          filter.colors.includes(color.toLowerCase())
        )
      );
    }
    
    // Size filter
    if (filter.sizes.length > 0) {
      result = result.filter(product => 
        product.sizes.some(size => 
          filter.sizes.includes(size.toLowerCase())
        )
      );
    }
    
    // On Sale filter
    if (filter.onSale) {
      result = result.filter(product => product.originalPrice && product.originalPrice > product.price);
    }
    
    // In Stock filter
    if (filter.inStock) {
      result = result.filter(product => product.inStock);
    }
    
    // Apply sorting
    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'newest') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sortOption === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredProducts(result);
  }, [products, filter, sortOption]);
  
  return (
    <div className="bg-cream-50">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-heading mb-2">
            {categoryNames[categoryId || ''] || 'Products'}
          </h1>
          <p className="text-navy-500">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter sidebar (desktop) */}
          <FilterSidebar 
            filter={filter} 
            setFilter={setFilter} 
            isMobileOpen={isMobileFilterOpen}
            onCloseMobile={() => setIsMobileFilterOpen(false)}
          />
          
          <div className="flex-1">
            {/* Top controls */}
            <div className="flex flex-wrap gap-4 justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
              {/* Filter button (mobile) */}
              <button 
                onClick={() => setIsMobileFilterOpen(true)}
                className="flex items-center space-x-2 lg:hidden"
              >
                <Filter size={18} />
                <span>Filters</span>
              </button>
              
              {/* Sorting options */}
              <div className="flex items-center">
                <span className="text-sm text-navy-500 mr-2">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-white border border-navy-200 rounded py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-navy-300"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-navy-400" />
                </div>
              </div>
              
              {/* View switcher */}
              <div className="hidden md:flex items-center space-x-2">
                <button className="p-2 rounded bg-navy-50">
                  <GridIcon size={18} />
                </button>
                <button className="p-2 rounded hover:bg-navy-50">
                  <List size={18} />
                </button>
              </div>
            </div>
            
            {/* Products */}
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="bg-white p-10 rounded-lg text-center">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-navy-500 mb-6">Try adjusting your filters to find what you're looking for</p>
                <button 
                  onClick={() => setFilter({
                    priceRange: [0, 500],
                    colors: [],
                    sizes: [],
                    onSale: false,
                    inStock: true,
                  })}
                  className="btn btn-outline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;