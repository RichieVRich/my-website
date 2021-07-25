const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const app = express();
var handlebars = require('express-handlebars').create({
	defaultLayout: 'main', 
});
app.engine('handlebars', handlebars.engine);
app.use(bodyParser.urlencoded({extended:true}));

const port = process.env.PORT || 8000;

app.use (express.json());
app.use(express.static('style'));
app.set('view engine', 'handlebars');


app.use('/', api);

app.use('*', (err,req,res,next) => {
	console.error(err);
	res.status(500).send({
		error: "An error occurred. Try again later. "
	});
});

app.use('*', function (req,res,next){
	res.status(404).json({
		error: "Request Resource " + req.originalUrl + " does not exist"
	});	
});

app.listen(port, () => {
	console.log(" == Server is running on port" , port);
});

