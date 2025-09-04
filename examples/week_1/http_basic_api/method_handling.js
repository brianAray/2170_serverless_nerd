const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    // handle the request logic

    res.setHeader('Content-Type', 'application/json');

    let body = "";

    //GET, POST, PUT, DELETE

    switch(req.method){
        case('GET'):
            res.statusCode = 200;
            res.end(JSON.stringify({message: "GET request handled"}));
            break;
        case("POST"):
            // Expecting there to be data in the http body

            body = "";

            req.on('data', (chunk) => {
                body += chunk;
            })
            req.on('end', () => {
                let data = JSON.parse(body);
                console.log(data);

                res.statusCode = 201; // created
                res.end(JSON.stringify({message: "POST request handled"}));
            })

            break;
        case("PUT"):
            body = "";

            req.on('data', (chunk) => {
                body += chunk;
            })
            req.on('end', () => {
                let data = JSON.parse(body);
                console.log(data);

                res.statusCode = 200; // ok
                res.end(JSON.stringify({message: "PUT request handled"}));
            })
            break;
        case("DELETE"):
            res.statusCode = 200; // ok
            res.end(JSON.stringify({message: "DELETE request handled"}));
            break;
        default:
            res.statusCode = 405; // method not allowed
            res.end(JSON.stringify({message: "Method not supported"}))
            break;
    }

})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})