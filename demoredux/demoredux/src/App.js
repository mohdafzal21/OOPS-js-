import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle'
import Counter from './Counter/Counter'
import {Route,Switch} from 'react-router-dom'
import UsersList from './Github/UsersList'
import UsersDetail from './Github/UsersDetail'
function App() {
  return (
    <div className="App">
     <Route exact path='/' component={UsersList}/>
     <Route path='/users/:name' component={UsersDetail} />
    </div>
  );
}

export default App;
