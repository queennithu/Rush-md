// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Enter your pair",
  PREFIX: process.env.PREFIX || '.',
  MODE: process.env.MODE || "public",
  };


module.exports = config;
