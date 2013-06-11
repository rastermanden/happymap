var CartoDB = require('cartodb');
var secret = require('./secret.js');
var client = new CartoDB({user: secret.USER,api_key: secret.API_KEY});

client.on('connect', function() {
    console.log("connected");

    // template can be used
    client.query("select * from {table} limit 5", {table: 'sok'}, function(err, data){
    // JSON parsed data or error messages are returned
    })
});
// output stream to stdout
//http://docs.nodejitsu.com/articles/advanced/streams/how-to-use-stream-pipe
var output = require('fs').createWriteStream('/dev/stdout');
client.pipe(output);

client.connect();
console.log()

