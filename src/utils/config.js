require("dotenv").config();

const API_KEY = process.env.API_KEY;
const DEV_URL = process.env.DEV_URL;

const OFFLINE_API_KEY = process.env.OFFLINE_API_KEY;
const OFFLINE_URL = process.env.OFFLINE_URL;

module.exports = {
  API_KEY,
  DEV_URL,
  OFFLINE_URL,
  OFFLINE_API_KEY,
};
