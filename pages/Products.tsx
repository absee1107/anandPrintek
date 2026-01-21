
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { useApp } from '../context/AppContext';
import { Search, Filter, ShoppingCart, Info, Check } from 'lucide-react';

const Products: React.FC = () => {
  const location = useLocation();
  const { products, addToCart } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedId, setAddedId] = useState<string | null>(null);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat) setSelectedCategory(cat);
  }, [location]);

  const handleAddToCart = (p: any) => {
    addToCart(p);
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const filteredProducts = products.filter(p => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold text-primary mb-2">Our Solutions Catalog</h1>
            <p className="text-gray-600">Browse vibrant, high-quality products for your enterprise.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 w-full focus:ring-2 focus:ring-primary outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select 
              className="bg-white border border-gray-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary outline-none font-medium"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {CATEGORIES.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="hidden md:block space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Filter size={18} /> Filter by Category
              </h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === 'all' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  All Products
                </button>
                {CATEGORIES.map(c => (
                  <button 
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === c.id ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="md:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(p => (
                  <div key={p.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-xl transition-all flex flex-col h-full">
                    <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-primary shadow-sm uppercase tracking-widest">
                        {p.subcategory}
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{p.name}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">{p.description}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t mt-auto">
                        <span className="text-xl font-bold text-primary">
                          {p.price ? `₹${p.price.toLocaleString()}` : 'Custom Quote'}
                        </span>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleAddToCart(p)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all shadow-sm ${addedId === p.id ? 'bg-accent text-white scale-95' : 'bg-primary text-white hover:bg-blue-800'}`}
                          >
                            {addedId === p.id ? <Check size={18} /> : <ShoppingCart size={18} />}
                            {addedId === p.id ? 'Added' : 'Add'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-24 text-center border-2 border-dashed border-gray-200">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500">Try changing your search terms or category selection.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
