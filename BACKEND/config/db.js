const mongoose = require("mongoose");
const dns = require("dns");

// Fix for Windows / ISP DNS resolution with Atlas SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to Database successfully");
    }
    catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
}

module.exports = connection;