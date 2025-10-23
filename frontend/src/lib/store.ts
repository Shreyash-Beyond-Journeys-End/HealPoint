import { create } from 'zustand';

interface User {
  _id: string;
  userName?: string;
  email: string;
  role: 'admin' | 'doctor' | 'nurse' | 'receptionist' | 'patient';
  phoneNumber?: string;
  specialization?: string;
  name?: string;
}

interface AuthStore {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
  initAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isLoading: true,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setToken: (token) => set({ token }),
  setLoading: (isLoading) => set({ isLoading }),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ user: null, token: null, isAuthenticated: false });
  },
  initAuth: () => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      const userStr = localStorage.getItem('user');
      if (token && userStr) {
        try {
          const user = JSON.parse(userStr);
          set({ token, user, isAuthenticated: true });
        } catch {
          set({ isLoading: false });
        }
      }
      set({ isLoading: false });
    }
  },
}));

interface NotificationStore {
  message: string | null;
  type: 'success' | 'error' | 'info' | 'warning' | null;
  showNotification: (message: string, type: 'success' | 'error' | 'info' | 'warning') => void;
  clearNotification: () => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  message: null,
  type: null,
  showNotification: (message, type) => set({ message, type }),
  clearNotification: () => set({ message: null, type: null }),
}));
