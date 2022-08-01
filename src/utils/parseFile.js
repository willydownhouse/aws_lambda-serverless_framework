const busboy = require("busboy");

const getContentType = (event) => {
  const contentType = event.headers["content-type"];
  if (!contentType) {
    return event.headers["Content-Type"];
  }
  return contentType;
};

const extractFile = (event) =>
  new Promise((resolve, reject) => {
    const bb = busboy({
      headers: {
        "content-type": getContentType(event),
      },
    });

    let result = {
      file: "",
      fileInfo: "",
      //contentType: "",
    };

    bb.on("file", (fieldname, file, fileData, encoding, mimetype) => {
      file.on("data", (data) => {
        console.log("busboy data");
        console.log(data);
        result.file = data;
      });

      file.on("end", () => {
        console.log("busboy fileData");
        console.log(fileData);
        result.fileInfo = fileData;
      });
    });

    // bb.on("field", (fieldname, value) => {
    //   result[fieldname] = value;
    // });

    bb.on("error", (error) => reject(error));
    bb.on("finish", () => {
      event.body = result;
      resolve(event);
    });

    bb.write(event.body, event.isBase64Encoded ? "base64" : "binary");
    bb.end();
  });

module.exports = { extractFile };
