
import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { CONTACTS } from '../constants';

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
            Direct access to our supervisors, technical experts, and support staff for all your institutional needs.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Official Channels</h2>
            <p className="text-gray-600 mb-8">Reach out to the specific department for the fastest response.</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {CONTACTS.map((c, i) => (
                <a 
                  key={i} 
                  href={`tel:${c.number}`}
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
          </div>

          <div className="space-y-10 border-t pt-10">
            <div className="flex gap-6">
              <div className="p-4 bg-blue-50 text-primary rounded-2xl shrink-0 h-fit"><MapPin size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">Registered HQ Address</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Anand Printek Enterprise<br />
                  CO Gyan Prakash Jha, H. No. 202A<br />
                  Kenduapul Jharia Road, Near Durga Mandir<br />
                  Dhanbad, Jharkhand - 826001<br />
                  <span className="text-primary font-bold mt-2 inline-block">Landmark: Shakti Decorator Godown</span>
                </p>
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
            <p className="text-gray-600 mb-6 text-sm">Centrally located in Dhanbad to serve the Jharkhand and Bihar educational hubs efficiently.</p>
            <a 
              href="https://www.google.com/maps/search/Kenduapul+Jharia+Road+Dhanbad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
