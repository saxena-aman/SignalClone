/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();
const tableName = process.env.USERTABLE;
exports.handler = async (event) => {
  // insert code to be executed by your lambda trigger
  
  if(!event?.request?.userAttributes?.sub){
    console.log("No Sub Provided")
    return;
  }

  const now = new Date();
  const timestamp = now.getTime();


  const userItem = {
    __typename: {S:'User'},
    _lastChangedAt: {N:timestamp.toString()},
    _version: {N:"1"},
    createdAt: {S:now.toISOString()},
    updatedAt: {S:now.toISOString()},
    name: {S:event.request.userAttributes.email},
    id: {S:event.request.userAttributes.sub}
  }
  const params = {
    Item: userItem,
    TableName: tableName
  }
  //save a new user to DynamoDB
  try{
    await ddb.putItem(params).promise();
    console.log("success");
  }
  catch (e){
    console.log(e)
  }
};
