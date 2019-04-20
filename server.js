var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'))

app = express()
app.use(serveStatic(__dirname))
var port = process.env.PORT || 3000
app.listen(port)
console.log('server started ' + port)

var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port
  console.log('App now running on port', port)
})
