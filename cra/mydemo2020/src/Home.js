import React, { Component } from 'react'
import Poster from './Poster'
import Button from './Button'
export default class Home extends Component {
    render() {
        console.log(this.props)
        const {prevStep, nextStep} = this.props
        return (
            <div>
                <h1>Home</h1>
                <Button text="Next" next={this.props.nextStep} />
                <Button text="Prev" next={this.props.prevStep} />
                <hr/>
                <button onClick={prevStep}>Prev</button>
                <button onClick={nextStep}>Next</button>
                <hr/>
                <Poster width="1000" height="500" image={"https://images.unsplash.com/photo-1558980394-0a06c4631733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"} />
                <hr/>
                {/* <img src={"https://images.unsplash.com/photo-1558980394-0a06c4631733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}/> */}
            </div>
        )
    }
}
