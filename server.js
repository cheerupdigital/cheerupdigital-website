// Custom Node server for Hostinger (Passenger / Node.js app hosting).
// Hostinger's Node.js app environment expects a startup file that boots an
// HTTP server listening on process.env.PORT. This runs the production Next.js
// build (so make sure `npm run build` has been run first).
const { createServer } = require("http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`> Cheerup Digital ready on port ${port}`);
  });
});
