import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'HealPoint - Hospital Management System',
  description: 'Manage your healthcare needs with HealPoint Hospital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
