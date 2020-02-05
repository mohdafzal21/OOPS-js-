import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle'
function App() {
  return (
    <div className="App">
      <Toggle name="afzal">
       <h1>Hello</h1>
      </Toggle>
      {/* <Route path='/' component={Home}>
      <Home/>
      </Route> */}
    </div>
  );
}

export default App;
