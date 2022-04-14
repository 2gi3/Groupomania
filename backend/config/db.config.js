const Sequelize = require("sequelize");
require("dotenv").config({path: __dirname + '/.env'});
module.exports = new Sequelize("groupomaniadb","root",process.env['PWD'],{host:"localhost", dialect:"mysql"});