class PersonConstructor{
  
    constructor(){
        this.greet=function(){
            console.log("hello")
        }
        
    }
    introduce(){
        console.log("hello")
    }

}

class personFromConstructor extends PersonConstructor{
    constructor(name,age){
        super()
        this.name = name 
        this.age = age
    }
}

const mike = new personFromConstructor('Mike', 30);