const AWS = require("aws-sdk");

const { buildErrorObject } = require("./utils/appError");
const { extractFile } = require("./utils/parseFile");

const BUCKET = process.env.BUCKET;

const s3 = new AWS.S3();

module.exports.photoUpload = async (event) => {
  try {
    const { body } = await extractFile(event);

    console.log("BODY:");
    console.log(body);

    s3.putObject({
      Bucket: BUCKET,
      Key: body.fileInfo.filename,
      ACL: "public-read",
      Body: body.file,
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        url: `https://${BUCKET}.s3.amazonaws.com/${body.fileInfo.filename}`,
      }),
    };
  } catch (err) {
    buildErrorObject(err);
  }
};
