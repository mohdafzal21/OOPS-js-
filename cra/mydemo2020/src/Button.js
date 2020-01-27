import React, { Component } from 'react'
import PropTypes from 'prop-types';
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

Button.propTypes = {
    text1:PropTypes.string.isRequired,
    text2:PropTypes.string.isRequired,
    nextStep : PropTypes.func.isRequired,
    prevStep : PropTypes.func.isRequired
}