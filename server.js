const http = require("http");
const fs = require("fs");


const PORT = 3000;

const server = http.createServer(function (req, res) {
    let filename = '';
    if (req.url === '/') {
        filename = 'index.html';
    } else if (req.url === '/visitor') {

    }

    // fs.readFile("index.html", function (err, data) {

    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.write(data);
    //     res.end();
    // });
    // HOME PAGE
       if (req.method === "GET" && req.url === "/") {
    
           fs.readFile("index.html", "utf8", (err, data) => {
    
   
               res.writeHead(200, {
                   "Content-Type": "text/html"
               });
    res.write(data);
               res.end();
    
           });
    
       }
    else if (req.method === "GET" && req.url === "/css/style.css") {
    
           fs.readFile("css/style.css", (err, data) => {
    
               res.writeHead(200, {
    
                   "Content-Type": "text/css"
    
               });
    
               res.end(data);
    
           });
    
       }
    
       // PAGE NOT FOUND
       else {
    
           res.writeHead(404, {
    
               "Content-Type": "text/html"
    
           });
    
           res.end("<h1>404 Page Not Found</h1>");
    
       }
});
server.listen(3000);
console.log("server running at http://localhost:3000")