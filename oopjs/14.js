class userCreator{
    constructor(name,score) {
        this.name = name
        this.score = score
    }
    sayName(){
        console.log("Iam" + this.name)
    }
    increment(){
        this.score++
    }
}
const user1 = new userCreator("tom",4)
const user2 = new userCreator("Tim", 5)

user1.sayName()

class paidUserCreator extends userCreator{
    constructor(paidName,paidScore, accountBalance){
        super(paidName,paidScore)
            this.accountBalance = accountBalance
        
    }
    increaseBalance (){
        this.accountBalance++
    }
}

const paidUser1 = new paidUserCreator("Smacky", 8,25)

paidUser1.increaseBalance()
paidUser1.sayName()


