import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
 export const Canvas = (props)=>{
    return(
     
        <Link to={`/${props._id}`}>
        <Poster src={props.image}/>
        </Link>
    )
}

//  Canvas
//img 
export const Poster = styled.img`
width : 200px;
height : 250px;
box-shadow : 0 15px 35px black;
`