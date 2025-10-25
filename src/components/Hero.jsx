import React, { useEffect, useState } from 'react';
import { Package, Shield, Truck, Award, ArrowRight, Star, CheckCircle, Leaf } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium HDPE & LLDPE Rolls",
      subtitle: "Virgin and Filler Mixing Solutions",
      description: "Industry-leading polythene rolls for all your packaging needs",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Eco-Friendly Bio Poly Rolls",
      subtitle: "Sustainable Packaging Solutions",
      description: "Environment-conscious packaging for a greener tomorrow",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Garment Packs (LD & PP)",
      subtitle: "Custom Textile Packaging",
      description: "Specialized bags designed for textile industry requirements",
      color: "from-blue-600 to-cyan-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Shield, text: 'ISO Certified Quality', color: 'text-green-500' },
    { icon: Package, text: 'Custom Solutions', color: 'text-blue-500' },
    { icon: Truck, text: 'Fast Delivery', color: 'text-orange-500' },
    { icon: Leaf, text: 'Eco-Friendly Options', color: 'text-emerald-500' },
  ];

  const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '500+', label: 'Happy Clients', icon: Star },
    { value: '50K+', label: 'Bags Daily', icon: Package },
    { value: '100%', label: 'Quality Assured', icon: CheckCircle },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background with Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white" data-aos="fade-right">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold">Tiruppur's Trusted Packaging Partner Since 2008</span>
            </div>

            {/* Main Heading with Slide Animation */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="block transition-all duration-500">{slides[currentSlide].title}</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-200">
              {slides[currentSlide].subtitle}
            </h2>

            <p className="text-xl mb-8 leading-relaxed text-white/90">
              {slides[currentSlide].description}
            </p>

            {/* Manufacturing Details */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Our Specializations
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  HDPE Rolls (Virgin & Filler Mixing)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  LLDPE Rolls - High Strength
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  Bio Poly Rolls - Eco-Friendly
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  Garment Packs (LD & PP)
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="group bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2">
                <span>Get Quote Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#products" className="bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                View Products
              </a>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hover:bg-white/20 transition-all duration-300"
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  <span className="text-sm font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Card */}
          <div className="relative" data-aos="fade-left">
            {/* Main Stats Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <stat.icon className="h-10 w-10 mx-auto mb-3 text-yellow-400" />
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* GST Badge */}
              <div className="mt-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl p-4 text-center">
                <div className="text-sm text-white/70 mb-1">GST Registered</div>
                <div className="text-xs font-mono text-white font-semibold">33AEOFS6853F1Z0</div>
              </div>
            </div>

            {/* Floating Certification Badge */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl animate-float" data-aos="zoom-in" data-aos-delay="500">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">ISO Certified</div>
                  <div className="text-xs text-gray-600">Quality Assured</div>
                </div>
              </div>
            </div>

            {/* Floating Award Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '2s' }} data-aos="zoom-in" data-aos-delay="700">
              <div className="flex items-center space-x-3 text-white">
                <Award className="h-8 w-8" />
                <div>
                  <div className="text-sm font-bold">Industry Leader</div>
                  <div className="text-xs">15+ Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;