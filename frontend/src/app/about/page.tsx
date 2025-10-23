'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiCheckCircle, FiAward, FiUsers, FiTarget } from 'react-icons/fi';

export default function AboutPage() {
  const values = [
    {
      icon: FiTarget,
      title: 'Our Mission',
      description:
        'To provide exceptional healthcare services that prioritize patient wellness and deliver compassionate care with cutting-edge medical expertise.',
    },
    {
      icon: FiAward,
      title: 'Our Vision',
      description:
        'To be the leading healthcare provider recognized for excellence, innovation, and commitment to improving lives in our community.',
    },
    {
      icon: FiUsers,
      title: 'Our Values',
      description:
        'Compassion, Integrity, Excellence, Innovation, and Patient-Centered Care are at the heart of everything we do.',
    },
  ];

  const achievements = [
    { number: '50+', label: 'Years of Service' },
    { number: '500+', label: 'Medical Professionals' },
    { number: '100K+', label: 'Patients Served' },
    { number: '98%', label: 'Patient Satisfaction' },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">About HealPoint</h1>
            <p className="text-xl text-blue-100">
              Leading the way in healthcare excellence and innovation
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Story Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded with a vision to transform healthcare delivery, HealPoint Hospital has been
                serving the community with dedication and excellence for over five decades. Our
                journey began with a simple belief: every patient deserves the best care possible.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Today, we&apos;ve grown into a world-class medical institution, equipped with
                state-of-the-art facilities and staffed by highly qualified medical professionals.
                We continue to innovate and improve our services to meet the evolving healthcare
                needs of our patients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to patient care, combined with our focus on research and education,
                has made us a trusted name in healthcare.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-full h-80 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏥</div>
                  <p className="text-white text-lg font-semibold">50+ Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-dark mb-12 text-center">
              Mission, Vision & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                    <Icon className="text-4xl text-primary mb-4" />
                    <h3 className="text-xl font-bold text-dark mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-16 bg-primary text-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-2">{achievement.number}</div>
                  <p className="text-lg text-blue-100">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold text-dark mb-12">Why Choose HealPoint?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'State-of-the-art medical facilities and equipment',
                'Highly trained and experienced medical professionals',
                'Patient-centered care approach',
                '24/7 emergency services and support',
                'Comprehensive range of medical specialties',
                'Commitment to continuous research and innovation',
                'Insurance-friendly payment options',
                'Modern diagnostic and treatment technologies',
              ].map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <FiCheckCircle className="text-2xl text-success flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
