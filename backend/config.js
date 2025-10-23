require('dotenv/config');

const config = {
  // Database Configuration
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/healpoint_hospital',
    name: process.env.DB_NAME || 'healpoint_hospital'
  },

  // Server Configuration
  server: {
    port: process.env.PORT || 4451,
    nodeEnv: process.env.NODE_ENV || 'development'
  },

  // JWT Configuration
  jwt: {
    secret: process.env.JWT_SECRET || 'fallback_secret_key_change_in_production',
    expiresIn: process.env.JWT_EXPIRE || '7d'
  },

  // CORS Configuration
  cors: {
    origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true
  },

  // Rate Limiting
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100
  },

  // Email Configuration
  email: {
    service: process.env.EMAIL_SERVICE || 'gmail',
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASS || ''
  },

  // File Upload Configuration
  upload: {
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024, // 5MB
    path: process.env.UPLOAD_PATH || 'uploads/'
  },

  // Security Configuration
  security: {
    bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10,
    sessionSecret: process.env.SESSION_SECRET || 'fallback_session_secret'
  },

  // Hospital Information
  hospital: {
    name: process.env.HOSPITAL_NAME || 'HealPoint Hospital',
    address: process.env.HOSPITAL_ADDRESS || '123 Medical Street, Health City',
    phone: process.env.HOSPITAL_PHONE || '+1-234-567-8900',
    email: process.env.HOSPITAL_EMAIL || 'info@healpoint.com'
  },

  // API Configuration
  api: {
    version: process.env.API_VERSION || 'v1',
    baseUrl: process.env.API_BASE_URL || 'http://localhost:4451/api'
  }
};

module.exports = config;
