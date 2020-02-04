import React, { PureComponent } from 'react'
import axios from 'axios'
import User from './User'
import styled from 'styled-components'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {getUsersList} from './useraction'
 class UsersList extends PureComponent {
     constructor(props){
         super(props)
         console.log("1")
        
     }
    
    async componentDidMount() {
        console.log("3 : cdm")

         this.props.getUsersList()
     
    }

    render() {
        const {usersList,isUserListLoading} = this.props
        console.log("2 : render" , this.props)

        return (
            <UserGrid>
                 {isUserListLoading ? 'loading. . .' :usersList.map((user)=> <User {...user} key={user.id}/>) }
            </UserGrid>
        )
    }
}

const mapStateToProps = state =>({
    usersList :  state.userReducer.usersList,
    isUserListLoading : state.userReducer.isUserListLoading
})

const mapDispatchToProps = dispatch => bindActionCreators({
        getUsersList
},dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(UsersList)

export const UserGrid = styled.div`
display : grid;
grid-template-columns : repeat(6,1fr);
padding:1rem;
grid-gap : 1rem;

`