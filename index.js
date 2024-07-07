import express from "express";
import DB_Connection from "./database/connection.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

const createConnection = async () => {
  try {
    await DB_Connection();
    app.listen(PORT, () => console.log(`server is on port ${PORT}`));
  } catch (error) {
    console.log("error from index.js", error.message);
  }
};
createConnection();
