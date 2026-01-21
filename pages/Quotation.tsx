
import React, { useState } from 'react';
import { Send, FileUp, Calculator, ShieldCheck, Clock, Truck } from 'lucide-react';

const Quotation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    category: 'printing',
    quantity: '',
    message: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your quotation request has been sent. Our representative will contact you within 24 hours.");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-primary mb-4">Request a Bulk Quotation</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Planning a major school upgrade or a high-volume printing project? Get tailored pricing and expert consultation from our enterprise team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                <Calculator size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Pricing</h3>
              <p className="text-gray-600">Dynamic pricing based on volume, complexity, and delivery timelines.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-50 text-accent rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Sample approvals before bulk production for printing and textiles.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-50 text-secondary rounded-xl flex items-center justify-center mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Priority Timeline</h3>
              <p className="text-gray-600">Expedited processing for urgent school event requirements.</p>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Contact Person Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Enter full name" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">School/Organization Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="E.g. St. Xavier School" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">WhatsApp / Phone Number *</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="+91 00000 00000" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Product Category</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none bg-white">
                    <option>Printing Services</option>
                    <option>School Accessories</option>
                    <option>Computer & Electronics</option>
                    <option>Uniforms & Textiles</option>
                    <option>Other / Mixed Order</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Estimated Quantity</label>
                  <input type="number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="E.g. 500 units" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Approx. Budget (INR)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Optional" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Requirements / Customization Details</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Describe your needs (e.g., sizes, paper quality, colors)..."></textarea>
                </div>
                <div className="md:col-span-2">
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer group">
                    <input type="file" className="hidden" id="file-upload" />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <FileUp className="mx-auto text-gray-400 group-hover:text-primary mb-2" size={32} />
                      <p className="text-sm font-bold text-gray-700">Upload Design or List Files</p>
                      <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG or DOC (Max 10MB)</p>
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                    Submit Quotation Request <Send size={20} />
                  </button>
                  <p className="text-xs text-gray-500 mt-4 text-center">By submitting, you agree to our terms of service regarding institutional bulk orders.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
