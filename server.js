const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
	console.log(`JSON Server is running in ${port}`);
});

// change
// "scripts": {
//     "server": "json-server --watch db.json --port 8080",
// "start": "react-scripts start",
// // for
// "scripts": {
//     "server": "node ./server.js",
// "start": "npm run server", -> heorku sempre tenta rodar o npm start
