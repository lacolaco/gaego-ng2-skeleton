const fs = require("fs-extra");

const files = [
  "index.html",
  "bundle.js",
  "style.css"
];

files.forEach((file) => {
  fs.copy(file, `../api/src/web/${file}`);
});
