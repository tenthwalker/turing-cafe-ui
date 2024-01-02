//page load
describe('calls the API', () => {
  it('shows the reservation cards from the fetch', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      fixture: 'apiResponse1',
    }).as('apiRequest1');
    cy.visit('/');
    cy.wait('@apiRequest1');
    cy.get('.card').should('contain', 'Christie');
    cy.get('.card').should('contain', 'Eric');
  })
})

//submission form

describe('submission form functionality', () => {
  it('starts with an empty form', () => {
    cy.visit('/');
    cy.get('form').should('have.value', '');
  }),

  it('accepts inputs', () => {
    cy.get('input').should('have.value', '');
    cy.get('input').first().click();
    cy.get('input').first().type('Robert');
    cy.get('input').first().should('have.value', 'Robert');
  })
})
