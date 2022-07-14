"use strict";

module.exports.health = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `healthcheck OK, on stage ${process.env.STAGE}`,
        input: event,
      },
      null,
      2
    ),
  };
};

//https://jxf76zj6q5.execute-api.us-east-1.amazonaws.com/    DEV

//https://madjv45xu9.execute-api.us-east-1.amazonaws.com/
