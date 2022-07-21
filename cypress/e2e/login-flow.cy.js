import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test-utils'


describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a title', () => {
    cy.get('.title').should('have.text', 'Welcome to PupTrainer')
  })

  it('should tell the user to login', () => {
    cy.get('.input-container > :nth-child(1)').should('have.text', 'Please login')
  })

  it('should have a username input field', () => {
    cy.get('[placeholder="Username"]').should('have.attr', 'placeholder').should('eq', 'Username')
  })

  it('should have a email input field', () => {
    cy.get('[placeholder="Email"]').should('have.attr', 'placeholder').should('eq', 'Email')
  })

  it('should have a register here link', () => {
    cy.get(':nth-child(5) > a').should('have.text', 'Register here')
  })

  it('should take the user to a new url when clicking on the Register here link', () => {
    cy.get(':nth-child(5) > a').should('have.text', 'Register here').click()
    cy.url().should('eq', 'http://localhost:3000/create-user')
  })

  it('should display the create-user text fields', () => {
    cy.visit('http://localhost:3000/create-user')
    cy.get('.input-container > :nth-child(1)').should('have.text', 'Please enter a username and email')
    cy.get('.input-container > :nth-child(5)').should('have.text', 'If already a user, click Here to login')
  })

  it('should create a user and be taken to the confirmation page', () => {
    cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasMutation(req, 'createUser')
      if (hasOperationName(req, 'createUser')) {
        req.alis = 'gqlcreateUserMutation'
        req.reply((res) => {
          res.body.data.data.createUser.user.email = 'dan@gmail.com'
          res.body.data.data.createUser.user.id = 1
          res.body.data.data.createUser.user.username = 'dan'
          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })

    cy.get(':nth-child(5) > a').click()
    cy.get('[placeholder="Username"]').type('dan')
    cy.get('[placeholder="Email"]').type('dan@gmail.com')
    cy.get('.button').click()
    cy.get('p').should('have.text', 'User created! Please login.')
  })

  it('should be able to type in the input fields and login', () => {
    cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasQuery(req, 'fetchUser')
      if (hasOperationName(req, 'fetchUser')) {
        req.alis = 'gqlfetchUserQuery'
        req.reply((res) => {
          res.body.data.fetchUser.email = 'dan@gmail.com'
          res.body.data.fetchUser.id = 1
          res.body.data.fetchUser.username = 'dan'
          res.body.data.fetchUser.dogs = []
          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })

    cy.get('[placeholder="Username"]').type('dan')
    cy.get('[placeholder="Email"]').type('dan@gmail.com')
    cy.get('.button').click()

    cy.url().should('eq', 'http://localhost:3000/homepage')
    cy.wait(1000)
    cy.get('.user-info > :nth-child(3)').should('have.text', 'Username: dan')
    cy.get('.user-info > :nth-child(4)').should('have.text', 'Email: dan@gmail.com')
  })

})

describe('Login Sad Path', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should not be able to login with invalid user information', () => {
    cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasQuery(req, 'fetchUser')
      if (hasOperationName(req, 'fetchUser')) {
        req.alis = 'gqlfetchUserQuery'
        req.reply((res) => {
          res.body.data = undefined
          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })

    cy.get('[placeholder="Username"]').type('invalidUser')
    cy.get('[placeholder="Email"]').type('invalid@gmail.com')
    cy.get('.button').click()

    cy.get('h2').contains('Invalid User')


  })


})
