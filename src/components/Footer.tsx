import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-heading font-bold tracking-tight text-white mb-4 inline-block">
              LuxKids
            </Link>
            <p className="text-navy-200 mb-6">Premium clothing for men and children, along with the finest selection of toys.</p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Shop Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/category/men" className="text-navy-200 hover:text-white transition-colors">Men's Clothing</Link></li>
              <li><Link to="/category/kids-clothing" className="text-navy-200 hover:text-white transition-colors">Kids' Clothing</Link></li>
              <li><Link to="/category/kids-toys" className="text-navy-200 hover:text-white transition-colors">Toys</Link></li>
              <li><Link to="/new-arrivals" className="text-navy-200 hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/sale" className="text-navy-200 hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          {/* Help Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Help</h3>
            <ul className="space-y-3">
              <li><Link to="/customer-service" className="text-navy-200 hover:text-white transition-colors">Customer Service</Link></li>
              <li><Link to="/track-order" className="text-navy-200 hover:text-white transition-colors">Track Your Order</Link></li>
              <li><Link to="/shipping" className="text-navy-200 hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="text-navy-200 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faqs" className="text-navy-200 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Stay Updated</h3>
            <p className="text-navy-200 mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 pl-10 bg-navy-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 placeholder-navy-400"
              />
              <Mail size={18} className="absolute top-3.5 left-3 text-navy-400" />
            </div>
            <button className="w-full py-3 bg-gold-500 text-navy-900 font-medium rounded-md hover:bg-gold-400 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between">
          <p className="text-navy-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LuxKids. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-navy-300">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;