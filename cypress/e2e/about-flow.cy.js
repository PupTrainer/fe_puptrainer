describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/About')
  })

  it('should have the app image', () => {
    cy.get('.nav-container > img').should('have.attr', 'alt').should('eq', "puptrainer Logo")
  })

  it('Should have a title for the about section', () => {
    cy.get('h2').should('have.text', 'About our project')
  })

  it('Should have a description for the about page', () => {
    cy.get('.content').should('have.text', 'We all know how your dog can become such an important part of your family. So we all set out to create a convient dog training app with a variety of commands in one spot. Meet the friendly team and the doggos that inspired the project.')
  })

  it('should have eight engineers on the page', () => {
    cy.get('.dog-container').children().should('have.length', 8)
  })

  it('should have an engineer`s name', () => {
    cy.get(':nth-child(1) > h3').should('have.text', 'Alex R')
  })

  it('should have a an engineer`s dog(s) name', () => {
    cy.get(':nth-child(1) > p').should('have.text', 'Meet their pups Lugnut and Skeeter')
  })

  it('should have an image of an engineer`s dog', () => {
    cy.get('.dog-container > :nth-child(1) > img').should('exist')
  })

  it('should have a nav bar with three links', () => {
    cy.get('[href="/homepage"]').should('have.text', 'User Profile')
    cy.get('[href="/About"]').should('have.text', 'About')
    cy.get('[href="/"]').should('have.text', 'Logout')
  })

  it('should change url to the homepage when clicking on the User Profile button', () => {
    cy.get('[href="/homepage"]').click()
    cy.url().should('include', '/homepage')
    cy.url().should('eq', 'http://localhost:3000/homepage')
  })

  it('should be able to log the user out', () => {
    cy.get('[href="/"]').click()
    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('.title').should('have.text', 'Welcome to PupTrainer')
    cy.get('.input-container > :nth-child(1)').should('have.text', 'Please login')
    cy.get('[placeholder="Username"]').should('have.attr', 'placeholder').should('eq', 'Username')
    cy.get('[placeholder="Email"]').should('have.attr', 'placeholder').should('eq', 'Email')
  })

})