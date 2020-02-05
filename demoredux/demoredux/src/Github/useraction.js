
import axios from 'axios'
//action creator - function returns the action type and also return the payload 

export  function getUsersList(){
    return async function(dispatch){
    const response = await axios.get('https://api.github.com/users')
    console.log(response)
    return dispatch({
        type : 'GETUSERS',
        payload : response.data
    })
}
}

//action creator will return type nd data 

export function getUsersDetail(name){
    return async function (dispatch){
          const response =await axios.get(`https://api.github.com/users/${name}/events`)
            return dispatch({
                type : 'GETUSERSDETAIL',
                data :  response.data
            })
    }
         
    
}

export function resetUserDetail(){
    return ({
        type : 'RESETDETAIL'
    })
}



// export  const  getUsersList = () =>async ( dispatch ) => {
//     const response = await axios.get('https://api.github.com/users')
//     return dispatch({
//         type : 'GETUSERS',
//         payload : response.data
//     })
// }