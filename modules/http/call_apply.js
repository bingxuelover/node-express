var pet = {
  words: '...',
  speak: function(say) {
    console.log(say + ' ' + this.words);
  }
}

pet.speak('Speak')

var dog = {
  words: 'wang'
}
//继承
pet.speak.call(dog, 'Speak')

//Speak ...
//Speak wang