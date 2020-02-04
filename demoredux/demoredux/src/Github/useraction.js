
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

// export  const  getUsersList = () =>async ( dispatch ) => {
//     const response = await axios.get('https://api.github.com/users')
//     return dispatch({
//         type : 'GETUSERS',
//         payload : response.data
//     })
// }