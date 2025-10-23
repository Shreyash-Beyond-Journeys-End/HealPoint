# 🏥 HealPoint - Hospital Management System

A full-stack hospital management system designed to streamline hospital operations, patient management, and appointment scheduling. HealPoint provides an intuitive interface for patients, doctors, nurses, and administrators to manage healthcare services efficiently.

## ✨ Features

### 👥 User Management
- **Patient Registration & Authentication**: Secure sign-up and login for patients
- **Doctor Management**: Create and manage doctor profiles with specializations
- **Nurse Management**: Track and organize nursing staff
- **Admin Panel**: Comprehensive administrative controls

### 📅 Appointment Management
- Book appointments with doctors by specialty
- View available time slots
- Cancel or reschedule appointments
- Appointment history and notifications

### 🏢 Hospital Information
- Browse departments and specializations
- View doctor profiles and expertise
- Hospital contact information and location

### 🔐 Security Features
- JWT-based authentication and authorization
- Role-based access control (Admin, Doctor, Nurse, Patient)
- Password encryption with bcrypt
- Rate limiting on API endpoints
- CORS protection

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14.2.3 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Date Handling**: date-fns

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt
- **Security**: CORS, Rate Limiting, Body Parser
- **Environment**: dotenv for configuration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or cloud instance)
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/HealPoint.git
cd HealPoint
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
echo "PORT=4451
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/healpoint_hospital
DB_NAME=healpoint_hospital
JWT_SECRET=your_super_secret_key_change_in_production
JWT_EXPIRE=7d
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
HOSPITAL_NAME=HealPoint Hospital
HOSPITAL_ADDRESS=123 Medical Street, Health City
HOSPITAL_PHONE=+1-234-567-8900
HOSPITAL_EMAIL=info@healpoint.com" > .env

# Start the backend server (port 4451)
npm start
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file (optional - already configured)
echo "NEXT_PUBLIC_API_URL=http://localhost:4451" > .env.local

# Start the development server (port 3000)
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4451

## 📁 Project Structure

```
HealPoint/
├── backend/
│   ├── config.js                 # Configuration management
│   ├── server.js                 # Express server entry point
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── userController.js     # Patient management
│   │   ├── doctorController.js   # Doctor management
│   │   ├── nurseController.js    # Nurse management
│   │   ├── appointmentController.js  # Appointments
│   │   └── adminController.js    # Admin functions
│   ├── models/
│   │   ├── user.js               # Patient schema
│   │   ├── doctor.js             # Doctor schema
│   │   ├── nurse.js              # Nurse schema
│   │   ├── appointment.js        # Appointment schema
│   │   ├── department.js         # Department schema
│   │   ├── communication.js      # Messages/Communication
│   │   ├── contactUs.js          # Contact requests
│   │   └── newsLetter.js         # Newsletter subscriptions
│   ├── middlewares/
│   │   ├── cors.js               # CORS configuration
│   │   ├── errorHandler.js       # Error handling
│   │   ├── checkAccess.js        # Access verification
│   │   ├── checkAdmin.js         # Admin verification
│   │   └── rateLimiter.js        # Rate limiting
│   ├── db/
│   │   └── mongoose.js           # MongoDB connection
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── page.tsx           # Home page
    │   │   ├── login/             # Login page
    │   │   ├── register/          # Registration page
    │   │   ├── dashboard/         # User dashboard
    │   │   ├── doctors/           # Doctor listing
    │   │   ├── departments/       # Departments page
    │   │   ├── about/             # About page
    │   │   ├── contact/           # Contact page
    │   │   ├── book-appointment/  # Appointment booking
    │   │   ├── layout.tsx         # Root layout
    │   │   └── globals.css        # Global styles
    │   ├── components/
    │   │   ├── Navbar.tsx         # Navigation bar
    │   │   ├── Footer.tsx         # Footer
    │   │   └── Providers.tsx      # App providers
    │   └── lib/
    │       ├── api.ts             # API client
    │       └── store.ts           # Zustand store
    ├── next.config.js
    ├── tailwind.config.ts
    └── package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /auth/register` - Register new patient
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user

### Users
- `GET /user/profile` - Get user profile
- `PUT /user/profile` - Update user profile
- `GET /user/appointments` - Get user appointments

### Doctors
- `GET /doctor` - List all doctors
- `GET /doctor/:id` - Get doctor details
- `POST /doctor` - Create new doctor (Admin)
- `PUT /doctor/:id` - Update doctor (Admin)
- `DELETE /doctor/:id` - Delete doctor (Admin)

### Nurses
- `GET /nurse` - List all nurses
- `GET /nurse/:id` - Get nurse details

### Appointments
- `POST /appointment` - Book appointment
- `GET /appointment` - Get appointments
- `PUT /appointment/:id` - Update appointment
- `DELETE /appointment/:id` - Cancel appointment

### Admin
- `GET /admin/stats` - Get hospital statistics
- `GET /admin/users` - List all users
- `GET /admin/appointments` - View all appointments

## 🔐 Authentication & Authorization

The system uses JWT (JSON Web Token) for authentication. After login, a token is issued and must be included in the `Authorization` header for protected routes:

```
Authorization: Bearer <token>
```

### User Roles
- **Patient**: Can book appointments, view doctors, manage own profile
- **Doctor**: Can view assigned appointments, manage schedules
- **Nurse**: Can view patients and medical records
- **Admin**: Full system access, manage all resources

## ⚙️ Environment Variables

### Backend (.env)
```
PORT=4451
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/healpoint_hospital
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
HOSPITAL_NAME=HealPoint Hospital
HOSPITAL_EMAIL=info@healpoint.com
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:4451
```

## 🐛 Troubleshooting

### Backend won't start
- Ensure MongoDB is running: `mongod`
- Check if port 4451 is available
- Verify all environment variables are set correctly
- Check logs for specific error messages

### Frontend npm run dev not working
- Run `npm install` to ensure all dependencies are installed
- Clear cache: `rm -rf .next && npm run dev`
- Ensure backend is running on port 4451
- Check network connectivity

### MongoDB connection issues
- Verify MongoDB service is running
- Check connection string in config.js
- Ensure database name is correct
- Check firewall settings for MongoDB port

## 📦 Available Scripts

### Backend
```bash
npm start              # Start the server
npm run dev            # Start with nodemon (auto-reload)
```

### Frontend
```bash
npm run dev            # Start development server
npm run build          # Build for production
npm run start          # Start production server
npm run lint           # Run ESLint
npm run type-check     # Check TypeScript types
```

## 🚀 Deployment

### Backend Deployment
1. Set `NODE_ENV=production` in .env
2. Update `MONGODB_URI` to production database
3. Set strong `JWT_SECRET`
4. Deploy to hosting service (Heroku, Railway, AWS, etc.)

### Frontend Deployment
1. Build: `npm run build`
2. Deploy to Vercel, Netlify, or your hosting provider
3. Set `NEXT_PUBLIC_API_URL` to production backend URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

## 👨‍💻 Author

**HealPoint Development Team**

## 📞 Support

For support, email info@healpoint.com or open an issue on GitHub.

---

**Made with ❤️ for better healthcare management**
