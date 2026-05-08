const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { URLSearchParams } = require("node:url");
const { renderPage, pages } = require("./src/pages");

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "127.0.0.1";
const PUBLIC_DIR = path.join(__dirname, "public");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function send(res, statusCode, body, contentType = "text/html; charset=utf-8") {
  res.writeHead(statusCode, {
    "Content-Type": contentType,
    "Cache-Control": statusCode === 200 ? "public, max-age=300" : "no-store"
  });
  res.end(body);
}

function serveStatic(req, res) {
  const requestUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const decodedPath = decodeURIComponent(requestUrl.pathname.replace(/^\/assets\//, ""));
  const assetPath = path.normalize(path.join(PUBLIC_DIR, decodedPath));

  if (!assetPath.startsWith(PUBLIC_DIR)) {
    send(res, 403, "Forbidden", "text/plain; charset=utf-8");
    return true;
  }

  if (!fs.existsSync(assetPath) || !fs.statSync(assetPath).isFile()) {
    return false;
  }

  const ext = path.extname(assetPath).toLowerCase();
  send(res, 200, fs.readFileSync(assetPath), mimeTypes[ext] || "application/octet-stream");
  return true;
}

function normalizePath(pathname) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/six-pillars%E2%84%A2" || clean === "/six-pillars™") return "/six-pillars";
  return clean.toLowerCase();
}

function handleContactPost(req, res) {
  let body = "";
  req.on("data", chunk => {
    body += chunk;
    if (body.length > 1_000_000) req.destroy();
  });

  req.on("end", () => {
    const form = new URLSearchParams(body);
    const name = form.get("name") || "Website visitor";
    const email = form.get("email") || "";
    const phone = form.get("phone") || "";
    const message = form.get("message") || "";
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);

    res.writeHead(303, {
      Location: `/contact?sent=1&mailto=mailto%3ARichard%40MrBussey.com%3Fsubject%3D${subject}%26body%3D${mailBody}`
    });
    res.end();
  });
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (requestUrl.pathname.startsWith("/assets/") && serveStatic(req, res)) return;

  if (req.method === "POST" && normalizePath(requestUrl.pathname) === "/contact") {
    handleContactPost(req, res);
    return;
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    send(res, 405, "Method Not Allowed", "text/plain; charset=utf-8");
    return;
  }

  const route = normalizePath(requestUrl.pathname);
  if (route !== requestUrl.pathname && route === "/six-pillars") {
    res.writeHead(301, { Location: "/six-pillars" });
    res.end();
    return;
  }

  if (!pages[route]) {
    send(res, 404, renderPage("Page not found", "<h1>Page not found</h1><p>The page you requested is not available.</p>", route), "text/html; charset=utf-8");
    return;
  }

  send(res, 200, renderPage(pages[route].title, pages[route].content(requestUrl.searchParams), route));
});

server.listen(PORT, HOST, () => {
  console.log(`MrBussey site running at http://${HOST}:${PORT}`);
});
