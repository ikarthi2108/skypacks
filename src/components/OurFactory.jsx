import React from 'react';
import { Factory, Clock, Settings, Users } from 'lucide-react';

const OurFactory = () => {
  const features = [
    {
      icon: Factory,
      title: 'Modern Facility',
      description: 'State-of-the-art manufacturing unit equipped with latest machinery'
    },
    {
      icon: Clock,
      title: '24/7 Production',
      description: 'Round-the-clock operations to meet high demand and urgent orders'
    },
    {
      icon: Settings,
      title: 'Advanced Technology',
      description: 'Automated production lines ensuring consistent quality and efficiency'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled workforce with years of experience in packaging manufacturing'
    },
  ];

  return (
    <section id="factory" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Manufacturing Facility
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Located in the heart of Tiruppur, our 10,000 sq.ft. manufacturing facility 
              is equipped with the latest technology to produce high-quality polythene bags 
              for the textile industry.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { value: '10,000', unit: 'sq.ft.', label: 'Area' },
                { value: '50+', unit: 'units', label: 'Machinery' },
                { value: '100+', unit: 'staff', label: 'Workforce' },
              ].map((stat, index) => (
                <div key={index} className="bg-primary-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.unit}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Factory Image/Illustration */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-800 dark:to-primary-900 rounded-2xl p-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                    <Factory className="h-24 w-24 text-primary-500 dark:text-primary-400" />
                  </div>
                </div>
              </div>
              
              {/* Animated Elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Live Production</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-700 p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <Clock className="h-4 w-4 text-primary-500" />
                  <span>24/7 Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFactory;