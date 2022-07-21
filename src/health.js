"use strict";

module.exports.health = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `healthcheck OK, on stage ${process.env.STAGE}`,
      },
      null,
      2
    ),
  };
};

//https://kk6584by2b.execute-api.us-east-1.amazonaws.com/dev
