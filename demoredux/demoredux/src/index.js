import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import{ rootReducer } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter as Router} from 'react-router-dom'
const store = createStore(
    rootReducer, 
    {},
    composeWithDevTools()
)
ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));
//fb=n
// const hello=()=> ({welcome : "hello cg19"})
//functions that will the returns object based on conditions, they are
// reducer functions 
// reducer fn - state and action 
// based on the action type it will return the state 
// const initialState = {
//     welcome : 'Hello CG19',
//     userAuth : false
// }
// const greeting = (state=initialState,action)=>{
//     console.log("action",action)
//        switch(action.type){
//            case 'WELCOMEALL' : 
//            return { ...state, welcome : "Hello All to Redux "}
//            case 'HELLOTOM' : 
//            return { ...state , welcome : 'Hello Tom'}
//            case 'HELLOUSER': 
//            return {...state , welcome : `Hello ${action.name}`}
//            case 'LOGIN': 
//            return {...state , userAuth : true}
//            case 'GETCANVASLIST' :
//            return  { ...state, list : action.payload  }
//            default : 
//            return {...state}
//          }
// }
// //create Store using create Store method 
// const store = createStore(greeting)
// console.log(store.getState()) // 
// store.dispatch({
//     type : 'WELCOMEALL'
// })
// console.log(store.getState()) 
// store.dispatch({
//     type:'HELLOTOM'
// })
// console.log(store.getState()) 
// store.dispatch({
//     type : 'HELLOUSER',
//     name : 'plant'
// })
// console.log(store.getState()) 

// store.dispatch({
//     type : 'LOGIN'
// })
// console.log(store.getState()) 


// const data = 'response from the api'
// store.dispatch({
//     type : 'GETCANVASLIST',
//     payload : data
// })
// console.log(store.getState()) 
