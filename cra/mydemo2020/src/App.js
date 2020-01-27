import React, { Component } from 'react'
import ListContact from './contactApp/ListContact'
import AddContact from './contactApp/AddContact'
import Counter from './Counter'
import './App.css'
export default class App extends Component {
  state = {
    contacts : [
      {
        id: '1',
        name: 'afzal',
        handle: '@afzal',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
      {
        id: '2',
        name: 'tom',
        handle: '@tom',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
      {
        id: '3',
        name: 'Richard',
        handle: '@richard',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
    ]
  }
  
  //add new contact to the list 
  addContact = (newcontact)=>{
    console.log(newcontact)
    // const prevState = this.state.contacts
    // prevState.push(newcontact)
    this.setState((prevState)=>({
      contacts :[...prevState.contacts, newcontact]
    }))

  }

  removeContact = (contact)=>{
    this.setState(({contacts})=>{
      contacts  : contacts.filter((c)=> c.id !== contact.id)
    })
  }

  render() {
    const {contacts} = this.state
    return (
      <div>
        <AddContact addContact={this.addContact}/>
        <hr/>
         <ListContact 
        removeContact ={ this.removeContact}
         name="My List" contacts={contacts} />
         <hr/>
         <Counter/>
      </div>
    )
  }
}
