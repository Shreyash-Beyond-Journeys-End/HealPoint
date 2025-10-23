# HealPoint Hospital Management System - Backend

## Setup Instructions

### 1. Environment Configuration

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your actual values:
   - **MONGODB_URI**: Your MongoDB connection string
   - **JWT_SECRET**: A strong secret key for JWT tokens (change this!)
   - **EMAIL_USER** and **EMAIL_PASS**: Your email credentials for notifications
   - **HOSPITAL_***: Update with your hospital's information

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
# Development mode
npm start

# Or with nodemon for auto-restart
npx nodemon server.js
```

## Configuration Files

### .env
Contains all environment-specific variables:
- Database connection
- JWT secrets
- Server configuration
- Email settings
- Hospital information

### config.js
Centralized configuration file that:
- Loads environment variables
- Provides fallback values
- Organizes settings by category
- Makes configuration accessible throughout the app

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | Required |
| `JWT_SECRET` | Secret key for JWT tokens | Required |
| `PORT` | Server port | 4451 |
| `NODE_ENV` | Environment (development/production) | development |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window | 100 |
| `BCRYPT_SALT_ROUNDS` | Bcrypt salt rounds | 10 |

## Security Notes

- **Never commit `.env` file to version control**
- Use strong, unique JWT secrets in production
- Update default passwords and secrets
- Configure CORS origins properly for production

## API Endpoints

- `/auth` - Authentication routes
- `/user` - User management
- `/doctor` - Doctor management
- `/nurse` - Nurse management
- `/appointment` - Appointment management
- `/admin` - Admin functions

## Database

The application uses MongoDB with the following main collections:
- Users
- Doctors
- Nurses
- Appointments
- Departments
- Communications
