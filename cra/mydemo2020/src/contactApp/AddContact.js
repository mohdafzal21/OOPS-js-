import React, { Component } from 'react'

export default class AddContact extends Component {
    state = {
        name :'',
        handle: ''
    }
    handleChange =  e =>{
        //Object Interpolation
        this.setState({
           [e.target.name]  : e.target.value
        })
    }
    // handleChangeHandle = e =>{
    //     this.setState({
    //         handle : e.target.value
    //     })
    // }

    handleSubmit = (e)=>{
        e.preventDefault()
        //process form 
        this.props.addContact(this.state)
    }
    render() {
        const {name,handle} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                       name="name"
                       placeholder="enter name"
                       value ={name}
                       onChange={this.handleChange}
                    />
                    <input 
                      name = "handle"
                      placeholder= "enter handle"
                      value = {handle}
                      onChange={this.handleChange}
                    
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
