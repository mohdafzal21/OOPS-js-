import React, { Component } from 'react'
import axios from 'axios'
import Canvas from './Canvas'
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
        console.log("List unmounted")
    }

    render() {
        const {canvasList} = this.state
        return (
            <div style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)" ,gridGap:'5px'}}>   
              {canvasList.map((canva)=>(
                 
                  <Canvas {...canva} key={canva._id} />
              ))}  
              
            </div>
        )
    }
}
