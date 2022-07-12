"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! haloo lyngen",
        /* input: event, */
      },
      null,
      2
    ),
  };
};
