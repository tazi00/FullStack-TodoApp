const http = require("http");
const server = http.createServer();
server.listen(3000, () => {
  console.log("server running on https://localhost:3000");
});
