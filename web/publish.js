const fs = require("fs-extra");

fs.copy("./index.html", "../api/src/web/index.html", (err)=> {
});

fs.copy("./style", "../api/src/web/style", (err)=> {

});
