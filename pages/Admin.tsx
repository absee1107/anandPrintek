
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../constants';
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
  ListPlus
} from 'lucide-react';

const Admin: React.FC = () => {
  const { products, orders, updateProduct, addProduct, deleteProduct } = useApp();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'products'>('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  // Stats calculation
  const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0);

  const openAddModal = () => {
    setEditingProduct({
      id: `PROD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      name: '',
      category: 'school',
      subcategory: 'Educational Toys',
      price: 0,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
      description: '',
      features: [],
      isFeatured: false
    });
    setIsModalOpen(true);
  };

  const openEditModal = (product: any) => {
    setEditingProduct({ 
      ...product, 
      features: product.features || [],
      isFeatured: !!product.isFeatured 
    });
    setIsModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = products.find(p => p.id === editingProduct.id);
    if (existing) {
      updateProduct(editingProduct);
    } else {
      addProduct(editingProduct);
    }
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const addFeature = () => {
    setEditingProduct({
      ...editingProduct,
      features: [...(editingProduct.features || []), '']
    });
  };

  const removeFeature = (index: number) => {
    const newFeatures = [...(editingProduct.features || [])];
    newFeatures.splice(index, 1);
    setEditingProduct({ ...editingProduct, features: newFeatures });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...(editingProduct.features || [])];
    newFeatures[index] = value;
    setEditingProduct({ ...editingProduct, features: newFeatures });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-primary text-white p-6 hidden md:block shrink-0 h-screen sticky top-0">
        <h2 className="text-xl font-bold mb-10 flex items-center gap-2">
          <Settings size={24} /> Admin Hub
        </h2>
        <nav className="space-y-4">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-white/10' : 'hover:bg-white/5'}`}>
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'orders' ? 'bg-white/10' : 'hover:bg-white/5'}`}>
            <ShoppingCart size={20} /> Live Orders
          </button>
          <button onClick={() => setActiveTab('products')} className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'products' ? 'bg-white/10' : 'hover:bg-white/5'}`}>
            <Package size={20} /> Inventory Manager
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4 md:p-8 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-3xl font-bold text-gray-900">Enterprise Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Total Sales</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-primary">₹{totalRevenue.toLocaleString()}</h3>
                  <TrendingUp className="text-accent" size={24} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Total Orders</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-primary">{orders.length}</h3>
                  <ShoppingCart className="text-secondary" size={24} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Inventory</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-primary">{products.length}</h3>
                  <Package className="text-blue-400" size={24} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Live Clients</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-primary">124</h3>
                  <Users className="text-purple-400" size={24} />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-6">Recent Live Orders</h3>
                {orders.length > 0 ? (
                  <div className="space-y-4">
                    {orders.slice(0, 5).map(order => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div>
                          <p className="font-bold text-sm">{order.customerName}</p>
                          <p className="text-xs text-gray-500">{order.organization} • {order.id}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary text-sm">₹{order.total.toLocaleString()}</p>
                          <span className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full font-bold uppercase">{order.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-center py-10">No orders placed yet.</p>
                )}
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-6">Top Product Inventory</h3>
                <div className="space-y-6">
                  {products.slice(0, 4).map(p => (
                    <div key={p.id} className="flex items-center gap-4">
                      <img src={p.image} className="w-12 h-12 rounded-lg object-cover" alt="" />
                      <div className="flex-grow">
                        <p className="text-sm font-bold">{p.name}</p>
                        <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1">
                          <div className="bg-accent h-full rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-gray-500">Active</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-in slide-in-from-right-4">
            <h1 className="text-2xl font-bold mb-8">Comprehensive Order Table</h1>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b text-gray-400 text-sm uppercase tracking-wider">
                    <th className="pb-4 font-medium">Order ID</th>
                    <th className="pb-4 font-medium">Customer</th>
                    <th className="pb-4 font-medium">Items</th>
                    <th className="pb-4 font-medium">Total</th>
                    <th className="pb-4 font-medium">Status</th>
                    <th className="pb-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {orders.map(o => (
                    <tr key={o.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 font-bold text-gray-900">{o.id}</td>
                      <td className="py-4">
                        <p className="text-sm font-bold">{o.customerName}</p>
                        <p className="text-xs text-gray-500">{o.organization}</p>
                      </td>
                      <td className="py-4 text-sm">{o.items.length} Item(s)</td>
                      <td className="py-4 font-bold text-primary">₹{o.total.toLocaleString()}</td>
                      <td className="py-4">
                        <span className="text-[10px] px-2 py-1 bg-accent/10 text-accent rounded-full font-bold uppercase">{o.status}</span>
                      </td>
                      <td className="py-4">
                        <button className="text-primary hover:underline text-sm font-bold">Details</button>
                      </td>
                    </tr>
                  ))}
                  {orders.length === 0 && (
                    <tr><td colSpan={6} className="py-10 text-center text-gray-400">Waiting for live orders...</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-8 animate-in slide-in-from-right-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold">Inventory Management</h1>
                <p className="text-sm text-gray-500">View and update your vibrant product catalog.</p>
              </div>
              <button 
                onClick={openAddModal}
                className="bg-primary text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-100"
              >
                <Plus size={20} /> Add New Product
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map(p => (
                <div key={p.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col group overflow-hidden relative">
                  {p.isFeatured && (
                    <div className="absolute top-2 left-2 z-10 bg-secondary text-white p-1 rounded-full shadow-md" title="Featured Product">
                      <Star size={14} fill="currentColor" />
                    </div>
                  )}
                  <div className="relative aspect-video bg-gray-100">
                    <img src={p.image} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" alt="" />
                    <div className="absolute top-2 right-2 flex gap-2">
                       <button onClick={() => openEditModal(p)} className="bg-white/90 backdrop-blur p-2 rounded-lg shadow-sm text-primary hover:text-secondary transition-colors">
                        <Edit size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{p.name}</h3>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-3">{p.subcategory}</p>
                    <div className="mt-auto flex justify-between items-center border-t pt-4">
                      <span className="font-bold text-primary">₹{p.price?.toLocaleString()}</span>
                      <div className="flex gap-2">
                        <button onClick={() => deleteProduct(p.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                        <button onClick={() => openEditModal(p)} className="text-xs font-bold text-gray-400 hover:text-primary underline">Manage</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {products.length === 0 && (
                <div className="col-span-full py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200 text-center">
                   <Package size={48} className="mx-auto text-gray-300 mb-4" />
                   <p className="text-gray-500 font-bold">No products in inventory. Start adding some!</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Product Modal (Add/Edit) */}
      {isModalOpen && editingProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in duration-300 flex flex-col">
            <div className="p-6 border-b flex justify-between items-center bg-white z-10 shrink-0">
              <h2 className="text-2xl font-bold text-primary">{products.some(p => p.id === editingProduct.id) ? 'Edit Product' : 'Add New Product'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors"><X /></button>
            </div>
            
            <form onSubmit={handleSaveProduct} className="p-8 space-y-6 overflow-y-auto flex-grow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Display Name *</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary"
                    placeholder="E.g. STEM Robotics Kit"
                    value={editingProduct.name}
                    onChange={e => setEditingProduct({...editingProduct, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Base Price (INR) *</label>
                  <input 
                    required
                    type="number" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary"
                    placeholder="E.g. 5000"
                    value={editingProduct.price}
                    onChange={e => setEditingProduct({...editingProduct, price: parseInt(e.target.value) || 0})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Main Category</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary bg-white"
                    value={editingProduct.category}
                    onChange={e => setEditingProduct({...editingProduct, category: e.target.value})}
                  >
                    {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Subcategory</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary"
                    placeholder="E.g. AV Equipment"
                    value={editingProduct.subcategory}
                    onChange={e => setEditingProduct({...editingProduct, subcategory: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Vibrant Image URL *</label>
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-xl bg-gray-100 overflow-hidden shrink-0 border">
                    <img src={editingProduct.image} className="w-full h-full object-cover" alt="Preview" />
                  </div>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary flex-grow"
                    placeholder="https://images.unsplash.com/..."
                    value={editingProduct.image}
                    onChange={e => setEditingProduct({...editingProduct, image: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Product Description</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Detailed specifications and features..."
                  value={editingProduct.description}
                  onChange={e => setEditingProduct({...editingProduct, description: e.target.value})}
                ></textarea>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Product Features</label>
                  <button 
                    type="button" 
                    onClick={addFeature}
                    className="text-xs font-bold text-primary flex items-center gap-1 hover:underline"
                  >
                    <ListPlus size={14} /> Add Feature
                  </button>
                </div>
                <div className="space-y-2">
                  {(editingProduct.features || []).map((feature: string, idx: number) => (
                    <div key={idx} className="flex gap-2">
                      <input 
                        type="text" 
                        className="flex-grow px-4 py-2 rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-primary text-sm"
                        placeholder="Feature description..."
                        value={feature}
                        onChange={e => updateFeature(idx, e.target.value)}
                      />
                      <button 
                        type="button" 
                        onClick={() => removeFeature(idx)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                  {(editingProduct.features || []).length === 0 && (
                    <p className="text-xs text-gray-400 italic">No specific features added yet.</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <input 
                  type="checkbox" 
                  id="isFeatured"
                  className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                  checked={editingProduct.isFeatured}
                  onChange={e => setEditingProduct({...editingProduct, isFeatured: e.target.checked})}
                />
                <label htmlFor="isFeatured" className="font-bold text-gray-700 cursor-pointer select-none">
                  Mark as Featured Product
                </label>
              </div>

              <div className="flex gap-4 pt-4 sticky bottom-0 bg-white border-t mt-4 pb-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-grow py-4 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors">Cancel</button>
                <button type="submit" className="flex-grow bg-primary text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-100">
                  {products.some(p => p.id === editingProduct.id) ? 'Update Inventory' : 'Create Product'}
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
