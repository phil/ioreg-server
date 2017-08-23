var express = require('express')
var app = express()
var redis = require("redis"), 
  redisClient = redis.createClient();
 
app.get('/', function (request, response) {
  // nout here
  response.send('Hello World 2')
})

app.get('/:key', function(request, response) {

  redisClient.get('foo', function(err, value) {
    response.send(value)
  })
})
 
app.listen(process.env.PORT || 8080)
