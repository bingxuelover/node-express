var querystring = require('querystring')

var stringOn = querystring.stringify({
  foo: 'bar',
  baz: [
    'qux', 'quux'
  ],
  corge: ''
}, ',')

var stringParse = querystring.parse(stringOn, ',')

console.log(stringOn);
console.log(stringParse);
