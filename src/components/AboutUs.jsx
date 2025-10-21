import React from 'react';
import { History, Target, Eye, Star } from 'lucide-react';

const AboutUs = () => {
  const milestones = [
    { year: '2008', event: 'Founded in Tiruppur' },
    { year: '2012', event: 'Expanded to 5000 sq.ft. facility' },
    { year: '2016', event: 'Reached 100+ clients' },
    { year: '2020', event: 'Upgraded to automated production' },
    { year: '2024', event: 'Industry leader with 500+ clients' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To be the most trusted polythene packaging solution provider in South India.'
    },
    {
      icon: Eye,
      title: 'Our Mission',
      description: 'Deliver superior quality packaging solutions that enhance product value and customer satisfaction.'
    },
    {
      icon: Star,
      title: 'Our Values',
      description: 'Quality, Reliability, Innovation, and Customer-centric approach in everything we do.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-primary-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Skypacks
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            For over 15 years, Skypacks has been at the forefront of polythene packaging 
            solutions in Tiruppur, serving the textile industry with excellence and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <History className="h-6 w-6 text-primary-500 mr-3" />
                Our Journey
              </h3>
              
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0">
                      {milestone.year}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 pt-1">
                      {milestone.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Skypacks?</h3>
              <ul className="space-y-4">
                {[
                  '15+ years of industry experience',
                  'ISO certified quality standards',
                  'Customized packaging solutions',
                  'Fast and reliable delivery',
                  'Competitive pricing',
                  'Excellent customer support'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Growing Family
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team and 
              grow with us in revolutionizing packaging solutions.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Career Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;