const { devApi, offlineApi } = require("../src/api");
const fs = require("fs");
const FormData = require("form-data");

const sampleOb = {
  valley: "Val ferret",
  zone: "Gappa",
  coords: {
    lat: 1221,
    long: -3231.323213,
  },
  description: "good snowcover",
  weather: "sunny",
  altitude: 3555,
  temperature: 32,
  aspect: "south",
  avalance_danger: 3,
  snow_cover: 125,
  photos: ["tere", "gfgfdgf"],
  snow_tested: true,
};

describe("API tests", () => {
  test("GET /health returns 200", async () => {
    const res = await offlineApi.get("/health");

    console.log("jahhas 1.4");

    expect(res.data.message).toBe("healthcheck OK, on stage dev");
  });
  // test("POST /obs returns 201", async () => {
  //   const res = await devApi.post("/obs", sampleOb);

  //   console.log("res");
  //   console.log(res.data);

  //   expect(res.status).toBe(201);
  //   expect(res.data.data).toBeDefined();
  // });
  // test("GET /obs/{id} returns 200", async () => {
  //   const res = await devApi.get("/obs/e554bada-398e-44c8-a73a-b05ef6a93c9f");

  //   console.log("resData");
  //   console.log(res.data);

  //   expect(res.status).toBe(200);
  //   expect(res.data.data).toBeDefined();
  // });

  //   test("POST /upload returns 200", async () => {
  //     try {
  //       const data = fs.readFileSync("fattura96.pdf", "utf8");

  //       const formData = new FormData();
  //       formData.append("file", data);

  //       const res = await devApi.post("/upload", formData, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });

  //       console.log("res");
  //       console.log(res.body);

  //       expect(res.body.url).toBe("fdsfds");
  //     } catch (err) {
  //       console.error(err);
  //       expect(true).toBe(false);
  //     }
  //   });
});
