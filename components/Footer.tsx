
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Mail, Phone, ExternalLink, ShieldCheck } from 'lucide-react';
import { CONTACTS, SOCIAL_LINKS, GST_NUMBER } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050b1d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h2 className="text-2xl font-display font-bold text-white mb-4">ANAND PRINTEK <span className="text-secondary">Enterprise</span></h2>
          <p className="text-blue-50/80 mb-6 leading-relaxed text-sm">
            Your Complete Educational & Printing Solutions Partner. We provide top-tier printing press services and essential school accessories across India.
          </p>
          <div className="mb-6">
            <p className="text-xs font-bold text-blue-100/60 uppercase tracking-widest mb-2 flex items-center gap-2">
              <ShieldCheck size={14} className="text-accent" /> GSTIN: {GST_NUMBER}
            </p>
          </div>
          <div className="flex gap-4">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"><Facebook size={20} /></a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"><Instagram size={20} /></a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-red-600 transition-colors"><Youtube size={20} /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-blue-600 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-white">Contact Details</h3>
          <div className="space-y-4">
            <div className="flex gap-3 text-blue-50/80">
              <MapPin className="text-secondary shrink-0" size={20} />
              <span className="text-sm">CO Gyan Prakash Jha, H. No. 202A, Kenduapul Jharia Road, Near Durga Mandir, Dhanbad, Jharkhand - 826001</span>
            </div>
            {CONTACTS.slice(0, 3).map((contact, idx) => (
              <div key={idx} className="flex gap-3 text-blue-50/80">
                <Phone className="text-accent shrink-0" size={20} />
                <span className="text-sm">{contact.label}: {contact.number}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/products" className="text-blue-50/70 hover:text-white flex items-center gap-2 text-sm transition-colors"><ExternalLink size={14} /> Shop Categories</Link></li>
            <li><Link to="/quote" className="text-blue-50/70 hover:text-white flex items-center gap-2 text-sm transition-colors"><ExternalLink size={14} /> Bulk Quotation</Link></li>
            <li><Link to="/about" className="text-blue-50/70 hover:text-white flex items-center gap-2 text-sm transition-colors"><ExternalLink size={14} /> Our Mission</Link></li>
            <li><Link to="/contact" className="text-blue-50/70 hover:text-white flex items-center gap-2 text-sm transition-colors"><ExternalLink size={14} /> Customer Support</Link></li>
            <li><a href="#" className="text-blue-50/70 hover:text-white flex items-center gap-2 text-sm transition-colors"><ExternalLink size={14} /> Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-white">Newsletter</h3>
          <p className="text-blue-50/80 mb-4 text-sm">Subscribe to get updates on new products and special school discounts.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" className="bg-white/10 border-none px-4 py-2 rounded-l-lg w-full focus:ring-2 focus:ring-primary outline-none text-sm placeholder:text-blue-100/40" />
            <button className="bg-primary px-4 py-2 rounded-r-lg font-bold hover:bg-blue-700 transition-colors text-sm">Join</button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-blue-100/40 text-xs">
        <p>© {new Date().getFullYear()} Anand Printek Enterprise. All rights reserved. Designed for Excellence.</p>
        <p className="mt-2 uppercase tracking-widest opacity-80 font-medium">GSTIN: {GST_NUMBER}</p>
      </div>
    </footer>
  );
};

export default Footer;
