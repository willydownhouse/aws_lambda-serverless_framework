const { AppError } = require("../utils/appError");

async function checkIfItemExistsInDynamoDbTableOrThrowAnError(db, id) {
  const res = await db
    .query({
      TableName: process.env.DYNAMODB_OBS_TABLE,
      KeyConditionExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": id,
      },
    })
    .promise();

  if (res.Count === 0) {
    throw new AppError(400, "No item with that ID");
  }

  return res.Items;
}

module.exports = { checkIfItemExistsInDynamoDbTableOrThrowAnError };
