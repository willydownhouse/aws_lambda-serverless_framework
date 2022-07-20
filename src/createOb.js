"use strict";

const { dynamoDb } = require("../db");
const { v4: uuidv4 } = require("uuid");

module.exports.createOb = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const newOb = validateAndReturnNewOb(body);

    const putParams = {
      TableName: process.env.DYNAMODB_OBS_TABLE,
      Item: newOb,
    };
    const res = await dynamoDb.put(putParams).promise();

    console.log("res from create:");
    console.log(res);

    return {
      statusCode: 201,
      body: JSON.stringify({
        status: "success",
        customer: putParams.Item,
      }),
    };
  } catch (err) {
    console.log("from catch:");
    console.log(err);
  }
};

function validateAndReturnNewOb(body) {
  //validate

  //if photos -> S3

  const ob = {
    id: uuidv4(),
    valley,
    zone,
    coords: {
      lat: "dsads",
      long: "fsdfd",
    },
    createdAt: new Date.now(),
    description,
    photos,
    altitude,
    aspect,
    temperature,
    weather,
    // USER WHO CREATED
  };

  return ob;
}
