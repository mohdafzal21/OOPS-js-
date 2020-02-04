const initialState ={
    usersList : []
}

export const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'GETUSERS' : 
        return {...state , usersList : action.payload }
        default : 
        return state
    }
}
