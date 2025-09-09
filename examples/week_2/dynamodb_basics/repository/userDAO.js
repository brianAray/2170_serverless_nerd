const { DynamoDBClient} = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand, PutCommand, DeleteCommand} = require("@aws-sdk/lib-dynamodb")

const client = new DynamoDBClient({region: "us-east-1"});

const documentClient = DynamoDBDocumentClient.from(client);

const TableName = "users_table";

// CRUD
// Create Read Update Delete 

// Create

async function createUser(user){
    const command = new PutCommand({
        TableName,
        Item: user
    })

    try{
        await documentClient.send(command);
        return user;
    }catch(error){
        console.error(error);
        return null;
    }
}

// createUser({user_id: "55282f5f-9c53-462f-9e6c-004f7092544a", username: "user3", password: "pass3"});

// read

async function getUser(user_id){
    const command = new GetCommand({
        TableName,
        Key: {user_id}
    });

    try{
        const data = await documentClient.send(command);
        console.log(data.Item);
        return data.Item;
    }catch(error){
        console.error(error);
        return null;
    }
}

// delete
async function deleteUser(user_id){
    const command = new DeleteCommand({
        TableName,
        Key: {user_id}
    });

    try{
        await documentClient.send(command);
        return user_id;
    }catch(error){
        console.error(error);
        return null;
    }
}

// deleteUser("55282f5f-9c53-462f-9e6c-004f7092544a");

// documentClient.send(command)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

