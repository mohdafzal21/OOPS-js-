import React, { Component } from 'react'
import axios from 'axios'
export default class CanvasDetail extends Component {
   state ={
        canvasDetail : {}
   }
    async componentDidMount() {
        //get the data from backend 
        const response = await axios.get(`http://localhost:3000/api/canvas/${this.props.match.params.cid}`)
        console.log(response)
        this.setState({
            canvasDetail : response.data
        })
    }
    componentWillUnmount(){
        console.log("Detail Unmounted")
    }

    render() {
        console.log(this.props.match.params)
        const {canvasDetail} = this.state
        return (
            <div>
    <h1>{canvasDetail.name}</h1>
                 <img src={canvasDetail.image}/>
        <h3>{canvasDetail.bio}</h3>
            </div>
        )
    }
}
