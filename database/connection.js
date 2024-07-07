import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_Connection = async () => {
  const DB_URL = process.env.DB_URL;
  try {
    await mongoose.connect(DB_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("error", error.message);
  }
};

export default DB_Connection;
