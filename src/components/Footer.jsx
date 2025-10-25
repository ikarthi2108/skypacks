import React from 'react';
import { Package, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Building } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Products', href: '#products' },
    { name: 'Factory', href: '#factory' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    'HDPE Rolls',
    'LLDPE Rolls',
    'Bio Poly Rolls',
    'Garment Packs (LD)',
    'Garment Packs (PP)',
    'Custom Solutions'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-br from-primary-500 to-blue-600 p-3 rounded-xl shadow-lg">
                <Package className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">SKY PACK'S</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading manufacturer of HDPE, LLDPE, and Bio Poly rolls. Specializing in 
              garment packs for textile industries since 2008.
            </p>
            
            {/* GST Info */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 mb-6">
              <div className="flex items-center mb-2">
                <Building className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-xs text-gray-400">GST Registered</span>
              </div>
              <p className="text-xs font-mono text-white font-semibold">33AEOFS6853F1Z0</p>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-white/10 hover:bg-gradient-to-br hover:from-primary-500 hover:to-blue-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-blue-600 rounded-full mr-3"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-2 bg-primary-500 rounded-full mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-blue-600 rounded-full mr-3"></div>
              Our Products
            </h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer flex items-center group">
                    <Package className="h-3 w-3 mr-2 text-primary-500" />
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-blue-600 rounded-full mr-3"></div>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-blue-600 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-primary-400" />
                </div>
                <div className="text-gray-300 text-sm">
                  <p className="font-semibold text-white mb-1">Factory Address</p>
                  <p>D.No: 2/236 A, Merkala Thottam</p>
                  <p>Iduvai, Tiruppur - 641 687</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-blue-600 transition-all duration-300">
                  <Phone className="h-5 w-5 text-primary-400" />
                </div>
                <div className="text-gray-300 text-sm">
                  <p className="font-semibold text-white mb-1">Phone Numbers</p>
                  <p>75020 76126</p>
                  <p>98422 46768</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-blue-600 transition-all duration-300">
                  <Mail className="h-5 w-5 text-primary-400" />
                </div>
                <div className="text-gray-300 text-sm">
                  <p className="font-semibold text-white mb-1">Email</p>
                  <p>skypacks2021@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 SKY PACK'S. All rights reserved. | Made with ❤️ in Tiruppur
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Quality Standards
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
