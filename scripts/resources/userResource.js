
var user = require('../entities/user');

var getAll = function(req, res) {

   	user.findAll().then(function(results) {
  		res.send(results);
	});

};

var getById = function(req, res){

	user.findById(req.params.id).then(function(results) {
  		res.send(results);
	});

};

var postUser = function(req, res){

	req.check("email", "Enter a valid email address.").isEmail();
	req.check("email", "The email field is required.").notEmpty();
	req.check("password", "The password field is required.").notEmpty();

	var errors = req.validationErrors();

	if (errors) {
		res.send(errors);
		return;
	} else {
		user
		  .create(req.body)
		  .then(function(results) {
		   
		   	res.send(results);

		})
	}

};

var putUser = function(req, res){

	req.check("email", "Enter a valid email address.").isEmail();
	req.check("email", "The email field is required.").notEmpty();
	req.check("password", "The password field is required.").notEmpty();

	var errors = req.validationErrors();

	if (errors) {
		res.send(errors);
		return;
	} else {

		user.update(req.body,{ where: {'id':req.params.id}}).then(function(results){
			res.send();
		}, function(results){
			res.send();
		});

	}

};

var deleteUser = function(req, res){

	user.destroy({ where: {'id':req.params.id}}).then(function(results){
			res.status(204).send();
	}, function(results){
		res.send();
	});


};

module.exports = {
  getAll: getAll,
  getById: getById,
  postUser: postUser,
  putUser: putUser,
  deleteUser: deleteUser,
}