var Sequelize = require("sequelize");

var sequelize = new Sequelize('mysql://xx:xxx@localhost:3306/nodejs');

var user = sequelize.define('users', {
  email: {type: Sequelize.STRING, field: 'email'},
  password: Sequelize.STRING
})


module.exports = {
  user:user
}