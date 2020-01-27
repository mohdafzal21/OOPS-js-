import React, { Component } from 'react'

export default class Confirm extends Component {
    render() {
        return (
            <div>
                <h1>Confirm</h1>
                <button onClick={this.props.prevStep}>Prev</button>
            </div>
        )
    }
}
