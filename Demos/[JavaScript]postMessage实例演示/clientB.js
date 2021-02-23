const http = require("http");
const fs = require("fs");
const PORT = 4000;

http
  .createServer((req, res) => {
    fs.createReadStream("B.html").pipe(res);
  })
  .listen(PORT);
