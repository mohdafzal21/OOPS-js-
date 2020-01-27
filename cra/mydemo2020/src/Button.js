import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div>
    <button onClick={this.props.nextStep}>{this.props.text1}</button>
    <button onClick={this.props.prevStep}>{this.props.text2}</button>
            </div>
        )
    }
}
