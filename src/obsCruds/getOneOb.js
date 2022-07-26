"use strict";
const {
  checkIfItemExistsInDynamoDbTableOrThrowAnError,
} = require("../utils/checkIfItemInDb");
const { buildErrorObject, AppError } = require("../utils/appError");
const { dynamoDb } = require("../db");

module.exports.getOneOb = async (event) => {
  try {
    const { id } = event.pathParameters;

    const item = await checkIfItemExistsInDynamoDbTableOrThrowAnError(
      dynamoDb,
      id
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: item,
      }),
    };
  } catch (err) {
    return buildErrorObject(err);
  }
};
