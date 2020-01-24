import React from 'react'
//props are immutable data structures 
//passing data from one component 

class DisplayName extends React.Component{
    render(){
        return(
            <h1>My friends List - {this.props.fName} </h1>
        )
    }
}


class List extends React.Component {
    render() { 
        console.log("List component", this.props.friendName)
        return ( 
            <div>
              <DisplayName fName = {this.props.friendName}/>
              <ul>
        {this.props.friends.map((list,index)=> <li key={index}>{list}</li>)}
        </ul> 
            </div>
         );
    }
}
 
export default List;