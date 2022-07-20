"use strict";

const { dynamoDb } = require("../db");

module.exports.getObs = async (event) => {
  const res = await dynamoDb
    .scan({
      TableName: process.env.DYNAMODB_OBS_TABLE,
    })
    .promise();

  if (res.Count === 0) {
    return {
      statusCode: 200,

      body: JSON.stringify({
        message: "No items in this table",
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      docs: res.Count,
      data: res.Items,
    }),
  };
};
