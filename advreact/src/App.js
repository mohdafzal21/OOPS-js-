import React ,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
// import Toggle from './Toggle'
import Toggle from './ToggleRPC'
import Portal from './Portal'
function App() {
  return (
    <div className="App">
       <Toggle>
         { ({on,toggle}) =>(
           <>
             {on && <h1>Show Me</h1>}
             <button onClick={toggle}>Show/Hide</button>
         <Portal>{on && <h1>Hi , Im a portal !</h1>}</Portal>
           </>
         )}
       </Toggle>
    </div>
  );
}

export default App;
