import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {UserGrid} from './UsersList'
export default class UsersDetail extends Component {
    state = {
      userrepos : [],
      loading : true
    }
    async componentDidMount(){
          const response =await axios.get(`https://api.github.com/users/${this.props.match.params.name}/events`)
          this.setState({
              userrepos : response.data,
              loading : false
          })
    }

    render() {
        // console.log(this.props.match.params)
        const {userrepos,loading} = this.state
        // console.log(userrepos)
        return (
            <UserGrid>
               {loading ? 'loading ...' : 
               userrepos.map((user)=> <RepoCard {...user} key={user.id}/> )
               }
            </UserGrid>
        )
    }
}



const RepoCard = (props)=>{
    const {repo,payload} = props
   let msg 
   if(payload.hasOwnProperty('commits')){
        msg = payload.commits.length
   }else{
        msg = 0
   }
    return(
        <RepoStyleCard>
         <h2>{repo.name}</h2>
        <h2>{msg}</h2>
        </RepoStyleCard>
    )
}



const RepoStyleCard = styled.div`
        background: papayawhip;
         border : 2px solid black;
         box-shadow : 14px 20px 20px 0px black;

`