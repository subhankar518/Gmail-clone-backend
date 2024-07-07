import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import DB_Connection from "./database/connection.js";
import dotenv from "dotenv";
import route from "./routes/routes.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parses JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded requests

app.use("/", route); //It will redirect to routes also for empty endpoint hit

const createConnection = async () => {
  try {
    await DB_Connection();
    app.listen(PORT, () => console.log(`server is on port ${PORT}`));
  } catch (error) {
    console.log("error from index.js", error.message);
  }
};
createConnection();
