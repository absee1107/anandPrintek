
import React from 'react';
// Added Phone to the lucide-react imports to fix the error on line 57
import { Target, Eye, ShieldCheck, Users, Printer, BookOpen, MapPin, Truck, Globe, Phone } from 'lucide-react';
import { BRANCHES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <img src="https://picsum.photos/seed/team/800/1000" alt="Our Team" className="rounded-3xl shadow-2xl relative z-10" />
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary rounded-full opacity-10 blur-3xl"></div>
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl"></div>
          </div>
          <div>
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Since 2009</span>
            <h1 className="text-5xl font-display font-bold text-primary mb-8 leading-tight">Your Trusted Partner in <span className="text-accent">Educational Growth</span></h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Anand Printek Enterprise was founded with a single mission: to provide high-quality, affordable solutions for schools and colleges across India. We believe that access to premium printing services and educational tools is fundamental to building a better future.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Based in the heart of Dhanbad, Jharkhand, we've grown from a small local press into a multi-faceted enterprise serving hundreds of institutions nationwide. Today, with two major branches in Dhanbad and Govindpur, we are closer to our clients than ever.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0"><Target /></div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Mission</h3>
                  <p className="text-sm text-gray-500">To simplify procurement for educational institutions through innovation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-50 text-accent rounded-xl flex items-center justify-center shrink-0"><Eye /></div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Vision</h3>
                  <p className="text-sm text-gray-500">To be India's largest one-stop ecosystem for school supplies & printing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">Our Presence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">Strategically located branches to ensure fast delivery and dedicated on-site support for all schools in the region.</p>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            {BRANCHES.map((branch, idx) => (
              <div key={idx} className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-primary group-hover:text-white transition-all"><MapPin size={32} /></div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{branch.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{branch.address}</p>
                <div className="flex items-center gap-2 font-bold text-primary">
                  <Phone size={18} /> {branch.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Excellence */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">Wholesale & Logistics Excellence</h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              We operate as a high-volume wholesale hub and a responsive retail outlet. Our logistics team works 24/7 to bridge the gap between our warehouses and your school gates.
            </p>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="p-4 bg-white/10 rounded-2xl"><Truck className="text-secondary" size={28} /></div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Local Doorstep Delivery</h4>
                  <p className="text-blue-200">Free delivery within Dhanbad using our dedicated enterprise fleet.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="p-4 bg-white/10 rounded-2xl"><Globe className="text-accent" size={28} /></div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Pan-India Network</h4>
                  <p className="text-blue-200">Partnered with BlueDart, Delhivery, and local transporters for reliable national shipping.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000" alt="Logistics Hub" className="rounded-[3rem] shadow-2xl relative z-10" />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Core Principles</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Quality First", desc: "Every print job and product undergoes rigorous quality checks to meet global standards.", icon: <ShieldCheck size={32} /> },
              { title: "Client Focused", desc: "Our dedicated school account managers provide personalized support for every order.", icon: <Users size={32} /> },
              { title: "Innovation", desc: "We constantly invest in the latest printing machinery and educational technology.", icon: <Printer size={32} /> }
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary transition-all text-center">
                <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
