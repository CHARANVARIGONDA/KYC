require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");
const userRoutes = require("./routes/userRoutes.js");


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use("/api/kyc", userRoutes);
app.use(errorHandler);

// Database connection
connection();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});
