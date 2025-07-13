//! Import http
const http = require("http");

//! Create http server
const server = http.createServer((req, res) => {
  //! Here we are implement routing
  //*first set the content to plain
  res.setHeader("content-type", "text/plain");

  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("hii welcome to homepage");
  }
  else if (req.url === "/about" && req.method === "GET") {
    res.statusCode = 200;
    res.end("hii welcome to about");
  }
  else if (req.url === "/contact" && req.method === "GET") {
    res.statusCode = 200;
    res.end("hii welcome to contact");
  }else{
    res.statusCode=404;
    res.end('page not found')
  }
});

//*DEFINE THE PORT
const PORT = 5000;

//! Start the server
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
  console.log("press ctrl+c to end the server");
});
