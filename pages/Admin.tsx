
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Settings, 
  Plus, 
  Edit, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Users,
  Image as ImageIcon,
  X,
  Trash2,
  Star,
  ListPlus,
  Layers,
  ArrowRight,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

const Admin: React.FC = () => {
  const { products, orders, categories, updateProduct, addProduct, deleteProduct, updateCategory, addCategory, deleteCategory } = useApp();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'products' | 'categories'>('dashboard');
  
  // Modals
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [editingCategory, setEditingCategory] = useState<any>(null);

  // Stats calculation
  const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0);
  const lowStockCount = products.filter(p => p.stockStatus === 'Low Stock').length;

  const openAddProductModal = () => {
    setEditingProduct({
      id: `PROD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      name: '',
      category: categories[0]?.id || 'school',
      subcategory: '',
      price: 0,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
      description: '',
      features: [],
      isFeatured: false,
      gstRate: 18,
      hsnCode: '',
      stockStatus: 'In Stock',
      tags: []
    });
    setIsProductModalOpen(true);
  };

  const openEditProductModal = (product: any) => {
    setEditingProduct({ ...product });
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = products.find(p => p.id === editingProduct.id);
    if (existing) {
      updateProduct(editingProduct);
    } else {
      addProduct(editingProduct);
    }
    setIsProductModalOpen(false);
  };

  const openAddCategoryModal = () => {
    setEditingCategory({
      id: `CAT-${Math.random().toString(36).substr(2, 4).toLowerCase()}`,
      name: '',
      icon: 'Printer',
      subcategories: [],
      description: ''
    });
    setIsCategoryModalOpen(true);
  };

  const openEditCategoryModal = (cat: any) => {
    setEditingCategory({ ...cat });
    setIsCategoryModalOpen(true);
  };

  const handleSaveCategory = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = categories.find(c => c.id === editingCategory.id);
    if (existing) {
      updateCategory(editingCategory);
    } else {
      addCategory(editingCategory);
    }
    setIsCategoryModalOpen(false);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex">
      {/* Improvised Sidebar */}
      <div className="w-72 bg-white border-r border-gray-200 p-8 hidden md:block shrink-0 h-screen sticky top-0 shadow-sm">
        <div className="mb-12">
          <h2 className="text-xl font-display font-black text-primary flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl text-white">
              <Settings size={20} />
            </div>
            ADMIN HUB
          </h2>
          <p className="text-[10px] font-bold text-gray-400 mt-2 tracking-widest">ENTERPRISE SYSTEM V2.5</p>
        </div>
        
        <nav className="space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')} 
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all font-bold ${activeTab === 'dashboard' ? 'bg-primary text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <div className="flex items-center gap-3"><LayoutDashboard size={20} /> Overview</div>
            <ChevronRight size={14} className={activeTab === 'dashboard' ? 'opacity-100' : 'opacity-0'} />
          </button>
          
          <button 
            onClick={() => setActiveTab('orders')} 
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all font-bold ${activeTab === 'orders' ? 'bg-primary text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <div className="flex items-center gap-3"><ShoppingCart size={20} /> Orders</div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === 'orders' ? 'bg-white text-primary' : 'bg-gray-100 text-gray-500'}`}>{orders.length}</span>
          </button>

          <button 
            onClick={() => setActiveTab('products')} 
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all font-bold ${activeTab === 'products' ? 'bg-primary text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <div className="flex items-center gap-3"><Package size={20} /> Inventory</div>
            <ChevronRight size={14} className={activeTab === 'products' ? 'opacity-100' : 'opacity-0'} />
          </button>

          <button 
            onClick={() => setActiveTab('categories')} 
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all font-bold ${activeTab === 'categories' ? 'bg-primary text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <div className="flex items-center gap-3"><Layers size={20} /> Categories</div>
            <ChevronRight size={14} className={activeTab === 'categories' ? 'opacity-100' : 'opacity-0'} />
          </button>
        </nav>

        <div className="absolute bottom-10 left-8 right-8 p-6 bg-blue-50 rounded-3xl">
          <p className="text-xs text-blue-800 font-bold mb-2">Technical Support</p>
          <p className="text-[10px] text-blue-600 mb-4">Internal admin issues? Contact technical expert.</p>
          <button className="w-full bg-white text-primary py-2 rounded-xl text-xs font-bold shadow-sm">+91 8130985250</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-6 md:p-12 overflow-y-auto max-w-7xl mx-auto">
        
        {activeTab === 'dashboard' && (
          <div className="space-y-12 animate-in fade-in duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl font-display font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500 font-medium">Monitoring enterprise activity across India.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-gray-400">System Status: Optimal</span>
                </div>
              </div>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 text-primary rounded-2xl"><TrendingUp size={24} /></div>
                  <span className="text-[10px] font-bold text-accent">+12.5%</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900">₹{totalRevenue.toLocaleString()}</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Total Revenue</p>
              </div>
              
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-orange-50 text-secondary rounded-2xl"><ShoppingCart size={24} /></div>
                  <span className="text-[10px] font-bold text-gray-400">Live</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900">{orders.length}</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Order Volume</p>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden">
                {lowStockCount > 0 && <div className="absolute top-0 right-0 w-2 h-2 bg-red-500"></div>}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-50 text-accent rounded-2xl"><Package size={24} /></div>
                  <span className={`text-[10px] font-bold ${lowStockCount > 0 ? 'text-red-500' : 'text-gray-400'}`}>
                    {lowStockCount} Low Stock
                  </span>
                </div>
                <h3 className="text-3xl font-black text-gray-900">{products.length}</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Inventory SKU</p>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl"><Users size={24} /></div>
                  <span className="text-[10px] font-bold text-gray-400">Schools</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900">542</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Partner Entities</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Recent Orders Card */}
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold">Recent Fulfillment</h3>
                  <button onClick={() => setActiveTab('orders')} className="text-xs font-bold text-primary hover:underline flex items-center gap-1">View All <ArrowRight size={14} /></button>
                </div>
                {orders.length > 0 ? (
                  <div className="space-y-6">
                    {orders.slice(0, 5).map(order => (
                      <div key={order.id} className="flex items-center justify-between p-5 bg-gray-50 rounded-3xl group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary font-bold text-xs shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                            {order.customerName.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-sm text-gray-900">{order.customerName}</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{order.organization}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-black text-primary text-sm">₹{order.total.toLocaleString()}</p>
                          <span className="text-[9px] px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full font-black uppercase">{order.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100">
                    <AlertCircle className="mx-auto text-gray-300 mb-4" size={40} />
                    <p className="text-gray-400 font-bold">Waiting for organic orders...</p>
                  </div>
                )}
              </div>

              {/* Inventory Management Card */}
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold">Inventory Watchlist</h3>
                  <button onClick={() => setActiveTab('products')} className="text-xs font-bold text-primary hover:underline flex items-center gap-1">Manage Catalog <ArrowRight size={14} /></button>
                </div>
                <div className="space-y-6">
                  {products.slice(0, 4).map(p => (
                    <div key={p.id} className="flex items-center gap-4 group">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm shrink-0">
                        <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-1">
                          <p className="text-sm font-bold text-gray-900">{p.name}</p>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${p.stockStatus === 'Low Stock' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-accent'}`}>
                            {p.stockStatus}
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full transition-all duration-1000 ${p.stockStatus === 'Low Stock' ? 'bg-red-500 w-[15%]' : 'bg-accent w-[85%]'}`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={openAddProductModal}
                  className="w-full mt-10 py-4 border-2 border-dashed border-gray-200 rounded-3xl text-gray-400 font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  <Plus size={18} /> Add Quick Product
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- PRODUCTS TAB --- */}
        {activeTab === 'products' && (
          <div className="space-y-10 animate-in slide-in-from-right-12 duration-500">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl font-display font-bold text-gray-900">Inventory Manager</h1>
                <p className="text-gray-500 font-medium">Detailed catalog of all enterprise assets and services.</p>
              </div>
              <button onClick={openAddProductModal} className="bg-primary text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-bold hover:shadow-2xl hover:-translate-y-1 transition-all">
                <Plus size={24} /> New Product
              </button>
            </header>

            <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50/50">
                    <tr className="border-b text-gray-400 text-[10px] uppercase tracking-widest">
                      <th className="px-8 py-6 font-black">Item Preview</th>
                      <th className="px-8 py-6 font-black">Details</th>
                      <th className="px-8 py-6 font-black">Categorization</th>
                      <th className="px-8 py-6 font-black">Commercials</th>
                      <th className="px-8 py-6 font-black text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {products.map(p => (
                      <tr key={p.id} className="hover:bg-blue-50/30 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="w-20 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                            <img src={p.image} className="w-full h-full object-cover" alt="" />
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <p className="font-bold text-gray-900">{p.name}</p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">ID: {p.id}</p>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-primary">{p.category}</span>
                            <span className="text-[10px] text-gray-400">{p.subcategory}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex flex-col">
                            <span className="font-black text-gray-900">₹{p.price?.toLocaleString()}</span>
                            <span className="text-[9px] text-gray-400 font-bold uppercase">HSN: {p.hsnCode}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => openEditProductModal(p)} className="p-3 bg-white text-primary rounded-xl shadow-sm border border-gray-100 hover:bg-primary hover:text-white transition-all"><Edit size={16} /></button>
                            <button onClick={() => deleteProduct(p.id)} className="p-3 bg-white text-red-500 rounded-xl shadow-sm border border-gray-100 hover:bg-red-500 hover:text-white transition-all"><Trash2 size={16} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* --- CATEGORIES TAB --- */}
        {activeTab === 'categories' && (
          <div className="space-y-10 animate-in slide-in-from-right-12 duration-500">
             <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl font-display font-bold text-gray-900">Database Schema</h1>
                <p className="text-gray-500 font-medium">Manage top-level organizational categories and sub-sectors.</p>
              </div>
              <button onClick={openAddCategoryModal} className="bg-primary text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-bold hover:shadow-2xl transition-all">
                <Layers size={24} /> Add Category
              </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map(cat => (
                <div key={cat.id} className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-blue-50 text-primary rounded-3xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-lg shadow-blue-50">
                       <ImageIcon size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{cat.name}</h3>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{cat.id}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-8">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subcategories</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.subcategories.map(sub => (
                        <span key={sub} className="text-[10px] font-bold bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-100">{sub}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 border-t pt-6">
                    <button onClick={() => openEditCategoryModal(cat)} className="flex-grow py-3 bg-gray-50 text-gray-500 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"><Edit size={16} /> Edit</button>
                    <button onClick={() => deleteCategory(cat.id)} className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all"><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- ORDERS TAB --- */}
        {activeTab === 'orders' && (
           <div className="space-y-10 animate-in slide-in-from-right-12 duration-500">
             <header>
               <h1 className="text-4xl font-display font-bold text-gray-900">Order Ledger</h1>
               <p className="text-gray-500 font-medium">Real-time fulfillment and billing tracking.</p>
             </header>

             <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr className="border-b text-gray-400 text-[10px] uppercase font-black tracking-widest">
                      <th className="px-8 py-6">Reference</th>
                      <th className="px-8 py-6">Institution</th>
                      <th className="px-8 py-6">Value</th>
                      <th className="px-8 py-6">Payment</th>
                      <th className="px-8 py-6">Fulfillment</th>
                      <th className="px-8 py-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {orders.map(o => (
                      <tr key={o.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6">
                          <p className="font-bold text-primary">{o.id}</p>
                          <p className="text-[10px] text-gray-400">{o.date}</p>
                        </td>
                        <td className="px-8 py-6">
                           <p className="font-bold text-gray-900">{o.customerName}</p>
                           <p className="text-[10px] font-bold text-secondary uppercase">{o.organization}</p>
                        </td>
                        <td className="px-8 py-6">
                           <p className="font-black text-gray-900">₹{o.total.toLocaleString()}</p>
                           <p className="text-[10px] text-gray-400">{o.items.length} Unique SKUs</p>
                        </td>
                        <td className="px-8 py-6">
                          <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${o.paymentStatus === 'Paid' ? 'bg-green-100 text-accent' : 'bg-red-100 text-red-600'}`}>{o.paymentStatus}</span>
                        </td>
                        <td className="px-8 py-6">
                           <select className="bg-gray-100 border-none text-[10px] font-black uppercase px-3 py-1 rounded-full outline-none focus:ring-2 focus:ring-primary">
                             <option>Pending</option>
                             <option>Processing</option>
                             <option>Shipped</option>
                             <option>Delivered</option>
                           </select>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="text-primary font-bold text-xs hover:underline">Invoice</button>
                        </td>
                      </tr>
                    ))}
                    {orders.length === 0 && (
                      <tr><td colSpan={6} className="py-24 text-center text-gray-400 font-bold">Waiting for sales activity...</td></tr>
                    )}
                  </tbody>
                </table>
             </div>
           </div>
        )}
      </div>

      {/* --- PRODUCT MODAL --- */}
      {isProductModalOpen && editingProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[3rem] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in duration-300 flex flex-col">
            <div className="p-10 border-b flex justify-between items-center bg-white z-10 shrink-0">
              <div>
                <h2 className="text-3xl font-display font-bold text-primary">Modify Inventory Record</h2>
                <p className="text-sm text-gray-400 font-medium">Ensure HSN and GST details are compliant with government standards.</p>
              </div>
              <button onClick={() => setIsProductModalOpen(false)} className="bg-gray-100 p-3 rounded-2xl text-gray-400 hover:text-red-500 transition-colors"><X /></button>
            </div>
            
            <form onSubmit={handleSaveProduct} className="p-10 space-y-10 overflow-y-auto flex-grow bg-gray-50/30">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Product Title</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-primary/5 transition-all"
                      placeholder="e.g. Advanced STEM Kit Pro"
                      value={editingProduct.name}
                      onChange={e => setEditingProduct({...editingProduct, name: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Commercial Value (INR)</label>
                      <input 
                        required
                        type="number" 
                        className="w-full px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-primary/5 transition-all"
                        placeholder="0.00"
                        value={editingProduct.price}
                        onChange={e => setEditingProduct({...editingProduct, price: parseInt(e.target.value) || 0})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">HSN Code</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-primary/5 transition-all"
                        placeholder="e.g. 9023"
                        value={editingProduct.hsnCode}
                        onChange={e => setEditingProduct({...editingProduct, hsnCode: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Product Visual</label>
                  <div className="aspect-square rounded-[2rem] bg-white border-2 border-dashed border-gray-200 overflow-hidden group relative cursor-pointer">
                    {editingProduct.image ? (
                      <>
                        <img src={editingProduct.image} className="w-full h-full object-cover transition-opacity group-hover:opacity-20" alt="" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <button onClick={() => {}} className="bg-primary text-white p-4 rounded-2xl shadow-xl"><ImageIcon /></button>
                        </div>
                      </>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-gray-300 gap-2">
                        <ImageIcon size={40} />
                        <span className="text-[10px] font-bold uppercase">Click to upload</span>
                      </div>
                    )}
                  </div>
                  <input 
                    className="w-full mt-4 bg-transparent text-[10px] outline-none text-gray-400" 
                    placeholder="External URL" 
                    value={editingProduct.image}
                    onChange={e => setEditingProduct({...editingProduct, image: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Primary Category</label>
                  <select 
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-primary/5 bg-white font-bold text-gray-700"
                    value={editingProduct.category}
                    onChange={e => setEditingProduct({...editingProduct, category: e.target.value})}
                  >
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Sub-Sector</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-primary/5 transition-all"
                    placeholder="e.g. Robotics"
                    value={editingProduct.subcategory}
                    onChange={e => setEditingProduct({...editingProduct, subcategory: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">GST Slab (%)</label>
                  <select 
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-primary/5 bg-white font-bold"
                    value={editingProduct.gstRate}
                    onChange={e => setEditingProduct({...editingProduct, gstRate: parseInt(e.target.value)})}
                  >
                    <option value={5}>5% Slab</option>
                    <option value={12}>12% Slab</option>
                    <option value={18}>18% Slab</option>
                    <option value={28}>28% Slab</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Stock Status</label>
                  <select 
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-primary/5 bg-white font-bold"
                    value={editingProduct.stockStatus}
                    onChange={e => setEditingProduct({...editingProduct, stockStatus: e.target.value})}
                  >
                    <option value="In Stock">Active (In Stock)</option>
                    <option value="Low Stock">Warning (Low Stock)</option>
                    <option value="Out of Stock">Hidden (Out of Stock)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Marketplace Description</label>
                <textarea 
                  rows={5} 
                  className="w-full px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-primary/5 transition-all"
                  placeholder="Summarize the core institutional value..."
                  value={editingProduct.description}
                  onChange={e => setEditingProduct({...editingProduct, description: e.target.value})}
                ></textarea>
              </div>

              <div className="flex gap-4 p-8 bg-white border border-gray-100 rounded-[2rem] sticky bottom-0 z-10 shadow-xl shadow-gray-200/50">
                <button type="button" onClick={() => setIsProductModalOpen(false)} className="flex-grow py-5 rounded-2xl font-black text-gray-400 hover:bg-gray-50 transition-colors uppercase tracking-widest">Discard Changes</button>
                <button type="submit" className="flex-grow bg-primary text-white py-5 rounded-2xl font-black hover:bg-blue-800 transition-all shadow-xl shadow-blue-100 uppercase tracking-widest">
                  {products.some(p => p.id === editingProduct.id) ? 'Commit Updates' : 'Publish to Catalog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- CATEGORY MODAL --- */}
      {isCategoryModalOpen && editingCategory && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[3rem] shadow-2xl max-w-2xl w-full animate-in zoom-in duration-300">
            <div className="p-10 border-b flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-display font-bold text-primary">Modify Database Schema</h2>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Structural Node: {editingCategory.id}</p>
              </div>
              <button onClick={() => setIsCategoryModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors"><X /></button>
            </div>
            
            <form onSubmit={handleSaveCategory} className="p-10 space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Category Label</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-primary/5 transition-all"
                  placeholder="e.g. STEM Discovery"
                  value={editingCategory.name}
                  onChange={e => setEditingCategory({...editingCategory, name: e.target.value})}
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Description</label>
                <textarea 
                  rows={3} 
                  className="w-full px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-primary/5 transition-all"
                  placeholder="Purpose of this category sector..."
                  value={editingCategory.description}
                  onChange={e => setEditingCategory({...editingCategory, description: e.target.value})}
                ></textarea>
              </div>

              <div className="flex gap-4 pt-6">
                <button type="button" onClick={() => setIsCategoryModalOpen(false)} className="flex-grow py-5 rounded-2xl font-black text-gray-400 hover:bg-gray-50 transition-colors uppercase tracking-widest">Cancel</button>
                <button type="submit" className="flex-grow bg-primary text-white py-5 rounded-2xl font-black hover:bg-blue-800 transition-all shadow-xl shadow-blue-100 uppercase tracking-widest">
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
