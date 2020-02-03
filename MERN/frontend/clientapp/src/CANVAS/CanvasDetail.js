import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Poster} from './Canvas'
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
        this.setState({
            canvasDetail : {}
        })
    }

    render() {
        console.log(this.props.match.params)
        const {canvasDetail} = this.state
        return (
            <CanvasWrapper backdrop={canvasDetail.image}>
                <CanvasInfo>
                <Poster src={canvasDetail.image}/>
                    <div>
                    <h1>{canvasDetail.name}</h1>
                     <h3>{canvasDetail.bio}</h3>
                     <p>Some Random text </p>
                    </div>
                </CanvasInfo>
    
            </CanvasWrapper>
        )
    }
}


const CanvasWrapper = styled.div`
position : relative;
padding-top:50vh;
background : url(${props => props.backdrop});
background-size : cover;
`

const CanvasInfo = styled.div`
    background: white;
    text-align : left;
    padding : 2rem 10%;
    display : flex;
    > div {
        margin-left : 20px;
    }
    img {
        position : relative;
        top : -5rem;
    }
`