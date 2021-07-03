const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => console.log("Database connected ..."))
      .catch((err) => console.error(err));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
