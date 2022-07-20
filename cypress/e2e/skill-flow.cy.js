import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test-utils'

describe('Skill Page', () => {
  beforeEach(() => {

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
            id: "1",
            name: "Harold",
            age: 5,
            breed: "Mix"
          }]
          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })

    cy.intercept('POST', 'https://pup-trainer-api.herokuapp.com/graphql', (req) => {
      const { body } = req
      aliasQuery(req, 'fetchSkills')
      if (hasOperationName(req, 'fetchSkills')) {
        req.alias = 'gqlfetchSkillsQuery'
        req.reply((res) => {
          res.body.data.fetchSkills = [
            {
              id: "1",
              name: "Down",
              level: 1,
              description: "Step 1. Get your dog's attention with a treat. Step 2. While lowering your hand to the floor and moving it in front of your dog's eyes, say 'Down'. Step 3. Your dog should lay down on its belly with its front legs out stretched and look at you.  Step 4. Reward your dog with the treat.",
              criteria: "Your dog should lay down after you say the command and say there until you release them.",
              youtubeLink: "KI10cPj7kYA'"
            }
          ]
          console.log('Working')
        })
      } else {
        console.log('Not working')
      }
    })

    cy.visit('http://localhost:3000/')
    cy.get('[placeholder="Username"]').type('dan')
    cy.get('[placeholder="Email"]').type('dan@gmail.com')
    cy.get('.button').click()
    cy.get('.dog-btn > :nth-child(1)').click()
    cy.get('#1').click()

  })

  it('should have the url end point match the skill id', () => {
    cy.url().should('eq', 'http://localhost:3000/skill/1')
  })

  it('should have the proper title for the page', () => {
    cy.get('.skill-title').should('have.text', 'Skill Description')
  })

  it('should have the skill name', () => {
    cy.get('.skill-name').should('have.text', 'Down')
  })

  it('should have the skill level', () => {
    cy.get('.description > :nth-child(3)').should('have.text', 'Level: 1')
  })

  it('should have the skill description', () => {
    cy.get('.description > :nth-child(4)').should('have.text', "Step 1. Get your dog's attention with a treat. Step 2. While lowering your hand to the floor and moving it in front of your dog's eyes, say 'Down'. Step 3. Your dog should lay down on its belly with its front legs out stretched and look at you.  Step 4. Reward your dog with the treat.")
  })

  it('should have a Pass Requirement title', () => {
    cy.get('.requirement').should('have.text', 'Pass Requirements:')
  })

  it('should have a requirements description', () => {
    cy.get('.description > div > :nth-child(2)').should('have.text', 'Your dog should lay down after you say the command and say there until you release them.')
  })

  it('should have a video', () => {
    cy.get('.video').should('have.attr', 'title').should('eq', 'YouTube video player')
  })

  it('should have a Complete Training button', () => {
    cy.get('.training-btn').should('have.text', 'Complete Training')
  })
})