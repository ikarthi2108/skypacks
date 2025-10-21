import React from 'react';
import { Package, Shield, Truck, Award, ArrowRight } from 'lucide-react';

const Hero = () => {
  const features = [
    { icon: Shield, text: 'Premium Quality' },
    { icon: Package, text: 'Custom Solutions' },
    { icon: Truck, text: 'Fast Delivery' },
    { icon: Award, text: 'Industry Leader' },
  ];

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Leading Packaging Solutions in Tiruppur
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Premium{' '}
              <span className="gradient-text">Polythene</span>{' '}
              Packaging
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Tiruppur's trusted partner for high-quality polythene bags designed specifically 
              for textile packaging. Experience unmatched durability and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Get In Touch</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary">
                View Products
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary-500 dark:text-primary-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-semibold">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-3xl p-8 transform rotate-2 shadow-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 transform -rotate-2 shadow-2xl">
                  <div className="aspect-square bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <Package className="h-32 w-32 text-primary-500 dark:text-primary-400 animate-float" />
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 glass rounded-2xl p-4 shadow-2xl animate-float" data-aos="fade-down-right" data-aos-delay="500">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">ISO Certified</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 shadow-2xl animate-float" data-aos="fade-up-left" data-aos-delay="700" style={{ animationDelay: '3s' }}>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Award Winning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;