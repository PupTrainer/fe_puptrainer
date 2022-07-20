import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test-utils'


describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasMutation(req, 'createUser')
      if (hasOperationName(req, 'createUser')) {
        req.alias = 'gqlcreateUserMutation'
        req.reply((res) => {
          res.body.data.data.createUser.user.email = 'dan@gmail.com'
          res.body.data.data.createUser.user.id = 1
          res.body.data.data.createUser.user.username = 'dan'
          res.body.data.fetchUser.dogs = [
            {
                id: '2',
                name: 'Dany',
                age: 4,
                breed: 'Mix',
                skills: []
              }
          ]
          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })

    cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasQuery(req, 'fetchUser')
      if (hasOperationName(req, 'fetchUser')) {
        req.alias = 'gqlfetchUserQuery'
        req.reply((res) => {
          res.body.data.fetchUser.email = 'dan@gmail.com'
          res.body.data.fetchUser.id = 1
          res.body.data.fetchUser.username = 'dan'
          res.body.data.fetchUser.dogs = [
            {
                id: '2',
                name: 'Dany',
                age: 4,
                breed: 'Mix',
                skills: []
              }
          ]
          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })

    cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasMutation(req, 'createDog')
      if (hasOperationName(req, 'createDog')) {
        req.alias = 'gqlcreateDogMutation'
        req.reply((res) => {
          res.body.data.createDog.name = 'Dani'
          res.body.data.createDog.id = '1'
          res.body.data.createDog.age = 2
          res.body.data.createDog.breed = 'Mix'
          res.body.data.createDog.user = {
            id: '1',
            username: 'dan',
            email: 'dan@gmail.com',
            dogs: []
          }

          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })
    cy.get('[placeholder="Username"]').type('dan')
    cy.get('[placeholder="Email"]').type('dan@gmail.com')
    cy.get('.button').click()
  })

  it('Should show information of logged in user', () => {
    cy.url().should('eq', 'http://localhost:3000/homepage')
    cy.get('.user-info > :nth-child(4)').should('have.text', 'Username: dan')
    cy.get('.user-info > :nth-child(5)').should('have.text', 'Email: dan@gmail.com')
  })

  it('Should be able to register a dog' , () => {

      cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
          const { body } = req
          aliasQuery(req, 'fetchUser')
          if (hasOperationName(req, 'fetchUser')) {
              req.alias = 'gqlfetchUserQuery'
              req.reply((res) => {
                  res.body.data.fetchUser.email = 'dan@gmail.com'
                  res.body.data.fetchUser.id = 1
                  res.body.data.fetchUser.username = 'dan'
                  res.body.data.fetchUser.dogs = [{
                    id: '1',
                    name: 'Dirk Tha Man 2',
                    age: 2,
                    breed: 'Mix',
                    skills: []
                  }]
                  console.log('Working')
                })
            } else {
                console.log('Not working')
            }
        })

        cy.get('[placeholder="Name"]').type('Dirk Tha Man 2')
        cy.get('[placeholder="Age"]').type(2)
        cy.get('[placeholder="Breed"]').type('mix')
        cy.get('[type="submit"]').click()
        cy.get('.dog-btn > :nth-child(1)').should('have.text', 'Dirk Tha Man 2')
    })

    it('Should navigate to the dog profile', () => {
      cy.get('button').click()
      cy.url('http://localhost:3000/2')
    })
    it('Should be able to navigate to the about page', () => {
        cy.get('[href="/About"]').click()
        cy.url('http://localhost:3000/about')
    })

})

describe('Homepage Sad Path', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasMutation(req, 'createUser')
      if (hasOperationName(req, 'createUser')) {
        req.alias = 'gqlcreateUserMutation'
        req.reply((res) => {
          res.body.data.data.createUser.user.email = 'dan@gmail.com'
          res.body.data.data.createUser.user.id = 1
          res.body.data.data.createUser.user.username = 'dan'
          res.body.data.fetchUser.dogs = [
            {
                id: '2',
                name: 'Dany',
                age: 4,
                breed: 'Mix',
                skills: []
              }
          ]
          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })

    cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasQuery(req, 'fetchUser')
      if (hasOperationName(req, 'fetchUser')) {
        req.alias = 'gqlfetchUserQuery'
        req.reply((res) => {
          res.body.data.fetchUser.email = 'dan@gmail.com'
          res.body.data.fetchUser.id = 1
          res.body.data.fetchUser.username = 'dan'
          res.body.data.fetchUser.dogs = [
            {
                id: '2',
                name: 'Dany',
                age: 4,
                breed: 'Mix',
                skills: []
              }
          ]
          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })


    cy.get('[placeholder="Username"]').type('dan')
    cy.get('[placeholder="Email"]').type('dan@gmail.com')
    cy.get('.button').click()
  })

  it.only('should not be able to create a pet without all of the pet info', () => {
    cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasMutation(req, 'createDog')
      if (hasOperationName(req, 'createDog')) {
        req.alias = 'gqlcreateDogMutation'
        req.reply((res) => {
          res.body.errors = [
    {
      "message": "Argument 'name' on InputObject 'CreateDogInput' is required. Expected type String!",
      "locations": [
        {
          "line": 2,
          "column": 21
        }
      ],
      "path": [
        "mutation",
        "createDog",
        "input",
        "name"
      ],
      "extensions": {
        "code": "missingRequiredInputObjectAttribute",
        "argumentName": "name",
        "argumentType": "String!",
        "inputObjectType": "CreateDogInput"
      }
    }
    ]
          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })
    cy.get('[placeholder="Name"]').type('Dirk Tha Man 2')
    cy.get('[placeholder="Breed"]').type('mix')
    cy.get('[type="submit"]').click()

    cy.get('[placeholder="Age"]').should('have.text','')

    cy.get('.pets').contains('Dirk Tha Man 2').should('not.exist')

  })


})
