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
         this.state = {
             usersList  :[],
             loading : true
         }
     }
    // state = {
    //     usersList : []
    // }
    async componentDidMount() {
        console.log("3 : cdm")

        // this.props.getUsersList()
       const response = await axios.get('https://api.github.com/users')
       this.setState({
           usersList : response.data,
           loading : false
       })
    }

    render() {
        const {usersList,loading} = this.state
        console.log("2 : render")

        return (
            <UserGrid>
                 {loading ? 'loading. . .' :usersList.map((user)=> <User {...user} key={user.id}/>) }
            </UserGrid>
        )
    }
}

const mapStateToProps = state =>({
    usersList :  state.userReducer.usersList
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