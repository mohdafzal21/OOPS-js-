import React from 'react'

const friends = ["tom","plant","smacky"]
class List extends React.Component{

    render(){
        return(
            <div>
            <h3>List Component</h3>
            <ul>
            {friends.map((friend,index)=> { 
               return ( 
               <li key={index}>{friend}</li>
               )
            })}
            <hr/>
            {friends.map((friend,index)=>(
                <div key={index}>
                    <li>{friend}</li>
                 </div>
            ))}
            </ul>
            </div>
        )
    }
}

export default List 