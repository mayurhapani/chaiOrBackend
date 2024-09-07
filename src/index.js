import connectDB from "./db/db.js";
import express from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(dotenv());

connectDB();
