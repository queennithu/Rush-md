// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Rushmd~qEvwu7y3",
  PREFIX: process.env.PREFIX || '.',
  MODE: process.env.MODE || "public",
  };


module.exports = config;
