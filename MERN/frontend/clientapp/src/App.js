import React, { Component } from 'react';

import {Route} from 'react-router-dom'
import CanvasDetail from './CANVAS/CanvasDetail'
import CanvasList from './CANVAS/CanvasList'


const App = ()=>{
  return(
    <div>
         <Route exact path='/' component={CanvasList} />
         <Route path='/:cid' component={CanvasDetail} />
    </div>
  )
}

export default App