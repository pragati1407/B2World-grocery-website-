const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inotebook"; // Replace with your DB URI

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectToMongo;
