var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var PORT = 3000;
var app = express();

var db = require("./models");

require("./associations")(db);
// Serve static content for the app from the "public" directory in the application directory
app.use(express.static(process.cwd() + "/public"));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


//set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//put routes to use
var routes = require("./routes/api_routes.js");

app.use("/", routes);

//listen on port 3000
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});