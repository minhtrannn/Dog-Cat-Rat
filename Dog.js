var chalk = require('chalk');

function Dog(name) {
    this.name = name;
    this.stomach = [];
}

Dog.prototype.sayHi = function () {
    console.log('Hi My name is ' + chalk.blue(this.name));
}

module.exports = Dog;