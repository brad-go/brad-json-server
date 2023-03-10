const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/capa/requests": "/requests",
    "/nara-space/users": "/users",
  })
);

server.use(router);

server.listen(9000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
