
import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, Smartphone, Truck, ShieldCheck } from 'lucide-react';
import { CONTACTS, SOCIAL_LINKS, BRANCHES } from '../constants';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-primary text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Connect with <span className="text-secondary">Enterprise</span></h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg md:text-xl">
            Multiple branches across Dhanbad and Govindpur to serve you better. Direct access to our supervisors and logistics team.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Official Channels</h2>
            <p className="text-gray-600 mb-8">Reach out to our specific branches or core support team for technical help.</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {CONTACTS.map((c, i) => (
                <a 
                  key={i} 
                  href={`tel:${c.number.replace(/\s+/g, '')}`}
                  className="flex gap-4 items-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary hover:bg-white hover:shadow-xl transition-all group"
                >
                  <div className="p-3 bg-white group-hover:bg-primary group-hover:text-white rounded-xl shadow-sm text-primary transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-0.5">{c.label}</p>
                    <p className="text-md font-bold text-gray-900">{c.number}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 flex flex-col gap-4">
              <a 
                href={SOCIAL_LINKS.whatsapp_primary} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg"
              >
                <Smartphone size={24} /> Chat with us on WhatsApp (+91 9973727063)
              </a>
            </div>
          </div>

          <div className="space-y-10 border-t pt-10">
            <h3 className="text-2xl font-display font-bold text-gray-900">Our Branches</h3>
            {BRANCHES.map((branch, idx) => (
              <div key={idx} className="flex gap-6 p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                <div className="p-4 bg-white text-primary rounded-2xl shadow-sm shrink-0 h-fit"><MapPin size={28} /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-primary">{branch.name}</h4>
                  {branch.manager && <p className="text-xs font-bold text-secondary uppercase mb-2">Manager: {branch.manager}</p>}
                  <p className="text-gray-600 leading-relaxed text-md mb-4">{branch.address}</p>
                  {branch.landmark && <p className="text-xs text-gray-400 font-bold uppercase mb-4">Landmark: {branch.landmark}</p>}
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Phone size={14} /> {branch.phone}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-6 p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
              <div className="p-4 bg-white text-accent rounded-2xl shadow-sm shrink-0 h-fit"><Truck size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Wholesale Logistics</h3>
                <p className="text-blue-800 text-sm font-medium mb-1">Dhanbad: Free Doorstep Delivery</p>
                <p className="text-blue-600 text-sm">Pan-India: Professional Courier Network delivery to any state.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="p-4 bg-orange-50 text-secondary rounded-2xl shrink-0 h-fit"><Clock size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">Operational Hours</h3>
                <p className="text-gray-600 text-lg font-medium">Monday — Saturday</p>
                <p className="text-gray-500 text-lg">9:30 AM to 7:30 PM (IST)</p>
                <p className="text-accent font-bold mt-2 text-sm flex items-center gap-2">
                  <CheckCircle size={14} /> Emergency tech support available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-gray-200 shadow-2xl shadow-blue-100 h-fit lg:sticky lg:top-32">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
              <MessageSquare size={24} />
            </div>
            Institutional Inquiry
          </h3>
          <form className="space-y-6" onSubmit={handleSendMessage}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Enterprise Name</label>
              <input required type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-primary outline-none bg-gray-50 focus:bg-white transition-all" placeholder="E.g. St. Xavier High School" />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Point of Contact</label>
                <input required type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-primary outline-none bg-gray-50 focus:bg-white transition-all" placeholder="Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Contact No.</label>
                <input required type="tel" className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-primary outline-none bg-gray-50 focus:bg-white transition-all" placeholder="+91" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Subject of Interest</label>
              <select className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-primary outline-none bg-gray-50 focus:bg-white transition-all">
                <option>Bulk Printing Solutions</option>
                <option>Smart Lab Setup</option>
                <option>School Uniform Contract</option>
                <option>Digital Infrastructure</option>
                <option>Others</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Requirements Brief</label>
              <textarea required rows={4} className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-primary outline-none bg-gray-50 focus:bg-white transition-all" placeholder="Tell us what you need..."></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={formStatus !== 'idle'}
              className={`w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-2xl ${
                formStatus === 'success' ? 'bg-accent text-white scale-95' : 'bg-primary text-white hover:bg-blue-800 hover:shadow-primary/20'
              }`}
            >
              {formStatus === 'idle' && <><Send size={20} /> Submit Inquiry</>}
              {formStatus === 'sending' && <span className="animate-pulse">Connecting...</span>}
              {formStatus === 'success' && <><CheckCircle size={20} /> Thank you! We'll call back.</>}
            </button>
          </form>
        </div>
      </section>

      {/* Footer Visual Map Section */}
      <section className="h-[400px] w-full bg-gray-900 relative">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1920" 
          alt="Dhanbad View" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 text-center max-w-sm mx-4">
            <h3 className="text-xl font-bold text-primary mb-2">Location Strategy</h3>
            <p className="text-gray-600 mb-6 text-sm">Centrally located in Dhanbad and Govindpur to serve the Jharkhand and Bihar educational hubs efficiently.</p>
            <a 
              href="https://www.google.com/maps/search/Kenduapul+Jharia+Road+Dhanbad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg"
            >
              View Branches on Map
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
