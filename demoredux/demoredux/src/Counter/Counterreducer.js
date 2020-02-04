import {INC ,DEC ,RESET } from './counteraction'
const initialState = {
    count : 0

}

export const Counterreducer = (state=initialState,action)=> {

        switch(action.type){
            case INC : 
            return {...state, count : state.count + 1}
            case DEC : 
            return {...state, count : state.count - 1}
            case RESET :
            return {...state, count : 0}
            default : 
            return state

        }
}