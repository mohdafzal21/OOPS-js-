import React, { Component } from 'react'
import {ThemeProvider} from './Context'
import Navbar from './Navbar'
export default class App extends Component {
  state = {
    theme : 'light',
    toggleTheme : ()=>this.setState(({theme})=>({ 
     theme :   theme == 'light' ?  'dark' : 'light'
    }))
  }
  // toggleTheme = ()=>{
  //   this.setState(({theme})=>({
  //     theme : theme == light ? 'dark' : 'light'
  //   }))
  // }
  
  render() {
    return (
      <div>
           <ThemeProvider value={this.state}>
                 <Navbar/>
           </ThemeProvider>
      </div>
    )
  }
}
