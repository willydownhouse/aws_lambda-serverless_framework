"use strict";

const { dynamoDb } = require("../db");

const { buildErrorObject } = require("../utils/appError");
const { validateAndReturnNewOb } = require("../utils/validateOb");

module.exports.createOb = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const newOb = validateAndReturnNewOb(body);

    const putParams = {
      TableName: process.env.DYNAMODB_OBS_TABLE,
      Item: newOb,
    };

    await dynamoDb.put(putParams).promise();

    return {
      statusCode: 201,
      body: JSON.stringify({
        data: newOb,
      }),
    };
  } catch (err) {
    return buildErrorObject(err);
  }
};
