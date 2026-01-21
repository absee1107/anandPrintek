
import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Smartphone, CreditCard, Building, CheckCircle, Loader2 } from 'lucide-react';

const Payment: React.FC = () => {
  const { cart, addOrder, clearCart } = useApp();
  const navigate = useNavigate();
  const [stage, setStage] = useState<'selection' | 'processing' | 'success'>('selection');
  const [checkoutData, setCheckoutData] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem('ap_checkout_data');
    if (!data) navigate('/checkout');
    setCheckoutData(JSON.parse(data || '{}'));
  }, [navigate]);

  const handlePay = () => {
    setStage('processing');
    setTimeout(() => {
      // Create the order in "backend"
      addOrder({
        customerName: checkoutData.name,
        organization: checkoutData.organization,
        phone: checkoutData.phone,
        items: cart,
        total: checkoutData.total,
        paymentStatus: 'Paid'
      });
      setStage('success');
    }, 2500);
  };

  const finish = () => {
    clearCart();
    sessionStorage.removeItem('ap_checkout_data');
    navigate('/');
  };

  if (stage === 'success') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-lg w-full text-center animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={60} />
          </div>
          <h2 className="text-4xl font-display font-bold text-primary mb-4">Payment Successful!</h2>
          <p className="text-gray-600 mb-8 text-lg">Your order has been placed. Our team will verify the details and start processing your institutional shipment shortly.</p>
          <div className="bg-gray-50 p-6 rounded-2xl mb-8 text-left space-y-2">
            <p className="text-sm flex justify-between"><span>Customer:</span> <span className="font-bold">{checkoutData?.name}</span></p>
            <p className="text-sm flex justify-between"><span>Organization:</span> <span className="font-bold">{checkoutData?.organization}</span></p>
            <p className="text-sm flex justify-between"><span>Amount Paid:</span> <span className="font-bold text-primary">₹{checkoutData?.total?.toLocaleString()}</span></p>
          </div>
          <button onClick={finish} className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all">
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-primary p-8 text-white text-center">
            <h1 className="text-2xl font-bold mb-2">Checkout Securely</h1>
            <p className="opacity-70">Total Payable: ₹{checkoutData?.total?.toLocaleString()}</p>
          </div>
          
          <div className="p-8">
            {stage === 'selection' ? (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-700">Select Payment Method</h3>
                <button onClick={handlePay} className="w-full p-5 rounded-2xl border-2 border-gray-100 hover:border-secondary hover:bg-orange-50 transition-all flex items-center gap-4 text-left group">
                  <Smartphone className="text-secondary" size={32} />
                  <div>
                    <p className="font-bold group-hover:text-secondary">UPI (Google Pay, PhonePe, Paytm)</p>
                    <p className="text-sm text-gray-500">Fast & Secure UPI Transfer</p>
                  </div>
                </button>
                <button onClick={handlePay} className="w-full p-5 rounded-2xl border-2 border-gray-100 hover:border-primary hover:bg-blue-50 transition-all flex items-center gap-4 text-left group">
                  <CreditCard className="text-primary" size={32} />
                  <div>
                    <p className="font-bold group-hover:text-primary">Credit / Debit Card</p>
                    <p className="text-sm text-gray-500">Visa, Mastercard, RuPay supported</p>
                  </div>
                </button>
                <button onClick={handlePay} className="w-full p-5 rounded-2xl border-2 border-gray-100 hover:border-accent hover:bg-green-50 transition-all flex items-center gap-4 text-left group">
                  <Building className="text-accent" size={32} />
                  <div>
                    <p className="font-bold group-hover:text-accent">Institutional Net Banking</p>
                    <p className="text-sm text-gray-500">Transfer directly from school account</p>
                  </div>
                </button>
                <p className="text-xs text-center text-gray-400 mt-8">
                  By clicking any method, you will be redirected to our secure bank partner page.
                </p>
              </div>
            ) : (
              <div className="py-20 text-center space-y-6">
                <Loader2 size={64} className="mx-auto text-primary animate-spin" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Processing Payment</h3>
                  <p className="text-gray-500">Please do not refresh or close the browser...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
