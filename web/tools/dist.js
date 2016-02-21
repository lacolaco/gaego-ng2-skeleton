const fs = require("fs-extra");

const files = [
  "index.html",
  "style.css",
  "bundle.js",
  "style/"
];

files.forEach((file) => {
  fs.copy(file, `../api/src/web/${file}`);
});
