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
  const res = await dynamoDb.put(putParams).promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      status: "success",
      customer: putParams.Item,
    }),
  };
};
