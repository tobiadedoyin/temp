const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("ose padi ooo mi");
  }
  if (req.url === "/contact" && req.method === "GET") {
    res.end(`<h1>Our Contact</h1>
    <p>you can reachout to us on</p>
    <p>  <li>facebook</li>
    <li>twitter</li>
    <li><linkedln</li>   </p>`);
  } else {
    res.end(`
    <a href='/'> Go home </a>`);
  }
});

server.listen(4000, () => {
  console.log("ise ya");
});
