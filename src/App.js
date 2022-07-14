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

const CREATE_DOG = gql`
  mutation createDog(
    $userId: Integer!
    $name: String!
    $age: Integer!
    $breed: String!
  ){
    createDog( input: {
      userId: $userId
      name: $name
      age: $age
      breed: $breed
    } ) {
      id
      name
      age
      breed
      user {
        id
        username
        email
      }
    }
  }
`

const [createUser, { data, error, loading }] = useMutation(CREATE_USER)

const [createDog, { data, error, loading }] = useMutation(CREATE_DOG)

const loginUser = (username, email) => {
  setUsername(username)
  setEmail(email)

  createUser({
    variables: {
      username: username,
      email: email
    }
  })
  .then((data) => setUser(data.data.createUser.user))
//.then(() => userQuery(user.id))

  if (error) {
    console.log(error)
  }
}

const registerDog = (name,age,breed,skills) => {

  createDog({
    variables: {
      userId: user.id,
      name: name,
      age: age,
      breed: breed
    }
  })
  .then((data) => setUser()

  )
  //some mutation query
  //.then pass down what? dog?
}

return (
  <div>
    <Switch>
      <Route exact path='/'>
        <Login loginUser={loginUser}/>
      </Route>
      <Route path='/homepage'>
        < Nav />
        < Homepage user={user} registerDog={registerDog}/>
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
