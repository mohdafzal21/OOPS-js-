// Sol2 : 
function userCreator (name,score){
const newUser = Object.create(userFunctionStore)
    newUser.name = name
    newUser.score = score
    return newUser
}

const userFunctionStore={
    
    increment : function(){this.score++},
    login: function(){console.log("ur logg in")}

}

const user1 =  userCreator("Tom", 4)
const user2 = userCreator("Plant", 5)

user1.increment()