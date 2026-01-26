import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));  // used for getting data from query such as %, space, etc.
app.use(express.static("public"));  //used for serving static files such as images, css, etc.
app.use(cookieParser()); // used for storing and reading cookies in user browser

export {app};