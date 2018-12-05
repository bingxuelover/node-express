var express = require('express')
var app = express()
var fs = require('fs')

/* routing */

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world')
})

app.post('/', function(req, res) {
  res.send('Got a POST request')
})

app.put('/user', function(req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function(req, res) {
  res.send('Got a DELETE request at /user')
})

//parameters
app.get('/users/:userId/books/:bookId', function(req, res) {
  res.send(req.params)
})

//handlers

var cb0 = function(req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function(req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function(req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])

app.get('/example/d', [
  cb0, cb1
], function(req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function(req, res) {
  res.send('Hello from D!')
})

/* middleware */

var requestTime = function(req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/req', function(req, res) {
  var responseText = 'requestTime<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

/* handler next */

app.get('/user/:id', function(req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') 
    next('route')
    // otherwise pass the control to the next middleware function in this stack
  else 
    next()
}, function(req, res, next) {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', function(req, res, next) {
  res.send('special')
})

/* static */

// app.use(express.static('public'))
app.use('/static', express.static('public'))

/* aysnc */

app.get('/', function(req, res, next) {
  // do some sync stuff
  res.sendFile(__dirname + "/public/index.html").then(function(data) {
    // handle data
    console.log(data);
    return "next2"
  }).then(function(csv) {
    // handle csv
    console.log(csv);
  }).catch(next)
})

app.use(function(err, req, res, next) {
  // handle error
  console.log(err);
})

/* error */

app.get("/err", function(req, res) {
  throw new Error("BROKEN"); // Express will catch this on its own.
});

app.get("/not", function(req, res, next) {
  fs.readFile("/file-does-not-exist", function(err, data) {
    if (err) {
      next(err); // Pass errors to Express.
    } else {
      res.send(data);
    }
  });
});

/* 404 */

app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

/* 500 */

app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
