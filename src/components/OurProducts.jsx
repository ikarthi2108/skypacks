import React from 'react';
import { Package, Leaf, Shield, Zap, CheckCircle, Layers, MessageCircle } from 'lucide-react';

const OurProducts = () => {
  const products = [
    {
      icon: Layers,
      name: 'HDPE Rolls',
      subtitle: 'Virgin & Filler Mixing',
      description: 'High-density polyethylene rolls available in both virgin and filler mixing variants for various industrial applications.',
      features: ['Virgin Grade Available', 'Filler Mix Options', 'Custom Thickness', 'Bulk Orders'],
      color: 'from-blue-500 to-cyan-500',
      badge: 'Most Popular'
    },
    {
      icon: Shield,
      name: 'LLDPE Rolls',
      subtitle: 'Linear Low-Density',
      description: 'Premium quality LLDPE rolls with exceptional strength and flexibility for demanding packaging requirements.',
      features: ['High Strength', 'Tear Resistant', 'Flexible Design', 'Durable Material'],
      color: 'from-purple-500 to-pink-500',
      badge: 'Premium Quality'
    },
    {
      icon: Leaf,
      name: 'Bio Poly Rolls',
      subtitle: 'Eco-Friendly Solution',
      description: 'Environmentally conscious biodegradable polythene rolls for sustainable packaging solutions.',
      features: ['Biodegradable', 'Eco-Friendly', 'Earth Safe', 'Green Choice'],
      color: 'from-green-500 to-emerald-500',
      badge: 'Eco-Friendly'
    },
    {
      icon: Package,
      name: 'Garment Packs',
      subtitle: 'LD & PP Variants',
      description: 'Specialized garment packaging bags in both LD and PP materials, designed specifically for textile industry needs.',
      features: ['LD Material', 'PP Material', 'Textile Specific', 'Custom Sizes'],
      color: 'from-orange-500 to-red-500',
      badge: 'Textile Industry'
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-primary-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Our Manufacturing Range
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Premium <span className="gradient-text">Polythene Products</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive range of HDPE, LLDPE, Bio Poly rolls and specialized garment packs 
            designed for textile industry excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`bg-gradient-to-r ${product.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                  {product.badge}
                </div>
              </div>

              <div className="p-8">
                {/* Icon */}
                <div className={`relative bg-gradient-to-br ${product.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <product.icon className="h-8 w-8 text-white" />
                  <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-3">
                  {product.subtitle}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA Button */}
              <div className="px-8 pb-8">
                <button className={`w-full bg-gradient-to-r ${product.color} hover:shadow-lg text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105`}>
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Capabilities */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Zap,
              title: 'Fast Production',
              description: '50,000+ bags daily production capacity',
              color: 'from-yellow-500 to-orange-500'
            },
            {
              icon: Shield,
              title: 'Quality Assured',
              description: 'ISO certified manufacturing standards',
              color: 'from-green-500 to-emerald-500'
            },
            {
              icon: Package,
              title: 'Custom Solutions',
              description: 'Tailored sizes and specifications available',
              color: 'from-blue-500 to-purple-500'
            }
          ].map((capability, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className={`bg-gradient-to-br ${capability.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                <capability.icon className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {capability.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-primary-500 via-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Need Custom Packaging Solutions?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                We specialize in creating bespoke HDPE, LLDPE, Bio Poly, and garment pack 
                solutions tailored to your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Request Custom Quote
                </a>
                <a href="tel:7502076126" className="bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Call: 75020 76126
                </a>
                <a 
                  href="https://wa.me/917502076126?text=Hi%20SKY%20PACK'S%2C%20I'm%20interested%20in%20your%20packaging%20products" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
