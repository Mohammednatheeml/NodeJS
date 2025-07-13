// //! Import http
// const http = require("http");

// //! Create http server
// const server = http.createServer((req, res) => {
//   //! log the request details
//   console.log(`received ${req.method} request for:${req.url}`);

//   //!set the status code and headers
//   res.writeHead(200, { "content-type": "text/plain" });

//   //! send the responce
//   res.end("hello this is my first Node js server");
// });

// //*DEFINE THE PORT
// const PORT = 5000;

// //! Start the server
// server.listen(PORT, () => {
//   console.log(`server is running at http://localhost:${PORT}`);
//   console.log("press ctrl+c to end the server");
// });

//! Another Method
const http = require("http");

const requestHandler = (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello this is my first Node js server");
};

const server = http.createServer(requestHandler);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
