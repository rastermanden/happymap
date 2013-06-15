
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

//require('./cartodbupdate')


var happymap = require('./routes/happymap')
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', happymap.home);
app.post('/', happymap.home_post_handler);

app.get('/map', happymap.map);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
