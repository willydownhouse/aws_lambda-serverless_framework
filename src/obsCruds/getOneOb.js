"use strict";

const { dynamoDb } = require("../../db");

module.exports.getOneOb = async (event) => {
  console.log("event:");
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "get one route",
    }),
  };
};
