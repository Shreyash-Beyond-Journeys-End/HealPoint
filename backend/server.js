const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const connectToDatabase = require("./db/mongoose");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Basic route to test server
app.get("/", (req, res) => {
  res.json({ message: "HealPoint Backend Server Running" });
});

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
