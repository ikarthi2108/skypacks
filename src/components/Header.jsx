import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Package } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#what-we-do' },
    { name: 'Products', href: '#products' },
    { name: 'Factory', href: '#factory' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl py-3' 
        : 'bg-gradient-to-b from-black/50 via-black/30 to-transparent backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3" data-aos="fade-right">
            <div className={`bg-gradient-to-br from-primary-500 to-blue-600 p-2 rounded-xl shadow-lg transition-all duration-300 ${
              !isScrolled && 'ring-2 ring-white/30'
            }`}>
              <Package className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-800 dark:text-white' 
                : 'text-white drop-shadow-lg'
            }`}>
              SKY PACK'S
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" data-aos="fade-down">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 font-semibold relative group ${
                  isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                    : 'text-white hover:text-primary-300 drop-shadow-md'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-primary-500' : 'bg-white'
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                isScrolled
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  : 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30'
              }`}
              data-aos="fade-left"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  : 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden mt-4 rounded-2xl overflow-hidden ${
            isScrolled
              ? 'bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg'
              : 'bg-white/10 backdrop-blur-xl border border-white/20'
          }`}>
            <nav className="flex flex-col p-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-300 font-semibold py-3 px-4 rounded-lg text-center ${
                    isScrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-500'
                      : 'text-white hover:bg-white/20'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
