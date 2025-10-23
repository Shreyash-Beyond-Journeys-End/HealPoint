# HealPoint Frontend - Quick Start Guide

Get the HealPoint frontend running in minutes!

## 🚀 5-Minute Setup

### Prerequisites
- Node.js 18+ ([download](https://nodejs.org/))
- npm (comes with Node.js)

### Step 1: Install Dependencies
```bash
cd /home/shreyashkawde/Desktop/HealPoint/frontend
npm install
```

### Step 2: Create Environment File
```bash
# Create .env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:4451" > .env.local
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
```
http://localhost:3000
```

✅ Done! Your app is running!

## 📋 Available Commands

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Check TypeScript
npm run type-check

# Run linter
npm run lint
```

## 📍 Project Structure

```
src/
├── app/                    # Next.js pages
│   ├── page.tsx           # Home page
│   ├── login/             # Login page
│   ├── register/          # Sign up page
│   ├── dashboard/         # User dashboard
│   ├── doctors/           # Doctors list
│   ├── contact/           # Contact form
│   ├── about/             # About page
│   ├── departments/       # Departments list
│   ├── book-appointment/  # Booking form
│   └── layout.tsx         # Root layout
│
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   └── Providers.tsx     # App providers
│
└── lib/                   # Utilities
    ├── api.ts            # API client (Axios)
    └── store.ts          # State management (Zustand)
```

## 🔗 API Configuration

Make sure your backend is running on `http://localhost:4451`

Default environment:
```env
NEXT_PUBLIC_API_URL=http://localhost:4451
```

## 🧪 Testing the App

### Home Page
Visit `http://localhost:3000`

### Register
1. Click "Register" in navbar
2. Fill in form and create account
3. You'll be redirected to login

### Login
1. Click "Login"
2. Enter credentials
3. You'll see the dashboard

### Book Appointment
1. Login as a patient
2. Click "Book Appointment"
3. Select a doctor
4. Fill appointment details
5. Confirm booking

### View Appointments
1. Go to Dashboard
2. See all your appointments

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  primary: '#2563eb',      // Change this
  secondary: '#1e40af',
  // ...
}
```

### Change Hospital Name
Search and replace "HealPoint" with your hospital name

### Modify Pages
All pages are in `src/app/` directory. Edit as needed!

## 📱 Mobile Testing

Development server automatically responsive:
1. Open DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Test on different screen sizes

## 🐛 Troubleshooting

### Port 3000 in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Localhost refused
- Check if backend is running (port 4451)
- Update `NEXT_PUBLIC_API_URL` if needed
- Check browser console for errors

### Build errors
```bash
# Clean and rebuild
rm -rf .next
npm run build
```

### API not connecting
1. Check CORS on backend
2. Verify `NEXT_PUBLIC_API_URL` is correct
3. Check browser console for errors
4. Ensure backend is running

## 📚 File Examples

### Adding a New Page
Create `src/app/mypage/page.tsx`:
```tsx
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <h1>My Page</h1>
      </main>
      <Footer />
    </>
  );
}
```

### Using API Client
```tsx
import api from '@/lib/api';

// GET
const response = await api.get('/endpoint');

// POST
await api.post('/endpoint', { data });

// Error handling
try {
  const data = await api.get('/endpoint');
} catch (error) {
  console.error(error.response?.data?.error);
}
```

### Using State Management
```tsx
import { useAuthStore } from '@/lib/store';

const { user, logout } = useAuthStore();

if (!user) {
  return <div>Please login</div>;
}
```

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full guide

Quick deploy to Vercel:
```bash
npm i -g vercel
vercel
```

## 📞 Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev

---

**Happy coding! 🎉**

For more details, see the main [README.md](./README.md)
