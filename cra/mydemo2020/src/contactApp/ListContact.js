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
            <input
             placeholder="Search here"
              name="query"
               value={query}
               onChange={(e)=>this.updateQuery(e.target.value)}
              />
            <h1>{newName}</h1>
           {showContacts.map((contact,index)=> (
               <div key={index}>
                   <li >
                       {contact.name} -{contact.handle}
                       <button onClick={()=>removeContact(contact)}>Remove</button>
                   </li>
                   </div>
           ))}
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
    