var http = require('http')
var url = 'http://www.huangyuhong.com/2018/11/nodejs-%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/'

http.get(url, function(res) {
  var html = ''

  res.on('data', function(data) {
    html += data
  })

  res.on('end', function() {
    console.log(html);
  })
}).on('error', function(err) {
  console.log('err: ' + err);
})
