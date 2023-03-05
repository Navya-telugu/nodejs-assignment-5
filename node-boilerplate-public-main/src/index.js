var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url=="/welcome"){
        res.writeHead(200,{'Content-Type':' text/plain'})
        res.end("Welcome to Dominos!")
    }
    else if(req.url=="/contact"){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(
            {  
                phone: '18602100000', 
                email: 'guestcaredominos@jublfood.com' 
            })
           )
    }
    else{
        res.writeHead(404)
        res.end("error:404")
    }
    
  
}

module.exports = httpServer;

httpServer.listen(8000, function () {
    console.log("Server is listening on port 8000");
  });
  