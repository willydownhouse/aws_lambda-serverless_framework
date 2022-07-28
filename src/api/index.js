const axios = require("axios");
const config = require("../utils/config");

const devApi = axios.create({
  baseURL: config.DEV_URL,
  headers: {
    "x-api-key": config.API_KEY,
  },
});

const offlineApi = axios.create({
  baseURL: config.OFFLINE_URL,
  headers: {
    "x-api-key": config.OFFLINE_API_KEY,
  },
});

module.exports = {
  devApi,
  offlineApi,
};
