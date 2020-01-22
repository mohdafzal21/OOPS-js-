function userCreator (name,score){
   
    const newUser = Object.create(userFunctions)
    newUser.name = name
    newUser.score = score
    return newUser
}



const userFunctions={
    sayName: function(){
        console.log("Im "+  this.name)
    },
    increment : function(){this.score++},
}

const user1 = userCreator("Tom", 4)
//const user2 = userCreator("Plant", 5)

user1.sayName()

function paidUserCreator(paidName,paidScore,accountBalance){
    const newPaidUser = userCreator(paidName,paidScore)
    Object.setPrototypeOf(newPaidUser,paidUserFunctions)
    newPaidUser.accountBalance = accountBalance
    return newPaidUser
}

const paidUserFunctions ={
    increaseBalance : function(){
        this.accountBalance++
    }
}

Object.setPrototypeOf(paidUserFunctions,userFunctions)

const paidUser1 = paidUserCreator("Smacky",8,25)

paidUser1.increaseBalance()

paidUser1.sayName()
