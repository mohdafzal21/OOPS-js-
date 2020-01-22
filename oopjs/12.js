

function UserCreator (name,score){
    this.name = name
    this.score = score
}
UserCreator.prototype.increment =  function(){
    this.score++
}
UserCreator.prototype.sayName = function(){
    console.log("ur logg in", this.name)
}
const user1 = new UserCreator("Tom", 4)
//const user2 = new UserCreator("Plant", 5)
user1.sayName()


function paidUserCreator(paidName,paidScore,accountBalance){
    userCreator.call(this,paidName,paidScore)
    //userCreator.apply(this,[paidName,paidScore])
    this.accountBalance = accountBalance

}
paidUserCreator.prototype = Object.create(userCreator.prototype)
paidUserCreator.prototype.increaseBalance = function(){
    this.accountBalance++
}
const paidUser1 = new paidUserCreator("Smacky",8,25)
paidUser1.increaseBalance()
paidUser1.sayName()