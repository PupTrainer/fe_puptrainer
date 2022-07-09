import React from 'react'
import Nav from './Nav'
import Homepage from './Homepage'
import Login from './Login'
import About from './About'

import { Route, Switch } from 'react-router-dom';
const App = () => {


return (
  <div>
    <h2>APP</h2>
    <Switch>
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
      <Route render={() => {
        <h1>Nothing here. Go back Home.</h1>
      }} />
    </Switch>
  </div>
)
}

export default App