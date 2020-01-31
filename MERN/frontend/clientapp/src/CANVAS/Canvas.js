import React from 'react';
import {Link} from 'react-router-dom'
const Canvas = (props)=>{
    return(
        <div style={{width:"300px" ,height:'200px'}}>
        <Link to={`/${props._id}`}>
        <img src={props.image} width="100%" height="75%"/>
        </Link>
         </div>
    )
}

export default Canvas