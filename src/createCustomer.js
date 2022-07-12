"use strict";
const AWS = require("aws-sdk");

module.exports.createCustomer = async (event) => {
  const body = JSON.parse(event.body);

  console.log("eventbody:");
  console.log(event.body);
  console.log("_____________");
  console.log(body);

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
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
  };
};
