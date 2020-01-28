import React, { Component } from 'react'
import TImer from './Lifecycle/TImer'
import ZenQuote from './Lifecycle/ZenQuote'
export default class App extends Component {
   //before v16.5
   constructor(props){
     super(props)
     this.state= {
       toggle : false,
       message: 'dsad'
     }
     console.log("this in the constructor" , this)
    this.handleToggle = this.handleToggle.bind(this)
   }

   handleToggle(){
     console.log("this in the function", this)
     this.setState({
       toggle : !this.state.toggle
     })
   }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>CHange Toggle</button>
        <TImer toggle={this.state.toggle}/>
      </div>
    )
  }
}
