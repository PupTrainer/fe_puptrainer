import React from 'react'
import Nav from './Nav'
import Homepage from './Homepage'
import Login from './Login'
import About from './About'

import { Route } from 'react-router-dom';
const App = () => {


return (
  <div>
    <h2>APP</h2>
    <Route exact path='/'>
      <Login />
    </Route>
    <Route path='/homepage'>
      < Nav />
      < Homepage />
    </Route>
    <Route path='/about'>
      <About />
    </Route>
  </div>
)
}

export default App