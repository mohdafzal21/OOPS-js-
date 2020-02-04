import React from 'react'
import {connect} from 'react-redux'
import {toggleMessage} from './action'
import { bindActionCreators } from 'redux'
const Toggle = (props)=> {
    console.log("Toogle " , props)
    return(
        <>
      {props.message && <h1>Hello Redux click button to toggle </h1>}
   
        {/* <button onClick={()=>props.dispatch({
            type: 'TOGGLE',
        })}>Toggle</button> */}
        <button onClick={props.toggleMessage}>Toggle</button>
        
        </>
    )
}
//connect - will connect store to the component 
// it wil pass to argumments 
//1. store state 
//2. dispatch fn 

const mapStateToProps = state =>({
    message : state.toggleReducer.messageVisibilty
})

const mapDispatchToProps = dispatch =>bindActionCreators({
    toggleMessage

},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Toggle)


