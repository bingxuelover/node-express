var pet = {
  words: "...",
  speak: function() {
    console.log(this.words);
    console.log(this === pet);
  }
}

pet.speak()

//全局
function petF(words) {
  this.words = words;

  console.log(this.words);
  console.log(this === global);
}

petF('...f')

//构造函数
function petFunc(words) {
  this.words = words;
  this.speak = function() {
    console.log(this.words);
    console.log(this == cat);
  }
}

var cat = new petFunc('...c');

cat.speak()

console.log('global', global)
