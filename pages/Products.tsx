
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Search, Filter, ShoppingCart, Check, Tag, Info, ArrowUpRight } from 'lucide-react';

const Products: React.FC = () => {
  const location = useLocation();
  const { products, categories, addToCart } = useApp();
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
                          p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search Header */}
      <div className="bg-primary pt-12 pb-24 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Find Educational Solutions</h1>
        <div className="max-w-3xl mx-auto relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={24} />
          <input 
            type="text" 
            placeholder="Search STEM kits, furniture, printing services..." 
            className="w-full pl-14 pr-6 py-5 rounded-2xl shadow-2xl outline-none text-lg focus:ring-4 focus:ring-white/20 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-32">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Filter size={20} className="text-primary" /> Shop by Category
              </h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl transition-all font-bold ${selectedCategory === 'all' ? 'bg-primary text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  All Products <ArrowUpRight size={14} className="opacity-50" />
                </button>
                {categories.map(c => (
                  <button 
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl transition-all ${selectedCategory === c.id ? 'bg-primary text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <div>
                      <div className="font-bold">{c.name}</div>
                      <div className={`text-[10px] uppercase tracking-wider ${selectedCategory === c.id ? 'text-blue-100' : 'text-gray-400'}`}>
                        {c.subcategories.length} Types
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t space-y-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pricing Policy</h4>
                <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl text-xs text-blue-800">
                  <Info size={16} className="shrink-0" />
                  <p>Bulk institutional discounts are applied at checkout automatically for qualifying orders.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3 pb-24">
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-500 font-medium">{filteredProducts.length} Results Found</p>
              <div className="flex gap-2 text-sm">
                <span className="text-gray-400">Sort by:</span>
                <select className="bg-transparent font-bold text-primary outline-none">
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(p => (
                  <div key={p.id} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative">
                    <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      
                      {/* Status Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <div className="bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold text-primary shadow-lg uppercase tracking-widest">
                          {p.subcategory}
                        </div>
                        {p.stockStatus === 'Low Stock' && (
                          <div className="bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-md">
                            LIMITED STOCK
                          </div>
                        )}
                      </div>

                      {p.isFeatured && (
                        <div className="absolute top-4 right-4 bg-accent text-white p-2 rounded-full shadow-lg">
                          <Tag size={14} />
                        </div>
                      )}
                    </div>

                    <div className="p-7 flex-grow flex flex-col">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {p.tags?.map(tag => (
                          <span key={tag} className="text-[9px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded uppercase">{tag}</span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors">{p.name}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-6 flex-grow">{p.description}</p>
                      
                      <div className="flex items-center justify-between pt-6 border-t mt-auto">
                        <div className="flex flex-col">
                          <span className="text-2xl font-black text-primary">
                            {p.price ? `₹${p.price.toLocaleString()}` : 'Custom Quote'}
                          </span>
                          <span className="text-[10px] font-bold text-gray-400">Excl. GST @ {p.gstRate}%</span>
                        </div>
                        <button 
                          onClick={() => handleAddToCart(p)}
                          className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all shadow-lg ${addedId === p.id ? 'bg-accent text-white scale-95' : 'bg-primary text-white hover:bg-blue-800'}`}
                        >
                          {addedId === p.id ? <Check size={20} /> : <ShoppingCart size={20} />}
                          {addedId === p.id ? 'Added' : 'Order'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-[3rem] py-32 text-center border-2 border-dashed border-gray-200">
                <Search size={64} className="mx-auto text-gray-200 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No matching solutions</h3>
                <p className="text-gray-500 max-w-sm mx-auto">Try adjusting your filters or search terms. Our support team can also help you source specific items.</p>
                <Link to="/contact" className="inline-block mt-8 text-primary font-bold hover:underline">Speak with an Expert</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
