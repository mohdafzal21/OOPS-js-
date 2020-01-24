import React, { Component } from 'react';

// class Comment extends Component {
  
//     render() { 
//         console.log("Comment",this.props)
//         return (   
//         <div className="Comment">
//         <div className="UserInfo">
//           <img className="Avatar"
//             src={this.props.author.avatarUrl}
//             alt={this.props.author.name}
//           />
//           <div className="UserInfo-name">
//             {this.props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">
//           {this.props.text}
//         </div>
//         <div className="Comment-date">
//           {this.props.date}
//         </div>
//       </div> 
//       );
//     }
// }


function Comment(props) {
    console.log("fn commnet", props)
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
  }

  export default Comment;
