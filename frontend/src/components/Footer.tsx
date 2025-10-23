'use client';

import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">H</span>
              </div>
              <span>HealPoint</span>
            </h3>
            <p className="text-gray-400">
              Providing excellent healthcare services to our community with compassion and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-primary transition-colors">
                  Doctors
                </Link>
              </li>
              <li>
                <Link href="/departments" className="hover:text-primary transition-colors">
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Appointment Booking
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Medical Records
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Consultations
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <FiPhone className="text-primary" />
                <span>+1-234-567-8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-primary" />
                <span>info@healpoint.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-primary mt-1" />
                <span>123 Medical Street, Health City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Follow us:</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-right text-gray-400">
              <p>&copy; {currentYear} HealPoint Hospital. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
