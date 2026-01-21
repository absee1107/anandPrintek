
import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity } = useApp();

  const subtotal = cart.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-gray-50">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center max-w-md">
          <ShoppingBag size={80} className="text-gray-200 mb-6" />
          <h2 className="text-3xl font-display font-bold text-primary mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any products to your cart yet. Start exploring our high-quality catalog!</p>
          <Link to="/products" className="bg-secondary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-100">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:underline">
          <ArrowLeft size={18} /> Back to Products
        </Link>
        
        <h1 className="text-4xl font-display font-bold text-primary mb-8">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
                <img src={item.image} className="w-24 h-24 rounded-xl object-cover" alt={item.name} />
                <div className="flex-grow">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 size={20} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{item.subcategory}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border rounded-lg bg-gray-50">
                      <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-100"><Minus size={16} /></button>
                      <span className="px-4 font-bold">{item.quantity}</span>
                      <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-100"><Plus size={16} /></button>
                    </div>
                    <span className="text-lg font-bold text-primary">₹{((item.price || 0) * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-fit sticky top-32">
            <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>GST (18%)</span>
                <span>₹{(subtotal * 0.18).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600 border-b pb-4">
                <span>Estimated Shipping</span>
                <span className="text-accent font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-2xl font-bold text-primary pt-2">
                <span>Total</span>
                <span>₹{(subtotal * 1.18).toLocaleString()}</span>
              </div>
            </div>
            <Link to="/checkout" className="block text-center bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-100">
              Proceed to Checkout
            </Link>
            <p className="text-xs text-center text-gray-400 mt-6">
              Institutional tax benefits may apply. Detailed invoice will be generated after payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
