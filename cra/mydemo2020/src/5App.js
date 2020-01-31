import React, { Component } from 'react'
import './App.css'
import Sidebar from './routercomponents/Sidebar'
import {Link,Route,Switch, NavLink} from 'react-router-dom'

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
    
    <ul>
    
    <li><Link to={`${match.url}/React`}>React</Link></li>
    <li><Link to={`${match.url}/Angular`}>Angular</Link></li>
    <li><Link to={`${match.url}/Vue`}>Vue</Link></li>
    </ul>
   {/* //Switch return always the first matched object - if its not there it will return default  */}
    <Switch>
   
    
    <Route  path={`${match.url}/:topicId`} component={Topic}/>
    <Route render={()=> <h1>Please Select a Topic</h1>} />
    </Switch>
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
        <NavLink to='/newtopics'   
        activeStyle={{
         fontWeight: "bold",
           color: "red"
          }}>New Topics</NavLink>
        <NavLink to='/sidebar' activeClassName="selected">Sidebar</NavLink>
        <div style={{border:'2px solid black'}}>
        <Switch>
        
        <Route exact  path ='/' component={Home}/>
        <Route  path='/about' component={About}/>
         <Route  path='/product' component={Product}/>
         <Route  path='/topics' component={Topics}/>
         <Route path='/newtopics' component={Topics}/>
         <Route path='/sidebar' component={Sidebar}/>
        
         <Route render={()=> <h1>404 Not Found</h1>} />
         </Switch>
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

