import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="text-2xl font-heading font-bold tracking-tight text-navy-900">
          LuxKids
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/category/men" className={`category-link ${location.pathname === '/category/men' ? 'active' : ''}`}>
            Men
          </Link>
          <Link to="/category/kids-clothing" className={`category-link ${location.pathname === '/category/kids-clothing' ? 'active' : ''}`}>
            Kids Clothing
          </Link>
          <Link to="/category/kids-toys" className={`category-link ${location.pathname === '/category/kids-toys' ? 'active' : ''}`}>
            Toys
          </Link>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-full hover:bg-navy-50 transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <Link to="/account" className="p-2 rounded-full hover:bg-navy-50 transition-colors">
            <User size={20} />
          </Link>
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-navy-50 transition-colors">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 text-xs font-medium text-white bg-gold-500 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link to="/cart" className="relative p-2">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 text-xs font-medium text-white bg-gold-500 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Search Bar (shown when isSearchOpen is true) */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-slide-up">
          <div className="container">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full p-3 pl-10 bg-navy-50 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-300"
                autoFocus
              />
              <Search size={18} className="absolute top-3.5 left-3 text-navy-400" />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-3 right-3 text-navy-400 hover:text-navy-600"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden animate-fade-in">
          <div className="container flex flex-col h-full py-8">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="text-2xl font-heading font-bold tracking-tight text-navy-900">
                LuxKids
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6 text-lg font-medium">
              <Link to="/category/men" className="py-2 border-b border-navy-100">
                Men
              </Link>
              <Link to="/category/kids-clothing" className="py-2 border-b border-navy-100">
                Kids Clothing
              </Link>
              <Link to="/category/kids-toys" className="py-2 border-b border-navy-100">
                Toys
              </Link>
              <Link to="/account" className="py-2 border-b border-navy-100">
                My Account
              </Link>
            </nav>
            
            <div className="mt-auto">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full p-3 pl-10 bg-navy-50 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-300"
                />
                <Search size={18} className="absolute top-3.5 left-3 text-navy-400" />
              </div>
              
              <Link 
                to="/cart" 
                className="w-full flex items-center justify-center py-3 text-white bg-navy-900 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag size={18} className="mr-2" />
                View Cart {totalItems > 0 && `(${totalItems})`}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;