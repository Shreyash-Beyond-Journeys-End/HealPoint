const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const connectToDatabase = require("./db/mongoose");
const corsMiddleware = require("./middlewares/cors");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");
const doctorController = require("./controllers/doctorController");
const appointmentController = require("./controllers/appointmentController");
const adminController = require("./controllers/adminController");
const nurseController = require("./controllers/nurseController");
const limiter = require("./middlewares/rateLimiter");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(corsMiddleware);

// Basic route to test server
app.get("/", (req, res) => {
  res.json({ message: "HealPoint Backend Server Running" });
});

// Routes with rate limiting
app.use("/auth", limiter, authController);
app.use("/user", limiter, userController);
app.use("/doctor", limiter, doctorController);
app.use("/appointment", limiter, appointmentController);
app.use("/admin", limiter, adminController);
app.use("/nurse", limiter, nurseController);

// Error handler middleware
app.use(errorHandlerMiddleware);

// Start Server
(async () => {
  try {
    await connectToDatabase();
    const port = config.server.port;
    const server = app.listen(port, () => {
      console.log(`✅ Server running on port: ${port}`);
      console.log(`🌍 Environment: ${config.server.nodeEnv}`);
    });
  } catch (error) {
    console.error("❌ Failed to start the server:", error.message);
  }
})();
