var CartoDB = require('cartodb');
var secret = require('../secret.js');
var client = new CartoDB({user: secret.USER,api_key: secret.API_KEY});

var insert = function(lon,lat,username) {
    console.log("connected");
    client.query("INSERT INTO {table} (the_geom, name, lon, lat) VALUES (ST_SetSRID(ST_Point({lon}, {lat}),4326),'{name}', {lon}, {lat})", {table: 'happymap', lon:lon, lat:lat, name:username}, function(err, data){
    })
};


client.on('connect', function() {
    console.log("connected");
});


// output stream to stdout
//http://docs.nodejitsu.com/articles/advanced/streams/how-to-use-stream-pipe
//var output = require('fs').createWriteStream('/dev/stdout');
//client.pipe(output);




exports.home = function(req, res){
  res.render('home', { title: 'Happymap' })
   console.log(process.env)
};

// handler for form submitted from homepage
exports.home_post_handler = function(req, res) {
    console.log(req.body);
    var username = req.body.username;
    var lon = parseFloat(req.body.Longitude);
    var lat = parseFloat(req.body.Latitude);

    insert(lon,lat,username);

    // redirect the user to homepage
    res.redirect('/');
};