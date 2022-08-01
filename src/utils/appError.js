class AppError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

function buildErrorObject(err) {
  console.log("build error object:");
  console.log(err);

  return {
    statusCode: err.statusCode || 500,
    body: JSON.stringify({
      message: err.code || err.message,
    }),
  };
}

module.exports = { AppError, buildErrorObject };
