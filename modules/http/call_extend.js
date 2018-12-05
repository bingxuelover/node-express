function pets(words) {
  this.words = words
  this.speak = function() {
    console.log('Speak ' + this.words);
  }
}

function dog(words) {
  // pets.call(this, words)
  pets.apply(this, arguments)
}

var dogs = new dog('wang')

dogs.speak()

//Speak wang