import React, { Component } from 'react'
import axios from 'axios'
export default class ZenQuote extends Component {
    constructor(props){
        super(props)
        this.state = {
            quote : '',
            loading : true
        }
        console.log("1")
    }

  async  componentDidMount(){
    console.log("3")

        // api 
       const response = await  axios.get('https://api.github.com/zen')
        this.setState({
            quote : response.data,
            loading : false
        })

    }

    render() {
        console.log("2")

        const {loading , quote} = this.state
        return (
            <div>
                <h1>Quote of the day</h1>
                <h3> {loading  ?  <p>Loading...</p> : quote} </h3>
            </div>
        )
    }
}
