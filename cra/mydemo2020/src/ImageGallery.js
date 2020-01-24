import React, { Component } from 'react';

class ImageGallery extends Component {
    render() { 
        console.log("Imge " , this.props)
        return ( 
            <div> 
                {this.props.images.map((image,index)=> (
                <img src={image} key={index} alt={"image gallery"}/>

                ))}
            </div>
         );
    }
}
 
export default ImageGallery;