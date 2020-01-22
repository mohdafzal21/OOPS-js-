//Creating a user dot notation
const user2 ={}

user2.name = "Plant"
user2.score = 5 

user2.increment = function(){
    user2.score ++
}

function userCreator ( name, score){
   const user = {}
   user.name = name
   user.score = score
   
   user.increment = function(){
       user.score ++
   }
   return user
}
const user1 = userCreator("a" ,10 )
const user2 = userCreator("b" ,10 )

