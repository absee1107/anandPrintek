
import React from 'react';
import { Target, Eye, ShieldCheck, Users, Printer, BookOpen } from 'lucide-react';

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
              Based in the heart of Dhanbad, Jharkhand, we've grown from a small local press into a multi-faceted enterprise serving hundreds of institutions nationwide.
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
