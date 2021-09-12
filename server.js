/* source: https://dev.to/youssefzidan/deploying-fake-back-end-server-database-using-json-server-github-and-heroku-1lm4 */

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(router);

server.listen(port);