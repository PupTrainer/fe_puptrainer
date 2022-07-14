import React, { useState } from 'react'
import Nav from './Nav'
import Homepage from './Homepage'
import Login from './Login'
import About from './About'

import { Route, Switch } from 'react-router-dom';
import { gql, useQuery, useMutation, useLazyQuery } from '@apollo/client';

const App = () => {

const [user, setUser] = useState({})

const [username, setUsername] = useState('')
const [email, setEmail] = useState('')

const FETCH_USER = gql`
query fetchUser(
  $id: ID!
){
  fetchUser(id: $id){
    id
    username
    email
    dogs {
      id
      name
      age
      breed
    }
  }
}
`

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
    $userId: Int!
    $name: String!
    $age: Int!
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

const [createUser, { dataUser, errorUser, loadingUser }] = useMutation(CREATE_USER)

const [createDog, { dataDog, errorDog, loadingDog }] = useMutation(CREATE_DOG)

const [fetchUser, { dataFetchUser, errorFetchUser, loadingFetchuser }] = useLazyQuery(FETCH_USER)

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

  if (errorUser) {
    console.log(errorUser)
  }
}

const registerDog = (name,age,breed,skills) => {
  console.log(name,age,breed,skills)
  console.log(typeof user.id, typeof age)
  console.log(user)
  createDog({
    variables: {
      userId: parseInt(user.id),
      name: name,
      age: parseInt(age),
      breed: breed
    }
  })
  .then(() => fetchUser({
    variables: {
      id: user.id
    }
  }))
  .then((data) => {
    console.log('fetchUser Response after dog',data)
    setUser(data.data.fetchUser)
  })


  //some mutation query
  //.then pass down what? dog?

  if (errorDog) {
    console.log(errorDog)
  }
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
