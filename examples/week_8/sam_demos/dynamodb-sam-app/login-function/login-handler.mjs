import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient, QueryCommand} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({region: "us-east-1"});

const documentClient = DynamoDBDocumentClient.from(client);

export const lambdaHandler = async (event, context) => {
    const bodyObject = JSON.parse(event.body);
    const {username, password} = bodyObject;

    try{
        let dbResponse = await getUser(username);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Successful Login",
                response: dbResponse
            })
        }
    }catch (err){
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: error.message
            })
        }
    }
}


async function getUser(username){
    const command = new QueryCommand({
        TableName: process.env.USERS_TABLE_NAME,
        KeyConditionExpression: "#username = :username",
        ExpressionAttributeNames: {"#username": "username"},
        ExpressionAttributeValues: {":username": username}
    });

    try{
        const data = await documentClient.send(command);
        return data.Items[0];
    }catch(err){
        console.error(err);
    }
}
