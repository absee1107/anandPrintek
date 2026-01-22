
import React from 'react';
import { ArrowRight, Printer, BookOpen, GraduationCap, Zap, CheckCircle, Quote, MessageSquare, PenTool, Truck, Package, Globe, Shop } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES, STATS, INITIAL_PRODUCTS as PRODUCTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
        <img src="https://picsum.photos/seed/printshop/1920/1080?blur=5" className="absolute inset-0 h-full w-full object-cover opacity-20" alt="Background" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-6xl">
              Your Complete Educational & <span className="text-secondary italic">Printing Solutions</span> Partner
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Empowering schools and businesses with high-quality printing services, educational accessories, and state-of-the-art computer hardware.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link to="/products" className="rounded-md bg-secondary px-6 py-3 text-lg font-bold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all flex items-center gap-2">
                Browse Collection <ArrowRight size={20} />
              </Link>
              <Link to="/quote" className="text-lg font-semibold leading-6 text-white hover:text-secondary transition-colors">
                Get Instant Quote <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale & Logistics Section */}
      <section className="py-24 bg-gray-50 border-b overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Truck size={14} /> Logistics Excellence
              </div>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Wholesale & Retail Solutions with <span className="text-secondary">Guaranteed Delivery</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                We bridge the gap between quality and accessibility. Whether you need a single item or a bulk shipment for an entire district, our logistics network ensures your supplies arrive on time, every time.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white text-secondary rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-orange-100"><Package size={24} /></div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Dhanbad Doorstep</h3>
                    <p className="text-sm text-gray-500">Free direct doorstep delivery for all institutions within Dhanbad city limits.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white text-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-100"><Globe size={24} /></div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Pan-India Courier</h3>
                    <p className="text-sm text-gray-500">Dedicated partnerships with top courier services for delivery anywhere in India.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white rounded-3xl border border-gray-100 shadow-xl flex items-center gap-6">
                <div className="bg-accent/10 text-accent p-4 rounded-2xl">
                  <CheckCircle size={32} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Wholesale Pricing for Everyone</p>
                  <p className="text-sm text-gray-500">Enjoy competitive bulk rates even on medium-sized retail orders.</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" alt="Logistics and Delivery" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 -right-5 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 z-20 animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-50 text-accent rounded-full flex items-center justify-center">
                    <Truck size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Status</p>
                    <p className="font-bold text-primary">Live Tracking Enabled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-y-16 text-center lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600 uppercase tracking-widest">{stat.label}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-primary sm:text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-primary mb-2">Our Specializations</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Explore our wide range of services and products tailored for institutional excellence.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} to={`/products?category=${cat.id}`} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {cat.id === 'printing' && <Printer size={32} />}
                  {cat.id === 'school' && <BookOpen size={32} />}
                  {cat.id === 'textiles' && <GraduationCap size={32} />}
                  {cat.id === 'it' && <Zap size={32} />}
                  {cat.id === 'stationery' && <PenTool size={32} />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cat.name}</h3>
                <p className="text-sm text-gray-500">{cat.subcategories.length} Subcategories</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-2">Popular Solutions</h2>
              <p className="text-gray-600">Our most requested products and services by educational institutions.</p>
            </div>
            <Link to="/products" className="text-primary font-bold hover:underline">View All Products →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {product.price && (
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full font-bold shadow-md">
                      ₹{product.price.toLocaleString()}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">{product.subcategory}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-6">{product.description}</p>
                  <Link to={`/products`} className="block text-center bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors">
                    Request Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Built on Trust, <br /><span className="text-secondary italic">Powered by Quality</span></h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We understand the unique requirements of educational institutions. Our end-to-end service ensures you focus on teaching while we handle the logistics.
            </p>
            <div className="space-y-4">
              {[
                "100% Quality Assurance in Printing",
                "Pan-India Delivery & Installation",
                "Competitive Institutional Pricing",
                "Advanced 3D & Digital Printing Tech",
                "Dedicated Customer Support Team"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-accent" size={24} />
                  <span className="text-lg">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/10 rounded-2xl overflow-hidden border border-white/20">
               <img src="https://picsum.photos/seed/press/800/800" alt="Infrastructure" className="w-full h-full object-cover mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-xl shadow-2xl max-w-xs">
              <Quote className="text-white/30 mb-4" size={40} />
              <p className="text-white font-serif italic text-lg leading-relaxed">"Anand Printek has transformed our school supplies process. Their quality is unmatched."</p>
              <p className="text-white mt-4 font-bold">- Principal, DPS Dhanbad</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="inline-block p-4 bg-blue-50 rounded-full mb-6">
             <MessageSquare className="text-primary" size={40} />
          </div>
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Whether it's a bulk school uniform order or a high-volume offset printing job, our experts are ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all">Get a Custom Quote</Link>
            <Link to="/contact" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all">Contact Our Team</Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
