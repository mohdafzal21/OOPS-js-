import React, { Component } from 'react';

class Counter extends Component{
  
       
    render(){
        return(
            <div>
                 <h1>Count value : {this.props.count} </h1>
                <button onClick={this.props.incrementCount}>Inc</button>
                <button onClick={this.props.decrementCount}>Dec</button>
            </div>
        )
    }
}

export default Counter 