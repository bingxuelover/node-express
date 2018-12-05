var globalVariable = 'This is global variable'

function globalFunction() {
  var localVariable = 'This is local variable'

  console.log(globalVariable);
  console.log(localVariable);

  globalVariable = 'This is change variable'

  console.log(globalVariable);

  function localFunction() {
    var innerLocalVariable = 'inner local'
    console.log(globalVariable);
    console.log(localVariable);
    console.log(innerLocalVariable);
  }

  localFunction()
}

globalFunction()
