"use strict";

module.exports.test = async (event) => {
  console.log("event");
  console.log(event);

  return {
    statusCode: 404,
    body: JSON.stringify({
      message: "unknown endpoint",
    }),
  };
};
