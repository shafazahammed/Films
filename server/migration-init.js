// migration-init

var connection = require('./mysql');
const migration = require('mysql-migrations');

migration.init(connection,  __dirname + '/migrations');