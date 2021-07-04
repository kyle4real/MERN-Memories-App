import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import express from "express";
// import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import connectDB from "./config/db.js";
connectDB();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
