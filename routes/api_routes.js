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
	//create new entry where burger_name is the input
	console.log(req.body);
	// db.names.create({eater_name: req.body.eater_name});
	db.burgers.create({burger_name: req.body.input}).then(function(){
		res.redirect("/");
	});
});


// router.post("/", function(req,res){
// 	//create new entry where burger_name is the input
// 	db.names.create({eater_names: req.body.name}).then(function(){
// 		res.redirect("/");
// 	});
// });


  router.put("/:id", function(req, res) {

  	console.log(req.params.id)
    db.burgers.update(
      {devoured: true},
      {where:
        {id : req.params.id}})
    .then(function(){
    	res.redirect("/");  	
	});
});



router.delete("/:id", function(req, res) {

  	console.log(req.params.id)
    db.burgers.destroy(
      {where:
        {id : req.params.id}})
    .then(function(){
    	res.redirect("/");  	
	});
});




	
module.exports = router;


