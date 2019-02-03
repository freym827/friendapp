var express = require("express");
const bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes")(app)

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
