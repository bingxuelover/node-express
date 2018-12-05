var student = require('./Student')
var teacher = require('./Teacher')

teacher.add('colin')

function add(teachername, students) {
  teacher.add(teachername);
  students.forEach(function(item, index) {
    student.add(item)
  })
}

exports.add = add;
