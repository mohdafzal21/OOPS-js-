import React, { Component } from 'react'
import ListContact from './contactApp/ListContact'
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

  removeContact = (contact)=>{
    console.log(contact)
    this.setState({
      contacts  : this.state.contacts.filter((c)=> c.id !== contact.id)
    })
  }

  render() {
    const {contacts} = this.state
    return (
      <div>
         <ListContact 
        removeContact ={ this.removeContact}
         name="My List" contacts={contacts} />
      </div>
    )
  }
}
