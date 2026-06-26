// Custom Node server for Hostinger (Passenger / Node.js app hosting).
// Hostinger's Node.js app environment expects a startup file that boots an
// HTTP server listening on process.env.PORT. This runs the production Next.js
// build (so make sure `npm run build` has been run first).
const { createServer } = require("http");
const next = require("next");

// Load .env / .env.production / .env.local from the app root, so secrets like
// RESEND_API_KEY work even when the host's env-var UI doesn't inject them into
// the process. Create a `.env.local` file in this folder with your key.
try {
  require("@next/env").loadEnvConfig(process.cwd(), false);
} catch (e) {
  console.warn("Could not load env files:", e && e.message);
}

const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => handle(req, res)).listen(port, () => {
      console.log(`> Cheerup Digital ready on port ${port}`);
    });
  })
  .catch((err) => {
    // Surfaces the real reason in console.log / stderr.log instead of a blank 503.
    console.error("FAILED TO START Next.js server:", err);
    process.exit(1);
  });
