//! Import http
const http = require("http");

//! Create http server
const server = http.createServer((req, res) => {
  //! Here we are implement routing

  res.setHeader("content-type", "application/json");

  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end(JSON.stringify({ messege: "hii welcome to API" }));
  }

  
  if (req.url === "/user" && req.method === "GET") {
    res.statusCode = 200;
    const user = [
      {
        id: 1,
        name: "natheem",
        native: "mallipattinam ",
        id: 2,
        name: "ashik",
        native: "mallipattinam",
      },
    ];
    res.end(JSON.stringify(user));


    if (req.url === "/products" && req.method === "GET") {
      res.statusCode = 200;
      const products = [
        {
          id: 1,
          name: "laptop",
          price: "1233345 ",
          id: 2,
          name: "phone",
          price: "14522",
        },
      ];
      res.end(JSON.stringify(products));
    } else {
      res.statusCode = 404;
      res.end("page not found");
    }
  }
});

//*DEFINE THE PORT
const PORT = 5000;

//! Start the server
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
  console.log("press ctrl+c to end the server");
});
