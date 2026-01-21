
import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Phone, Search, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useApp();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-primary text-white py-2 px-4 text-sm flex justify-between items-center overflow-x-auto whitespace-nowrap">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={14} /> +91 9973707263</span>
          <span className="hidden sm:inline">| Serving Schools & Businesses Nationwide</span>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/admin" className="flex items-center gap-1 hover:text-secondary transition-colors font-medium">
            <Settings size={14} /> Admin Panel
          </Link>
          <span className="opacity-30">|</span>
          <Link to="/quote" className="hover:text-secondary transition-colors font-bold">Get Bulk Quote</Link>
        </div>
      </div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-primary leading-tight">ANAND PRINTEK</span>
              <span className="text-sm font-serif text-secondary tracking-widest uppercase">Enterprise</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-primary font-medium">Shop Catalog</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About</Link>
            <Link to="/quote" className="text-gray-700 hover:text-primary font-medium">Quotation</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-primary transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/products" className="bg-secondary text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-sm">
              Shop Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative p-2 text-gray-700">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top duration-300">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2 border-b">Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2 border-b">Products</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2 border-b">About Us</Link>
          <Link to="/admin" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2 border-b text-secondary">Admin Panel</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2">Contact</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="bg-primary text-white text-center py-3 rounded-lg font-bold">Shop Online</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
