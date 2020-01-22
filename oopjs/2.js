// SOL1 : Generate objects using functions

function userCreator(name, score){
    const newUser = {}
    newUser.name = name
    newUser.score = score
    newUser.increment = function (){
        newUser.score++
    }
    return newUser
}

const user1 = userCreator("Tom", 4)
const user2 = userCreator("Plant", 5)

user1.increment()