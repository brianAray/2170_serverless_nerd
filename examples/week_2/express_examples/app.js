const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

const logger = require("./util/logger");
const itemController = require("./controller/itemController");

// app.get("/", (req, res) => {
//     res.send("hello");
// })

function loggerMiddleware(req, res, next){
    logger.info(`Incoming ${req.method} : ${req.url}`);
    next();
}


app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use("/items", itemController);


app.post("/", (req, res) => {
    let data = req.body;
    logger.info(data);
    res.send({message: "data received"});
})

app.listen(PORT , () => {

    console.log(`Server is listening on port: ${PORT}`);
});