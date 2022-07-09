import React from 'react'
import Nav from './Nav'
import Homepage from './Homepage'
import Login from './Login'

import { Route } from 'react-router-dom';
const App = () => {


return (
  <div>
    <h2>APP</h2>
    < Nav />
    {/* <Login /> */}
    < Homepage />
  </div>
)
}

export default App