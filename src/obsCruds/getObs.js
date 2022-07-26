"use strict";

const { dynamoDb } = require("../db");
const { buildErrorObject, AppError } = require("../utils/appError");

module.exports.getObs = async (event) => {
  try {
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
        docs: res.Count,
        data: res.Items,
      }),
    };
  } catch (err) {
    return buildErrorObject(err);
  }
};
