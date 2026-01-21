
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
  Image as ImageIcon
} from 'lucide-react';

const Admin: React.FC = () => {
  const { products, orders, updateProduct } = useApp();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'products'>('dashboard');
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0);

  const handleUpdateImage = (e: React.FormEvent) => {
    e.preventDefault();
    updateProduct(editingProduct);
    setEditingProduct(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-primary text-white p-6 hidden md:block shrink-0">
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
      <div className="flex-grow p-8 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-3xl font-bold text-gray-900">Enterprise Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Active Products</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-primary">{products.length}</h3>
                  <Package className="text-blue-400" size={24} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Clients</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-primary">84</h3>
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
                <h3 className="text-xl font-bold mb-6">Inventory Health</h3>
                <div className="space-y-6">
                  {products.slice(0, 4).map(p => (
                    <div key={p.id} className="flex items-center gap-4">
                      <img src={p.image} className="w-12 h-12 rounded-lg object-cover" alt="" />
                      <div className="flex-grow">
                        <p className="text-sm font-bold">{p.name}</p>
                        <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1">
                          <div className="bg-accent h-full rounded-full" style={{width: '75%'}}></div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-gray-500">In Stock</span>
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
                      <td className="py-4 text-sm">{o.items.length} Product(s)</td>
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
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Inventory Management</h1>
              <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold hover:bg-blue-800 transition-colors">
                <Plus size={20} /> Add New Product
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(p => (
                <div key={p.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <img src={p.image} className="w-full h-full object-cover" alt="" />
                    <button onClick={() => setEditingProduct(p)} className="absolute bottom-2 right-2 bg-white p-2 rounded-lg shadow-lg text-primary hover:text-secondary">
                      <ImageIcon size={18} />
                    </button>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                  <p className="text-xs text-gray-500 mb-4">{p.category} > {p.subcategory}</p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="font-bold text-primary">₹{p.price?.toLocaleString()}</span>
                    <button onClick={() => setEditingProduct(p)} className="flex items-center gap-1 text-sm font-bold text-secondary hover:underline">
                      <Edit size={14} /> Update Media
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Media Edit Modal Simulation */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-6">Update Product Media</h2>
            <form onSubmit={handleUpdateImage} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Image URL (Vibrant Photography)</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary"
                  value={editingProduct.image}
                  onChange={e => setEditingProduct({...editingProduct, image: e.target.value})}
                />
                <p className="text-[10px] text-gray-400">Recommended: Unsplash/Picsum high-res links</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Display Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary"
                  value={editingProduct.name}
                  onChange={e => setEditingProduct({...editingProduct, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button type="button" onClick={() => setEditingProduct(null)} className="w-full py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100">Cancel</button>
                <button type="submit" className="w-full bg-secondary text-white py-3 rounded-xl font-bold hover:bg-orange-600 shadow-lg shadow-orange-100">Apply Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
