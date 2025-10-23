'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiCalendar, FiUsers, FiTrendingUp, FiPhone } from 'react-icons/fi';

export default function Home() {
  const features = [
    {
      icon: FiCalendar,
      title: 'Easy Appointment Booking',
      description: 'Book appointments with doctors instantly with our user-friendly scheduling system.',
    },
    {
      icon: FiUsers,
      title: 'Expert Medical Team',
      description: 'Access to highly qualified doctors and healthcare professionals.',
    },
    {
      icon: FiTrendingUp,
      title: 'Health Records',
      description: 'Keep your medical records organized and accessible anytime, anywhere.',
    },
    {
      icon: FiPhone,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your healthcare needs.',
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Health, Our Priority
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Access quality healthcare services with HealPoint. Book appointments, manage medical records,
                  and consult with expert doctors all in one place.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/register"
                    className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors text-center"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-colors text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-full h-96 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏥</div>
                    <p className="text-lg">Healthcare Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose HealPoint?</h2>
              <p className="text-xl text-gray-600">
                Experience world-class healthcare services with modern technology and expertise.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="text-primary text-4xl mb-4" />
                    <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Prioritize Your Health?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of patients who trust HealPoint for their healthcare needs.
            </p>
            <Link
              href="/register"
              className="inline-block px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Journey Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
