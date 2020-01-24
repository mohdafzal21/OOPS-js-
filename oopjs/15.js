// Challenge 1/3
// Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.
// Challenge 2/3
// Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.
// Challenge 3/3
// Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".
/*** CHALLENGE 1 of 3 ***/
function PersonConstructor() {
    // add code here
    this.greet = function() {
        console.log('hello')
    };
}
// /********* Uncomment this line to test your work! *********/
// const simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'
/*** CHALLENGE 2 of 3 ***/
function personFromConstructor(name, age) {
    // add code here
    // Object.create(PersonConstructor.prototype)
    PersonConstructor.call(this, name)
    this.name = name;
    this.age = age;
}
//personFromConstructor.prototype.greet = function(){ console.log("hello")}
//Object.setPrototypeOf(personFromConstructor, PersonConstructor)
personFromConstructor.prototype = Object.create(PersonConstructor.prototype)
const mike = new personFromConstructor('Mike', 30);
// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'
/*** CHALLENGE 3 of 3 ***/
// add code here
PersonConstructor.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name}`)
}
mike.introduce(); 

//************************************************** */

function PersonConstructor() {
    // add code here
    this.greet = function() {
        console.log('hello')
    };
}



function personFromConstructor(name, age) {
    // add code here
    // Object.create(PersonConstructor.prototype)
   let  person = new PersonConstructor()
   person.name = name 
   person.age = age 
   return person
}

const mike = new personFromConstructor('Mike', 30);
