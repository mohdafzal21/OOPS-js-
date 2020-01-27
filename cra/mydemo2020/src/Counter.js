import React, { Component } from 'react';

class Counter extends Component{
  
    state={
            count : 0
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