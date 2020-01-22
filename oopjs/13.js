const obj = {
    num : 3,
    increment : function (){ 
        console.log("this here " , this)    
        this.num++
    },
    increment1 : function (){this.num++}
}
const otherObj = {
    num : 10
}
obj.increment() 

obj.increment.call(otherObj)
