const { validateAndReturnNewOb } = require("../src/utils/validateOb");
//const { AppError } = require("../src/utils/appError");

describe("validateOb function errors", () => {
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
  test("if description is not a string throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: false,
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Please give description as a string");
    }
  });
  test("if no weather throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: "dsads",
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Please give weather as a string");
    }
  });
  test("if weather is not string throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: "dsads",
        weather: {},
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Please give weather as a string");
    }
  });
  test("if no altitude throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: "dsads",
        weather: "dsada",
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Not a valid altitude");
    }
  });
  test("if altitude is negative throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: "dsads",
        weather: "dsada",
        altitude: -4,
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Not a valid altitude");
    }
  });
  test("if altitude over 5000 throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: "dsads",
        weather: "dsada",
        altitude: 5001,
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Not a valid altitude");
    }
  });
  test("if no temperature throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: "dsads",
        weather: "dsada",
        altitude: 2500,
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Please give temperature as a number");
    }
  });
  test("if random aspect string throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: "dsads",
        weather: "dsada",
        altitude: 2500,
        temperature: 12,
        aspect: "dsads",
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Please give a valid aspect");
    }
  });
  test("if no avalance_danger throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: "dsads",
        weather: "dsada",
        altitude: 2500,
        temperature: 12,
        aspect: "south",
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Not a valid avalance danger");
    }
  });
  test("if avalance_danger over 5 throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: "dsads",
        weather: "dsada",
        altitude: 2500,
        temperature: 12,
        aspect: "south",
        avalance_danger: "6",
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Not a valid avalance danger");
    }
  });
  test("if avalance_danger under 1 throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: "dsads",
        weather: "dsada",
        altitude: 2500,
        temperature: 12,
        aspect: "south",
        avalance_danger: 0,
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Not a valid avalance danger");
    }
  });
  test("if no snow_cover throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: "dsads",
        weather: "dsada",
        altitude: 2500,
        temperature: 12,
        aspect: "south",
        avalance_danger: 2,
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Not a valid snow_ cover");
    }
  });
  test("if photos is not an array throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: "dsads",
        weather: "dsada",
        altitude: 2500,
        temperature: 12,
        aspect: "south",
        avalance_danger: 2,
        photos: "fdafds",
        snow_cover: 154,
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Not valid photos");
    }
  });
  test("if snow_tested is not boolean throws an error", () => {
    try {
      const ob = {
        valley: "val ferret",
        zone: "courmayeur",
        coords: {
          lat: 3211,
          long: 2132,
        },
        description: "dsads",
        weather: "dsada",
        altitude: 2500,
        temperature: 12,
        aspect: "south",
        avalance_danger: 2,

        snow_cover: 154,
        snow_tested: "dsa",
      };

      validateAndReturnNewOb(ob);

      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toBe("Not a valid snow_tested value");
    }
  });
});

describe("validateOb function return new object with valid input", () => {
  test("all the properties exists with right values", () => {
    const ob = {
      valley: "val ferret",
      zone: "courmayeur",
      coords: {
        lat: 3211,
        long: -21.32,
      },
      description: "dsads",
      weather: "dsada",
      altitude: 2500,
      temperature: 12,
      aspect: "south",
      avalance_danger: 2,

      snow_cover: 154,
      snow_tested: true,
    };

    const newOb = validateAndReturnNewOb(ob);

    expect(newOb.valley).toBe("val ferret");
    expect(newOb.zone).toBe("courmayeur");
    expect(newOb.coords.lat).toBe(3211);
    expect(newOb.coords.long).toBe(-21.32);
    expect(newOb.description).toBe("dsads");
    expect(newOb.weather).toBe("dsada");
    expect(newOb.altitude).toBe(2500);
    expect(newOb.temperature).toBe(12);
    expect(newOb.aspect).toBe("south");
    expect(newOb.photos.length).toBe(0);
    expect(newOb.avalance_danger).toBe(2);
    expect(newOb.snow_cover).toBe(154);
    expect(newOb.snow_tested).toBe(true);
  });
});
