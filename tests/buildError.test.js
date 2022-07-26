const { AppError, buildErrorObject } = require("../src/utils/appError");

const appError = new AppError(300, "i am app error");

describe("buildErrorObject function", () => {
  test("AppError input", () => {
    const err = buildErrorObject(appError);

    const body = JSON.parse(err.body);

    expect(err.statusCode).toBe(300);
    expect(body.message).toBe("i am app error");
  });
  test("Error input", () => {
    const err = buildErrorObject(new Error("jep error"));

    const body = JSON.parse(err.body);

    expect(err.statusCode).toBe(500);
    expect(body.message).toBe("jep error");
  });
});
