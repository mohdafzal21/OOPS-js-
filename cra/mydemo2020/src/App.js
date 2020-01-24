import React, { Component } from 'react';
import Counter from './Counter'
//props - immutable
//state - mutable,
// why do we need state ?
// enclosing the scope of state in the component 
// every component its own state 
// there are components with/wihtout state 

// what  is state ?
// THe live execution data of the component - Local Memory 
//State update the UI 
//lifecycleevents 
class App extends Component {
  state = {
    toggle : false ,
    count : 0
  }
  
  //
  incrementCount = ()=> {
    this.setState({
        count : this.state.count + 1
    })
  }
  decrementCount =()=>{
    this.setState({
      count : this.state.count - 1
    })
  }
   
  //method 
  handleClick=()=>{
   //explicit mutation - setState
   //look for the component state object and return the updated state 
   console.log("before setState",this.state.toggle)
   this.setState({
     toggle : !this.state.toggle
   })
   
  }

  render() { 
      console.log("render")
    return ( 
      <div>
        {this.state.toggle && <h2>Learning State</h2> }
        <button onClick={this.handleClick}>SHOW Click</button>
        <hr/>
        <Counter 
        incrementCount ={this.incrementCount}
        decrementCount = {this.decrementCount}
        count={this.state.count}/>
      </div>
      );
  }
}
 
export default App;

// button.addEventListener('click', hello)

// function hello(){
//   console.log("hello")
// }