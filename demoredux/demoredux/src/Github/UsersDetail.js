import React, { PureComponent } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {UserGrid} from './UsersList'
import {connect} from 'react-redux'
import {getUsersDetail,resetUserDetail} from './useraction'
import {bindActionCreators} from 'redux'
 class UsersDetail extends PureComponent {
    // state = {
    //   userrepos : [],
    //   loading : true
    // }
    async componentDidMount(){
        //   const response =await axios.get(`https://api.github.com/users/${this.props.match.params.name}/events`)
        //   this.setState({
        //       userrepos : response.data,
        //       loading : false
        //   })
        this.props.getUsersDetail(this.props.match.params.name)
    }

    componentWillUnmount(){
        //cleaning side effects
        //
        this.props.resetUserDetail()
    }


    render() {
        // console.log(this.props.match.params)
        const {userrepos} = this.props
        console.log(userrepos)
        return (
            <UserGrid>
               
               {userrepos.map((user)=> <RepoCard {...user} key={user.id}/> )
               }
            </UserGrid>
        )
    }
}


const mapStateToProps = state =>({
    userrepos : state.userReducer.usersDetail
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getUsersDetail,resetUserDetail
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(UsersDetail)

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