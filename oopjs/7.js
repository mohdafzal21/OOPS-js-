//this - window 
function UserCreator (name,score){
    this.name = name
    this.score = score
}
UserCreator.prototype.increment =  function(){
   console.log('outside', this) 
//    function add1(){
//     console.log('inside add1', this) 
//        this.score++
//    }
    add1 =()=>{
        console.log('inside add1', this)
        this.score++
    }
   add1()
}
UserCreator.prototype.login = function(){console.log("ur logg in")}

const user1 = new UserCreator("Tom", 4)

user1.increment()

const user2 = new UserCreator("Plant", 5)
