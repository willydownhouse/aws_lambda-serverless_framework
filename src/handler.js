"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `success, stage :`,
        input: event,
      },
      null,
      2
    ),
  };
};

//https://jxf76zj6q5.execute-api.us-east-1.amazonaws.com/    DEV

//https://madjv45xu9.execute-api.us-east-1.amazonaws.com/
