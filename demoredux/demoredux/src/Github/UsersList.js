import React, { Component } from 'react'
import axios from 'axios'
import User from './User'
import styled from 'styled-components'

export default class UsersList extends Component {
    state = {
        usersList : []
    }
   async componentDidMount() {
       const response = await axios.get('https://api.github.com/users')
       this.setState({
           usersList : response.data
       })
    }

    render() {
        const {usersList} = this.state
        return (
            <UserGrid>
                {usersList.map((user)=> <User {...user} key={user.id}/>)}
            </UserGrid>
        )
    }
}



export const UserGrid = styled.div`
display : grid;
grid-template-columns : repeat(6,1fr);
padding:1rem;
grid-gap : 1rem;

`