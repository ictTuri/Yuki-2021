var express = require('express'),
	app = express(),
	ejs = require('ejs'),
    session = require('express-session'),
    bodyParser = require('body-parser');


//get css and pic from public directory
app.use(express.static(__dirname + '/public'));
//use ejs as view engine
app.set("view engine", "ejs");

app.get('/home',function(req, res){
	res.render('home'); 
});

app.get('/cv',function(req, res){
	res.render('cv'); 
});

app.get('*',function(req, res){
	res.send('No page here! go back .')
});

  app.listen(process.env.PORT|8000, process.env.IP, ()=>{
   console.log("Page has started");
});