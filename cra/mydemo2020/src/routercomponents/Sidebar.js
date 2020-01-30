import React from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'

const data = [
    {
         path : '/',
         exact : true,
         side : ()=> <h1>Home SIDE</h1>,
         main : ()=> <h1>Home Main</h1>
    },
    {
        path : '/about',
        side : ()=> <h1>about SIDE</h1>,
        main : ()=> <h1>about Main</h1>
   },
   {
    path : '/product',
    side : ()=> <h1>product SIDE</h1>,
    main : ()=> <h1>product Main</h1>
}
]

const Sidebar = ()=>{
    return(
        <Router basename="dashboard">
        <div style={{display:"flex"}}>
            <div style={{background:'#f5f5f5'}} >
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
              <li>  <Link to='/product'>Product</Link> </li>
                {/* <Route path='/' component={data[0].side}/>
                <Route path='/about' component={data[1].side}/>
                <Route path='/product' component={data[2].side}/> */}
                {data.map((route)=>(
                    <Route
                        path={route.path}
                        component={route.side}
                        exact={route.exact}
                    />
                ))}
            </div>
            <div style={{flex:"1"}}>
               {data.map((data)=>(
                   <Route
                   path={data.path}
                   component={data.main}
                   exact = {data.exact}
                   />
               ))}
            </div>
        </div>
        </Router>
    )
}

export default Sidebar