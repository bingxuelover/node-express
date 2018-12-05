var eventEmitter = require('events').EventEmitter

var life = new eventEmitter()

//set max
console.log(life.getMaxListeners());
life.setMaxListeners(2)
console.log(life.getMaxListeners());

function give(who) {
  console.log('give1 ' + who);
}
life.on('want', give)
life.on('want', function(who) {
  console.log('give2 ' + who);
})
life.on('want', function(who) {
  console.log('give3 ' + who);
})

//remove
life.removeListener('want', give)
// life.removeAllListeners()

life.emit('want', 'me')

//count
console.log(life.listeners('want').length);
console.log(life.listenerCount('want'));
