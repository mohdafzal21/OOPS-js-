import React, { Component } from 'react';
import {Link,Redirect,Route,Switch} from 'react-router-dom'
import Login from './routercomponents/Login'
import {pathToRegexp} from 'path-to-regexp';
const Home = ()=> <h1>Home</h1>
const About = ()=> <h1>About</h1>
const Product = ()=> {
  return (
    <h1>Product Page Protected</h1>
 ) }
 const Dashboard = ()=> {
  return (
    <h1>Dashboard Page Protected</h1>
 ) }

//HOC - It accepts a component as Props and Returns A COmponent 
 const  PrivateRoute =( {path , component:Component, auth , ...rest  } )=>{
   
   return(
     <Route 
       {...rest}
            render = {(props)=> auth === true ? <Component {...props}/> 
                                              : <Redirect to={{pathname : '/login' , state : {from : props.location}  }}  />  
                                            }
     
     />
   )
 }



class App extends Component {
  state =  {
    auth : false
  }
  loginHandler=()=>{
    this.setState({
      auth : true
    })
  }
  logoutHandler=()=>{
    this.setState({
      auth : false
    })
  }

  render() { 
    const {auth} = this.state
    return ( 
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/product'>Product</Link>
      <Link to='/dashboard'>Dashboard</Link>
      {auth ? 
      <button onClick={this.logoutHandler}>Logout</button>
      :
      <Link to='/login'>login</Link>
      }
     <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/login' render={(props)=><Login {...props} loginHandler={this.loginHandler}     />}/>

      <PrivateRoute exact auth={auth} path='/product'  component={Product} />
      <PrivateRoute exact auth={auth} path='/dashboard'  component={Dashboard} />

      {/* {this.state.auth ? 
      <Route exact path='/product' component={Product}/> 
      :<Redirect to='/login' />
      } */}

      {/* <Route render={()=><h1>404 Not found</h1>} /> */}
      

      </Switch>

     

    </div> 
    );
  }
}
 
export default App;