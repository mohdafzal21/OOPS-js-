import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <button onClick={this.props.prevStep}>Prev</button>
                <button onClick={this.props.nextStep}>Next</button>
            </div>
        )
    }
}
