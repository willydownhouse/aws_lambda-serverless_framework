"use strict";

const { buildErrorObject, AppError } = require("../utils/appError");
const { dynamoDb } = require("../db");
const { validateAndReturnNewOb } = require("../utils/validateOb");

module.exports.updateOb = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { id } = event.pathParameters;

    const {
      altitude,
      avalance_danger,
      aspect,
      coords,
      createdAt,
      description,
      photos,
      snow_cover,
      snow_tested,
      snow_tests,
      temperature,
      valley,
      weather,
      zone,
      updatedAt,
    } = validateAndReturnNewOb(body);

    const params = {
      TableName: process.env.DYNAMODB_OBS_TABLE,
      Key: { id },
      ExpressionAttributeNames: {
        "#zv": "zone",
      },
      ExpressionAttributeValues: {
        ":altitude": altitude,
        ":avalance_danger": avalance_danger,
        ":aspect": aspect,
        ":coords": coords,
        ":createdAt": createdAt,
        ":description": description,
        ":photos": photos,
        ":snow_cover": snow_cover,
        ":snow_tested": snow_tested,
        ":snow_tests": snow_tests,
        ":temperature": temperature,
        ":valley": valley,
        ":weather": weather,
        ":zone": zone,
        ":updatedAt": updatedAt,
      },
      UpdateExpression:
        "SET altitude = :altitude, avalance_danger = :avalance_danger, aspect = :aspect, coords = :coords, createdAt = :createdAt, description = :description, photos = :photos, snow_cover = :snow_cover, snow_tested = :snow_tested, snow_tests = :snow_tests, temperature = :temperature, valley = :valley, weather = :weather, #zv = :zone, updatedAt = :updatedAt",
      ReturnValues: "ALL_NEW",
    };

    const res = await dynamoDb.update(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: res.Attributes,
      }),
    };
  } catch (err) {
    return buildErrorObject(err);
  }
};
