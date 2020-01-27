import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContact extends Component {
    state = { 
        query : ''
     }
     updateQuery=(input)=>{
        this.setState({
            query : input.trim() 
        })

     }
    render() { 
        console.log("render : [render]")
        const {contacts, removeContact,name} = this.props
        const {query} = this.state
        const showContacts = query === ''
                                    ? contacts 
                                    : contacts.filter((c)=> c.name.toLowerCase().includes(query.toLowerCase()))
        const newName = query === '' ?
        null :  `${showContacts.length} of ${contacts.length} Showing`
     return ( 
            <div>
                <center>
            <input 
            style={{borderRadius : "20px", textAlign:"center", width:"200px"}}
             placeholder="Search here"
              name="query"
               value={query}
               onChange={(e)=>this.updateQuery(e.target.value)}
              />
              </center>
            <center><h1>{newName}</h1></center>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
           {showContacts.map((contact,index)=> (
               <div key={index} style={{border: "2px solid black", boxShadow:"0 0 35px black"}}>
                   <div>
                       <img src={contact.avatarURL} width="200" height="100" style={{border:"1px solid black"}}/>
                      <div style={{textAlign:'center', padding:'2px'}}>
                      <h2>{contact.name} </h2> 
                      <h2>-{contact.handle} </h2>
                       <button className="btn btn-primary" onClick={()=>removeContact(contact)}>Remove</button>
                       </div>
                   </div>
                   </div>
           ))}
           </div>
        </div>
         );
    }
}
 
export default ListContact;







ListContact.propTypes ={
    contacts :PropTypes.array.isRequired,
    name : PropTypes.string.isRequired,
    removeContact : PropTypes.func.isRequired
}



// const ListContact = ({contacts,name,removeContact})=> {
//     //    const {contacts} = props
//         return(
//             <div>
//                 <h1>{name}</h1>
//                {contacts.map((contact)=> (
//                    <div key={contact.id}>
//                        <li >
//                            {contact.name} -{contact.handle}
//                            <button onClick={()=>removeContact(contact)}>Remove</button>
//                        </li>
//                        </div>
//                ))}
//             </div>
//         )
//     }
    