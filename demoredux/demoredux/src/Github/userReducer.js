const initialState ={
    usersList : [],
    isUserListLoading : true,
    usersDetail : [],
    loginList: []
}

export const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'GETUSERS' : 
        return {...state , usersList : action.payload , isUserListLoading: false  }
        case 'GETUSERSDETAIL':
        return {...state , usersDetail : action.data }
        case 'RESETDETAIL' : 
        return {...state, usersDetail : []}
        default : 
        return state
    }
}
