
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { CONTACTS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-primary text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-display font-bold mb-4">Contact Our Enterprise</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">We are here to assist with any inquiries about our products, printing services, or technical support.</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {CONTACTS.map((c, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-wider">{c.label}</p>
                  <a href={`tel:${c.number}`} className="text-lg font-bold text-gray-900 hover:text-primary transition-colors">{c.number}</a>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="p-4 bg-blue-50 text-primary rounded-2xl shrink-0"><MapPin size={24} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">Primary Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  Anand Printek Enterprise<br />
                  CO Gyan Prakash Jha, H. No. 202A<br />
                  Kenduapul Jharia Road, Near Durga Mandir<br />
                  Dhanbad, Jharkhand - 826001<br />
                  <span className="text-primary font-medium">Landmark: Shakti Decorator Godown</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 bg-orange-50 text-secondary rounded-2xl shrink-0"><Clock size={24} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Emergency Support: Available 24/7 for regular partners</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MessageSquare className="text-primary" /> Send a Message
          </h3>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none bg-white" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none bg-white" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Subject</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none bg-white" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none bg-white" placeholder="Type your message here..."></textarea>
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-gray-200 grayscale relative overflow-hidden">
        <img src="https://picsum.photos/seed/map/1920/600" alt="Map View" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 max-w-sm text-center">
            <MapPin className="text-primary mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold mb-2">Visit Our Store</h3>
            <p className="text-gray-600 mb-6">Experience our products firsthand at our Dhanbad HQ.</p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="bg-primary text-white px-6 py-2 rounded-lg font-bold block">Open in Google Maps</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
