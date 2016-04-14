var express    = require("express"),
	router = express.Router(),
	bodyParser = require('body-parser'),
	expressValidator = require('express-validator'),
	app = express();

var userResource = require('./scripts/resources/userResource');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(expressValidator()); 

function checkAuth(req, res, next) {
  if(req.headers['token']) {
  	if(req.headers['token'] == 1234)
    	return next();
    else
    	res.status(401).send('token invalid');
  }

  res.status(401).send('auth failed');
}

app.use('/users', checkAuth);
app.get('/users', userResource.getAll);
app.get('/users/:id', userResource.getById);
app.post('/users', userResource.postUser);
app.put('/users/:id', userResource.putUser);
app.delete('/users/:id', userResource.deleteUser);

app.listen(3000);

