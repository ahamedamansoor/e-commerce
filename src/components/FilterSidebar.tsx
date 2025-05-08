import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { FilterOptions } from '../types';

interface FilterSidebarProps {
  filter: FilterOptions;
  setFilter: React.Dispatch<React.SetStateAction<FilterOptions>>;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  filter, 
  setFilter, 
  isMobileOpen,
  onCloseMobile
}) => {
  const [priceExpanded, setPriceExpanded] = useState(true);
  const [colorsExpanded, setColorsExpanded] = useState(true);
  const [sizesExpanded, setSizesExpanded] = useState(true);
  
  const colors = [
    { id: 'black', name: 'Black' },
    { id: 'white', name: 'White' },
    { id: 'blue', name: 'Blue' },
    { id: 'red', name: 'Red' },
    { id: 'green', name: 'Green' },
    { id: 'yellow', name: 'Yellow' },
    { id: 'brown', name: 'Brown' },
    { id: 'gray', name: 'Gray' },
  ];
  
  const sizes = [
    { id: 'xs', name: 'XS' },
    { id: 's', name: 'S' },
    { id: 'm', name: 'M' },
    { id: 'l', name: 'L' },
    { id: 'xl', name: 'XL' },
    { id: 'xxl', name: 'XXL' },
  ];
  
  const toggleColor = (color: string) => {
    setFilter(prev => {
      const newColors = prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color];
      
      return { ...prev, colors: newColors };
    });
  };
  
  const toggleSize = (size: string) => {
    setFilter(prev => {
      const newSizes = prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size];
      
      return { ...prev, sizes: newSizes };
    });
  };
  
  const toggleOnSale = () => {
    setFilter(prev => ({ ...prev, onSale: !prev.onSale }));
  };
  
  const toggleInStock = () => {
    setFilter(prev => ({ ...prev, inStock: !prev.inStock }));
  };
  
  const setPriceRange = (min: number, max: number) => {
    setFilter(prev => ({ ...prev, priceRange: [min, max] }));
  };
  
  const clearAllFilters = () => {
    setFilter({
      priceRange: [0, 500],
      colors: [],
      sizes: [],
      onSale: false,
      inStock: true,
    });
  };

  return (
    <aside className={`
      ${isMobileOpen ? 'fixed inset-0 z-50 bg-white' : 'hidden lg:block'} 
      lg:sticky lg:top-24 lg:h-[calc(100vh-100px)] lg:overflow-y-auto
      p-5 lg:w-64
    `}>
      {/* Mobile header */}
      <div className="flex items-center justify-between mb-6 lg:hidden">
        <h2 className="text-xl font-medium">Filters</h2>
        <button onClick={onCloseMobile} className="p-2">
          <X size={24} />
        </button>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Filters</h3>
        <button 
          onClick={clearAllFilters}
          className="text-sm text-navy-500 hover:text-navy-900 transition-colors"
        >
          Clear all
        </button>
      </div>
      
      {/* Price Filter */}
      <div className="mb-6 border-b border-navy-100 pb-6">
        <button 
          onClick={() => setPriceExpanded(!priceExpanded)}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <h4 className="text-md font-medium">Price Range</h4>
          <ChevronDown 
            size={18} 
            className={`transition-transform ${priceExpanded ? 'rotate-180' : ''}`}
          />
        </button>
        
        {priceExpanded && (
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-navy-500">${filter.priceRange[0]}</span>
              <span className="text-sm text-navy-500">${filter.priceRange[1]}</span>
            </div>
            
            <input
              type="range"
              min="0"
              max="500"
              value={filter.priceRange[1]}
              onChange={(e) => setPriceRange(filter.priceRange[0], parseInt(e.target.value))}
              className="w-full"
            />
            
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-xs text-navy-500 mb-1 block">Min</label>
                <input
                  type="number"
                  value={filter.priceRange[0]}
                  onChange={(e) => setPriceRange(Math.max(0, parseInt(e.target.value) || 0), filter.priceRange[1])}
                  className="w-full p-2 border border-navy-200 rounded text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs text-navy-500 mb-1 block">Max</label>
                <input
                  type="number"
                  value={filter.priceRange[1]}
                  onChange={(e) => setPriceRange(filter.priceRange[0], Math.max(filter.priceRange[0], parseInt(e.target.value) || 0))}
                  className="w-full p-2 border border-navy-200 rounded text-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Colors Filter */}
      <div className="mb-6 border-b border-navy-100 pb-6">
        <button 
          onClick={() => setColorsExpanded(!colorsExpanded)}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <h4 className="text-md font-medium">Colors</h4>
          <ChevronDown 
            size={18} 
            className={`transition-transform ${colorsExpanded ? 'rotate-180' : ''}`}
          />
        </button>
        
        {colorsExpanded && (
          <div className="grid grid-cols-4 gap-2">
            {colors.map(color => (
              <button
                key={color.id}
                onClick={() => toggleColor(color.id)}
                className={`
                  flex flex-col items-center p-2 rounded
                  ${filter.colors.includes(color.id) ? 'bg-navy-50 ring-1 ring-navy-200' : ''}
                `}
              >
                <span 
                  className="w-6 h-6 rounded-full mb-1" 
                  style={{ backgroundColor: color.id }}
                ></span>
                <span className="text-xs">{color.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Sizes Filter */}
      <div className="mb-6 border-b border-navy-100 pb-6">
        <button 
          onClick={() => setSizesExpanded(!sizesExpanded)}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <h4 className="text-md font-medium">Sizes</h4>
          <ChevronDown 
            size={18} 
            className={`transition-transform ${sizesExpanded ? 'rotate-180' : ''}`}
          />
        </button>
        
        {sizesExpanded && (
          <div className="grid grid-cols-3 gap-2">
            {sizes.map(size => (
              <button
                key={size.id}
                onClick={() => toggleSize(size.id)}
                className={`
                  py-2 border rounded text-sm
                  ${filter.sizes.includes(size.id) 
                    ? 'bg-navy-900 text-white border-navy-900' 
                    : 'border-navy-200 hover:border-navy-300'
                  }
                `}
              >
                {size.name}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Additional Filters */}
      <div className="space-y-4">
        <label className="custom-checkbox">
          <input 
            type="checkbox" 
            checked={filter.onSale}
            onChange={toggleOnSale}
          />
          <span className="checkmark"></span>
          On Sale
        </label>
        
        <label className="custom-checkbox">
          <input 
            type="checkbox" 
            checked={filter.inStock}
            onChange={toggleInStock}
          />
          <span className="checkmark"></span>
          In Stock Only
        </label>
      </div>
      
      {/* Apply button on mobile */}
      <div className="mt-8 lg:hidden">
        <button 
          onClick={onCloseMobile}
          className="w-full btn btn-primary"
        >
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

export default FilterSidebar;