import React, { Component } from 'react'
import Home from './Home'
import Contact from './Contact'
import Confirm from './Confirm'
import About from './About'
import Button from './Button'


export default class App extends Component {
  state = {
    step : 0
  }
  nextStep =()=>{
    this.setState({
      step : this.state.step + 1
    })
  }
  prevStep =()=>{
    this.setState({
      step : this.state.step - 1
    })
  }
  

  render() {
    const {step} = this.state
    switch(step){
      case 0 : 
      return (
      <div>
        <Button text1="next" text2="Prev" prevStep={this.prevStep}  nextStep={this.nextStep} />
        <Home nextStep={this.nextStep} prevStep={this.prevStep}/>
        </div>)
      case 1 : 
      return <About  nextStep={this.nextStep} prevStep={this.prevStep}/>
      case 2 : 
      return <Contact  nextStep={this.nextStep} prevStep={this.prevStep}/>
      case 3 : 
      return <Confirm   prevStep={this.prevStep}/>
      default : 
      return  <h1>Hello Default</h1>
    }
  }
}
