
import React, { Component } from 'react'

export default class Toggle extends Component {
    state = {
        on : false
    }
    toggle = ()=>{
        this.setState({
            on : !this.state.on
        })
    }

    render() {
        console.log(this.props )
        return (
            <div>
                {this.state.on && this.props.children}
                <button onClick={this.toggle}>Show/Hide</button>
            </div>
        )
    }
}
