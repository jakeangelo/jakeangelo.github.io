console.log('Starting livereload')
var livereload = require('livereload');
var server = livereload.createServer();
server.watch([__dirname + "/site", __dirname + "/public/stylesheets"]);
console.log('Watching /site and /public/stylesheets')
