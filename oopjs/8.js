class UserCreator{
    constructor(name,score){
        this.name = name
        this.score = score
    }
    increment (){
        console.log(this);
        this.score++
    }
    login(){
        console.log("login")
    }

    sum(){
        console.log("sum")
    }
}


const user1 = new UserCreator("Tom", 4)


const user2 = new UserCreator("Plant", 5)

user1.increment()
