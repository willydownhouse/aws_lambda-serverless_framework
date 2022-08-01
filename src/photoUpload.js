const AWS = require("aws-sdk");

const { buildErrorObject, AppError } = require("./utils/appError");
const { extractFile } = require("./utils/parseFile");

const BUCKET = process.env.BUCKET;

const s3 = new AWS.S3();

module.exports.photoUpload = async (event, context) => {
  try {
    const { body } = await extractFile(event);

    console.log("BODY");
    console.log(body);

    if (!(body.file instanceof Buffer)) {
      throw new AppError(400, "Please enter a file");
    }

    // PURKKA TESTIÄ VARTEN
    const key = body.fileInfo.filename || "testFile";

    await s3
      .putObject({
        Bucket: BUCKET,
        Key: key,
        ACL: "public-read",
        Body: body.file,
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        url: `https://${BUCKET}.s3.amazonaws.com/${key}`,
      }),
    };
  } catch (err) {
    return buildErrorObject(err);
  }
};
