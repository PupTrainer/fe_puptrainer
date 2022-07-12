import React, { useState } from 'react'
import Nav from './Nav'
import Homepage from './Homepage'
import Login from './Login'
import About from './About'

import { Route, Switch } from 'react-router-dom';
import { gql, useQuery, useMutation } from '@apollo/client';

const App = () => {
  
const [user, setUser] = useState({})

const [username, setUsername] = useState('')
const [email, setEmail] = useState('')


const CREATE_USER = gql`

mutation createUser(
  $username: String!
  $email: String!
  ) {
  createUser( input: {
    username: $username
    email: $email
  } ) {
    user {
    id
    username
    email
    }
  }
}

`

const [createUser, { data, error }] = useMutation(CREATE_USER)
  
const loginUser = (username, email) => {
  setUsername(username)
  setEmail(email)

  createUser({
    variables: {
      username: username,
      email: email
    }
  })

  if (error) {
    console.log(error)
  }
    setUser(data.createUser.user)
    console.log('data: ', data)
    console.log('createUser: ', data.createUser.user)
}


return (
  <div>
    <Switch>
      <Route exact path='/'>
        <Login loginUser={loginUser}/>
      </Route>
      <Route path='/homepage'>
        < Nav />
        < Homepage />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route render={() => {
        return <h1>Nothing here. Go back Home.</h1>
      }} />
    </Switch>
  </div>
)
}

export default App
