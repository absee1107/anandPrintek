
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { CONTACTS } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h2 className="text-2xl font-display font-bold text-white mb-4">ANAND PRINTEK <span className="text-secondary">Enterprise</span></h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Your Complete Educational & Printing Solutions Partner. We provide top-tier printing press services and essential school accessories across India.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-secondary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-accent transition-colors"><Youtube size={20} /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-white">Contact Details</h3>
          <div className="space-y-4">
            <div className="flex gap-3 text-gray-400">
              <MapPin className="text-secondary shrink-0" size={20} />
              <span>CO Gyan Prakash Jha, H. No. 202A, Kenduapul Jharia Road, Near Durga Mandir, Dhanbad, Jharkhand - 826001</span>
            </div>
            {CONTACTS.slice(0, 3).map((contact, idx) => (
              <div key={idx} className="flex gap-3 text-gray-400">
                <Phone className="text-accent shrink-0" size={20} />
                <span>{contact.label}: {contact.number}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/products" className="text-gray-400 hover:text-white flex items-center gap-2"><ExternalLink size={14} /> Shop Categories</Link></li>
            <li><Link to="/quote" className="text-gray-400 hover:text-white flex items-center gap-2"><ExternalLink size={14} /> Bulk Quotation</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white flex items-center gap-2"><ExternalLink size={14} /> Our Mission</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white flex items-center gap-2"><ExternalLink size={14} /> Customer Support</Link></li>
            <li><a href="#" className="text-gray-400 hover:text-white flex items-center gap-2"><ExternalLink size={14} /> Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-white">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to get updates on new products and special school discounts.</p>
          <form className="flex">
            <input type="email" placeholder="Email Address" className="bg-gray-800 border-none px-4 py-2 rounded-l-lg w-full focus:ring-2 focus:ring-primary outline-none" />
            <button className="bg-primary px-4 py-2 rounded-r-lg font-bold hover:bg-blue-700 transition-colors">Join</button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Anand Printek Enterprise. All rights reserved. Designed for Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
