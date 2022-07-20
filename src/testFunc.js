"use strict";

const { AppError, buildErrorObject } = require("../utils/appError");

module.exports.test = async (event) => {
  console.log("event");
  console.log(event);

  try {
    const { x, y } = event.queryStringParameters;

    if (isNaN(Number(x)) || isNaN(Number(y))) {
      throw new AppError(400, "please give x and y as number");
    }

    const sum = Number(x) + Number(y);

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success test",
        sum,
      }),
    };
  } catch (err) {
    return buildErrorObject(err);
  }
};
