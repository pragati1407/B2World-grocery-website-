const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginSignupPage")
  .then(() => console.log("MongoDB connected"))
  .catch(() => console.log("Failed to connect"));

const LogInSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const collection = new mongoose.model("Collection", LogInSchema);

module.exports = collection;
