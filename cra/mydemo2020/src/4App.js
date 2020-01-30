import React, { Component } from 'react'
import TImer from './Lifecycle/TImer'
import ZenQuote from './Lifecycle/ZenQuote'
import P0 from './Lifecycle/P0'
import './App.css'
export default class App extends Component {
   //before v16.5
   constructor(props){
     super(props)
     this.state= {
       toggle : false,
       message: 'dsad'
     }
   }

   

  render() {
    return (
      <div>
         <P0 />
      </div>
    )
  }
}
