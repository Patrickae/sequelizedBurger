// require the db from the models
var db = require("../models");

var express = require("express");

var router = express.Router();

//export the routes


router.get("/", function(req,res){
	db.burgers.findAll({}).then(function(result){

  	//set table data as an array with key burger
  	  var hbsObject = {
   	   burger: result
   		 };
    
    //render data into index.handlebars
    res.render("index", hbsObject);
  	});
});


router.post("/", function(req,res){
	console.log(req.body.input);
	db.burgers.create({burger_name: req.body.input}).then(function(){
		res.redirect("/");
	});
});






	
module.exports = router;


