import React, { Component } from 'react'

// export default class Poster extends Component {
//     render() {
//         return (
//             <div>
//                 <img src={this.props.image} width="200" height="250" /> 
//             </div>
//         )
//     }
// }

const Poster =(props)=>{
    return (
        <div>
            <img src={props.image} width="200" height="250" /> 
        </div>
    )
}

export default Poster 