// Sol3 : 
//Shared method using functions
function UserCreator (name,score){
     const newUser = Object.create(userFunctionStore)
    newUser.name = name
    newUser.score = score
    return newUser
}

const userFunctionStore={
    increment : function(){this.score++},
    login: function(){console.log("ur logg in")}
}

const user1 =  UserCreator("Tom", 4)
const user2 =  UserCreator("Plant", 5)

user1.increment()