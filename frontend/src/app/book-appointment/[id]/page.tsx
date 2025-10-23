'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import api from '@/lib/api';
import { useAuthStore } from '@/lib/store';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineLoading } from 'react-icons/ai';

export default function BookAppointmentPage() {
  const params = useParams();
  const doctorId = params.id as string;
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();

  const [formData, setFormData] = useState({
    appointmentDate: '',
    time: '',
    reason: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      toast.error('Please login to book an appointment');
      router.push('/login');
    }
  }, [isAuthenticated, user, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.appointmentDate || !formData.time || !formData.reason) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      await api.post('/appointment/add-appointment', {
        doctor: doctorId,
        patient: user?._id,
        appointmentDate: formData.appointmentDate,
        time: formData.time,
        reason: formData.reason,
        phone: formData.phone || user?.phoneNumber || '',
        email: user?.email,
      });

      toast.success('Appointment booked successfully!');
      router.push('/dashboard');
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Failed to book appointment';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/doctors"
            className="flex items-center gap-2 text-primary hover:text-secondary mb-8 transition-colors"
          >
            <FiArrowLeft /> Back to Doctors
          </Link>

          {/* Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-dark mb-2">Book an Appointment</h1>
            <p className="text-gray-600 mb-8">Fill in the details to schedule your appointment</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email (Read-only) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1-234-567-8900"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                />
              </div>

              {/* Appointment Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Appointment Date *
                </label>
                <input
                  type="date"
                  name="appointmentDate"
                  required
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time *</label>
                <input
                  type="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                />
              </div>

              {/* Reason */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Appointment *
                </label>
                <textarea
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Describe your symptoms or reason for the visit..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading && <AiOutlineLoading className="animate-spin" />}
                {loading ? 'Booking Appointment...' : 'Book Appointment'}
              </button>
            </form>

            {/* Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">
                ℹ️ After booking, you&apos;ll receive a confirmation email. Our team will contact you if
                there are any scheduling conflicts.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
