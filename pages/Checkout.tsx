
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Truck, CreditCard, ChevronLeft } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart } = useApp();
  const navigate = useNavigate();
  const subtotal = cart.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0);
  const total = subtotal * 1.18;

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd save this to session or state for the payment page
    sessionStorage.setItem('ap_checkout_data', JSON.stringify({ ...formData, total }));
    navigate('/payment');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        <div className="flex-grow">
          <Link to="/cart" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:underline">
            <ChevronLeft size={18} /> Back to Cart
          </Link>
          <h1 className="text-3xl font-display font-bold text-primary mb-8">Shipping Information</h1>
          
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Contact Person Name</label>
                <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary" placeholder="Enter full name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">School / Organization</label>
                <input required value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary" placeholder="Organization name" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Phone Number</label>
                <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary" placeholder="+91 00000 00000" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Detailed Address</label>
              <textarea required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary" placeholder="Street, Landmark, Area..."></textarea>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">City</label>
                <input required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary" placeholder="Enter city" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Pincode</label>
                <input required value={formData.pincode} onChange={e => setFormData({...formData, pincode: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary" placeholder="6-digit code" />
              </div>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-2">
              Continue to Payment <CreditCard size={20} />
            </button>
          </form>
        </div>

        <div className="lg:w-96">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-32">
            <h3 className="text-xl font-bold mb-6">Review Items</h3>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2 mb-6 scrollbar-hide">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.image} className="w-16 h-16 rounded-lg object-cover" alt="" />
                  <div>
                    <p className="text-sm font-bold text-gray-900 line-clamp-1">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    <p className="text-sm font-bold text-primary">₹{((item.price || 0) * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-primary">
                <span>Total Payable</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <ShieldCheck className="text-accent" size={16} /> Secure SSL Encrypted Checkout
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <Truck className="text-accent" size={16} /> Pan-India Institutional Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
