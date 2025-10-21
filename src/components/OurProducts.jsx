import React from 'react';
import { Package, Ruler, Palette, Shield } from 'lucide-react';

const OurProducts = () => {
  const products = [
    {
      icon: Package,
      name: 'Carry Bags',
      description: 'Durable carry bags with high tensile strength for heavy textile products.',
      features: ['Various Sizes', 'Custom Printing', 'Reinforced Handles']
    },
    {
      icon: Ruler,
      name: 'Custom Sizes',
      description: 'Tailor-made polythene bags to fit your specific product dimensions.',
      features: ['Any Dimension', 'Precision Cut', 'Bulk Orders']
    },
    {
      icon: Palette,
      name: 'Printed Bags',
      description: 'Branded packaging solutions with high-quality printing and logos.',
      features: ['HD Printing', 'Brand Colors', 'Logo Placement']
    },
    {
      icon: Shield,
      name: 'Premium Quality',
      description: 'Industrial-grade polythene bags with superior durability and protection.',
      features: ['Waterproof', 'Tear Resistant', 'UV Protection']
    },
  ];

  return (
    <section id="products" className="py-20 bg-primary-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive range of polythene packaging solutions designed specifically 
            for the textile industry in Tiruppur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="bg-primary-100 dark:bg-primary-900 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="h-7 w-7 text-primary-600 dark:text-primary-400" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need Custom Packaging Solutions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We can create bespoke polythene bags tailored to your specific requirements. 
              Get in touch for a free consultation and quote.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;