const mongoose = require("mongoose");
require("dotenv/config");
const config = require("../config");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.database.uri);
    console.log("✅ Database Connected!");
  } catch (error) {
    console.error("❌ Error connecting to the database:", error.message);
    throw error;
  }
};

module.exports = connectToDatabase;
