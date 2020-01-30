import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
const Home = ()=> <h1>Home</h1>
const About = ()=> <h1>About</h1>
const Product = (props)=> {
  console.log("Inside Product" , props)
  return (
    <h1>Product</h1>
 ) }
const Topic = (props)=>{
  console.log("props inside Topic", props)
  return(
    <h1>Hello Topic : {props.match.params.topicId}  </h1>
  )
}
const Topics = (props)=>{
  console.log("In Topics", props)
  const {match} = props
  return(
    <div>
      <h1>Please Select a Topic</h1>
  <ul>
    {/* <li><Link to='/topics/React'>React</Link></li> */}
   {/* <li><Link to='/topics/Angular'>Angular</Link></li>
    <li><Link to='/topics/Vue'>Vue</Link></li> */}
    <li><Link to={`${match.url}/React`}>React</Link></li>
    <li><Link to={`${match.url}/Angular`}>Angular</Link></li>
    <li><Link to={`${match.url}/Vue`}>Vue</Link></li>
  </ul>
  
    {/* <Route path='/topics/React' component={Topic}/>
    <Route path='/topics/Angular' component={Topic}/>
    <Route path='/topics/Vue' component={Topic}/> */}
    <Route path={`${match.url}/:topicId`} component={Topic}/>

    </div>
  )}

 export default class App extends Component {
 

  render() {
    return (
      <div>
       <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/topics'>Topics</Link>
        <Link to='/newtopics'>New Topics</Link>

        <div style={{border:'2px solid black'}}>
        <Route exact  path ='/' component={Home}/>
         <Route  path='/about' component={About}/>
         <Route  path='/product' component={Product}/>
         <Route path='/topics' component={Topics}/>
         <Route path='/newtopics' component={Topics}/>
    </div>
      
      </div>
    )
  }
}

// const  Routes=()=>(
//     <div style={{border:'2px solid black'}}>
//     <Route exact  path ='/' component={Home}/>
//     <Route  path='/about' component={About}/>
//     <Route  path='/product' component={Product}/>
//     </div>
//   )


// Route is a Higher Order Component -it accepts component as argument/Props
// And Route returns a Component 

