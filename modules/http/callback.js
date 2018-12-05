function learn(sth) {
  console.log(sth);
}

function we(callback, sth) {
  sth += ' is cool';
  callback(sth);
}

we(learn, "NodeJS");

//匿名函数
we(function(sth) {
  console.log(sth);
}, "Jade")
