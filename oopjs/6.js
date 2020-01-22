//prototypal inheritance

function UserCreator (name,score){
    this.name = name
    this.score = score
}
UserCreator.prototype.increment =  function(){
    this.score++
}
UserCreator.prototype.login = function(){console.log("ur logg in")}

const user1 = new  UserCreator("Tom", 4)
const user2 = new UserCreator("Plant", 5)

user1.increment()
user2.login()



//Creates a blank, plain JavaScript object;
//Links (sets the constructor of) this object to another object;
//Passes the newly created object from Step 1 as the this context;
//Returns this if the function doesn't return its own object.
