import express from "express";
import { saveSentEmail } from "../controller/emailController.js";

const route = express.Router();

route.post("/saveSentEmail", saveSentEmail);

export default route;
