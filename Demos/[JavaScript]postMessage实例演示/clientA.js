const http = require("http");
const fs = require("fs");
const PORT = 3000;

http
  .createServer((req, res) => {
    fs.createReadStream("A.html").pipe(res);
  })
  .listen(PORT);
