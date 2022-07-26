require("dotenv").config();

const API_KEY = process.env.API_KEY;
const DEV_URL = process.env.DEV_URL;

module.exports = {
  API_KEY,
  DEV_URL,
};
