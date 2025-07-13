const http = require("http");
const url = require("url");

const requestHandler = (req, res) => {
  //   console.log(req.url);
  const passedUrl = url.parse(req.url, true);
  //   console.log(passedUrl)
  const queryParameter = passedUrl.query;
  console.log(queryParameter);

  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Not Found");
};

const server = http.createServer(requestHandler);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
