import React, { useState } from 'react'
import Nav from './Nav'
import Homepage from './Homepage'
import Login from './Login'
import About from './About'

import { Route, Switch } from 'react-router-dom';
import { gql, useMutation, useLazyQuery } from '@apollo/client';
import DogProfile from './DogProfile'

const App = () => {

  const [user, setUser] = useState({})

  //verify we use lines 16+17 at production stage
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
  const [fetchUser, { dataFetchUser, errorFetchUser, loadingFetchuser }] = useLazyQuery(FETCH_USER, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only'
  })

  const loginUser = (username, email) => {
    setUsername(username)
    setEmail(email)

    createUser({
      variables: {
        username: username,
        email: email
      }
    })
    .then(data => {
      return fetchUser({
      variables: {
        id: data.data.createUser.user.id
      }
    })})
    .then((data) => {
      setUser(data.data.fetchUser)
  })
    if (errorUser) {
      console.log(errorUser)
    }
  }

  const registerDog = (name,age,breed,skills) => {
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
      setUser(data.data.fetchUser)
    })
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
          < Nav />
          <About />
        </Route>
        <Route 
            exact
            path='/:id'
            render={({ match }) => {
              const foundDog = user.dogs.find((dog) => {
                return dog.id === match.params.id
              })
          return (
            <>
              < Nav />
              <DogProfile
                {...foundDog}
              />
            </>
          )
        }} />
        <Route render={() => {
          return <h1>Nothing here. Go back Home.</h1>
        }} />
      </Switch>
    </div>
  )
}

export default App
