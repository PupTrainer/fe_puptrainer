import React, { useState } from 'react'
import Nav from './Nav'
import Homepage from './Homepage'
import Login from './Login'
import About from './About'

import { Route, Switch } from 'react-router-dom';
import { gql, useQuery, useMutation } from '@apollo/client';

const App = () => {
  
//   let CREATE_USER;
//   const createUserQuery = (username, email) => {
//     return CREATE_USER = gql`
//     mutation createUser($type: String!){
//       createUser( input: {
//         username: ${username}
//         email: ${email}
//       } ) {
//         user {
//           id
//           username
//           email
//         }
//       }
//     }
//     `
//   }

//   let userUsername;
//   let userEmail;
// const [mutateFunction, { data, loading, error }] = useMutation(CREATE_USER, {
//   variables: {
//     username: `${userUsername}`,
//     email: `${userEmail}`,
//   },
// });
  
const loginUser = (username, email) => {
  var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

var graphql = JSON.stringify({
  query: "mutation {\n  createUser( input: {\n    username: \"Sammy_Sosa\"\n    email: \"cork@wrigley.com\"\n  } ) {\n    user {\n    id\n    username\n    email\n    }\n  }\n}",
  variables: {}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

fetch("https://pup-trainer-api.herokuapp.com/graphql", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

const [user, setUser] = useState({})

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
        <h1>Nothing here. Go back Home.</h1>
      }} />
    </Switch>
  </div>
)
}

export default App
