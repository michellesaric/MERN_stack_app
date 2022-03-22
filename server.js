require("dotenv").config({ path: "./config.env" });
const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
