import React from 'react';
import {connect} from 'react-redux'
import {incrementCount,decrementCount,resetCount} from './counteraction'
import { bindActionCreators } from 'redux';
const Counter = (props)=> {
   
    const {count, incrementCount,decrementCount,resetCount} = props
  
    return(
        <>
            <h1>Count :{count} </h1>
            <button onClick={incrementCount}> INC</button>
            <button  onClick={decrementCount}>DEC</button>
            <button onClick={resetCount}>RESET</button>


        </>
    )
}

const mapStateToProps = state =>({
    count : state.Counterreducer.count
})
const mapDispatchToProps = dispatch =>bindActionCreators({
    incrementCount,decrementCount,resetCount
},dispatch)
// dispatch({
//     type :'INC'
// })


export default connect(mapStateToProps, mapDispatchToProps)(Counter)