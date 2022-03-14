/// <reference types="cypress" />

it('should navigate to the TodoMVC App', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/') // ?delay-new-todo=5000
})

it('should be able to add a new todo to the list', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')

  cy.get('.new-todo'/*, {timeout: 6000} */).type('Clean room{enter}')

  cy.get('.toggle').click()

  cy.contains('Clear completed').click()
})

it('should be able to clear completed tests', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')

  cy.get('.new-todo').type('Clean room{enter}')

  cy.get('.toggle').click()

  cy.contains('Clear completed').click()
})