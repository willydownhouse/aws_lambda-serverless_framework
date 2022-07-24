const { validateAndReturnNewOb } = require("../utils/validateOb");
const { AppError } = require("../utils/appError");

describe("validateOb function", () => {
  test("if no valley throws an error", () => {
    try {
      const ob = {};

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Please give valley as a string");
    }
  });
  test("if valley not string throws an error", () => {
    try {
      const ob = {
        valley: 112,
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Please give valley as a string");
    }
  });
  test("if no zone throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Please give zone as a string");
    }
  });
  test("if no coords lat throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          long: 2132,
        },
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Please give lat and long as numbers");
    }
  });
  test("if no description throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Please give description as a string");
    }
  });
});
