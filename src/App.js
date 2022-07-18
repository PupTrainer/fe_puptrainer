import React, { useState } from 'react'
import Nav from './Nav'
import Homepage from './Homepage'
import Login from './Login'
import About from './About'
import CreateUser from './CreateUser'
import ConfirmPage from './ConfirmPage'

import { Route, Switch } from 'react-router-dom';
import { gql, useMutation, useLazyQuery } from '@apollo/client';
import DogProfile from './DogProfile'

const App = () => {

  const [user, setUser] = useState({})
  const [username, setUsername] = useState('') 
  const [email, setEmail] = useState('')

  const FETCH_USER = gql`
    query fetchUser(
      $email: String!
    ){
      fetchUser(email: $email){
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

    fetchUser({
      variables: {
        email: email
      }
    })
    .then((data) => {
      console.log(data)
      setUser(data.data.fetchUser)
  })
    if (errorUser) {
      console.warn(errorUser)
    }
  }

  const createNewUser = (username, email) => {
    setUsername(username)
    setEmail(email)

    createUser({
      variables: {
        username: username,
        email: email
      }
    }).then(data => console.log(data))
    
    if (errorUser) {
      console.warn(errorUser)
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
        email: email
      }
    }))
    .then((data) => {
      setUser(data.data.fetchUser)
    })
    if (errorDog) {
      console.warn(errorDog)
    }
  }

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Login loginUser={ loginUser }/>
        </Route>
        <Route path='/homepage'>
          < Nav setUser={ setUser } setUsername={ setUsername } setEmail={ setEmail }/>
          < Homepage user={user} registerDog={ registerDog }/>
        </Route>
        <Route path='/about'>
          < Nav setUser={ setUser } setUsername={ setUsername } setEmail={ setEmail }/>
          <About />
        </Route>
        <Route exact path='/create-user'>
          <CreateUser createNewUser={ createNewUser }/>
        </Route>
        <Route exact path='/confirm'>
          <ConfirmPage />
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
              < Nav setUser={ setUser } setUsername={ setUsername } setEmail={ setEmail }/>
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

export default App;
