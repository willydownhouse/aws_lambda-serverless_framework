"use strict";

const { dynamoDb } = require("../db");

module.exports.createCustomer = async (event) => {
  const body = JSON.parse(event.body);

  const putParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
    Item: {
      primary_key: body.name,
      email: body.email,
    },
  };
  await dynamoDb.put(putParams).promise();

  return {
    statusCode: 201,
    status: "success",
    body: JSON.stringify(putParams.Item),
  };
};
