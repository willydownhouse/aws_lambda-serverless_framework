"use strict";
const {
  checkIfItemExistsInDynamoDbTableOrThrowAnError,
} = require("../utils/checkIfItemInDb");
const { buildErrorObject } = require("../utils/appError");
const { dynamoDb } = require("../db");

module.exports.deleteOb = async (event) => {
  try {
    const { id } = event.pathParameters;

    await checkIfItemExistsInDynamoDbTableOrThrowAnError(dynamoDb, id);

    await dynamoDb
      .delete({
        TableName: process.env.DYNAMODB_OBS_TABLE,
        Key: { id },
      })
      .promise();

    return {
      statusCode: 204,
    };
  } catch (err) {
    return buildErrorObject(err);
  }
};
