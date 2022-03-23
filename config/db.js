const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDb connected");
};

module.exports = connectDB;
