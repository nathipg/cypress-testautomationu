/// <reference types="cypress" />

it('should navigate to the TodoMVC App', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/') // ?delay-new-todo=5000
})

it('should be able to add a new todo to the list', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')

  cy.get('.new-todo'/*, {timeout: 6000} */).type('Clean room{enter}')

  cy.get('label').should('have.text', 'Clean room')
  cy.get('.toggle').should('not.be.checked')
})

it('should be able to complete a task', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')

  cy.get('.new-todo').type('Clean room{enter}')

  cy.get('.toggle').click()

  cy.get('.toggle').should('be.checked')
  cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
})

it('should be able to clear completed tasks', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')

  cy.get('.new-todo').type('Clean room{enter}')

  cy.get('.toggle').click()

  cy.contains('Clear completed').click()

  cy.get('.todo-list').should('not.have.descendants', 'li')
})