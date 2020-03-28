var Mouse = require('./Mouse');
var Cat = require('./Cat');
var Dog = require('./Dog');

var Cat = new Cat();
var Mouse = new Mouse('Mickey');

Cat.eat(Mouse);

try {
    Cat.eat(Dog);
}
catch (error) {
    console.log("Cat can't eat Dog");
}
console.log(Cat);