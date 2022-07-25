const { v4: uuidv4 } = require("uuid");
const { AppError } = require("./appError");

const aspects = [
  "north",
  "south",
  "east",
  "west",
  "northeast",
  "southeast",
  "southwest",
  "northwest",
];

const stability = ["poor", "medium", "good"];
const test_names = ["ect", "ct"];

function validateAndReturnNewOb(body) {
  const {
    valley,
    zone,
    coords,
    description,
    altitude,
    aspect,
    temperature,
    weather,
    avalance_danger,
    snow_cover,
    snow_tested = false,
    snow_tests = [],
    photos = [],
    createdAt = new Date().toLocaleString(),
  } = body;

  if (!valley || typeof valley !== "string") {
    throw new AppError(400, "Please give valley as a string");
  } else if (!zone || typeof zone !== "string") {
    throw new AppError(400, "Please give zone as a string");
  } else if (!coords || typeof coords !== "object") {
    throw new AppError(
      400,
      "Please give coords as an object with lat and long property"
    );
  } else if (
    !coords.lat ||
    isNaN(+coords.lat) ||
    +coords.lat === 0 ||
    !coords.long ||
    isNaN(+coords.long) ||
    +coords.long === 0
  ) {
    throw new AppError(400, "Please give lat and long as numbers");
  } else if (!description || typeof description !== "string") {
    throw new AppError(400, "Please give description as a string");
  } else if (!weather || typeof weather !== "string") {
    throw new AppError(400, "Please give weather as a string");
  } else if (
    !altitude ||
    isNaN(+altitude) ||
    +altitude === 0 ||
    +altitude < 0 ||
    +altitude > 5000
  ) {
    throw new AppError(400, "Not a valid altitude");
  } else if (!temperature || isNaN(+temperature) || +temperature === 0) {
    throw new AppError(400, "Please give temperature as a number");
  } else if (!aspect || !aspects.includes(aspect)) {
    throw new AppError(400, "Please give a valid aspect");
  } else if (
    !avalance_danger ||
    isNaN(+avalance_danger) ||
    +avalance_danger < 1 ||
    +avalance_danger > 5
  ) {
    throw new AppError(400, "Not a valid avalance danger");
  } else if (!snow_cover || isNaN(+snow_cover)) {
    throw new AppError(400, "Not a valid snow_ cover");
  } else if (!Array.isArray(photos)) {
    throw new AppError(400, "Not valid photos");
  } else if (
    photos.length > 0 &&
    !photos.every((url) => typeof url === "string")
  ) {
    throw new AppError(400, "Please check your photo urls");
  } else if (snow_tested && typeof snow_tested !== "boolean") {
    throw new AppError(400, "Not a valid snow_tested value");
  }
  return {
    id: uuidv4(),
    valley,
    zone,
    coords: {
      lat: coords.lat,
      long: coords.long,
    },
    createdAt,
    updatedAt: new Date().toLocaleString(),
    description,
    photos,
    altitude,
    aspect,
    temperature,
    weather,
    snow_tested,
    snow_tests,
    avalance_danger,
    snow_cover,
  };
}

module.exports = { validateAndReturnNewOb };
