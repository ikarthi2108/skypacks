import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: '75020 76126',
      subtitle: '98422 46768',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'skypacks2021@gmail.com',
      subtitle: 'We reply within 24 hours',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MapPin,
      title: 'Factory Address',
      details: 'D.No: 2/236 A, Merkala Thottam',
      subtitle: 'Iduvai, Tiruppur - 641 687',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Building,
      title: 'GST Number',
      details: '33AEOFS6853F1Z0',
      subtitle: 'Registered Business',
      color: 'from-green-500 to-green-600'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your packaging needs? Contact us for quotes, samples, 
            or any questions about our HDPE, LLDPE, and Bio Poly products.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className={`bg-gradient-to-br ${info.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="h-7 w-7 text-white" />
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {info.title}
              </h4>
              <p className="text-gray-800 dark:text-gray-200 font-medium mb-1">
                {info.details}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {info.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Fill out the form and our team will get back to you within 24 hours
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your packaging requirements (HDPE, LLDPE, Bio Poly, or Garment Packs)..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Map and Additional Info */}
          <div data-aos="fade-left" className="space-y-6">
            {/* Map Card */}
            <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
              <MapPin className="h-12 w-12 mb-4" />
              <h4 className="text-2xl font-bold mb-4">Visit Our Factory</h4>
              <div className="space-y-2 mb-6">
                <p className="text-lg font-semibold">SKY PACK'S</p>
                <p>D.No: 2/236 A, Merkala Thottam</p>
                <p>Iduvai, Tiruppur - 641 687</p>
                <p>Tamil Nadu, India</p>
              </div>
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Directions
              </button>
            </div>

            {/* Working Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white ml-4">Working Hours</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-300">Monday - Saturday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 dark:text-gray-300">Production</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
