//Action Type Constants 
export const INC = 'INC'
export const DEC = 'DEC'
export const RESET = 'RESET'
//action creator to return the action type 

export function incrementCount (){
    return ({
        type : INC
    })
}




export function decrementCount (){
    return ({
        type : DEC
    })
}
export function resetCount (){
    return ({
        type : RESET
    })
}