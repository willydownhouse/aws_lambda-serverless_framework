class AppError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

function buildErrorObject(err) {
  return {
    statusCode: err instanceof AppError ? err.statusCode : 500,
    body: JSON.stringify({
      status: "error",
      message: err.message,
    }),
  };
}

module.exports = { AppError, buildErrorObject };
