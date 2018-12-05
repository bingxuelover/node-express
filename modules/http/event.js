function clickIt() {
  window.alert('button clicked')
}

var button = document.getElementById('#button')

button.addEventListener('click', clickIt)
