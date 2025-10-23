'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/lib/store';

export default function Providers({ children }: { children: React.ReactNode }) {
  const initAuth = useAuthStore((state) => state.initAuth);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return <>{children}</>;
}
