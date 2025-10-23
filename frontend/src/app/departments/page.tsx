'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiActivity, FiAlertCircle, FiUsers, FiShield } from 'react-icons/fi';

interface Department {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  staffCount: number;
}

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const mockDepartments: Department[] = [
      {
        id: '1',
        name: 'Cardiology',
        description: 'Specialized in heart and cardiovascular diseases treatment and care.',
        icon: <FiActivity className="text-4xl text-red-500" />,
        staffCount: 12,
      },
      {
        id: '2',
        name: 'Neurology',
        description: 'Expert care for neurological disorders and brain-related conditions.',
        icon: <FiAlertCircle className="text-4xl text-purple-500" />,
        staffCount: 8,
      },
      {
        id: '3',
        name: 'Pediatrics',
        description: 'Comprehensive healthcare services for infants, children, and adolescents.',
        icon: <FiUsers className="text-4xl text-blue-500" />,
        staffCount: 15,
      },
      {
        id: '4',
        name: 'Orthopedics',
        description: 'Treatment and management of bone, joint, and ligament disorders.',
        icon: <FiShield className="text-4xl text-yellow-600" />,
        staffCount: 10,
      },
    ];
    setDepartments(mockDepartments);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Departments</h1>
            <p className="text-xl text-gray-600">
              Explore our specialized medical departments staffed with experts
            </p>
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">{dept.icon}</div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-dark mb-3">{dept.name}</h3>
                <p className="text-gray-600 mb-4 min-h-16">{dept.description}</p>

                {/* Stats */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    👥 <span className="font-semibold text-dark">{dept.staffCount}</span> Expert Staff Members
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-primary text-white rounded-lg shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Specialized Care?</h2>
            <p className="text-lg text-blue-100 mb-6">
              Contact us to get an appointment with one of our specialists
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
