import React from 'react';
import { Target, Users, Heart, Zap } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide eco-friendly and durable polythene packaging solutions that meet the highest quality standards for textile industries.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building long-term relationships with our clients by understanding their unique packaging needs and delivering customized solutions.',
    },
    {
      icon: Heart,
      title: 'Quality Commitment',
      description: 'Every product undergoes rigorous quality checks to ensure durability, strength, and reliability for textile packaging.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously improving our manufacturing processes and materials to offer cutting-edge packaging solutions.',
    },
  ];

  return (
    <section id="what-we-do" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We specialize in manufacturing high-quality polythene bags specifically designed 
            for textile packaging needs in Tiruppur and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary-100 dark:bg-primary-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '50K+', label: 'Bags Daily' },
            { number: '15+', label: 'Years Experience' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;