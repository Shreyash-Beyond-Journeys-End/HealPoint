'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuthStore } from '@/lib/store';
import api from '@/lib/api';
import { FiCalendar, FiFileText, FiLogOut } from 'react-icons/fi';
import { AiOutlineLoading } from 'react-icons/ai';
import toast from 'react-hot-toast';

interface Appointment {
  _id: string;
  doctor: any;
  patient: string;
  appointmentDate: string;
  time: string;
  reason: string;
  status?: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const { user, isLoading, logout } = useAuthStore();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`/appointment/get-appointments/${user?.email}`);
      setAppointments(Array.isArray(response.data) ? response.data : []);
    } catch (error: any) {
      console.error('Error fetching appointments:', error);
      toast.error('Failed to load appointments');
    } finally {
      setLoading(false);
    }
  }, [user?.email]);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (user?.email) {
      fetchAppointments();
    }
  }, [user?.email, fetchAppointments]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <AiOutlineLoading className="text-4xl animate-spin text-primary" />
        </div>
        <Footer />
      </>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold text-dark mb-2">
                  Welcome, {user.userName || user.name || 'User'}!
                </h1>
                <p className="text-gray-600">Manage your appointments and medical information</p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/doctors"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-medium"
                >
                  Book Appointment
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-6 py-3 border-2 border-danger text-danger rounded-lg hover:bg-red-50 transition-colors font-medium flex items-center gap-2"
                >
                  <FiLogOut /> Logout
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Appointments</p>
                  <p className="text-3xl font-bold text-dark">{appointments.length}</p>
                </div>
                <FiCalendar className="text-4xl text-primary opacity-20" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Upcoming Appointments</p>
                  <p className="text-3xl font-bold text-primary">
                    {appointments.filter((a) => new Date(a.appointmentDate) > new Date()).length}
                  </p>
                </div>
                <FiCalendar className="text-4xl text-primary opacity-20" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <p className="text-lg font-medium text-dark break-all">{user.email}</p>
                </div>
                <FiFileText className="text-4xl text-primary opacity-20" />
              </div>
            </div>
          </div>

          {/* Appointments Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-dark mb-6">Your Appointments</h2>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <AiOutlineLoading className="text-3xl animate-spin text-primary" />
              </div>
            ) : appointments.length === 0 ? (
              <div className="text-center py-12">
                <FiCalendar className="text-6xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 text-lg mb-6">You haven&apos;t booked any appointments yet</p>
                <Link
                  href="/doctors"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-medium"
                >
                  Book Your First Appointment
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Doctor</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Time</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Reason</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appointment) => (
                      <tr key={appointment._id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">{appointment.doctor?.name || 'N/A'}</td>
                        <td className="py-4 px-4">
                          {new Date(appointment.appointmentDate).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4">{appointment.time || 'N/A'}</td>
                        <td className="py-4 px-4">{appointment.reason}</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-success text-white rounded-full text-sm">
                            Confirmed
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
