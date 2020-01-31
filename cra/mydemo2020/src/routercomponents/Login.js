import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    state = {
        username :'',
        password : '',
        renderState : false
    }
    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit =e=>{
        e.preventDefault()
        if(this.state.username == 'tom' && this.state.password == 'tom'){
            
            this.props.loginHandler()
            this.fakeAuth()
            // this.props.history.push()
        }
    }
    fakeAuth =()=>{
        console.log("happening fake")
        this.setState({
            renderState : true
        })
    }

    render() {
        const {username,password,renderState} = this.state
       
        const {from} = this.props.location.state  || {from : {pathname : '/'}}
        console.log("default props In Login component",from)
        console.log("render state",renderState)
        if(renderState === true){
          return   <Redirect to={from} />
         }
           
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                           placeholder="enter username"
                           value = {username}
                           name="username"
                           onChange={this.handleChange}
                      />
                      <input 
                           placeholder="enter password"
                           value = {password}
                           name="password"
                           onChange={this.handleChange}

                      />
                      <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
