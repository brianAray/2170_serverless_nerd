const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = 3000;

const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

const {
    CognitoIdentityProviderClient,
    SignUpCommand,
    ConfirmSignUpCommand,
    InitiateAuthCommand
} = require("@aws-sdk/client-cognito-identity-provider");

const region = "us-east-1";

const cognitoClient = new CognitoIdentityProviderClient({region});
const userPoolId = "us-east-1_VNlEVotO2";
const clientId = "aknnk5qfp5pllfd2thnn52cl6";


app.post("/register", async (req, res) => {
    const {username, password, email} = req.body;

    const params = {
        ClientId: clientId,
        Username: username,
        Password: password,
        UserAttributes: [
            {
                Name: "email",
                Value: email
            }
        ]
    };

    try{
        const command = new SignUpCommand(params);
        const result = await cognitoClient.send(command);
        res.send({message: "user registered successfully", user: result.UserSub});
    }catch(error){
        res.status(400).send(error.message || JSON.stringify(error));
    }
});

app.post("/confirm", async (req, res) => {
    const {username, confirmationCode} = req.body;
    const params = {
        ClientId: clientId,
        Username: username,
        ConfirmationCode: confirmationCode
    };

    try{
        const command = new ConfirmSignUpCommand(params);
        const result = await cognitoClient.send(command);
        res.send({message: "Confirmation Successful", result});
    }catch(error){
        res.status(400).send(error.message || JSON.stringify(error));
    }
});


app.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const params = {
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: clientId,
        AuthParameters: {
            USERNAME: username,
            PASSWORD: password
        }
    };

    try{
        const command = new InitiateAuthCommand(params);
        const result = await cognitoClient.send(command);
        res.send({message: "login successful", session: result.AuthenticationResult});
    }catch(error){
        res.status(400).send(error.message || JSON.stringify(error));
    }
});


const client = jwksClient({
    jwksUri: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`
})

function getKey(header, callback){
    client.getSigningKey(header.kid, (err, key) => {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    })
}

app.get("/protected", (req, res) => {
    const token = req.headers.authorization.split(" ")[1];

    if(!token){
        return res.status(401).send({message: "No token provided"});
    }

    jwt.verify(token, getKey, {algorithms: ["RS256"]}, (err, decoded) => {
        if(err){
            return res.status(401).send({message: "invalid token"});
        }
        res.send({message: "You accessed the protected route", decoded})
    })
})


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});