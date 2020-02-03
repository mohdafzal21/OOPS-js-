import React, { Component } from 'react'
import axios from 'axios'
import {Canvas} from './Canvas'
import styled from 'styled-components'

export default class CanvasList extends Component {
   state ={
       canvasList : []
   }
    async componentDidMount(){
        const response = await axios.get('http://localhost:3000/api/canvas')
        this.setState({
            canvasList : response.data
        })
    }
    componentWillUnmount(){
     this.setState({
         canvasList :[]
     })
    }

    render() {
        const {canvasList} = this.state
        return (
            <MovieGrid >   
              {canvasList.map((canva)=>(
                 
                  <Canvas {...canva} key={canva._id} />
              ))}  
              
            </MovieGrid>
        )
    }
}


const MovieGrid = styled.div`
display : grid;
padding : 1rem;
grid-template-columns: repeat(6,1fr);
grid-row-gap: 1rem;
`