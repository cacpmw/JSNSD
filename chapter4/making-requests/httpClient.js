const http = require("http");
const https = require("https");

//http.get("http://example.com", (res) => res.pipe(process.stdout));
//https.get("http://example.com", (res) => res.pipe(process.stdout));

const payload = `{
  "name": "Beth",
  "job": "Software Engineer"
}`;

const options = {
  method: "POST",
  hostname: "postman-echo.com",
  path: "/post",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(payload),
  },
};
//http
// const req = http.request(options, (res) => {
//   process.stdout.write("Status Code: " + res.statusCode + "\n");
//   process.stdout.write("Body: ");
//   res.pipe(process.stdout);
// });

//https
const req = https.request(options, (res) => {
  process.stdout.write("Status Code: " + res.statusCode + "\n");
  process.stdout.write("Body: ");
  res.pipe(process.stdout);
});

req.on("error", (error) => {
  console.log("Error: ", error);
});

req.end(payload);
