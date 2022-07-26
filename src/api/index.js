const axios = require("axios");
const config = require("../utils/config");

const devApi = axios.create({
  baseURL: config.DEV_URL,
  headers: {
    "x-api-key": config.API_KEY,
  },
});

module.exports = {
  devApi,
};
