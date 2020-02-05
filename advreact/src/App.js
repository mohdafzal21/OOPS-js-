import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Toggle from './Toggle'
import Toggle from './ToggleRPC'
function App() {
  return (
    <div className="App">
   {/* <Toggle render={({on,toggle}) => (
     <div>
       {on && <h1>Show me</h1>}
       <button onClick={toggle}>Show/Hide</button>
     </div>
   ) } /> */}
   {/* <Toggle>
     <h1>Hello</h1>
   </Toggle> */}
   <Toggle>
     {({on,toggle}) => (
     <div>
       {on && <h1>Show me</h1>}
       <button onClick={toggle}>Show/Hide</button>
     </div>
   )}
   </Toggle>
      {/* <Route path='/' render={(props)=> <Login {...props}/>} /> */}
    </div>
  );
}

export default App;
