const express = require("express");
const app = express();
const product = require("./api/product");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Connect to database.
require("./libs/db")();
const PORT = process.env.PORT || 8080;

app.use("/api/product", product);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
