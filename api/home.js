module.exports = function(){
const router = require('express').Router();
const express = require('express');


// Server the Homepage when called
router.get('/' , (req, res, next) => {
	var context = {};
	context.style = [ "home.css"];
	context.java = [ "dom.js"];
	console.log(context);
	res.render('home', context);

})
	return router;
}();
