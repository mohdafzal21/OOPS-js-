import React from 'react';
import {ThemeConsumer} from './Context'
const Navbar = ()=>{
    return(
        <>
         <ThemeConsumer>
             {(props )=>(
                 <button onClick={props.toggleTheme}>{props.theme}</button>
             )}
         </ThemeConsumer>
        </>
    )
}
export default Navbar