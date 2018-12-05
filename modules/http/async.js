//<script src='a.js'></script>
//<script src='a.js'></script>
//<script src='a.js'></script>

// var i=0;
// while (true) {
//   i++;
// }

var c = 0
function printIt() {
  console.log(c);
}

function plus() {
  c += 1;
}

plus();
printIt();

//setTimeout实现异步
function printItAsync() {
  console.log(c);
}

function plusAsync(callback) {
  setTimeout(function() {
    c += 1;
    callback()
  }, 1000)
}

plusAsync(printItAsync)
