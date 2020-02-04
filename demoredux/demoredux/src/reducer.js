//reducer function 
// state,action as argument 

const initialState = {
    messageVisibilty  : false
}

  const toggleReducer = (state=initialState,action)=>{

    switch(action.type) {
        case 'TOGGLE' : 
        return { ...state, messageVisibilty : !state.messageVisibilty }
        default : 
        return {...state}
    }
}

export default toggleReducer