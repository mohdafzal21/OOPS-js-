import React, { Component } from 'react';

class Counter extends Component{
  
    state={
            count : 0
    }
    incrementCount =  ()=>{
        console.log("before", this.state.count)
      this.setState(({count})=>({
            count : count + 1
        }), ()=> console.log("in 1 "))
        this.setState(({count})=>({
            count : count + 1
        }),()=> console.log("2"))
        this.setState(({count})=>({
            count : count + 1
        }),()=> console.log("3"))
       

    }
    decrementCount = ()=>{
        this.setState({
            count : this.state.count - 1
        })
    }
       
    render(){
        const {count} = this.state
        return(
            <div>
                 <h1>Count value : {count} </h1>
                <button onClick={this.incrementCount}>Inc</button>
                <button onClick={this.decrementCount}>Dec</button>
            </div>
        )
    }
}

export default Counter 