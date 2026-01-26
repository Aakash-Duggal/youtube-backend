import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("❌ Server Error:", error);
      process.exit(1);
    });

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Mongo DB Connection Error:", error);
  });
