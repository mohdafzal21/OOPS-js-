import React, { Component } from 'react'
import Poster from './Poster'
export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <button onClick={this.props.prevStep}>Prev</button>
                <button onClick={this.props.nextStep}>Next</button>
                <Poster 
                 width = "100"
                 height = "200"
                image={"https://images.unsplash.com/photo-1580066620140-8e6d35fd16a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"} />
            </div>
        )
    }
}
