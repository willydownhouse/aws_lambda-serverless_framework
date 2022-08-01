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
const sampleForUpdate = {
  valley: "Val Veny",
  zone: "Gappa",
  coords: {
    lat: 1221,
    long: -3231.323213,
  },
  description: "good snowcover",
  weather: "sunny",
  altitude: 1200,
  temperature: 32,
  aspect: "south",
  avalance_danger: 3,
  snow_cover: 125,
  photos: ["tere", "gfgfdgf"],
  snow_tested: true,
};

let id;

describe("API tests", () => {
  test("GET /health returns 200", async () => {
    const res = await devApi.get("/health");

    expect(res.data.message).toBe("healthcheck OK, on stage dev");
  });
  test("POST /obs returns 201", async () => {
    try {
      const res = await devApi.post("/obs", sampleOb);

      id = res.data.id;

      expect(res.status).toBe(201);
      expect(res.data).toBeDefined();
    } catch (err) {
      console.log("Error creating new Ob:", err);
      expect(true).toBe(false);
    }
  });
  test("GET /obs/{id} returns 200", async () => {
    const res = await devApi.get(`/obs/${id}`);

    expect(res.status).toBe(200);
    expect(res.data[0].id).toBe(id);
  });
  test("PUT /obs/{id} returns 200", async () => {
    const res = await devApi.put(`/obs/${id}`, sampleForUpdate);

    expect(res.status).toBe(200);
    expect(res.data.valley).toBe("Val Veny");
    expect(res.data.altitude).toBe(1200);
  });
  test("DELETE /obs/{id} returns 204", async () => {
    const res = await devApi.delete(`/obs/${id}`);

    expect(res.status).toBe(204);
  });

  test("POST /upload returns 200", async () => {
    try {
      const data = await readFile("fattura96.pdf");

      const formData = new FormData();
      formData.append("file", data);
      formData.append("filename", "haloo");

      const res = await devApi.post("/upload", formData, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      });

      expect(res.data.url).toBe(
        "https://sls1-service-obphotosbucket-dev.s3.amazonaws.com/testFile"
      );
      expect(res.status).toBe(200);
    } catch (err) {
      expect(true).toBe(false);
    }
  });
});

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log("file succesfully readed");
        resolve(data);
      }
    });
  });
}
