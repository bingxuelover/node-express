var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringfy({'content': 'sdfdfg', 'cid': 2222})

var optionds = {
  hostname: 'localhost',
  port: 2015,
  path: '/test',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
}

var req = http.request(options, function(res) {
  console.log('Status: ' + res.statusCode);
  console.log('headers: ' + JSON.stringfy(res.headers));

  res.on('data', function(chunk) {
    console.log(Buffer.isBuffer(chunk));
    console.log(typeOf(chunk));
  })
  res.on('end', function() {
    console.log('ok end');
  }
});
req.on('error', function(err) {
console.log('Error: ' + err);
});
req.write(postData);
req.end()