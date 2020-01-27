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
//PResentational COmponents
const Poster =(props)=>{
    return (
        <div>
            <img src={props.image} width={props.width} height={props.height} /> 
        </div>
    )
}

export default Poster 