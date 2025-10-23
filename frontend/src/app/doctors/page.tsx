'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineLoading } from 'react-icons/ai';

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  email: string;
  phoneNumber?: string;
}

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      // For now, we'll use mock data. Replace with actual API call
      const mockDoctors: Doctor[] = [
        {
          _id: '1',
          name: 'Dr. Sarah Johnson',
          specialization: 'Cardiology',
          email: 'sarah@healpoint.com',
          phoneNumber: '+1-234-567-0001',
        },
        {
          _id: '2',
          name: 'Dr. Michael Chen',
          specialization: 'Neurology',
          email: 'michael@healpoint.com',
          phoneNumber: '+1-234-567-0002',
        },
        {
          _id: '3',
          name: 'Dr. Emily Davis',
          specialization: 'Pediatrics',
          email: 'emily@healpoint.com',
          phoneNumber: '+1-234-567-0003',
        },
        {
          _id: '4',
          name: 'Dr. James Wilson',
          specialization: 'Orthopedics',
          email: 'james@healpoint.com',
          phoneNumber: '+1-234-567-0004',
        },
      ];
      setDoctors(mockDoctors);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Doctors</h1>
            <p className="text-xl text-gray-600">
              Choose from our team of experienced and qualified medical professionals
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <FiSearch className="absolute left-4 top-3 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Doctors Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <AiOutlineLoading className="text-4xl animate-spin text-primary" />
            </div>
          ) : filteredDoctors.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No doctors found matching your search</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Avatar */}
                  <div className="bg-gradient-to-r from-primary to-secondary h-32 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">
                        {doctor.name[0]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-2">{doctor.name}</h3>
                    <p className="text-primary font-semibold mb-3">{doctor.specialization}</p>
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <p>📧 {doctor.email}</p>
                      {doctor.phoneNumber && <p>📱 {doctor.phoneNumber}</p>}
                    </div>
                    <Link
                      href={`/book-appointment/${doctor._id}`}
                      className="w-full block px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors text-center font-medium"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
