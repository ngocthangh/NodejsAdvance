var util = require('util');


var Person = function() {
    this.firstName = 'Mong';
    this.lastName = 'Le';
    
}
// Person.prototype.lastName = 'Ngoc';
Person.prototype.sayHello = function() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}

var Student = function() {
    Person.call(this);
    this.id = '1234';
}

util.inherits(Student, Person);

var sv = new Student();
sv.sayHello();

