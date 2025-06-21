import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config({});
const app= express();


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
const corsOptions= {
    origin: 'http//localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));


const PORT= process.env.PORT|| 3000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running at ${PORT}`)
})