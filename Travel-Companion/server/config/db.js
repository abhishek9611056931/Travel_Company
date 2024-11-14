const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con =  mongoose.connect(process.env.MONGO_URI)
      .then((res)=>console.log("CONNECTED TO DB"))
      .catch((err)=>console.log(err));

    // console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
