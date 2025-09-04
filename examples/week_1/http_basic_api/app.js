const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    let body = "";

    req
        .on('data', (chunk) => {
            body += chunk;
        })
        .on("end", () => {
            body = body.length > 0 ? JSON.parse(body) : {};
            const contentType = {"Content-Type": "application/json"};

            if(req.url.startsWith("/items")){
                let index = parseInt(req.url.split("/")[2]);
                if(req.method === "POST"){
                    const {name, price} = body;
                    if(!name || !price){
                        res.writeHead(400, contentType);
                        res.end(
                            JSON.stringify({
                                message: "Please provide a valid name and price"
                            })
                        )
                    }else{
                        console.log(body);
                        res.end(
                            JSON.stringify({
                                message: "item added to list",
                                name,
                                price
                            })
                        )
                    }
                }
            }
        })
})


server.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
});