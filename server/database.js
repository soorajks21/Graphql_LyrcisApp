const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://soorajks21:notebook@lyrics.kzkzj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (err) {
    process.exit(1);
  }
};

const close = () => {
  return mongoose.disconnect();
};

module.exports = { connectDB };
