const initialState ={
    usersList : [],
    isUserListLoading : true
}

export const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'GETUSERS' : 
        return {...state , usersList : action.payload , isUserListLoading: false  }
        default : 
        return state
    }
}
