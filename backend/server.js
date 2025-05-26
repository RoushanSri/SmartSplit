import express from "express"
import { config } from "dotenv";
import errorHandler from "./utils/errorHandler.js";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoute from "./routes/auth.route.js"

const app = express();
config()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(errorHandler)
app.use(express.json());

app.use("/api/v1/auth", authRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
});