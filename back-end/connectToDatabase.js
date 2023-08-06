const mongoose = require("mongoose");

const connectToDatabase = async () => {
  // Connects to the Mongo DB database
  try {
    await mongoose.connect("mongodb://localhost:27017/scaler");
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = connectToDatabase;
